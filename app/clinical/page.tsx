import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import ClinicalHero from "@/components/clinical/ClinicalHero";
import Ecosystem from "@/components/clinical/Ecosystem";
import ClinicalCases from "@/components/clinical/ClinicalCases";
import ProfessionalActivity from "@/components/clinical/ProfessionalActivity";
import Partnership from "@/components/clinical/Partnership";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Для колег — Clinical & Reconstruction Ecosystem | Dr. Maksym Baida, PhD",
  description:
    "Простір для лікарів, академічної спільноти та технологічних партнерів: reconstruction ecosystem, клінічні випадки, академічна діяльність і співпраця.",
};

export default function Clinical() {
  return (
    <>
      <div className="relative">
        <ClinicalHero />
        <div className="absolute top-0 left-0 right-0 z-50">
          <TopBar />
          <Nav current="/clinical" />
        </div>
      </div>
      <main className="flex flex-col">
        <Ecosystem />
        <ClinicalCases />
        <ProfessionalActivity />
        <Partnership />
      </main>
      <Footer />
    </>
  );
}