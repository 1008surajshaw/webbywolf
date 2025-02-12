import DigitalArtwork from "@/view/cover-desc-one"
import { FeaturesSection } from "@/view/feature-section"
import { Hero } from "@/view/hero"
import { MotorcycleShowcase } from "@/view/motercycle-showcase"
import { BlogView } from "@/view/blog-view"
import BrandView from "@/view/brand-view"
import DigitalArtworkTwo from "@/view/Cover-desc-two"
import { QuoteForm } from "@/view/quote-form"
import { AppDownload } from "@/view/app-download"
import { TestimonialSlider } from "@/view/testimonial-slider"
import NistLimitsSection from "@/view/grid"
import Features from "@/view/feature"
import FAQSection from "@/view/faq"
import { SecondLast } from "@/view/second-last"
import { FooterSection } from "@/components/footer"
import { DynamicTestimonialSection } from "@/view/dynamic-testimonial"
import { BikeMeet } from "@/view/bike-meet"
import { ImageGridSection } from "@/view/image-grid"



export default function page() {
  return (
    <>
    <Hero />
    <MotorcycleShowcase/>
    <FeaturesSection/>
    <DigitalArtwork/>
    <BrandView/>
    <BlogView/>
    <DigitalArtworkTwo/>
    <QuoteForm/>
    <AppDownload/>
    <ImageGridSection/>
    <BikeMeet/>
    <TestimonialSlider/>
    <Features/>
    <NistLimitsSection/>
    <FAQSection/>
    <DynamicTestimonialSection/>
    
    <SecondLast/>
    <FooterSection/>
  </>
  )
}

