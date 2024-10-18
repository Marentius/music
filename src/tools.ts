// tools.ts
import { FaReact, FaPalette, FaCode, FaRobot, FaGithub } from "react-icons/fa"; // Importer ikoner fra react-icons
import { SiOpenai, SiTypescript, SiAdobe } from "react-icons/si"; // Importer spesifikke ikoner fra react-icons
import React from "react";

export interface Tool {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
}

export const tools: Tool[] = [
  {
    id: 1,
    name: "React",
    description: "En populær JavaScript-bibliotek for å bygge brukergrensesnitt.",
    icon: React.createElement(FaReact), // Bruker react-icons
  },
  {
    id: 2,
    name: "Chakra UI",
    description: "En komponentbibliotek for å bygge tilgjengelige React-applikasjoner.",
    icon: React.createElement(FaPalette), // Bruker react-icons
  },
  {
    id: 3,
    name: "TypeScript",
    description: "Et strengt typet programmeringsspråk som bygger på JavaScript.",
    icon: React.createElement(SiTypescript), // Bruker react-icons
  },
  {
    id: 4,
    name: "ChatGPT 4.0",
    description: "Avansert AI språkmodell utviklet av OpenAI.",
    icon: React.createElement(SiOpenai), // Bruker react-icons
  },
  {
    id: 5,
    name: "Suno AI",
    description: "AI-plattform for å generere musikk og lydeffekter.",
    icon: React.createElement(FaRobot), // Generisk robot-ikon fra react-icons
  },
  {
    id: 6,
    name: "DALL·E",
    description: "AI-modell utviklet av OpenAI for å generere bilder fra tekstbeskrivelser.",
    icon: React.createElement(SiOpenai), // Bruker OpenAI-ikon
  },
  {
    id: 7,
    name: "Ideogram",
    description: "AI-verktøy for å generere kunst og bilder basert på tekstbeskrivelser.",
    icon: React.createElement(SiAdobe), // Generisk ikon for kreative verktøy
  },
  {
    id: 8,
    name: "GitHub Copilot",
    description: "AI-assistent for utviklere som hjelper med kodeforslag og automatisering.",
    icon: React.createElement(FaGithub), // Bruker GitHub-ikon fra react-icons
  },
  {
    id: 9,
    name: "Cursor",
    description: "Et verktøy for å navigere og redigere koder raskere.",
    icon: React.createElement(FaCode), // Generisk kode-ikon
  },
  {
    id: 10,
    name: "Claude 3",
    description: "Avansert AI-assistent utviklet av Anthropic for tekstforståelse og generering.",
    icon: React.createElement(FaRobot), // Bruker generisk robot-ikon
  }
];
