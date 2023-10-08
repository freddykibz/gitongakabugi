import ContactSection from '@/components/ContactSection';
import Container from '@/components/Container';
import Cultures from '@/components/Culture';
import PageIntro from '@/components/PageIntro';
import { StatList, StatListItem } from '@/components/StatList';
import React from 'react'

const AboutPage = () => {
  return (
    <>
   <PageIntro eyebrow="Servant Leadership" title="Mission & Vision">
     <p>
     Biography
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          As a company founder, Gitonga Kabugi has demonstrated remarkable entrepreneurial acumen. he is the visionary force behind several successful enterprises, pioneering innovative solutions and creating job opportunities for countless individuals. Gitonga Kabugi's passion for business innovation and sustainable 
          growth has earned them a reputation as a trailblazer in the corporate world.
          </p>
          <p>
          In his role as Deputy Governor, Gitonga Kabugi has translated his visionary leadership into public service. With a deep sense of duty and a focus on improving the lives of citizens, Gitonga Kabugi has spearheaded numerous initiatives and policies that have positively transformed their jurisdiction. Their dedication to public welfare, coupled with their ability to bridge divides and foster cooperation, has made Gitonga Kabugi an invaluable asset to the community and the region as a whole.
          </p>
          <p>
          Gitonga Kabugi  is not just a business tycoon and public servant but also a staunch advocate for social responsibility and community development. Their commitment to philanthropy and community engagement has touched the lives of many, leaving a lasting legacy of positive change.
          </p>
          <p>
          Through the website, Gitonga Kabugi invites you to explore His journey, from humble beginnings to His current position as a respected deputy governor and influential business leader. Discover the projects they've undertaken, the policies they've championed, and the businesses they've built. Join Gitonga Kabugi on a path of leadership, innovation, and service, where the vision for a better tomorrow is met with action today.
          </p>
          <p>
          Gitonga Kabugi continues to be a source of inspiration for aspiring leaders, entrepreneurs, and public servants, proving that dedication, vision, and a genuine commitment to improving society can lead to remarkable achievements.
          </p>
          </div>
          
   </PageIntro>
   <Container className="mt-16">
   <StatList>
          <StatListItem value="35 years" label="Private Sector" />
          <StatListItem value="10 Years" label="Public Sector" />
          <StatListItem value="$25M Projects" label="Direct Social Impact" />
        </StatList>
   </Container>
   <Cultures/>
   <ContactSection/>
   
   </>
  )
}
export default AboutPage;