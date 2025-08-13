import Link from "next/link";
import DownloadLogo from "@/Components/Download";
export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { url } = searchParams;

  if (!url) {
    return (
      <div className="flex flex-col h-screen w-screen">
        <nav className="fixed top-0 left-0 w-full bg-black text-white py-4 px-6 shadow-md">
          <h1 className="text-lg font-bold">My Video Downloader</h1>
        </nav>

        <div className="flex-1 flex justify-center items-center overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          <h2 className="text-3xl font-bold text-white">
            Paste a video URL to get started
          </h2>
        </div>
      </div>
    );
  }

  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY ?? "",
      "x-rapidapi-host": process.env.NEXT_PUBLIC_API_HOST ?? "",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      url: Array.isArray(url) ? url[0] : url,
    }),
  };

  let post = null;

  try {
    const response = await fetch(
      "https://snap-video3.p.rapidapi.com/download",
      options
    );
    if (!response.ok) {
      throw new Error("Failed to fetch video details");
    }

    post = await response.json();
  } catch (error) {
    console.error("Error fetching video details:", error);
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
        <p className="text-red-500 text-lg">
          Error fetching video details:{" "}
          {error instanceof Error ? error.message : "Unknown error"}
        </p>
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-[#0B0B0B] text-white p-6">
    <nav className="mb-10 bg-[#121212] px-6 py-4 rounded-lg shadow-md border border-gray-800">
      <h1 className="text-2xl font-bold tracking-wide">My Video Downloader</h1>
    </nav>

    <div className="flex justify-center">
      {post && (
        <div className="flex flex-col sm:flex-row items-center gap-8 p-6 sm:p-10 w-full max-w-5xl rounded-xl bg-[#141414] shadow-xl border border-gray-800">
          <img
            src={post.thumbnail}
            alt="Thumbnail"
            className="h-[200px] w-[350px] rounded-lg shadow-md object-cover hover:scale-[1.02] transition-transform"
          />

          <div className="flex flex-col justify-between flex-1">
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-white">
                {post.title}
              </h2>
              <p className="text-gray-400">
                <span className="text-blue-400 font-semibold">Length:</span>{" "}
                {post.duration}
              </p>
            </div>

            {post.medias && (
              <div className="flex flex-wrap items-center gap-3 mt-5">
                {Object.values(post.medias).map((media: any, index: number) => (
                  <Link
                    href={media?.url}
                    key={index}
                    className="px-4 py-2 rounded-md bg-[#1E1E1E] hover:bg-[#2A2A2A] border border-gray-700 transition-colors flex items-center gap-2"
                  >
                    <DownloadLogo />
                    <span className="font-medium text-gray-200">
                      {media?.quality || "Unknown"}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  </div>
);


}


