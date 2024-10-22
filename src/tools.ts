// tools.ts
import { FaReact, FaCode, FaGithub, FaRegImage } from "react-icons/fa"; // Importer ikoner fra react-icons
import { SiOpenai, SiTypescript, SiChakraui, SiSuno, SiVisualstudiocode } from "react-icons/si"; // Importer spesifikke ikoner fra react-icons
import React from "react";

export interface ToolDetail {
  prompt: string;
  response: string;
}

export interface Tool {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: "AI Verktøy" | "Øvrige Verktøy";
  images?: {imageUrl: string; prompt: string; style?: string; link?: string;}[];
  songs?: {title: string; prompt: string; style?: string; songUrl: string;}[];
}

export const tools: Tool[] = [
  {
    id: 1,
    name: "React",
    description: "En populær JavaScript-bibliotek for å bygge brukergrensesnitt.",
    icon: React.createElement(FaReact),
    category: "Øvrige Verktøy",
  },
  {
    id: 2,
    name: "Chakra UI",
    description: "En komponentbibliotek for å bygge tilgjengelige React-applikasjoner.",
    icon: React.createElement(SiChakraui),
    category: "Øvrige Verktøy",
  },
  {
    id: 3,
    name: "TypeScript",
    description: "Et strengt typet programmeringsspråk som bygger på JavaScript.",
    icon: React.createElement(SiTypescript),
    category: "Øvrige Verktøy",
  },
  {
    id: 4,
    name: "ChatGPT 4o",
    description: "Avansert AI språkmodell utviklet av OpenAI.",
    icon: React.createElement(SiOpenai),
    category: "AI Verktøy",
    images: [
      {
        imageUrl: "/ChatGPT.png",
        prompt: "ChatGPT 4o har vært hovedmodellen for kunstig intelligens for kodegenerering i dette prosjektet. Jeg startet med å sette opp modellen, hvor jeg ga den rollen som Software Engineer med ekspertise innen React, Vite og Typescript. Deretter har jeg brukt modellen aktivt til å generere omtrent 90% av koden i prosjektet. Min tilnærming for kodegenerering har vært å fortelle hva jeg ønsker å implementere, og lime inn all relevant kode i sin helhet der endringen skal skje. I tillegg har jeg benyttet andre GPT-modeller fra OpenAI, som 'Ideogram' for å forbedre mine bildegenereringsprompter, og 'Suno AI V3 - Lyrics' for å generere forslag til sangtekstprompter.",
        link: "https://chatgpt.com/c/67124328-8b2c-800c-bad9-4dc0e0c37bde"
      }
    ]
  },
  {
    id: 5,
    name: "Suno AI",
    description: "AI-plattform for å generere musikk og lydeffekter.",
    icon: React.createElement(SiSuno),
    category: "AI Verktøy",
    songs: [
      {
        title: "Fingrene fulle av ostepop",
        prompt: "For denne sangen har jeg brukt funksjonen 'Custom', der jeg har lagt inn egen promptet tekst, og musikkstil. Teksten er delvis selvskrevet, der Open AI's GPT 'Suno AI V3 - Lyrics' har produsert første utkast, og jeg har gjort endringer for å få teksten så god som mulig. Promptet kan leses ved å trykke på 'Gå til prompt og sang'.",
        style: "Pop, Synthwave, The Weekend-stil",
        songUrl: "/song/0"
      },
      {
        title: "Back to back",
        prompt: "For denne sangen har jeg brukt funksjonen 'Custom', der jeg har lagt inn egen promptet tekst, og musikkstil. Teksten er delvis selvskrevet, der Open AI's GPT 'Suno AI V3 - Lyrics' har produsert første utkast, og jeg har gjort endringer for å få teksten så god som mulig. Promptet kan leses ved å trykke på 'Gå til prompt og sang'.",
        style: "Party, EDM, Pop",
        songUrl: "/song/2"
      },
      {
        title: "Star of the party",
        prompt: "Dette er den første låten jeg produserte i Suno. Denne låten er produsert med Suno's funksjon 'Song Describtion' der jeg la inn en beskrivende tekst på hva jeg ønsket at sangen skulle handle om, og Suno gjorde resten. Dessverre har jeg ikke dette promptet tilgjengelig, da jeg ikke var klar over at det forsvant..",
        songUrl: "/song/1"
      },
      {
        title: "Tveter beste i byen",
        prompt: "For denne sangen har jeg brukt funksjonen 'Custom', der jeg har lagt inn egen promptet tekst, og musikkstil. Teksten er delvis selvskrevet, der Open AI's GPT 'Suno AI V3 - Lyrics' har produsert første utkast, og jeg har gjort endringer for å få teksten så god som mulig. Promptet kan leses ved å trykke på 'Gå til prompt og sang'.",
        style: "Party Anthem",
        songUrl: "/song/3"
      },
      {
        title: "Tveter beste i byen (Remix)",
        prompt: "For denne sangen har jeg brukt funksjonen 'Custom', der jeg har lagt inn egen promptet tekst, og musikkstil. Teksten er delvis selvskrevet, der Open AI's GPT 'Suno AI V3 - Lyrics' har produsert første utkast, og jeg har gjort endringer for å få teksten så god som mulig. Promptet kan leses ved å trykke på 'Gå til prompt og sang'.",
        style: "Techno, Party Song, Mad Drop",
        songUrl: "/song/4"
      }
    ]
  },
  {
    id: 6,
    name: "DALL·E",
    description: "AI-modell utviklet av OpenAI for å generere bilder fra tekstbeskrivelser.",
    icon: React.createElement(SiOpenai),
    category: "AI Verktøy",
    images: [
      {
        imageUrl: "/Tveter_beste_i_byen.jpg",
        prompt: "A vibrant and dynamic sports-themed poster. At the center, a soccer ball is depicted with an explosive burst of red and white light emanating from it, creating a dramatic effect. The word 'TVETER' is prominently displayed at the top, followed by the phrase 'BESTE I BY'N!' at the bottom. In the background, silhouettes of cheering fans can be seen, with some of them raising their hands in jubilation. The entire scene is set against a dark backdrop, with spotlights shining brightly from the sides, further emphasizing the central soccer ball's prominence."
      },
    ]
  },
  {
    id: 7,
    name: "Ideogram",
    description: "AI-verktøy for å generere kunst og bilder basert på tekstbeskrivelser (prompts).",
    icon: React.createElement(FaRegImage),
    category: "AI Verktøy",
    images: [
      {
        imageUrl: "/Fingrene_fulle_av_ostepop.png",
        prompt: "A man is sitting casually on a sofa, holding a bright yellow bag of “Ostepop” in one hand, while his other hand is covered in glowing orange cheese dust. Surrounding him are floating cheese puffs, suspended in mid-air, with vibrant neon lights in shades of orange, yellow, and pink illuminating the background. The text “Fingrene fulle av ostepop” is written in large, glowing neon letters across the top of the image, seamlessly blending into the surreal atmosphere. The orange glow from his cheesy fingers reflects off his face and clothes, creating a chaotic, yet playful energy. Style: Abstract, neon colors, quirky, with bold glowing text integrated into the image.",
        style: "1:1 - 3D"
      },
      {
        imageUrl: "/opprykk.png",
        prompt: "Design a sleek, futuristic football stadium glowing under bright lights at night. A close-up of a football team walking confidently towards the camera in matching kits, heads held high, looking determined, ready for the next challenge. Behind them, the stands are lit up in electric blue and purple lights, with a huge digital scoreboard displaying 'Back to Back' . Add bold, edgy graffiti text in the background saying “Tveter!!” and use a gritty, urban style with neon accents to give it a powerful, street-style vibe. Style: Gritty neon with dynamic urban energy.",
        style: "1:1 - Realistic"
      },
      {
        imageUrl: "/star_of_the_party.png",
        prompt: "A relaxed scene of Emma at an evening outdoor party, surrounded by friends under the cool, starry night sky. She stands in the center, laughing and dancing, illuminated by soft blue and silver string lights. The text “Star of the party” is written in glowing, cool-toned neon letters above her, blending into the night sky with a subtle, ethereal glow. The atmosphere is calm yet lively, with the cool breeze gently moving the trees in the background. Her friends are smiling, enjoying the laid-back energy of the night, as soft music and quiet conversation fill the air. Style: Cool, nighttime, soft blue lighting, calm and lively party vibe, glowing text integrated into the image.",
        style: "1:1 - General"
      },
      {
        imageUrl: "/portrait.png",
        prompt: "Modern EDM Producer with Colorful Lighting A portrait of an EDM music producer, looking confident and relaxed. His face is softly lit by abstract flashes of neon pink and blue light, which create a vibrant contrast against the dark, blurred background. The lighting around him feels dynamic, as though pulsing to an invisible beat, giving the portrait a sense of movement and energy while the producer’s expression remains calm and professional. Style: Dynamic, electro-pop vibe with soft neon highlights.",
        style: "4:5 - Realistic"
      },
      {
        imageUrl: "/background.png",
        prompt: "An abstract background filled with swirling, liquid-like patterns that mimic the flow of music. The design features vibrant colors like deep purples, blues, and pinks, blending and shifting into each other as if in motion. The fluid patterns are smooth and organic, with small glowing accents scattered throughout, creating a lively, energetic feel. No text or icons, only dynamic shapes and waves that suggest the movement and flow of sound. Style: Fluid, organic, with vibrant color transitions and soft lighting.",
        style: "16:9 - General"
      },
      {
        imageUrl: "/assistant.png",
        prompt: "An AI-assistant with both thumbs up, and a big smile",
        style: "1:1 - General"
      },
    ]
  },
  {
    id: 8,
    name: "GitHub Copilot",
    description: "AI-verktøy for å generere kodeforslag og automatisere programmering.",
    icon: React.createElement(FaGithub),
    category: "AI Verktøy",
    images: [
      {
        imageUrl: "/CoPilot.png",
        prompt: "I Visual Studio Code har jeg brukt Github Copilot til å automatisere tekstgenerering og kodeforslag, samt fikse feil i koden min.",
      }
     ]
  },
  {
    id: 9,
    name: "Cursor",
    description: "En kodeeditor som ligner på Visual Studio Code, men med innebygde AI-funksjoner.",
    icon: React.createElement(FaCode),
    category: "AI Verktøy",
    images: [
      {
        imageUrl: "/VolumCursor.png",
        prompt: "I Cursor har jeg brukt ChatGPT 4o/4o mini og Claude 3.5 Sonnet til å implementere funksjonalitet for volumstyring og mer.",
      }
    ]
  },
  {
    id: 10,
    name: "Visual Studio Code",
    description: "En populær kodeeditor utviklet av Microsoft.",
    icon: React.createElement(SiVisualstudiocode),
    category: "Øvrige Verktøy",
  },
];
