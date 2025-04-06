import HeroSlider from "@/components/hero-slider"
import ServicesSection from "@/components/services-section"
import WhyChooseUs from "@/components/why-choose-us"
import CraftingServicesSection from "@/components/crafting-services-section"

export default function Home() {
  return (
    <>
      <HeroSlider />
      <CraftingServicesSection />
      <ServicesSection />
      <WhyChooseUs />
    </>
  )
}

