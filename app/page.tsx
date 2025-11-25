"use client"
import { Cormorant_Garamond, Poppins } from "next/font/google"
import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import FeaturesSection from "@/components/features-section"
import HighlightsSection from "@/components/highlights-section"
import ParallaxSection from "@/components/parallax-section"
import Experiences from "@/components/experiences"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});


export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navigation />
      <FeaturesSection />
      <Hero />
      <HighlightsSection />
      <ParallaxSection
        title="Experience Natural Wonders"
        description="From white travertine pools to turquoise coast waters, Turkey's natural beauty is unmatched. Immerse yourself in landscapes that take your breath away."
        image="/turkey.jpg"
        reverse={true}
      >
        <button className="px-6 py-3 bg-accent text-background font-semibold rounded-full hover:bg-accent/90 transition-all">
          Explore
        </button>
      </ParallaxSection>
      <Experiences />
      <Gallery />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
