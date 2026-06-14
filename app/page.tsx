import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AboutField from "@/components/AboutField";
import Treatments from "@/components/Treatments";
import About from "@/components/About";
import StatsBar from "@/components/StatsBar";
import Academic from "@/components/Academic";
import Technology from "@/components/Technology";
import Philosophy from "@/components/Philosophy";
import BookOnline from "@/components/BookOnline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Hero />
        <div className="absolute top-0 left-0 right-0 z-50">
          <TopBar />
          <Nav />
        </div>
      </div>
      <main className="flex flex-col">
        <AboutField />
        <Philosophy />
        <Treatments />
        <About />
        <StatsBar />
        <Academic />
        <Technology />
        <BookOnline />
      </main>
      <Footer />
    </>
  );
}
