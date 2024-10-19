// tools.ts
import { FaReact, FaPalette, FaCode, FaRobot, FaGithub } from "react-icons/fa"; // Importer ikoner fra react-icons
import { SiOpenai, SiTypescript, SiAdobe } from "react-icons/si"; // Importer spesifikke ikoner fra react-icons
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
  details: ToolDetail[]; // Ny egenskap for detaljer
}

export const tools: Tool[] = [
  {
    id: 1,
    name: "React",
    description: "En populær JavaScript-bibliotek for å bygge brukergrensesnitt.",
    icon: React.createElement(FaReact),
    category: "Øvrige Verktøy",
    details: [
      { prompt: "Hvordan lage en komponent i React?", response: "Lag en funksjon som returnerer JSX." },
      // Legg til flere prompts og svar om nødvendig
    ],
  },
  {
    id: 2,
    name: "Chakra UI",
    description: "En komponentbibliotek for å bygge tilgjengelige React-applikasjoner.",
    icon: React.createElement(FaPalette),
    category: "Øvrige Verktøy",
    details: [
      { prompt: "Hvordan bruke Chakra UI for styling?", response: "Bruk `Box` og andre komponenter med prop'er som `bg`, `p`, `m` osv." },
    ],
  },
  {
    id: 3,
    name: "TypeScript",
    description: "Et strengt typet programmeringsspråk som bygger på JavaScript.",
    icon: React.createElement(SiTypescript),
    category: "Øvrige Verktøy",
    details: [
      { prompt: "Hva er en union type i TypeScript?", response: "En type som kan være flere forskjellige typer, f.eks. `string | number`." },
    ],
  },
  {
    id: 4,
    name: "ChatGPT 4.0",
    description: "Avansert AI språkmodell utviklet av OpenAI.",
    icon: React.createElement(SiOpenai),
    category: "AI Verktøy",
    details: [
      { prompt: "Hvordan bruke Chakra UI for styling?", response: "Bruk `Box` og andre komponenter med prop'er som `bg`, `p`, `m` osv." },
    ],
  },
  {
    id: 5,
    name: "Suno AI",
    description: "AI-plattform for å generere musikk og lydeffekter.",
    icon: React.createElement(FaRobot),
    category: "AI Verktøy",
    details: [
      { prompt: "Hvordan bruke Chakra UI for styling?", response: "Bruk `Box` og andre komponenter med prop'er som `bg`, `p`, `m` osv." },
    ],
  },
  {
    id: 6,
    name: "DALL·E",
    description: "AI-modell utviklet av OpenAI for å generere bilder fra tekstbeskrivelser.",
    icon: React.createElement(SiOpenai),
    category: "AI Verktøy",
    details: [
      { prompt: "Hvordan bruke Chakra UI for styling?", response: "Bruk `Box` og andre komponenter med prop'er som `bg`, `p`, `m` osv." },
    ],
  },
  {
    id: 7,
    name: "Ideogram",
    description: "AI-verktøy for å generere kunst og bilder basert på tekstbeskrivelser.",
    icon: React.createElement(SiAdobe),
    category: "AI Verktøy",
    details: [
      { prompt: "Hvordan bruke Chakra UI for styling?", response: "Bruk `Box` og andre komponenter med prop'er som `bg`, `p`, `m` osv." },
    ],
  },
  {
    id: 8,
    name: "GitHub Copilot",
    description: "AI-assistent for utviklere som hjelper med kodeforslag og automatisering.",
    icon: React.createElement(FaGithub),
    category: "AI Verktøy",
    details: [
      { prompt: "Hvordan bruke Chakra UI for styling?", response: "Bruk `Box` og andre komponenter med prop'er som `bg`, `p`, `m` osv." },
    ],
  },
  {
    id: 9,
    name: "Cursor",
    description: "Et verktøy for å navigere og redigere koder raskere.",
    icon: React.createElement(FaCode),
    category: "Øvrige Verktøy",
    details: [
      { prompt: "Hvordan bruke Chakra UI for styling?", response: "Bruk `Box` og andre komponenter med prop'er som `bg`, `p`, `m` osv." },
    ],
  },
  {
    id: 10,
    name: "Claude 3",
    description: "Avansert AI-assistent utviklet av Anthropic for tekstforståelse og generering.",
    icon: React.createElement(FaRobot),
    category: "AI Verktøy",
    details: [
      { prompt: "Hvordan bruke Chakra UI for styling?", response: "Bruk `Box` og andre komponenter med prop'er som `bg`, `p`, `m` osv." },
    ],
  },
];
