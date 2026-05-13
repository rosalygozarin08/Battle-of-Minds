import { Question, Subject } from "@/types";

export const subjects: Subject[] = [
  {
    id: "english",
    title: "English",
    description: "Test your vocabulary, grammar, and reading skills.",
    icon: "📚",
  },
  {
    id: "science",
    title: "Science",
    description: "Challenge your knowledge about life, matter, and the universe.",
    icon: "🔬",
  },
  {
    id: "math",
    title: "Math",
    description: "Solve problems and sharpen your logical thinking.",
    icon: "➗",
  },
  {
    id: "history",
    title: "History",
    description: "Explore important events, people, and places from the past.",
    icon: "🏛️",
  },
];

export const questions: Question[] = [
  // English Questions
  {
    id: "eng-synonyms-1",
    subject: "english",
    topic: "synonyms",
    question: "Which word is a synonym of happy?",
    choices: ["Sad", "Joyful", "Angry", "Tired"],
    correctAnswer: "Joyful",
    explanation:
      "The correct answer is Joyful because a synonym is a word that has the same or nearly the same meaning as another word. Happy means feeling pleasure, gladness, or contentment, and joyful also means feeling great happiness. The other choices have different meanings: sad means unhappy, angry means mad, and tired means needing rest.",
  },
  {
    id: "eng-subject-verb-agreement-1",
    subject: "english",
    topic: "subject-verb-agreement",
    question: "Which sentence shows correct subject-verb agreement?",
    choices: [
      "She go to school.",
      "She goes to school.",
      "She going to school.",
      "She gone to school.",
    ],
    correctAnswer: "She goes to school.",
    explanation:
      "The correct answer is 'She goes to school.' In simple present tense, when the subject is singular like 'she,' the verb usually adds -s or -es. This is why 'goes' is correct. The other choices do not follow proper subject-verb agreement or are incomplete sentence forms.",
  },
  {
    id: "eng-antonyms-1",
    subject: "english",
    topic: "antonyms",
    question: "What is the opposite of brave?",
    choices: ["Strong", "Fearful", "Kind", "Wise"],
    correctAnswer: "Fearful",
    explanation:
      "The correct answer is Fearful because an antonym is a word that has the opposite meaning of another word. Brave means having courage or not being easily afraid, while fearful means being afraid or scared. Strong, kind, and wise are good qualities, but they are not the opposite of brave.",
  },
  {
    id: "eng-nouns-1",
    subject: "english",
    topic: "nouns",
    question: "Which word is a noun?",
    choices: ["Run", "Beautiful", "Teacher", "Quickly"],
    correctAnswer: "Teacher",
    explanation:
      "The correct answer is Teacher because a noun is a word that names a person, place, thing, or idea. A teacher is a person, so it is a noun. Run is usually an action word, beautiful describes something, and quickly tells how an action is done.",
  },
  {
    id: "eng-punctuation-1",
    subject: "english",
    topic: "punctuation",
    question: "Which sentence uses the correct punctuation?",
    choices: [
      "What is your name.",
      "What is your name?",
      "What is your name!",
      "What is your name,",
    ],
    correctAnswer: "What is your name?",
    explanation:
      "The correct answer is 'What is your name?' because the sentence is asking a question. Questions should end with a question mark. A period is used for statements, an exclamation point is used for strong emotion, and a comma does not properly end a complete question.",
  },

  // Science Questions
  {
    id: "sci-solar-system-1",
    subject: "science",
    topic: "solar-system",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
    explanation:
      "The correct answer is Mars. Mars is called the Red Planet because its surface has iron oxide, which is similar to rust and gives the planet a reddish appearance. This red color can be seen even from Earth through telescopes. Earth, Jupiter, and Venus have different features and are not known by this nickname.",
  },
  {
    id: "sci-plants-1",
    subject: "science",
    topic: "plants",
    question: "What do plants need to make food?",
    choices: ["Sunlight", "Plastic", "Smoke", "Sand"],
    correctAnswer: "Sunlight",
    explanation:
      "The correct answer is Sunlight. Plants use sunlight during photosynthesis, a process where they make their own food using sunlight, water, and carbon dioxide. Sunlight provides the energy plants need to produce glucose. Plastic, smoke, and sand do not provide the energy needed for photosynthesis.",
  },
  {
    id: "sci-cells-1",
    subject: "science",
    topic: "cells",
    question: "What is the basic unit of life?",
    choices: ["Atom", "Cell", "Organ", "Tissue"],
    correctAnswer: "Cell",
    explanation:
      "The correct answer is Cell. A cell is called the basic unit of life because all living organisms are made up of one or more cells. Cells perform important functions such as growth, repair, and reproduction. Atoms are units of matter, while tissues and organs are made from groups of cells working together.",
  },
  {
    id: "sci-plants-2",
    subject: "science",
    topic: "plants",
    question: "Which part of the plant absorbs water from the soil?",
    choices: ["Leaves", "Stem", "Roots", "Flower"],
    correctAnswer: "Roots",
    explanation:
      "The correct answer is Roots. Roots help hold the plant in the soil and absorb water and minerals needed for growth. These materials are then transported to other parts of the plant. Leaves mainly make food, the stem supports the plant, and the flower is involved in reproduction.",
  },
  {
    id: "sci-human-body-1",
    subject: "science",
    topic: "human-body",
    question: "What gas do humans need to breathe in order to live?",
    choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
    correctAnswer: "Oxygen",
    explanation:
      "The correct answer is Oxygen. Humans breathe in oxygen because the body needs it to produce energy from food. Oxygen is carried by the blood to different parts of the body. Carbon dioxide is the gas we breathe out, while nitrogen and helium are not the main gases our body uses for breathing.",
  },

  // Math Questions
  {
    id: "math-addition-1",
    subject: "math",
    topic: "addition",
    question: "What is 12 + 8?",
    choices: ["18", "20", "22", "24"],
    correctAnswer: "20",
    explanation:
      "The correct answer is 20. To solve 12 + 8, you can add the ones first: 2 + 8 equals 10. Then add the remaining 10 from 12, giving a total of 20. Addition means combining numbers to find the total amount.",
  },
  {
    id: "math-multiplication-1",
    subject: "math",
    topic: "multiplication",
    question: "What is 9 × 6?",
    choices: ["45", "54", "63", "72"],
    correctAnswer: "54",
    explanation:
      "The correct answer is 54. Multiplication is repeated addition, so 9 × 6 means adding 9 six times or adding 6 nine times. When you count by 9 six times, you get 9, 18, 27, 36, 45, and 54. That is why 9 multiplied by 6 equals 54.",
  },
  {
    id: "math-square-roots-1",
    subject: "math",
    topic: "square-roots",
    question: "What is the square root of 64?",
    choices: ["6", "7", "8", "9"],
    correctAnswer: "8",
    explanation:
      "The correct answer is 8. The square root of a number is the value that, when multiplied by itself, gives the original number. Since 8 × 8 equals 64, the square root of 64 is 8. The other choices do not produce 64 when multiplied by themselves.",
  },
  {
    id: "math-division-1",
    subject: "math",
    topic: "division",
    question: "What is 100 divided by 4?",
    choices: ["20", "25", "30", "40"],
    correctAnswer: "25",
    explanation:
      "The correct answer is 25. Division means separating a number into equal groups. If 100 is divided into 4 equal groups, each group will have 25. You can also check this by multiplying 25 by 4, which gives 100.",
  },
  {
    id: "math-even-and-odd-numbers-1",
    subject: "math",
    topic: "even-and-odd-numbers",
    question: "Which number is an even number?",
    choices: ["13", "17", "22", "31"],
    correctAnswer: "22",
    explanation:
      "The correct answer is 22 because an even number is a number that can be divided by 2 without a remainder. Since 22 divided by 2 equals 11, it is even. The numbers 13, 17, and 31 are odd because they cannot be divided equally by 2.",
  },

  // History Questions
  {
    id: "his-philippine-heroes-1",
    subject: "history",
    topic: "philippine-heroes",
    question: "Who is known as the national hero of the Philippines?",
    choices: [
      "Andres Bonifacio",
      "Jose Rizal",
      "Emilio Aguinaldo",
      "Apolinario Mabini",
    ],
    correctAnswer: "Jose Rizal",
    explanation:
      "The correct answer is Jose Rizal. He is widely recognized as the national hero of the Philippines because of his writings, ideas, and peaceful fight against Spanish colonial rule. His novels inspired many Filipinos to love the country and seek freedom. Although the other choices are also important historical figures, Rizal is the one most commonly known as the national hero.",
  },
  {
    id: "his-philippine-independence-1",
    subject: "history",
    topic: "philippine-independence",
    question: "When did the Philippines declare independence from Spain?",
    choices: [
      "June 12, 1898",
      "July 4, 1946",
      "August 21, 1983",
      "December 30, 1896",
    ],
    correctAnswer: "June 12, 1898",
    explanation:
      "The correct answer is June 12, 1898. This was the date when Philippine independence from Spain was proclaimed in Kawit, Cavite. It is now celebrated every year as Philippine Independence Day. July 4, 1946 is related to independence recognition from the United States, while the other dates refer to different historical events.",
  },
  {
    id: "his-emilio-aguinaldo-1",
    subject: "history",
    topic: "emilio-aguinaldo",
    question: "Who was the first president of the Philippines?",
    choices: [
      "Manuel Quezon",
      "Jose Rizal",
      "Emilio Aguinaldo",
      "Ferdinand Marcos",
    ],
    correctAnswer: "Emilio Aguinaldo",
    explanation:
      "The correct answer is Emilio Aguinaldo. He became the first president of the Philippines during the First Philippine Republic. He played a major role in the Philippine Revolution and the declaration of independence. Manuel Quezon became president later, Jose Rizal was not a president, and Ferdinand Marcos served in a much later period.",
  },
  {
    id: "his-andres-bonifacio-1",
    subject: "history",
    topic: "andres-bonifacio",
    question: "Who is known as the Father of the Philippine Revolution?",
    choices: [
      "Andres Bonifacio",
      "Jose Rizal",
      "Manuel Roxas",
      "Antonio Luna",
    ],
    correctAnswer: "Andres Bonifacio",
    explanation:
      "The correct answer is Andres Bonifacio. He is known as the Father of the Philippine Revolution because he founded and led the Katipunan, a secret organization that fought for Philippine independence from Spanish rule. His leadership encouraged many Filipinos to fight for freedom and national identity.",
  },
  {
    id: "his-katipunan-1",
    subject: "history",
    topic: "katipunan",
    question: "What organization did Andres Bonifacio help establish?",
    choices: [
      "Katipunan",
      "La Liga Filipina",
      "Malolos Congress",
      "Propaganda Movement",
    ],
    correctAnswer: "Katipunan",
    explanation:
      "The correct answer is Katipunan. The Katipunan was a revolutionary organization that aimed to free the Philippines from Spanish colonial rule. Andres Bonifacio was one of its founders and became one of its most important leaders. This organization played a major role in starting the Philippine Revolution.",
  },
];