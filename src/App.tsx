import Navbar from "./components/body/Navbar"
import Insight from "./components/body/Insight"
import Features from "./components/body/Features"
import PlanPricing from "./components/body/Plan_Pricing"
import Overview from "./components/body/Overview"
import Testimony from "./components/body/Testimony"
import CTA from "./components/body/CTA"
import HeroSection from "./components/body/Hero"

function App() {
  return (
    <> 
      <Navbar/>
      <HeroSection/>
      <Overview/>
      <Features/>
      <PlanPricing/>
      <Insight/>
      <Testimony/>
      <CTA/>
    </>
  )
}

export default App
