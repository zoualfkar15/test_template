import TopBar from "@/components/TopBar/TopBar";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import Features from "@/components/Features/Features";
import Spotlight from "@/components/Spotlight/Spotlight";
import Overview from "@/components/Overview/Overview";
import Resources from "@/components/Resources/Resources";
import CallToAction from "@/components/CallToAction/CallToAction";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <main>
        <HeroSlider />
        <Features />
        <Spotlight />
        <Overview />
        <Resources />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
