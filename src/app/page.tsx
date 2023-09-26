import { Contact } from "@/Components/Home/Contact";
import { AboutMe } from "@/Components/Home/AboutMe";
import { LandingPage } from "@/Components/Home/LandingPage";

export default function Home() {
  return (
    <>
      <div id="home">
        <LandingPage />
      </div>

      <div id="about-me">
        <AboutMe />
      </div>
      <div id='contact'>
        <Contact />
      </div>
    </>
  )
}
