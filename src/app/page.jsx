import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
   <main className='text-black'>
    <Container className="mt-24 sm:mt-32">
      <FadeIn className="max-w-3xl">
         <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
         Gitonga Kabugi
         </h1>
         <p className="mt-6 text-xl text-neutral-600">
          A dynamic and multifaceted leader, widely recognized for his outstanding contributions to both the business world and public service. 
          </p>
      </FadeIn>
    </Container>
    <Clients/>
    <Testimonials className="mt-24 sm:mt-32 lg:mt-40 client" client={{ name: "Michael Joseph", logo: logoPhobiaDark }}>
    I have had the privilege of knowing Gitonga Kabugi for many years, and I can wholeheartedly attest to his extraordinary commitment to both the business and public service spheres. Mr Gitonga embodies the qualities of a true leader: vision, integrity, and an unwavering dedication to improving the lives of those he serves.
    </Testimonials>
    <Services/>
    <ContactSection/>
   </main>
  )
}
