import React from 'react'
import Section from './Section';
import imageWhiteboard from "@/images/whiteboard.jpg"
import { TagList, TagListItem } from './TagList';

const Discover = () => {
  return (
    <Section title="Social Impact" image={{ src:imageWhiteboard, shape:1 }}>
           <div className="space-y-6 text-base text-neutral-600">
        <p>
        As a company founder,  Mr Gitonga has championed responsible <strong className="font-semibold text-neutral-950">business practices,</strong>  ensuring that their enterprises not only thrive financially but also contribute to the betterment of society. Gitonga Kabugi's businesses serve as beacons of corporate social responsibility, setting high standards for ethical conduct, environmental sustainability, and community engagement.
        </p>
        <p>
        In his role as Deputy Governor, Gitonga Kabugi   leveraged his leadership position to implement policies and initiatives that drove social progress. 
        His approach is rooted in inclusivity, equity, and empathy. Mr Gitonga actively seeks input from diverse stakeholders, working collaboratively to develop solutions that address the most pressing issues facing the community. He prioritize the well-being of vulnerable populations, striving to create a more just and equitable society for all.
        </p>
        <p>
        He don't merely advocate from the sidelines; He roll up his sleeves and actively participate in initiatives that lead to tangible change.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base fonrt-semibold text-neutral-950">
        included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth</TagListItem>
        <TagListItem>Feasibility</TagListItem>
        <TagListItem>run through</TagListItem>
        <TagListItem>Cottage</TagListItem>
        <TagListItem>Forensic</TagListItem>
      
      </TagList>
    </Section>
  )
}

export default Discover;  