export type Subject = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Question = {
  id: string;
  subject: string;
  topic: string;
  question: string;
  choices: string[];
  correctAnswer: string;
  explanation: string;
};

export type QuizResult = {
  subject: string;
  score: number;
  total: number;
};