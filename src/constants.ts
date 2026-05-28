import type { Mode, Personality } from "@/types";

export const personalities: Personality[] = [
  { id: "popular-sanguine", title: "Popular Sanguine", img: "/images/sanguine.webp", type: "type1" },
  { id: "powerful-choleric", title: "Powerful Choleric", img: "/images/choleric.webp", type: "type2" },
  { id: "perfect-melancholy", title: "Perfect Melancholy", img: "/images/melancholy.webp", type: "type3" },
  { id: "peaceful-phlegmatic", title: "Peaceful Phlegmatic", img: "/images/phlegmatic.webp", type: "type4" },
];

export const modes: Mode[] = [
  { id: "goodness", title: "Goodness", img: "/images/sattva.webp" },
  { id: "passion", title: "Passion", img: "/images/rajo.webp" },
  { id: "ignorance", title: "Ignorance", img: "/images/tamo.webp" },
];