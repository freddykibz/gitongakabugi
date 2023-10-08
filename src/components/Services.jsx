import React from 'react'
import SectionIntro from './SectionIntro'
import Container from './Container'
import FadeIn from './FadeIn'
import StylizedImage from './StylizedImage';
import ImageLaptop from "../images/laptop.jpg";
import List, { ListItem } from './List';


const Services = () => {
  return (
  <>
  <SectionIntro 
  eyebrow="Positions Of Service"
  title = " His leadership style is marked by a unique blend of innovation, empathy, and a relentless commitment to positive change."
  className ="mt-24 sm:mt-32 lg:mt-40"
  >
  <p>
    As long as those opportunities involve giving us money to re-purpose
    old projects — we can come up with an endless number of those.
  </p>

  </SectionIntro>
 <Container className="mt-16">
  <div className="lg:flex lg:items-center lg:justify-end">
    <div className='flex justify-center lg:w-1/2 lg:justify-end lg:pr-12'>
        <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage 
            src={ImageLaptop}  
            sizes="(min-width: 1024px) 41rem, 31rem" 
            className="justify-center lg:justify-end"
             />
        </FadeIn>
    </div>
    {/* listitem */}
     <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
     <ListItem title="Founder GoldenMilk Dairies">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Deputy Governor">
            The new county government was sworn in on 2013. Kabugi was appointed
            as a CEC member, Water, and Cooperatives, the two issues dear to his heart, and
            which he thought would most likely bring transformative change to his people.  

            </ListItem>
            <ListItem title="Political Career">
            From his early days, Kabugi had kept close tabs on political developments in
            Laikipia, and especially in Laikipia East Constituency.

            </ListItem>
            <ListItem title="Financial career">
            Fresh from Strathmore, Kabugi joined First American Bank as an assistant financial
        controller, a position in which he served for 2 years before leaving to join Multichoice
         Africa (DSTV). At Multichoice, Kabugi headed the multinational’s operations in the
           Coast region for two years.


            </ListItem>
            <ListItem title="Professional Background">
            In the field of water engineering, Gitonga kabugi has established himself as a respected authority. his expertise in this critical area is an asset to the community, 
            particularly in addressing water resource management and environmental sustainability. Mr Gitonga has played a pivotal role in designing and implementing water infrastructure projects that ensure access to clean and safe water for all residents. Their 
            work exemplifies a commitment to the health and well-being of the community and the responsible stewardship of natural resources.
            </ListItem>
     </List>
  </div>
 </Container>
  </>
  )
}

export default Services