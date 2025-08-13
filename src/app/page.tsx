import { HowItWorks } from "../Components/HowItWorks";
import MainPage from "../Components/Home";
import WhyUs from "@/Components/WhyUs";
import Footer from "../Components/footer";
export default function Home() {
  return (
    <>
      <MainPage />
      <div >
        <HowItWorks />
      </div>
      <div >
        <WhyUs />
      </div> 
      <Footer />
    </>
  );
}