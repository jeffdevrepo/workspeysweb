import { Footer } from "./components/global/footer";
import { Header } from "./components/global/header";
import { Cta } from "./components/homepage/cta";
import { Faq } from "./components/homepage/faq";
import { Features } from "./components/homepage/features";
import { HeroSection } from "./components/homepage/hero-section";
import { Pricing } from "./components/homepage/pricing";
import { Solutions } from "./components/homepage/solutions";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <Solutions />
      <Pricing />
      <Cta />
      <Faq />
      <Footer />
    </>
  )
}
