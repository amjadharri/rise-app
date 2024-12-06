import { StaticImageData } from "next/image"; // Import StaticImageData for typing image imports
import h1 from "/public/assets/heros/doge.png";
import h2 from "/public/assets/heros/cat.png";
import h3 from "/public/assets/heros/pepe.jpg";
import h4 from "/public/assets/heros/Bull.png";
import h5 from "/public/assets/heros/bear.jpg";
import m1 from "/public/assets/heros/doge_mobile.png";
import m2 from "/public/assets/heros/cat_mobile.png";
import m3 from "/public/assets/heros/pepe_mobile.jpg";
import m4 from "/public/assets/heros/Bull-Mobile.png";
import m5 from "/public/assets/heros/bear_mobile.jpg";
import bg1 from "/public/assets/heros/bg1.webp";
import bg2 from "/public/assets/heros/bg2.webp";
import bg3 from "/public/assets/heros/bg3.webp";
import bg4 from "/public/assets/heros/bg4.webp";
import bg5 from "/public/assets/heros/bg5.webp";
// import { mx_hash_int_4 } from "three/src/nodes/materialx/lib/mx_noise.js";

// Define the type for slider data
interface SliderData {
  id: number;
  title: string;
  description: string;
  imgSrc: StaticImageData; // Image should be typed as StaticImageData from Next.js
  mobileImgSrc: StaticImageData; // Image should be typed as StaticImageData from Next.js
  bg: StaticImageData; // Image should be typed as StaticImageData from Next.js
}

export const sliderData: SliderData[] = [
  {
    id: 1,
    title: "General Doge",
    description: `General Doge rose from the Valorhounds to unite the fractured lands. He forged a kingdom where chaos once reigned. As the true King of the Meme Kingdoms, Doge's rule brought peace and unity, establishing an era of prosperity. His leadership remains unchallenged, and his legacy as the Eternal King lives on, forever guiding the Valorhounds and protecting the realm he created.`,
    imgSrc: h1,
    mobileImgSrc: m1,
    bg: bg1,
  },
  {
    id: 2,
    title: "Meowshe ",
    description: `Born under the cover of night, Meowshe grew up in the shadows, mastering the art of stealth and the bow. As the leader of the Shadowclaws, she's known for her silent, lethal strikes that leave enemies with no time to react. With an unerring aim and a deep bond with her clan, Meowshe ensures that those who threaten her people never escape the shadows alive.`,
    imgSrc: h2,
    mobileImgSrc: m2,
    bg: bg2,
  },
  {
    id: 3,
    title: "Stormpepe ",
    description: `Raised in the heat of battle, Stormpepe honed his dual sword skills to perfection. Known for his lightning-fast strikes, he leads the Leapblades with relentless fury, carving through enemies like a storm. His agility and power make him a fearsome presence, feared by foes who know that once Stormpepe charges, there's no escape from his blades.`,
    imgSrc: h3,
    mobileImgSrc: m3,
    bg: bg3,
  },
  {
    id: 4,
    title: "Bullguard ",
    description: `Bullguard became legendary for his unmatched strength and indomitable spirit. Leading the Ironhorns, he charges into battle with a spear in hand and shield raised high, shattering enemy defenses with unstoppable force. Born from a lineage of warriors, Bullguard's destiny has always been to lead his people to victory, breaking down any barrier that dares to stand in his way.`,
    imgSrc: h4,
    mobileImgSrc: m4,
    bg: bg4,
  },
  {
    id: 4,
    title: "Bearclaw ",
    description: `The fearsome leader of the Stonepaws, wielding his massive battle axe with a force that sends shivers down the spine of all who dare cross his path. Known as the bringer of the dreaded Bear Era, Bearclaw spares no one—his wrath is swift and merciless. Those who do not flee in time face certain doom under his crushing blows. With every swing of his axe, Bearclaw ensures that the name of the Stonepaws is etched in fear across the Meme Kingdoms.`,
    imgSrc: h5,
    mobileImgSrc: m5,
    bg: bg5,
  },
  // Add more slides here
];
