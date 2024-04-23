import { AboutMe } from "@/Components/Home/AboutHer";
import { LandingPage } from "@/Components/Home/LandingPage";
import { Footer } from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <div id="home">
        <LandingPage />
      </div>

      <div id="about-her">
        <AboutMe />
      </div>

      <div>
        <Footer />
      </div>
    </>
  )
}
