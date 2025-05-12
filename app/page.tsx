import AboutInHome from "@/components/aboutInHome";
import Comments from "@/components/Comments";
import Compare from "@/components/Compare";
import Creator from "@/components/Creator";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/navbar";
import Services from "@/components/Services";
import UnderHeader from "@/components/UnderHeader";


export default function Home() {
  return (
    <div className="flex flex-col items-center text-white h-full w-full">
      <Navbar/>
      <Header />
      <UnderHeader />
      <AboutInHome /> 
      <Services />
      <Comments />
      <Compare />
      <Faqs/>
      <Footer />
      <Creator />
    </div>
  );
}
