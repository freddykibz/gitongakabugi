import React from 'react';
import Section from './Section';
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from './Blockquote';

const  Build = ({}) => {
  return (
    <Section title="Economic Impact" image={{ src: imageLaptop, shape:2 }}>
        <div className="space-y-6 text-base text-neutral-600">
        <p>
        Mr Gitonga understands that a thriving community relies on a strong and sustainable economy. As a company founder,
         he have harnessed their entrepreneurial spirit to create businesses that generate jobs, stimulate economic growth, and provide 
         opportunities for local residents. Their businesses are more than just profit-making enterprises;
          they are engines of economic empowerment, 
        contributing to the financial well-being of countless individuals and families.
        </p>
        <p>
        In his role as Deputy Governor, Mr Gitonga has taken his commitment to economic impact to a new level. 
        he tirelessly advocate for policies and initiatives that promote business development, attract investments, and enhance the overall 
        economic ecosystem of our region. Their leadership has resulted in tangible improvements in employment rates, 
        increased access to economic resources, and a more favorable business environment for both small and large enterprises.
        </p>
        <p>
        What sets Mr Gitonga apart is their holistic approach to economic impact. He recognizes that economic growth should be inclusive,
         benefiting all segments of the community.
          Mr Gitonga actively seeks ways to address income inequality, provide support for struggling businesses, 
          and promote workforce development. his focus on sustainability ensures that economic growth today does not come at the expense of future generations.
        </p>
      </div>
      <Blockquote author={{ name: "Debra Fiscal", role: "CEO of Unseal" }}
        className="mt-12">
                  value-driven approach to economic impact is a testament to their deep-rooted commitment to the well-being of our community. 
      </Blockquote>
    </Section>
  )
}

export default Build;