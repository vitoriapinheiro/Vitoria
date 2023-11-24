import Image from 'next/image';
import Navbar from './components/Navbar/Navbar';
import BannerSection from './components/Header/Header';
import AboutSection from './components/AboutMe/AboutMe';
import Mailer from './components/Mailer/Mailer';
import Achievements from './components/Achievements/Achievements';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Navbar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        <BannerSection />
        <Achievements />
        <Projects />
        <AboutSection />
        <Mailer />
      </div>
      <Footer />
    </main>
  )
}
