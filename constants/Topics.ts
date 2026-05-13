export type Topic = {
  id: string;
  subjectId: string;
  title: string;
  description: string;
  icon: string;
};

export const topics: Topic[] = [
  // English Topics
  {
    id: "grammar-basics",
    subjectId: "english",
    title: "Grammar Basics",
    description: "Learn the basic rules that make sentences clear and correct.",
    icon: "📝",
  },
  {
    id: "parts-of-speech",
    subjectId: "english",
    title: "Parts of Speech",
    description: "Practice nouns, pronouns, verbs, adjectives, and adverbs.",
    icon: "📚",
  },
  {
    id: "nouns",
    subjectId: "english",
    title: "Nouns",
    description: "Identify words that name people, places, things, and ideas.",
    icon: "👤",
  },
  {
    id: "pronouns",
    subjectId: "english",
    title: "Pronouns",
    description: "Understand words that replace nouns in sentences.",
    icon: "🔁",
  },
  {
    id: "synonyms",
    subjectId: "english",
    title: "Synonyms",
    description: "Build vocabulary by learning words with similar meanings.",
    icon: "🤝",
  },

  // Science Topics
  {
    id: "cells",
    subjectId: "science",
    title: "Cells",
    description: "Study the basic unit of life and its important functions.",
    icon: "🔬",
  },
  {
    id: "plants",
    subjectId: "science",
    title: "Plants",
    description: "Understand plant parts, growth, and how plants make food.",
    icon: "🌿",
  },
  {
    id: "human-body",
    subjectId: "science",
    title: "Human Body",
    description: "Learn about body parts, organs, and body systems.",
    icon: "🫀",
  },
  {
    id: "solar-system",
    subjectId: "science",
    title: "Solar System",
    description: "Study the Sun, planets, moons, and other space objects.",
    icon: "🪐",
  },
  {
    id: "environment",
    subjectId: "science",
    title: "Environment",
    description: "Learn how humans, animals, plants, and nature are connected.",
    icon: "🌳",
  },

  // Math Topics
  {
    id: "addition",
    subjectId: "math",
    title: "Addition",
    description: "Practice combining numbers to find the total.",
    icon: "➕",
  },
  {
    id: "multiplication",
    subjectId: "math",
    title: "Multiplication",
    description: "Practice repeated addition and multiplication facts.",
    icon: "✖️",
  },
  {
    id: "division",
    subjectId: "math",
    title: "Division",
    description: "Learn how to split numbers into equal groups.",
    icon: "➗",
  },
  {
    id: "fractions",
    subjectId: "math",
    title: "Fractions",
    description: "Understand parts of a whole and compare fractions.",
    icon: "🍕",
  },
  {
    id: "geometry",
    subjectId: "math",
    title: "Geometry",
    description: "Study shapes, lines, angles, and figures.",
    icon: "📐",
  },

  // History Topics
  {
    id: "philippine-heroes",
    subjectId: "history",
    title: "Philippine Heroes",
    description: "Learn about Filipinos who shaped the nation’s history.",
    icon: "🇵🇭",
  },
  {
    id: "jose-rizal",
    subjectId: "history",
    title: "Jose Rizal",
    description: "Study the life, writings, and influence of Jose Rizal.",
    icon: "✒️",
  },
  {
    id: "katipunan",
    subjectId: "history",
    title: "Katipunan",
    description: "Learn about the secret revolutionary organization of Filipinos.",
    icon: "🗡️",
  },
  {
    id: "philippine-independence",
    subjectId: "history",
    title: "Philippine Independence",
    description: "Learn about the declaration of Philippine independence.",
    icon: "🎉",
  },
  {
    id: "philippine-presidents",
    subjectId: "history",
    title: "Philippine Presidents",
    description: "Study the leaders who served as presidents of the Philippines.",
    icon: "👔",
  },
];

export function getTopicsBySubject(subjectId: string) {
  return topics.filter((topic) => topic.subjectId === subjectId);
}