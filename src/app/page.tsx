import Hero from "../components/Hero";
import WorkGrid from "../components/WorkGrid";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Testimonials from "../components/Testimonials";
import StackTicker from "../components/StackTicker";
import Ventures from "../components/Ventures";
import WritingList from "../components/WritingList";
import PersonalSection from "../components/PersonalSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer"; // Burayı ekledik

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkGrid />
      <div style={{ "--timeline-col": "220px" } as React.CSSProperties}>
        <ExperienceTimeline />
        <Testimonials />
      </div>
      <StackTicker />
      <Ventures />
      <WritingList />
      <PersonalSection />
      <ContactForm />
      <Footer /> {/* Burayı ekledik */}
    </>
  );
}