from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import subprocess, re, os, time
from pathlib import Path


app = FastAPI()
print("started working now")

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request body model
class DownloadRequest(BaseModel):
    url: str


DOWNLOAD_DIR = Path.home() / "Downloads"
DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)
app.mount("/downloads", StaticFiles(directory=str(DOWNLOAD_DIR)), name="downloads")
print("This is official file location on your device",DOWNLOAD_DIR)

# YouTube URL regex
YOUTUBE_REGEX = re.compile(r"^(https?://)?(www\.)?(youtube\.com|youtu\.?be)/.+")

@app.post("/api/download")
async def download_video(req: DownloadRequest):
    if not YOUTUBE_REGEX.match(req.url):
        return {"error": "Invalid YouTube URL"}

    filename = f"video_{int(time.time())}.%(ext)s"
    output_path = os.path.join(DOWNLOAD_DIR, filename)

    try:
        subprocess.run([
            "yt-dlp", req.url,
            "-o", output_path,
            "-f", "bestvideo+bestaudio/best",
            "--no-check-certificate",
            "--no-warnings",
            "--add-header", "referer:youtube.com",
            "--add-header", "user-agent:googlebot"
        ], check=True)

        return {
            "message": "Download successful",
            "fileUrl": f"/downloads/{filename}"
        }

    except subprocess.CalledProcessError as e:
        return {
            "error": "Download failed",
            "details": str(e)
        }

@app.post("/api/downloadMp3")
async def download_audio(req: DownloadRequest):
    if not YOUTUBE_REGEX.match(req.url):
        return {"error": "Invalid YouTube URL"}

    filename = f"audio_{int(time.time())}.mp3"
    output_path = os.path.join(DOWNLOAD_DIR, filename)

    try:
        subprocess.run([
            "yt-dlp",
            "-x",
            "--audio-format", "mp3",
            "--audio-quality", "0",
            "-o", output_path,
            req.url
        ], check=True)

        return {
            "message": "Audio downloaded successfully",
            "fileUrl": f"/downloads/{filename}"
        }

    except subprocess.CalledProcessError as e:
        return {
            "error": "Download failed",
            "details": str(e)
        }
