import { siteConfig } from "../config/siteConfig";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Policy from "../components/Policy";
import Business from "../components/Business";
import Recruit from "../components/Recruit";
import Sdgs from "../components/Sdgs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


export default function Page() {
  return (
    <>
      <Header cfg={siteConfig} />
      <main role="main">
        <Hero cfg={siteConfig} />
        <About cfg={siteConfig} />
        <Policy cfg={siteConfig} />
        <Business cfg={siteConfig} />
        <Recruit cfg={siteConfig} />
        <Sdgs cfg={siteConfig} />
      </main>
      <Footer cfg={siteConfig} />
    </>
  );
}
