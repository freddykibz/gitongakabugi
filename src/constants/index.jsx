import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
 {
    title: "Work",
    links: [
        {title: "Vision", href: "/work/vision"},
        {title: "Companies & Investments", href: "/work/bazar"},
        { title: "Blog 101", href: "/work/blog101"},
        { 
            title: (
                <>
                 See all <span aria-hidden="true">&rarr;</span>
                </>
            ),
            href: "/work",
        },
     ],
 },
 {
    title: "Companies",
    links: [
      { title: "GoldMilkdairy", href: "/about" },
      { title: "NanyukiView", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  }, 
];
