import { HowItWorks } from "../Components/HowItWorks";
import MainPage from "../Components/Home";
import WhyUs from "@/Components/WhyUs";
import Footer from "../Components/footer";
import HomePage from '../Components/HomePage'
export default function Home() {
  return (
    <>
      <MainPage />
      <div id="howItworks">
        <HowItWorks />
      </div>
      <div id="faq">
        <WhyUs />
      </div>
      <Footer />
    </>
  );
}
