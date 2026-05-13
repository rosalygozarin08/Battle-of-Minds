import { QuestionInput } from "@/services/questionService";

export const questionBank: QuestionInput[] = [
  // English → Grammar Basics
  {
    subject: "english",
    topic: "grammar-basics",
    question: "Which sentence is complete?",
    choices: [
      "Running in the park.",
      "Because I was tired.",
      "The girl reads a book.",
      "After the rain stopped.",
    ],
    correctAnswer: "The girl reads a book.",
    explanation:
      "The correct answer is 'The girl reads a book' because it has a subject and a complete predicate. A complete sentence expresses a full thought. The other choices are sentence fragments because they do not fully tell what happened.",
  },
  {
    subject: "english",
    topic: "grammar-basics",
    question: "Which sentence uses correct capitalization?",
    choices: [
      "my name is Carlo.",
      "My name is Carlo.",
      "my Name is carlo.",
      "My name is carlo.",
    ],
    correctAnswer: "My name is Carlo.",
    explanation:
      "The correct answer is 'My name is Carlo.' because the first word of the sentence and the proper noun Carlo are capitalized. Names of people should always begin with capital letters.",
  },
  {
    subject: "english",
    topic: "grammar-basics",
    question: "Which sentence uses a question mark correctly?",
    choices: [
      "What is your name?",
      "I am going home?",
      "Please sit down?",
      "The sun is bright?",
    ],
    correctAnswer: "What is your name?",
    explanation:
      "The correct answer is 'What is your name?' because it asks a question. A question mark is used at the end of a sentence that asks for information.",
  },
  {
    subject: "english",
    topic: "grammar-basics",
    question: "Which sentence gives a command?",
    choices: [
      "The bird is flying.",
      "Please close the door.",
      "Do you like apples?",
      "She is my friend.",
    ],
    correctAnswer: "Please close the door.",
    explanation:
      "The correct answer is 'Please close the door.' because it tells someone to do something. A command sentence gives an instruction, request, or order.",
  },
  {
    subject: "english",
    topic: "grammar-basics",
    question: "Which sentence is in the past tense?",
    choices: [
      "They play outside.",
      "They played outside.",
      "They will play outside.",
      "They are playing outside.",
    ],
    correctAnswer: "They played outside.",
    explanation:
      "The correct answer is 'They played outside.' because the word played shows that the action already happened. Past tense is used for actions completed before now.",
  },
  {
    subject: "english",
    topic: "grammar-basics",
    question: "Which sentence uses 'is' correctly?",
    choices: [
      "The boys is playing.",
      "The cats is sleeping.",
      "The girl is singing.",
      "The dogs is barking.",
    ],
    correctAnswer: "The girl is singing.",
    explanation:
      "The correct answer is 'The girl is singing.' because girl is singular, and singular subjects often use 'is.' The other subjects are plural and should use 'are.'",
  },
  {
    subject: "english",
    topic: "grammar-basics",
    question: "Which sentence uses 'are' correctly?",
    choices: [
      "The child are happy.",
      "The students are ready.",
      "The dog are hungry.",
      "The teacher are kind.",
    ],
    correctAnswer: "The students are ready.",
    explanation:
      "The correct answer is 'The students are ready.' because students is plural, and plural subjects use 'are.' The other subjects are singular and should use 'is.'",
  },
  {
    subject: "english",
    topic: "grammar-basics",
    question: "Which sentence uses 'a' correctly?",
    choices: [
      "I saw a elephant.",
      "I saw a apple.",
      "I saw a dog.",
      "I saw a orange.",
    ],
    correctAnswer: "I saw a dog.",
    explanation:
      "The correct answer is 'I saw a dog.' because 'a' is used before words that begin with a consonant sound. Dog begins with the consonant sound d.",
  },
  {
    subject: "english",
    topic: "grammar-basics",
    question: "Which sentence uses 'an' correctly?",
    choices: [
      "She has an umbrella.",
      "She has an bag.",
      "She has an pencil.",
      "She has an book.",
    ],
    correctAnswer: "She has an umbrella.",
    explanation:
      "The correct answer is 'She has an umbrella.' because 'an' is used before words that begin with a vowel sound. Umbrella begins with a vowel sound.",
  },
  {
    subject: "english",
    topic: "grammar-basics",
    question: "Which sentence has correct word order?",
    choices: [
      "School goes to she.",
      "She goes to school.",
      "Goes she school to.",
      "To school she goes everyday yesterday.",
    ],
    correctAnswer: "She goes to school.",
    explanation:
      "The correct answer is 'She goes to school.' because the words are arranged in a clear and grammatically correct order. English sentences usually follow a natural subject and verb pattern.",
  },

  // English → Parts of Speech
  {
    subject: "english",
    topic: "parts-of-speech",
    question: "Which part of speech names a person, place, thing, or idea?",
    choices: ["Noun", "Verb", "Adjective", "Adverb"],
    correctAnswer: "Noun",
    explanation:
      "The correct answer is Noun because a noun names a person, place, thing, or idea. Examples are teacher, school, pencil, and happiness.",
  },
  {
    subject: "english",
    topic: "parts-of-speech",
    question: "Which part of speech shows action?",
    choices: ["Verb", "Noun", "Pronoun", "Adjective"],
    correctAnswer: "Verb",
    explanation:
      "The correct answer is Verb because a verb shows action or state of being. Words like run, jump, write, is, and are are examples of verbs.",
  },
  {
    subject: "english",
    topic: "parts-of-speech",
    question: "Which part of speech describes a noun?",
    choices: ["Adjective", "Verb", "Adverb", "Conjunction"],
    correctAnswer: "Adjective",
    explanation:
      "The correct answer is Adjective because adjectives describe nouns. For example, in the phrase 'blue bag,' the word blue describes the noun bag.",
  },
  {
    subject: "english",
    topic: "parts-of-speech",
    question: "Which part of speech replaces a noun?",
    choices: ["Pronoun", "Verb", "Adjective", "Interjection"],
    correctAnswer: "Pronoun",
    explanation:
      "The correct answer is Pronoun because pronouns replace nouns. Examples are he, she, it, they, we, and you.",
  },
  {
    subject: "english",
    topic: "parts-of-speech",
    question: "Which part of speech describes a verb?",
    choices: ["Adverb", "Noun", "Pronoun", "Article"],
    correctAnswer: "Adverb",
    explanation:
      "The correct answer is Adverb because adverbs often describe verbs. For example, in 'She sings softly,' softly describes how she sings.",
  },
  {
    subject: "english",
    topic: "parts-of-speech",
    question: "Which word is a noun?",
    choices: ["School", "Quickly", "Brave", "Jump"],
    correctAnswer: "School",
    explanation:
      "The correct answer is School because it names a place. Quickly is an adverb, brave is an adjective, and jump is usually a verb.",
  },
  {
    subject: "english",
    topic: "parts-of-speech",
    question: "Which word is a verb?",
    choices: ["Dance", "Flower", "Soft", "Their"],
    correctAnswer: "Dance",
    explanation:
      "The correct answer is Dance because it shows an action. Flower is a noun, soft is an adjective, and their shows possession.",
  },
  {
    subject: "english",
    topic: "parts-of-speech",
    question: "Which word is an adjective?",
    choices: ["Kind", "Walk", "Teacher", "Quickly"],
    correctAnswer: "Kind",
    explanation:
      "The correct answer is Kind because it describes a quality of a person. Walk is a verb, teacher is a noun, and quickly is an adverb.",
  },
  {
    subject: "english",
    topic: "parts-of-speech",
    question: "Which word is an adverb?",
    choices: ["Slowly", "Chair", "Happy", "He"],
    correctAnswer: "Slowly",
    explanation:
      "The correct answer is Slowly because it describes how an action is done. Many adverbs end in -ly, although not all adverbs do.",
  },
  {
    subject: "english",
    topic: "parts-of-speech",
    question: "Which word is a conjunction?",
    choices: ["And", "Book", "Run", "Pretty"],
    correctAnswer: "And",
    explanation:
      "The correct answer is And because conjunctions connect words or ideas. For example, in 'apples and bananas,' and connects two nouns.",
  },

  // English → Nouns
  {
    subject: "english",
    topic: "nouns",
    question: "Which word is a noun?",
    choices: ["Teacher", "Run", "Quickly", "Beautiful"],
    correctAnswer: "Teacher",
    explanation:
      "The correct answer is Teacher because a noun names a person, place, thing, or idea. Teacher names a person.",
  },
  {
    subject: "english",
    topic: "nouns",
    question: "Which word names a place?",
    choices: ["School", "Jump", "Happy", "Slowly"],
    correctAnswer: "School",
    explanation:
      "The correct answer is School because it names a place where students learn. A noun can name a person, place, thing, or idea.",
  },
  {
    subject: "english",
    topic: "nouns",
    question: "Which word names a thing?",
    choices: ["Pencil", "Dance", "Kind", "Softly"],
    correctAnswer: "Pencil",
    explanation:
      "The correct answer is Pencil because it names an object or thing. Dance is usually a verb, kind is an adjective, and softly is an adverb.",
  },
  {
    subject: "english",
    topic: "nouns",
    question: "Which word names an idea?",
    choices: ["Honesty", "Walk", "Blue", "Quickly"],
    correctAnswer: "Honesty",
    explanation:
      "The correct answer is Honesty because it names an idea or quality. Ideas like honesty, love, and courage are abstract nouns.",
  },
  {
    subject: "english",
    topic: "nouns",
    question: "Which word is a proper noun?",
    choices: ["Philippines", "Country", "City", "School"],
    correctAnswer: "Philippines",
    explanation:
      "The correct answer is Philippines because it is the specific name of a country. Proper nouns name specific people, places, or things.",
  },
  {
    subject: "english",
    topic: "nouns",
    question: "Which word is a common noun?",
    choices: ["Girl", "Anna", "Manila", "Monday"],
    correctAnswer: "Girl",
    explanation:
      "The correct answer is Girl because it names a general person, not a specific name. Anna, Manila, and Monday are proper nouns.",
  },
  {
    subject: "english",
    topic: "nouns",
    question: "Which is a plural noun?",
    choices: ["Books", "Book", "Reads", "Happy"],
    correctAnswer: "Books",
    explanation:
      "The correct answer is Books because it means more than one book. A plural noun names more than one person, place, thing, or idea.",
  },
  {
    subject: "english",
    topic: "nouns",
    question: "Which is a singular noun?",
    choices: ["Child", "Children", "Books", "Students"],
    correctAnswer: "Child",
    explanation:
      "The correct answer is Child because it names one person. Children, books, and students are plural nouns.",
  },
  {
    subject: "english",
    topic: "nouns",
    question: "Which is an abstract noun?",
    choices: ["Courage", "Table", "Bird", "Notebook"],
    correctAnswer: "Courage",
    explanation:
      "The correct answer is Courage because it names a quality or idea that cannot be touched. Table, bird, and notebook are concrete nouns.",
  },
  {
    subject: "english",
    topic: "nouns",
    question: "Which is a concrete noun?",
    choices: ["Flower", "Freedom", "Honesty", "Bravery"],
    correctAnswer: "Flower",
    explanation:
      "The correct answer is Flower because it is something you can see, touch, or smell. Freedom, honesty, and bravery are abstract nouns.",
  },

  // English → Pronouns
  {
    subject: "english",
    topic: "pronouns",
    question: "Which word is a pronoun?",
    choices: ["She", "Teacher", "Run", "Beautiful"],
    correctAnswer: "She",
    explanation:
      "The correct answer is She because a pronoun is a word that takes the place of a noun. She can replace the name of a female person.",
  },
  {
    subject: "english",
    topic: "pronouns",
    question: "Which pronoun can replace 'Carlos'?",
    choices: ["He", "She", "They", "It"],
    correctAnswer: "He",
    explanation:
      "The correct answer is He because Carlos is the name of one male person. He is used to replace the name of a male person.",
  },
  {
    subject: "english",
    topic: "pronouns",
    question: "Which pronoun can replace 'Maria'?",
    choices: ["She", "He", "It", "We"],
    correctAnswer: "She",
    explanation:
      "The correct answer is She because Maria is the name of one female person. She is used to replace a female name.",
  },
  {
    subject: "english",
    topic: "pronouns",
    question: "Which pronoun can replace 'the dog'?",
    choices: ["It", "He", "We", "They"],
    correctAnswer: "It",
    explanation:
      "The correct answer is It because the dog refers to one animal. In basic grammar, it is commonly used for one animal or thing.",
  },
  {
    subject: "english",
    topic: "pronouns",
    question: "Which pronoun can replace 'Anna and I'?",
    choices: ["We", "They", "She", "You"],
    correctAnswer: "We",
    explanation:
      "The correct answer is We because Anna and I includes the speaker and another person. We is used when the speaker is part of the group.",
  },
  {
    subject: "english",
    topic: "pronouns",
    question: "Which pronoun can replace 'the students'?",
    choices: ["They", "It", "He", "She"],
    correctAnswer: "They",
    explanation:
      "The correct answer is They because the students refers to more than one person. They is commonly used for plural nouns.",
  },
  {
    subject: "english",
    topic: "pronouns",
    question: "Which sentence uses a pronoun correctly?",
    choices: [
      "Maria is kind. She helps others.",
      "Maria is kind. He helps others.",
      "Maria is kind. It helps others.",
      "Maria is kind. They helps others.",
    ],
    correctAnswer: "Maria is kind. She helps others.",
    explanation:
      "The correct answer is 'Maria is kind. She helps others.' because Maria is a female person, so the pronoun she is correct.",
  },
  {
    subject: "english",
    topic: "pronouns",
    question: "Which pronoun is used for the person speaking?",
    choices: ["I", "You", "He", "They"],
    correctAnswer: "I",
    explanation:
      "The correct answer is I because it refers to the person speaking. For example, when you say 'I am studying,' you are talking about yourself.",
  },
  {
    subject: "english",
    topic: "pronouns",
    question: "Which pronoun is plural?",
    choices: ["They", "He", "She", "It"],
    correctAnswer: "They",
    explanation:
      "The correct answer is They because it commonly refers to more than one person, animal, or thing. He, she, and it are singular pronouns.",
  },
  {
    subject: "english",
    topic: "pronouns",
    question: "Why do we use pronouns in sentences?",
    choices: [
      "To replace nouns and avoid repetition",
      "To make every word capitalized",
      "To remove verbs from sentences",
      "To make sentences always longer",
    ],
    correctAnswer: "To replace nouns and avoid repetition",
    explanation:
      "The correct answer is to replace nouns and avoid repetition. Pronouns make sentences smoother and easier to read because they prevent repeated use of the same noun.",
  },

  // English → Synonyms
  {
    subject: "english",
    topic: "synonyms",
    question: "Which word is a synonym of happy?",
    choices: ["Sad", "Joyful", "Angry", "Tired"],
    correctAnswer: "Joyful",
    explanation:
      "The correct answer is Joyful because a synonym is a word with the same or nearly the same meaning. Happy means glad or pleased, and joyful also means full of happiness.",
  },
  {
    subject: "english",
    topic: "synonyms",
    question: "Which word is a synonym of large?",
    choices: ["Tiny", "Huge", "Weak", "Short"],
    correctAnswer: "Huge",
    explanation:
      "The correct answer is Huge because large means big in size, and huge also means very big. Tiny means small, so it is not a synonym.",
  },
  {
    subject: "english",
    topic: "synonyms",
    question: "Which word is a synonym of quick?",
    choices: ["Fast", "Slow", "Late", "Heavy"],
    correctAnswer: "Fast",
    explanation:
      "The correct answer is Fast because quick and fast both mean moving or happening in a short amount of time.",
  },
  {
    subject: "english",
    topic: "synonyms",
    question: "Which word is a synonym of smart?",
    choices: ["Intelligent", "Weak", "Careless", "Noisy"],
    correctAnswer: "Intelligent",
    explanation:
      "The correct answer is Intelligent because smart means having good understanding or quick thinking. Intelligent has a very similar meaning.",
  },
  {
    subject: "english",
    topic: "synonyms",
    question: "Which word is a synonym of beautiful?",
    choices: ["Pretty", "Dirty", "Loud", "Cold"],
    correctAnswer: "Pretty",
    explanation:
      "The correct answer is Pretty because beautiful and pretty both describe something pleasing or attractive to look at.",
  },
  {
    subject: "english",
    topic: "synonyms",
    question: "Which word is a synonym of angry?",
    choices: ["Mad", "Calm", "Gentle", "Happy"],
    correctAnswer: "Mad",
    explanation:
      "The correct answer is Mad because angry and mad both mean feeling upset or full of strong displeasure.",
  },
  {
    subject: "english",
    topic: "synonyms",
    question: "Which word is a synonym of tired?",
    choices: ["Sleepy", "Energetic", "Excited", "Strong"],
    correctAnswer: "Sleepy",
    explanation:
      "The correct answer is Sleepy because tired means needing rest, and sleepy means feeling like you want to sleep.",
  },
  {
    subject: "english",
    topic: "synonyms",
    question: "Which word is a synonym of small?",
    choices: ["Little", "Giant", "Wide", "Tall"],
    correctAnswer: "Little",
    explanation:
      "The correct answer is Little because small and little both mean not big in size or amount.",
  },
  {
    subject: "english",
    topic: "synonyms",
    question: "Which word is a synonym of begin?",
    choices: ["Start", "End", "Stop", "Finish"],
    correctAnswer: "Start",
    explanation:
      "The correct answer is Start because begin and start both mean to do something for the first time or to make something happen.",
  },
  {
    subject: "english",
    topic: "synonyms",
    question: "Which word is a synonym of difficult?",
    choices: ["Hard", "Easy", "Simple", "Light"],
    correctAnswer: "Hard",
    explanation:
      "The correct answer is Hard because difficult means not easy to do, understand, or solve. Hard has the same meaning in this context.",
  },
    // Science → Cells
  {
    subject: "science",
    topic: "cells",
    question: "What is the basic unit of life?",
    choices: ["Cell", "Atom", "Organ", "Tissue"],
    correctAnswer: "Cell",
    explanation:
      "The correct answer is Cell because all living things are made up of one or more cells. Cells perform important life functions such as growth, repair, and reproduction. Tissues and organs are made from groups of cells.",
  },
  {
    subject: "science",
    topic: "cells",
    question: "Which part of the cell controls most cell activities?",
    choices: ["Nucleus", "Cell wall", "Cytoplasm", "Vacuole"],
    correctAnswer: "Nucleus",
    explanation:
      "The correct answer is Nucleus because it acts like the control center of the cell. It contains genetic material and helps direct the activities of the cell. Other parts have different roles, but the nucleus is mainly responsible for control.",
  },
  {
    subject: "science",
    topic: "cells",
    question: "What part of the cell surrounds and protects it?",
    choices: ["Cell membrane", "Nucleus", "Mitochondria", "Chloroplast"],
    correctAnswer: "Cell membrane",
    explanation:
      "The correct answer is Cell membrane because it surrounds the cell and controls what enters and leaves. It helps protect the cell and keeps the inside parts together. It is found in both plant and animal cells.",
  },
  {
    subject: "science",
    topic: "cells",
    question: "Which cell part is known as the powerhouse of the cell?",
    choices: ["Mitochondria", "Nucleus", "Ribosome", "Vacuole"],
    correctAnswer: "Mitochondria",
    explanation:
      "The correct answer is Mitochondria because it helps produce energy for the cell. Cells need energy to do their work, and mitochondria help release usable energy from food. That is why it is often called the powerhouse of the cell.",
  },
  {
    subject: "science",
    topic: "cells",
    question: "Which cell part is mostly found in plant cells and gives support?",
    choices: ["Cell wall", "Cell membrane", "Nucleus", "Cytoplasm"],
    correctAnswer: "Cell wall",
    explanation:
      "The correct answer is Cell wall because it gives plant cells shape, support, and protection. Animal cells do not have a cell wall. The cell membrane is present in both plant and animal cells, but it is more flexible than the cell wall.",
  },
  {
    subject: "science",
    topic: "cells",
    question: "Which part of the plant cell makes food using sunlight?",
    choices: ["Chloroplast", "Nucleus", "Vacuole", "Cell membrane"],
    correctAnswer: "Chloroplast",
    explanation:
      "The correct answer is Chloroplast because it contains chlorophyll, which helps plants make food through photosynthesis. Chloroplasts capture sunlight and help turn it into energy-rich food for the plant.",
  },
  {
    subject: "science",
    topic: "cells",
    question: "What jelly-like substance fills the inside of a cell?",
    choices: ["Cytoplasm", "Cell wall", "Nucleus", "Chlorophyll"],
    correctAnswer: "Cytoplasm",
    explanation:
      "The correct answer is Cytoplasm because it is the jelly-like material inside the cell where many cell parts are found. It helps hold the organelles in place and supports many activities inside the cell.",
  },
  {
    subject: "science",
    topic: "cells",
    question: "Which type of cell has a cell wall and chloroplasts?",
    choices: ["Plant cell", "Animal cell", "Blood cell", "Nerve cell"],
    correctAnswer: "Plant cell",
    explanation:
      "The correct answer is Plant cell because plant cells usually have a cell wall and chloroplasts. The cell wall gives support, while chloroplasts help make food. Animal cells do not have cell walls or chloroplasts.",
  },
  {
    subject: "science",
    topic: "cells",
    question: "Which type of cell does not have a cell wall?",
    choices: ["Animal cell", "Plant cell", "Bacteria cell", "Fungal cell"],
    correctAnswer: "Animal cell",
    explanation:
      "The correct answer is Animal cell because animal cells have a cell membrane but no cell wall. This makes animal cells more flexible in shape compared with plant cells, which have a firm cell wall.",
  },
  {
    subject: "science",
    topic: "cells",
    question: "What do cells need in order to function properly?",
    choices: ["Energy", "Plastic", "Smoke", "Dust"],
    correctAnswer: "Energy",
    explanation:
      "The correct answer is Energy because cells need energy to grow, repair, move materials, and perform life processes. Without energy, cells cannot do their important jobs. Plastic, smoke, and dust do not help cells function properly.",
  },

  // Science → Plants
  {
    subject: "science",
    topic: "plants",
    question: "Which part of the plant absorbs water from the soil?",
    choices: ["Roots", "Leaves", "Flower", "Stem"],
    correctAnswer: "Roots",
    explanation:
      "The correct answer is Roots because roots take in water and minerals from the soil. They also help hold the plant firmly in the ground. Leaves make food, flowers help in reproduction, and stems support the plant.",
  },
  {
    subject: "science",
    topic: "plants",
    question: "Which part of the plant makes food?",
    choices: ["Leaves", "Roots", "Flower", "Seed"],
    correctAnswer: "Leaves",
    explanation:
      "The correct answer is Leaves because they are the main part of the plant that makes food through photosynthesis. Leaves use sunlight, water, and carbon dioxide to make food for the plant.",
  },
  {
    subject: "science",
    topic: "plants",
    question: "What do plants need for photosynthesis?",
    choices: ["Sunlight", "Plastic", "Smoke", "Stone"],
    correctAnswer: "Sunlight",
    explanation:
      "The correct answer is Sunlight because plants use sunlight as energy during photosynthesis. They also need water and carbon dioxide. Plastic, smoke, and stone do not help plants make food.",
  },
  {
    subject: "science",
    topic: "plants",
    question: "Which part supports the plant and carries water to the leaves?",
    choices: ["Stem", "Flower", "Fruit", "Seed"],
    correctAnswer: "Stem",
    explanation:
      "The correct answer is Stem because it supports the plant and helps carry water and nutrients from the roots to the leaves. It also helps hold the leaves up so they can receive sunlight.",
  },
  {
    subject: "science",
    topic: "plants",
    question: "Which part of a flowering plant helps in reproduction?",
    choices: ["Flower", "Root", "Stem", "Leaf"],
    correctAnswer: "Flower",
    explanation:
      "The correct answer is Flower because flowers help plants reproduce by producing seeds. Many flowers attract insects and other animals that help transfer pollen from one flower to another.",
  },
  {
    subject: "science",
    topic: "plants",
    question: "What is the green pigment in leaves called?",
    choices: ["Chlorophyll", "Oxygen", "Carbon dioxide", "Protein"],
    correctAnswer: "Chlorophyll",
    explanation:
      "The correct answer is Chlorophyll because it gives leaves their green color and helps capture sunlight for photosynthesis. Without chlorophyll, plants would have difficulty making their own food.",
  },
  {
    subject: "science",
    topic: "plants",
    question: "What gas do plants take in for photosynthesis?",
    choices: ["Carbon dioxide", "Oxygen", "Helium", "Nitrogen only"],
    correctAnswer: "Carbon dioxide",
    explanation:
      "The correct answer is Carbon dioxide because plants take in carbon dioxide from the air during photosynthesis. They use it with water and sunlight to make food and release oxygen.",
  },
  {
    subject: "science",
    topic: "plants",
    question: "What gas do plants release during photosynthesis?",
    choices: ["Oxygen", "Smoke", "Helium", "Carbon monoxide"],
    correctAnswer: "Oxygen",
    explanation:
      "The correct answer is Oxygen because plants release oxygen as a product of photosynthesis. This oxygen is important for humans and animals because they need it for breathing.",
  },
  {
    subject: "science",
    topic: "plants",
    question: "What part of the plant can grow into a new plant?",
    choices: ["Seed", "Stone", "Soil", "Water"],
    correctAnswer: "Seed",
    explanation:
      "The correct answer is Seed because a seed contains a tiny young plant and stored food. Under the right conditions, such as water, air, and warmth, a seed can germinate and grow into a new plant.",
  },
  {
    subject: "science",
    topic: "plants",
    question: "What is the process by which a seed begins to grow?",
    choices: ["Germination", "Evaporation", "Condensation", "Digestion"],
    correctAnswer: "Germination",
    explanation:
      "The correct answer is Germination because it is the process where a seed starts to grow into a new plant. The seed usually needs water, air, and the right temperature to germinate.",
  },

  // Science → Human Body
  {
    subject: "science",
    topic: "human-body",
    question: "What organ pumps blood throughout the body?",
    choices: ["Heart", "Lungs", "Brain", "Stomach"],
    correctAnswer: "Heart",
    explanation:
      "The correct answer is Heart because the heart pumps blood to different parts of the body. Blood carries oxygen and nutrients that the body needs. The lungs help with breathing, the brain controls the body, and the stomach helps digest food.",
  },
  {
    subject: "science",
    topic: "human-body",
    question: "Which organ helps us breathe?",
    choices: ["Lungs", "Heart", "Kidney", "Stomach"],
    correctAnswer: "Lungs",
    explanation:
      "The correct answer is Lungs because they help us breathe in oxygen and breathe out carbon dioxide. Oxygen is needed by the body to produce energy. The heart pumps blood, while the stomach digests food.",
  },
  {
    subject: "science",
    topic: "human-body",
    question: "Which organ controls the body?",
    choices: ["Brain", "Heart", "Liver", "Skin"],
    correctAnswer: "Brain",
    explanation:
      "The correct answer is Brain because it controls thoughts, movements, memory, and many body activities. It sends and receives messages through the nervous system, helping the body respond to its surroundings.",
  },
  {
    subject: "science",
    topic: "human-body",
    question: "What do bones do for the body?",
    choices: ["Support and protect the body", "Make sunlight", "Digest food", "Pump blood"],
    correctAnswer: "Support and protect the body",
    explanation:
      "The correct answer is Support and protect the body because bones give the body shape and protect important organs. For example, the skull protects the brain and the ribs protect the heart and lungs.",
  },
  {
    subject: "science",
    topic: "human-body",
    question: "What do muscles help us do?",
    choices: ["Move", "Make food", "Grow leaves", "Produce sunlight"],
    correctAnswer: "Move",
    explanation:
      "The correct answer is Move because muscles work with bones to help the body move. When muscles contract and relax, they allow actions like walking, running, writing, and lifting.",
  },
  {
    subject: "science",
    topic: "human-body",
    question: "What system breaks down food into nutrients?",
    choices: ["Digestive system", "Respiratory system", "Skeletal system", "Nervous system"],
    correctAnswer: "Digestive system",
    explanation:
      "The correct answer is Digestive system because it breaks down food into nutrients that the body can use. Organs like the mouth, stomach, and intestines help digest food and absorb nutrients.",
  },
  {
    subject: "science",
    topic: "human-body",
    question: "What system helps us breathe?",
    choices: ["Respiratory system", "Digestive system", "Circulatory system", "Skeletal system"],
    correctAnswer: "Respiratory system",
    explanation:
      "The correct answer is Respiratory system because it helps the body take in oxygen and remove carbon dioxide. The lungs are major organs of this system.",
  },
  {
    subject: "science",
    topic: "human-body",
    question: "What system carries blood around the body?",
    choices: ["Circulatory system", "Digestive system", "Skeletal system", "Muscular system"],
    correctAnswer: "Circulatory system",
    explanation:
      "The correct answer is Circulatory system because it moves blood through the body. The heart, blood, and blood vessels work together to carry oxygen and nutrients to body cells.",
  },
  {
    subject: "science",
    topic: "human-body",
    question: "Which sense organ is used for seeing?",
    choices: ["Eyes", "Ears", "Nose", "Tongue"],
    correctAnswer: "Eyes",
    explanation:
      "The correct answer is Eyes because eyes allow us to see light, colors, shapes, and movement. Ears are used for hearing, the nose is used for smelling, and the tongue is used for tasting.",
  },
  {
    subject: "science",
    topic: "human-body",
    question: "Which sense organ is used for hearing?",
    choices: ["Ears", "Eyes", "Skin", "Nose"],
    correctAnswer: "Ears",
    explanation:
      "The correct answer is Ears because ears allow us to hear sounds. They help us recognize voices, music, warnings, and other sounds in our environment.",
  },

  // Science → Solar System
  {
    subject: "science",
    topic: "solar-system",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Earth", "Jupiter", "Venus"],
    correctAnswer: "Mars",
    explanation:
      "The correct answer is Mars because its surface contains iron oxide, which gives it a reddish color. This is why Mars is commonly called the Red Planet.",
  },
  {
    subject: "science",
    topic: "solar-system",
    question: "Which planet is closest to the Sun?",
    choices: ["Mercury", "Venus", "Earth", "Mars"],
    correctAnswer: "Mercury",
    explanation:
      "The correct answer is Mercury because it is the first planet from the Sun. It orbits closer to the Sun than Venus, Earth, and Mars.",
  },
  {
    subject: "science",
    topic: "solar-system",
    question: "What is the largest planet in the Solar System?",
    choices: ["Jupiter", "Earth", "Saturn", "Neptune"],
    correctAnswer: "Jupiter",
    explanation:
      "The correct answer is Jupiter because it is the largest planet in the Solar System. It is a gas giant and is much bigger than Earth.",
  },
  {
    subject: "science",
    topic: "solar-system",
    question: "What object is at the center of the Solar System?",
    choices: ["Sun", "Moon", "Earth", "Mars"],
    correctAnswer: "Sun",
    explanation:
      "The correct answer is the Sun because the planets in our Solar System move around it. The Sun gives light and heat, which are important for life on Earth.",
  },
  {
    subject: "science",
    topic: "solar-system",
    question: "Which planet is known for its beautiful rings?",
    choices: ["Saturn", "Mercury", "Earth", "Mars"],
    correctAnswer: "Saturn",
    explanation:
      "The correct answer is Saturn because it is famous for its large and visible rings. These rings are made mostly of ice, dust, and rock particles.",
  },
  {
    subject: "science",
    topic: "solar-system",
    question: "What is Earth's natural satellite?",
    choices: ["Moon", "Sun", "Mars", "Comet"],
    correctAnswer: "Moon",
    explanation:
      "The correct answer is Moon because it naturally moves around Earth. A natural satellite is an object in space that orbits a planet.",
  },
  {
    subject: "science",
    topic: "solar-system",
    question: "Which planet do we live on?",
    choices: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Earth",
    explanation:
      "The correct answer is Earth because it is the planet where humans, animals, and plants live. Earth has air, water, and the right conditions to support life.",
  },
  {
    subject: "science",
    topic: "solar-system",
    question: "What do planets do around the Sun?",
    choices: ["Orbit", "Melt", "Disappear", "Sleep"],
    correctAnswer: "Orbit",
    explanation:
      "The correct answer is Orbit because planets move around the Sun in paths called orbits. This movement is one of the main features of the Solar System.",
  },
  {
    subject: "science",
    topic: "solar-system",
    question: "Which planet is often called Earth's twin because of its similar size?",
    choices: ["Venus", "Mars", "Jupiter", "Mercury"],
    correctAnswer: "Venus",
    explanation:
      "The correct answer is Venus because it is similar to Earth in size and structure. However, Venus is much hotter and has a thick atmosphere, so it is not suitable for human life.",
  },
  {
    subject: "science",
    topic: "solar-system",
    question: "What is a comet mostly made of?",
    choices: ["Ice, dust, and rock", "Paper and wood", "Metal only", "Plastic only"],
    correctAnswer: "Ice, dust, and rock",
    explanation:
      "The correct answer is Ice, dust, and rock because comets are space objects made of frozen gases, dust, and rocky materials. When they get close to the Sun, they can form glowing tails.",
  },

  // Science → Environment
  {
    subject: "science",
    topic: "environment",
    question: "What is the environment?",
    choices: [
      "Everything around us",
      "Only the classroom",
      "Only the ocean",
      "Only animals",
    ],
    correctAnswer: "Everything around us",
    explanation:
      "The correct answer is Everything around us because the environment includes air, water, land, plants, animals, people, and all surroundings. It is the place where living and nonliving things interact.",
  },
  {
    subject: "science",
    topic: "environment",
    question: "Which of the following helps protect the environment?",
    choices: ["Planting trees", "Throwing trash anywhere", "Burning plastics", "Wasting water"],
    correctAnswer: "Planting trees",
    explanation:
      "The correct answer is Planting trees because trees help clean the air, provide shade, prevent soil erosion, and support animals. Throwing trash, burning plastics, and wasting water harm the environment.",
  },
  {
    subject: "science",
    topic: "environment",
    question: "What should we do with trash?",
    choices: ["Throw it in proper bins", "Leave it on the road", "Throw it in rivers", "Burn it anywhere"],
    correctAnswer: "Throw it in proper bins",
    explanation:
      "The correct answer is Throw it in proper bins because proper waste disposal helps keep the environment clean and safe. Trash thrown in roads or rivers can cause pollution and harm living things.",
  },
  {
    subject: "science",
    topic: "environment",
    question: "What is pollution?",
    choices: [
      "Harmful materials in the environment",
      "Clean air",
      "Fresh water",
      "Healthy soil",
    ],
    correctAnswer: "Harmful materials in the environment",
    explanation:
      "The correct answer is Harmful materials in the environment because pollution happens when air, water, or land becomes dirty or unsafe. Pollution can harm humans, animals, plants, and ecosystems.",
  },
  {
    subject: "science",
    topic: "environment",
    question: "Which is an example of water pollution?",
    choices: [
      "Throwing garbage into a river",
      "Planting flowers",
      "Turning off lights",
      "Using a reusable bag",
    ],
    correctAnswer: "Throwing garbage into a river",
    explanation:
      "The correct answer is Throwing garbage into a river because it makes water dirty and unsafe for living things. Clean water is important for people, animals, and plants.",
  },
  {
    subject: "science",
    topic: "environment",
    question: "Which action saves water?",
    choices: [
      "Turning off the faucet when not in use",
      "Letting water run all day",
      "Playing with running water",
      "Ignoring leaks",
    ],
    correctAnswer: "Turning off the faucet when not in use",
    explanation:
      "The correct answer is Turning off the faucet when not in use because it prevents wasting water. Water is an important natural resource, and people should use it wisely.",
  },
  {
    subject: "science",
    topic: "environment",
    question: "Which action saves electricity?",
    choices: [
      "Turning off lights when leaving a room",
      "Leaving appliances on all day",
      "Opening the refrigerator for a long time",
      "Using many devices at once for no reason",
    ],
    correctAnswer: "Turning off lights when leaving a room",
    explanation:
      "The correct answer is Turning off lights when leaving a room because it reduces electricity use. Saving electricity helps conserve energy and can also lower expenses.",
  },
  {
    subject: "science",
    topic: "environment",
    question: "Why are trees important?",
    choices: [
      "They provide oxygen and shelter",
      "They make plastic",
      "They create smoke",
      "They waste water",
    ],
    correctAnswer: "They provide oxygen and shelter",
    explanation:
      "The correct answer is They provide oxygen and shelter because trees help produce oxygen, give shade, protect soil, and provide homes for many animals. Trees are very important to a healthy environment.",
  },
  {
    subject: "science",
    topic: "environment",
    question: "What does recycle mean?",
    choices: [
      "Use materials again to make new products",
      "Throw everything away",
      "Burn all garbage",
      "Waste useful items",
    ],
    correctAnswer: "Use materials again to make new products",
    explanation:
      "The correct answer is Use materials again to make new products because recycling turns used materials into something useful again. It helps reduce waste and saves natural resources.",
  },
  {
    subject: "science",
    topic: "environment",
    question: "Which is a biodegradable material?",
    choices: ["Banana peel", "Plastic bottle", "Styrofoam", "Glass bottle"],
    correctAnswer: "Banana peel",
    explanation:
      "The correct answer is Banana peel because it can naturally break down and return to the soil. Plastic, styrofoam, and glass take much longer to break down and can harm the environment if not disposed of properly.",
  },
    // Math → Addition
  {
    subject: "math",
    topic: "addition",
    question: "What is 12 + 8?",
    choices: ["18", "20", "22", "24"],
    correctAnswer: "20",
    explanation:
      "The correct answer is 20. Addition means combining numbers to find the total. When you add 12 and 8, you can break 12 into 10 and 2. Then 2 plus 8 equals 10, and 10 plus 10 equals 20.",
  },
  {
    subject: "math",
    topic: "addition",
    question: "What is 25 + 15?",
    choices: ["35", "40", "45", "50"],
    correctAnswer: "40",
    explanation:
      "The correct answer is 40. You can add 25 and 15 by separating tens and ones. Twenty plus ten equals thirty, and five plus five equals ten. Thirty plus ten equals forty.",
  },
  {
    subject: "math",
    topic: "addition",
    question: "What is 36 + 14?",
    choices: ["40", "45", "50", "55"],
    correctAnswer: "50",
    explanation:
      "The correct answer is 50. Add 36 and 10 first to get 46, then add the remaining 4 to get 50. Breaking numbers apart makes addition easier to solve mentally.",
  },
  {
    subject: "math",
    topic: "addition",
    question: "What is 48 + 12?",
    choices: ["50", "55", "60", "65"],
    correctAnswer: "60",
    explanation:
      "The correct answer is 60. Add 48 and 10 to get 58, then add 2 more to get 60. This shows how adding step by step can make the problem clearer.",
  },
  {
    subject: "math",
    topic: "addition",
    question: "What is 70 + 25?",
    choices: ["85", "90", "95", "100"],
    correctAnswer: "95",
    explanation:
      "The correct answer is 95. Add 70 and 20 first to get 90, then add the remaining 5 to get 95. Addition combines values to form a total.",
  },
  {
    subject: "math",
    topic: "addition",
    question: "What is 99 + 1?",
    choices: ["98", "99", "100", "101"],
    correctAnswer: "100",
    explanation:
      "The correct answer is 100. When you add 1 to 99, you move to the next number, which is 100. This is a simple example of adding one more to a number.",
  },
  {
    subject: "math",
    topic: "addition",
    question: "What is 150 + 50?",
    choices: ["100", "150", "200", "250"],
    correctAnswer: "200",
    explanation:
      "The correct answer is 200. Add 150 and 50 by thinking of 150 as one hundred fifty and adding fifty more. One hundred fifty plus fifty equals two hundred.",
  },
  {
    subject: "math",
    topic: "addition",
    question: "What is 7 + 6?",
    choices: ["11", "12", "13", "14"],
    correctAnswer: "13",
    explanation:
      "The correct answer is 13. One way to solve it is to make 10 first. Seven needs 3 to become 10, and 6 has 3 left after giving 3, so 10 plus 3 equals 13.",
  },
  {
    subject: "math",
    topic: "addition",
    question: "What is 45 + 45?",
    choices: ["80", "85", "90", "95"],
    correctAnswer: "90",
    explanation:
      "The correct answer is 90. You can double 45 to solve this. Forty plus forty equals eighty, and five plus five equals ten. Eighty plus ten equals ninety.",
  },
  {
    subject: "math",
    topic: "addition",
    question: "What is 300 + 250?",
    choices: ["450", "500", "550", "600"],
    correctAnswer: "550",
    explanation:
      "The correct answer is 550. Add hundreds and tens separately: 300 plus 200 equals 500, then add 50 more to get 550. This makes the addition easier to understand.",
  },

  // Math → Multiplication
  {
    subject: "math",
    topic: "multiplication",
    question: "What is 9 × 6?",
    choices: ["45", "54", "63", "72"],
    correctAnswer: "54",
    explanation:
      "The correct answer is 54. Multiplication is repeated addition. Nine times six means adding 9 six times: 9, 18, 27, 36, 45, and 54.",
  },
  {
    subject: "math",
    topic: "multiplication",
    question: "What is 5 × 8?",
    choices: ["35", "40", "45", "50"],
    correctAnswer: "40",
    explanation:
      "The correct answer is 40. Five times eight means five groups of eight or eight groups of five. Both ways give the same answer, which is 40.",
  },
  {
    subject: "math",
    topic: "multiplication",
    question: "What is 7 × 7?",
    choices: ["42", "45", "49", "56"],
    correctAnswer: "49",
    explanation:
      "The correct answer is 49. Seven times seven means adding 7 seven times. It is also a square fact because the same number is multiplied by itself.",
  },
  {
    subject: "math",
    topic: "multiplication",
    question: "What is 12 × 3?",
    choices: ["30", "33", "36", "39"],
    correctAnswer: "36",
    explanation:
      "The correct answer is 36. Twelve times three means 12 + 12 + 12. When you add them together, the total is 36.",
  },
  {
    subject: "math",
    topic: "multiplication",
    question: "What is 10 × 9?",
    choices: ["90", "99", "100", "109"],
    correctAnswer: "90",
    explanation:
      "The correct answer is 90. Multiplying by 10 is easy because you can place a zero after the number. Ten times nine equals ninety.",
  },
  {
    subject: "math",
    topic: "multiplication",
    question: "What is 4 × 11?",
    choices: ["40", "42", "44", "46"],
    correctAnswer: "44",
    explanation:
      "The correct answer is 44. Four times eleven means 11 + 11 + 11 + 11. Adding them gives 44.",
  },
  {
    subject: "math",
    topic: "multiplication",
    question: "What is 6 × 8?",
    choices: ["42", "46", "48", "54"],
    correctAnswer: "48",
    explanation:
      "The correct answer is 48. Six times eight means six groups of eight. Counting by eights gives 8, 16, 24, 32, 40, and 48.",
  },
  {
    subject: "math",
    topic: "multiplication",
    question: "What is 3 × 15?",
    choices: ["35", "40", "45", "50"],
    correctAnswer: "45",
    explanation:
      "The correct answer is 45. Three times fifteen means 15 + 15 + 15. Adding these numbers gives 45.",
  },
  {
    subject: "math",
    topic: "multiplication",
    question: "What is 2 × 25?",
    choices: ["25", "40", "50", "75"],
    correctAnswer: "50",
    explanation:
      "The correct answer is 50. Two times twenty-five means doubling 25. Twenty-five plus twenty-five equals fifty.",
  },
  {
    subject: "math",
    topic: "multiplication",
    question: "What is 0 × 100?",
    choices: ["0", "1", "100", "1000"],
    correctAnswer: "0",
    explanation:
      "The correct answer is 0. Any number multiplied by zero equals zero. This is because there are zero groups of the number.",
  },

  // Math → Division
  {
    subject: "math",
    topic: "division",
    question: "What is 100 divided by 4?",
    choices: ["20", "25", "30", "40"],
    correctAnswer: "25",
    explanation:
      "The correct answer is 25. Division means separating a number into equal groups. If 100 is divided into 4 equal groups, each group has 25.",
  },
  {
    subject: "math",
    topic: "division",
    question: "What is 36 divided by 6?",
    choices: ["4", "5", "6", "7"],
    correctAnswer: "6",
    explanation:
      "The correct answer is 6. Thirty-six divided by six asks how many groups of 6 are in 36. Since 6 times 6 equals 36, the answer is 6.",
  },
  {
    subject: "math",
    topic: "division",
    question: "What is 81 divided by 9?",
    choices: ["7", "8", "9", "10"],
    correctAnswer: "9",
    explanation:
      "The correct answer is 9. Division is the opposite of multiplication. Since 9 times 9 equals 81, 81 divided by 9 equals 9.",
  },
  {
    subject: "math",
    topic: "division",
    question: "What is 50 divided by 5?",
    choices: ["5", "10", "15", "20"],
    correctAnswer: "10",
    explanation:
      "The correct answer is 10. If 50 is divided into 5 equal groups, each group has 10. You can check this by multiplying 10 by 5 to get 50.",
  },
  {
    subject: "math",
    topic: "division",
    question: "What is 72 divided by 8?",
    choices: ["7", "8", "9", "10"],
    correctAnswer: "9",
    explanation:
      "The correct answer is 9. Since 8 times 9 equals 72, then 72 divided by 8 equals 9. Multiplication facts can help solve division problems.",
  },
  {
    subject: "math",
    topic: "division",
    question: "What is 64 divided by 8?",
    choices: ["6", "7", "8", "9"],
    correctAnswer: "8",
    explanation:
      "The correct answer is 8. Sixty-four divided by eight asks how many groups of 8 fit into 64. Since 8 times 8 equals 64, the answer is 8.",
  },
  {
    subject: "math",
    topic: "division",
    question: "What is 45 divided by 5?",
    choices: ["8", "9", "10", "11"],
    correctAnswer: "9",
    explanation:
      "The correct answer is 9. Since 5 times 9 equals 45, then 45 divided by 5 equals 9. Division and multiplication are closely related.",
  },
  {
    subject: "math",
    topic: "division",
    question: "What is 120 divided by 10?",
    choices: ["10", "11", "12", "20"],
    correctAnswer: "12",
    explanation:
      "The correct answer is 12. Dividing by 10 means finding how many tens are in the number. There are twelve tens in 120.",
  },
  {
    subject: "math",
    topic: "division",
    question: "What is 24 divided by 3?",
    choices: ["6", "7", "8", "9"],
    correctAnswer: "8",
    explanation:
      "The correct answer is 8. Twenty-four divided by three means making 3 equal groups from 24. Each group will have 8 because 8 times 3 equals 24.",
  },
  {
    subject: "math",
    topic: "division",
    question: "What is 90 divided by 9?",
    choices: ["9", "10", "11", "12"],
    correctAnswer: "10",
    explanation:
      "The correct answer is 10. Since 9 times 10 equals 90, then 90 divided by 9 equals 10. This shows how division checks can be done using multiplication.",
  },

  // Math → Fractions
  {
    subject: "math",
    topic: "fractions",
    question: "What does the denominator show in a fraction?",
    choices: [
      "The total number of equal parts",
      "The selected number of parts",
      "The answer only",
      "The operation sign",
    ],
    correctAnswer: "The total number of equal parts",
    explanation:
      "The correct answer is the total number of equal parts. In a fraction, the denominator is the bottom number and tells how many equal parts make up the whole.",
  },
  {
    subject: "math",
    topic: "fractions",
    question: "What does the numerator show in a fraction?",
    choices: [
      "The number of parts being considered",
      "The total number of equal parts",
      "The whole number only",
      "The divisor only",
    ],
    correctAnswer: "The number of parts being considered",
    explanation:
      "The correct answer is the number of parts being considered. The numerator is the top number in a fraction and tells how many parts are selected or counted.",
  },
  {
    subject: "math",
    topic: "fractions",
    question: "Which fraction means one half?",
    choices: ["1/2", "1/3", "2/3", "3/4"],
    correctAnswer: "1/2",
    explanation:
      "The correct answer is 1/2. One half means one out of two equal parts of a whole. If something is divided into two equal parts, each part is one half.",
  },
  {
    subject: "math",
    topic: "fractions",
    question: "Which fraction is equal to 2/4?",
    choices: ["1/2", "1/3", "3/4", "2/3"],
    correctAnswer: "1/2",
    explanation:
      "The correct answer is 1/2. The fraction 2/4 can be simplified by dividing both the numerator and denominator by 2. This gives 1/2.",
  },
  {
    subject: "math",
    topic: "fractions",
    question: "Which fraction is greater?",
    choices: ["3/4", "1/4", "2/4", "0/4"],
    correctAnswer: "3/4",
    explanation:
      "The correct answer is 3/4 because all the fractions have the same denominator, 4. When denominators are the same, the fraction with the larger numerator is greater.",
  },
  {
    subject: "math",
    topic: "fractions",
    question: "Which fraction is smaller?",
    choices: ["1/5", "2/5", "3/5", "4/5"],
    correctAnswer: "1/5",
    explanation:
      "The correct answer is 1/5 because all fractions have the same denominator. When denominators are the same, the smaller numerator means the smaller fraction.",
  },
  {
    subject: "math",
    topic: "fractions",
    question: "What is 1/4 + 1/4?",
    choices: ["1/4", "2/4", "3/4", "4/4"],
    correctAnswer: "2/4",
    explanation:
      "The correct answer is 2/4. When adding fractions with the same denominator, add only the numerators and keep the denominator the same. One fourth plus one fourth equals two fourths.",
  },
  {
    subject: "math",
    topic: "fractions",
    question: "What is 2/5 + 1/5?",
    choices: ["1/5", "2/5", "3/5", "5/5"],
    correctAnswer: "3/5",
    explanation:
      "The correct answer is 3/5. The denominators are the same, so add the numerators: 2 plus 1 equals 3. The denominator stays 5.",
  },
  {
    subject: "math",
    topic: "fractions",
    question: "Which fraction represents a whole?",
    choices: ["4/4", "1/4", "2/4", "3/4"],
    correctAnswer: "4/4",
    explanation:
      "The correct answer is 4/4 because it means all four parts out of four equal parts are taken. When the numerator and denominator are the same, the fraction equals one whole.",
  },
  {
    subject: "math",
    topic: "fractions",
    question: "Which is a proper fraction?",
    choices: ["3/4", "5/4", "6/5", "8/3"],
    correctAnswer: "3/4",
    explanation:
      "The correct answer is 3/4 because a proper fraction has a numerator smaller than the denominator. The other choices have numerators greater than their denominators, so they are improper fractions.",
  },

  // Math → Geometry
  {
    subject: "math",
    topic: "geometry",
    question: "How many sides does a triangle have?",
    choices: ["2", "3", "4", "5"],
    correctAnswer: "3",
    explanation:
      "The correct answer is 3. A triangle is a polygon with three sides and three angles. The word tri also suggests three.",
  },
  {
    subject: "math",
    topic: "geometry",
    question: "How many sides does a square have?",
    choices: ["3", "4", "5", "6"],
    correctAnswer: "4",
    explanation:
      "The correct answer is 4. A square has four equal sides and four corners. It is a special type of quadrilateral.",
  },
  {
    subject: "math",
    topic: "geometry",
    question: "Which shape has no corners?",
    choices: ["Circle", "Square", "Triangle", "Rectangle"],
    correctAnswer: "Circle",
    explanation:
      "The correct answer is Circle because a circle is round and has no corners or sides. Squares, triangles, and rectangles all have corners.",
  },
  {
    subject: "math",
    topic: "geometry",
    question: "Which shape has four equal sides?",
    choices: ["Square", "Rectangle", "Triangle", "Circle"],
    correctAnswer: "Square",
    explanation:
      "The correct answer is Square because all four sides of a square are equal. A rectangle has opposite sides equal, but not always all four sides.",
  },
  {
    subject: "math",
    topic: "geometry",
    question: "What do we call a shape with five sides?",
    choices: ["Pentagon", "Triangle", "Hexagon", "Octagon"],
    correctAnswer: "Pentagon",
    explanation:
      "The correct answer is Pentagon. A pentagon is a polygon with five sides. The prefix penta means five.",
  },
  {
    subject: "math",
    topic: "geometry",
    question: "What do we call a shape with six sides?",
    choices: ["Hexagon", "Pentagon", "Triangle", "Square"],
    correctAnswer: "Hexagon",
    explanation:
      "The correct answer is Hexagon. A hexagon is a polygon with six sides. The prefix hexa means six.",
  },
  {
    subject: "math",
    topic: "geometry",
    question: "Which shape is usually like a door?",
    choices: ["Rectangle", "Circle", "Triangle", "Pentagon"],
    correctAnswer: "Rectangle",
    explanation:
      "The correct answer is Rectangle because doors are usually shaped like rectangles. A rectangle has four sides, with opposite sides equal.",
  },
  {
    subject: "math",
    topic: "geometry",
    question: "How many angles does a triangle have?",
    choices: ["2", "3", "4", "5"],
    correctAnswer: "3",
    explanation:
      "The correct answer is 3. A triangle has three sides and three angles. Each corner of a triangle forms an angle.",
  },
  {
    subject: "math",
    topic: "geometry",
    question: "Which of the following is a 3D shape?",
    choices: ["Cube", "Circle", "Triangle", "Square"],
    correctAnswer: "Cube",
    explanation:
      "The correct answer is Cube because it is a three-dimensional shape with length, width, and height. Circle, triangle, and square are flat two-dimensional shapes.",
  },
  {
    subject: "math",
    topic: "geometry",
    question: "Which 3D shape looks like a ball?",
    choices: ["Sphere", "Cube", "Cone", "Cylinder"],
    correctAnswer: "Sphere",
    explanation:
      "The correct answer is Sphere because a sphere is round like a ball. A cube looks like a box, a cone looks like an ice cream cone, and a cylinder looks like a can.",
  },
    // History → Philippine Heroes
  {
    subject: "history",
    topic: "philippine-heroes",
    question: "Who is widely recognized as the national hero of the Philippines?",
    choices: ["Jose Rizal", "Andres Bonifacio", "Emilio Aguinaldo", "Apolinario Mabini"],
    correctAnswer: "Jose Rizal",
    explanation:
      "The correct answer is Jose Rizal. He is widely recognized as the national hero of the Philippines because of his writings, peaceful reform efforts, and strong love for the country. His novels inspired many Filipinos to value freedom, education, and national identity.",
  },
  {
    subject: "history",
    topic: "philippine-heroes",
    question: "Who is known as the Father of the Philippine Revolution?",
    choices: ["Andres Bonifacio", "Jose Rizal", "Manuel Quezon", "Antonio Luna"],
    correctAnswer: "Andres Bonifacio",
    explanation:
      "The correct answer is Andres Bonifacio. He is known as the Father of the Philippine Revolution because he helped establish and lead the Katipunan. His leadership encouraged Filipinos to fight for freedom from Spanish colonial rule.",
  },
  {
    subject: "history",
    topic: "philippine-heroes",
    question: "Who is known as the Sublime Paralytic?",
    choices: ["Apolinario Mabini", "Jose Rizal", "Emilio Jacinto", "Gregorio del Pilar"],
    correctAnswer: "Apolinario Mabini",
    explanation:
      "The correct answer is Apolinario Mabini. He is called the Sublime Paralytic because despite his physical disability, he became a brilliant adviser and thinker during the Philippine Revolution. His intelligence and principles made him an important figure in Philippine history.",
  },
  {
    subject: "history",
    topic: "philippine-heroes",
    question: "Who is known as the Brains of the Katipunan?",
    choices: ["Emilio Jacinto", "Jose Rizal", "Marcelo H. del Pilar", "Emilio Aguinaldo"],
    correctAnswer: "Emilio Jacinto",
    explanation:
      "The correct answer is Emilio Jacinto. He is known as the Brains of the Katipunan because of his writings and ideas that guided the organization. He helped explain the values and goals of the Katipunan to its members.",
  },
  {
    subject: "history",
    topic: "philippine-heroes",
    question: "Who was a young general known as the Hero of Tirad Pass?",
    choices: ["Gregorio del Pilar", "Antonio Luna", "Emilio Aguinaldo", "Jose Rizal"],
    correctAnswer: "Gregorio del Pilar",
    explanation:
      "The correct answer is Gregorio del Pilar. He is remembered as the Hero of Tirad Pass because he bravely defended the pass during the Philippine-American War. His courage made him one of the most remembered young heroes in Philippine history.",
  },
  {
    subject: "history",
    topic: "philippine-heroes",
    question: "Who was a Filipino general known for his discipline and military leadership?",
    choices: ["Antonio Luna", "Jose Rizal", "Apolinario Mabini", "Melchora Aquino"],
    correctAnswer: "Antonio Luna",
    explanation:
      "The correct answer is Antonio Luna. He was known for his strong discipline, military knowledge, and leadership during the Philippine-American War. He wanted a well-organized army to defend the country.",
  },
  {
    subject: "history",
    topic: "philippine-heroes",
    question: "Who is known as the Mother of the Katipunan?",
    choices: ["Melchora Aquino", "Gabriela Silang", "Tandang Sora", "Both Melchora Aquino and Tandang Sora"],
    correctAnswer: "Both Melchora Aquino and Tandang Sora",
    explanation:
      "The correct answer is Both Melchora Aquino and Tandang Sora because Melchora Aquino is also popularly known as Tandang Sora. She helped Katipuneros by giving them food, shelter, and care, which is why she is remembered as the Mother of the Katipunan.",
  },
  {
    subject: "history",
    topic: "philippine-heroes",
    question: "Who was a woman hero who fought against Spanish rule in Ilocos?",
    choices: ["Gabriela Silang", "Melchora Aquino", "Corazon Aquino", "Teodora Alonzo"],
    correctAnswer: "Gabriela Silang",
    explanation:
      "The correct answer is Gabriela Silang. She is remembered as a brave woman who continued the fight against Spanish rule after her husband Diego Silang. Her courage made her an important symbol of resistance.",
  },
  {
    subject: "history",
    topic: "philippine-heroes",
    question: "Who was Jose Rizal's mother?",
    choices: ["Teodora Alonzo", "Gabriela Silang", "Melchora Aquino", "Trinidad Tecson"],
    correctAnswer: "Teodora Alonzo",
    explanation:
      "The correct answer is Teodora Alonzo. She was the mother of Jose Rizal and played an important role in his early education. Rizal learned discipline, faith, and love for learning from his family.",
  },
  {
    subject: "history",
    topic: "philippine-heroes",
    question: "Why are heroes important in Philippine history?",
    choices: [
      "They remind Filipinos of courage and love for the country",
      "They only appear in old books",
      "They made history less important",
      "They stopped people from learning",
    ],
    correctAnswer: "They remind Filipinos of courage and love for the country",
    explanation:
      "The correct answer is that heroes remind Filipinos of courage and love for the country. Their sacrifices and actions help people understand the value of freedom, responsibility, and national identity.",
  },

  // History → Jose Rizal
  {
    subject: "history",
    topic: "jose-rizal",
    question: "What is the full name of Jose Rizal?",
    choices: [
      "Jose Protasio Rizal Mercado y Alonso Realonda",
      "Jose Andres Rizal Bonifacio",
      "Jose Emilio Rizal Aguinaldo",
      "Jose Marcelo Rizal del Pilar",
    ],
    correctAnswer: "Jose Protasio Rizal Mercado y Alonso Realonda",
    explanation:
      "The correct answer is Jose Protasio Rizal Mercado y Alonso Realonda. This was Rizal's full name. He is one of the most important figures in Philippine history because his writings helped awaken Filipino nationalism.",
  },
  {
    subject: "history",
    topic: "jose-rizal",
    question: "Where was Jose Rizal born?",
    choices: ["Calamba, Laguna", "Kawit, Cavite", "Tondo, Manila", "Malolos, Bulacan"],
    correctAnswer: "Calamba, Laguna",
    explanation:
      "The correct answer is Calamba, Laguna. Jose Rizal was born in Calamba on June 19, 1861. His early life in Laguna helped shape his love for family, education, and country.",
  },
  {
    subject: "history",
    topic: "jose-rizal",
    question: "What novel did Jose Rizal write that exposed abuses during Spanish rule?",
    choices: ["Noli Me Tangere", "Florante at Laura", "Ibong Adarna", "Urbana at Felisa"],
    correctAnswer: "Noli Me Tangere",
    explanation:
      "The correct answer is Noli Me Tangere. This novel showed many problems in society during Spanish colonial rule. It helped Filipinos become more aware of injustice and the need for reform.",
  },
  {
    subject: "history",
    topic: "jose-rizal",
    question: "What is the sequel to Noli Me Tangere?",
    choices: ["El Filibusterismo", "Mi Ultimo Adios", "La Solidaridad", "Kartilya"],
    correctAnswer: "El Filibusterismo",
    explanation:
      "The correct answer is El Filibusterismo. It is the sequel to Noli Me Tangere and presents a darker view of society and reform. Both novels became powerful symbols of Filipino nationalism.",
  },
  {
    subject: "history",
    topic: "jose-rizal",
    question: "What poem did Jose Rizal write before his death?",
    choices: ["Mi Ultimo Adios", "Sa Aking mga Kabata", "Florante at Laura", "Pag-ibig sa Tinubuang Lupa"],
    correctAnswer: "Mi Ultimo Adios",
    explanation:
      "The correct answer is Mi Ultimo Adios. Rizal wrote this poem before his execution. It expresses his love for the Philippines and his willingness to give his life for the country.",
  },
  {
    subject: "history",
    topic: "jose-rizal",
    question: "Where was Jose Rizal executed?",
    choices: ["Bagumbayan", "Kawit", "Malolos", "Cebu"],
    correctAnswer: "Bagumbayan",
    explanation:
      "The correct answer is Bagumbayan, now known as Luneta or Rizal Park. Rizal was executed there on December 30, 1896. His death strengthened Filipino nationalism and inspired the revolution.",
  },
  {
    subject: "history",
    topic: "jose-rizal",
    question: "What organization did Jose Rizal found in 1892?",
    choices: ["La Liga Filipina", "Katipunan", "Malolos Congress", "Philippine Assembly"],
    correctAnswer: "La Liga Filipina",
    explanation:
      "The correct answer is La Liga Filipina. Rizal founded it to promote reforms, unity, education, and mutual help among Filipinos. Although it did not last long, it influenced later nationalist movements.",
  },
  {
    subject: "history",
    topic: "jose-rizal",
    question: "What was Jose Rizal's profession?",
    choices: ["Doctor", "Farmer only", "Soldier only", "Painter only"],
    correctAnswer: "Doctor",
    explanation:
      "The correct answer is Doctor. Rizal studied medicine and became an eye doctor. He wanted to help cure his mother's eye condition and also used his education to serve others.",
  },
  {
    subject: "history",
    topic: "jose-rizal",
    question: "Why did Rizal write novels?",
    choices: [
      "To expose social problems and inspire reform",
      "To entertain Spanish officials only",
      "To avoid studying",
      "To become a soldier",
    ],
    correctAnswer: "To expose social problems and inspire reform",
    explanation:
      "The correct answer is to expose social problems and inspire reform. Rizal used writing as a peaceful way to show injustice and awaken the minds of Filipinos. His works encouraged people to think about freedom and dignity.",
  },
  {
    subject: "history",
    topic: "jose-rizal",
    question: "When is Rizal Day observed in the Philippines?",
    choices: ["December 30", "June 12", "August 21", "November 30"],
    correctAnswer: "December 30",
    explanation:
      "The correct answer is December 30. Rizal Day is observed every year to remember Jose Rizal's execution and his contributions to the Philippines. It is a day to honor his patriotism and sacrifice.",
  },

  // History → Katipunan
  {
    subject: "history",
    topic: "katipunan",
    question: "What organization did Andres Bonifacio help establish?",
    choices: ["Katipunan", "La Liga Filipina", "Malolos Congress", "Propaganda Movement"],
    correctAnswer: "Katipunan",
    explanation:
      "The correct answer is Katipunan. The Katipunan was a secret revolutionary organization that aimed to free the Philippines from Spanish colonial rule. Andres Bonifacio was one of its founders and leaders.",
  },
  {
    subject: "history",
    topic: "katipunan",
    question: "What was the main goal of the Katipunan?",
    choices: [
      "To gain Philippine independence",
      "To promote Spanish rule",
      "To stop Filipino education",
      "To build more churches",
    ],
    correctAnswer: "To gain Philippine independence",
    explanation:
      "The correct answer is to gain Philippine independence. The Katipunan was formed because many Filipinos wanted freedom from Spanish colonial rule. Its members believed that the country deserved self-government.",
  },
  {
    subject: "history",
    topic: "katipunan",
    question: "What does KKK stand for in Philippine history?",
    choices: [
      "Kataas-taasan, Kagalang-galangang Katipunan ng mga Anak ng Bayan",
      "Kapisanan ng Kabataang Kristiyano",
      "Kilusan ng Kalayaan at Katarungan",
      "Kongreso ng Katutubong Kabataan",
    ],
    correctAnswer: "Kataas-taasan, Kagalang-galangang Katipunan ng mga Anak ng Bayan",
    explanation:
      "The correct answer is Kataas-taasan, Kagalang-galangang Katipunan ng mga Anak ng Bayan. This was the full name of the Katipunan. It was a revolutionary society that fought for Philippine independence.",
  },
  {
    subject: "history",
    topic: "katipunan",
    question: "Why was the Katipunan formed secretly?",
    choices: [
      "Because it opposed Spanish rule",
      "Because it was a sports club",
      "Because it sold books",
      "Because it was only for teachers",
    ],
    correctAnswer: "Because it opposed Spanish rule",
    explanation:
      "The correct answer is because it opposed Spanish rule. The Katipunan had to operate secretly because its goal was to fight for independence. If Spanish authorities discovered its members, they could be punished or arrested.",
  },
  {
    subject: "history",
    topic: "katipunan",
    question: "Who is known as the Father of the Katipunan?",
    choices: ["Andres Bonifacio", "Jose Rizal", "Emilio Aguinaldo", "Apolinario Mabini"],
    correctAnswer: "Andres Bonifacio",
    explanation:
      "The correct answer is Andres Bonifacio. He is known as the Father of the Katipunan because he helped establish and lead the organization. He played a major role in starting the Philippine Revolution.",
  },
  {
    subject: "history",
    topic: "katipunan",
    question: "Who is known as the Brains of the Katipunan?",
    choices: ["Emilio Jacinto", "Andres Bonifacio", "Jose Rizal", "Antonio Luna"],
    correctAnswer: "Emilio Jacinto",
    explanation:
      "The correct answer is Emilio Jacinto. He helped write important teachings and ideas of the Katipunan. His works guided members in understanding the purpose and values of the organization.",
  },
  {
    subject: "history",
    topic: "katipunan",
    question: "What document contained the teachings of the Katipunan?",
    choices: ["Kartilya ng Katipunan", "Noli Me Tangere", "Mi Ultimo Adios", "Malolos Constitution"],
    correctAnswer: "Kartilya ng Katipunan",
    explanation:
      "The correct answer is Kartilya ng Katipunan. It served as a guidebook for Katipunan members. It taught values such as love of country, equality, respect, and good character.",
  },
  {
    subject: "history",
    topic: "katipunan",
    question: "What event revealed the existence of the Katipunan?",
    choices: ["Cry of Pugad Lawin", "Battle of Mactan", "EDSA Revolution", "Declaration of Independence"],
    correctAnswer: "Cry of Pugad Lawin",
    explanation:
      "The correct answer is Cry of Pugad Lawin. It is associated with the beginning of the Philippine Revolution, when Katipunan members showed their decision to fight Spanish rule.",
  },
  {
    subject: "history",
    topic: "katipunan",
    question: "What did Katipunan members tear as a symbol of rebellion?",
    choices: ["Cedulas", "Books", "Flags", "Coins"],
    correctAnswer: "Cedulas",
    explanation:
      "The correct answer is Cedulas. Katipunan members tore their cedulas as a symbol that they were rejecting Spanish authority. This act showed their commitment to fight for freedom.",
  },
  {
    subject: "history",
    topic: "katipunan",
    question: "Why is the Katipunan important in Philippine history?",
    choices: [
      "It helped start the fight for independence",
      "It stopped all learning",
      "It supported colonial abuse",
      "It removed Filipino identity",
    ],
    correctAnswer: "It helped start the fight for independence",
    explanation:
      "The correct answer is that it helped start the fight for independence. The Katipunan united many Filipinos who wanted freedom and played a major role in the Philippine Revolution.",
  },

  // History → Philippine Independence
  {
    subject: "history",
    topic: "philippine-independence",
    question: "When did the Philippines declare independence from Spain?",
    choices: ["June 12, 1898", "July 4, 1946", "December 30, 1896", "August 21, 1983"],
    correctAnswer: "June 12, 1898",
    explanation:
      "The correct answer is June 12, 1898. This was the date when Philippine independence from Spain was proclaimed in Kawit, Cavite. It is now celebrated every year as Philippine Independence Day.",
  },
  {
    subject: "history",
    topic: "philippine-independence",
    question: "Where was Philippine independence declared in 1898?",
    choices: ["Kawit, Cavite", "Calamba, Laguna", "Malolos, Bulacan", "Tondo, Manila"],
    correctAnswer: "Kawit, Cavite",
    explanation:
      "The correct answer is Kawit, Cavite. Philippine independence was proclaimed at the home of Emilio Aguinaldo. This event became one of the most important moments in Philippine history.",
  },
  {
    subject: "history",
    topic: "philippine-independence",
    question: "Who proclaimed Philippine independence on June 12, 1898?",
    choices: ["Emilio Aguinaldo", "Jose Rizal", "Andres Bonifacio", "Manuel Quezon"],
    correctAnswer: "Emilio Aguinaldo",
    explanation:
      "The correct answer is Emilio Aguinaldo. He proclaimed Philippine independence from Spain in Kawit, Cavite. He later became the first president of the First Philippine Republic.",
  },
  {
    subject: "history",
    topic: "philippine-independence",
    question: "What is celebrated every June 12 in the Philippines?",
    choices: ["Independence Day", "Rizal Day", "Bonifacio Day", "Labor Day"],
    correctAnswer: "Independence Day",
    explanation:
      "The correct answer is Independence Day. It is celebrated every June 12 to remember the declaration of Philippine independence from Spain in 1898.",
  },
  {
    subject: "history",
    topic: "philippine-independence",
    question: "What national symbol was displayed during the declaration of independence?",
    choices: ["Philippine flag", "Spanish flag", "American flag", "Japanese flag"],
    correctAnswer: "Philippine flag",
    explanation:
      "The correct answer is Philippine flag. The Philippine flag was displayed during the declaration of independence, symbolizing the identity and freedom of the Filipino people.",
  },
  {
    subject: "history",
    topic: "philippine-independence",
    question: "What song was played during the declaration of independence and later became the national anthem?",
    choices: ["Lupang Hinirang", "Bayan Ko", "Pilipinas Kong Mahal", "Ako ay Pilipino"],
    correctAnswer: "Lupang Hinirang",
    explanation:
      "The correct answer is Lupang Hinirang. It was played during the declaration of independence and later became the national anthem of the Philippines.",
  },
  {
    subject: "history",
    topic: "philippine-independence",
    question: "What country was the Philippines declaring independence from in 1898?",
    choices: ["Spain", "United States", "Japan", "China"],
    correctAnswer: "Spain",
    explanation:
      "The correct answer is Spain. The declaration of independence in 1898 was from Spanish colonial rule, which had lasted for more than three hundred years.",
  },
  {
    subject: "history",
    topic: "philippine-independence",
    question: "Why is Independence Day important?",
    choices: [
      "It reminds Filipinos of freedom and national identity",
      "It marks the start of school vacation only",
      "It celebrates foreign control",
      "It remembers the end of learning",
    ],
    correctAnswer: "It reminds Filipinos of freedom and national identity",
    explanation:
      "The correct answer is that it reminds Filipinos of freedom and national identity. Independence Day honors the courage and sacrifices of people who worked for the country's freedom.",
  },
  {
    subject: "history",
    topic: "philippine-independence",
    question: "Who designed the Philippine flag?",
    choices: ["Emilio Aguinaldo", "Marcela Agoncillo", "Jose Rizal", "Andres Bonifacio"],
    correctAnswer: "Marcela Agoncillo",
    explanation:
      "The correct answer is Marcela Agoncillo. She is known for sewing the first Philippine flag, with the help of others. The flag became a powerful symbol of Filipino independence.",
  },
  {
    subject: "history",
    topic: "philippine-independence",
    question: "What does independence mean?",
    choices: [
      "Freedom to govern oneself",
      "Being controlled by another country",
      "Stopping education",
      "Losing national identity",
    ],
    correctAnswer: "Freedom to govern oneself",
    explanation:
      "The correct answer is freedom to govern oneself. Independence means a country has the right to make its own decisions and manage its own government without being controlled by another country.",
  },

  // History → Philippine Presidents
  {
    subject: "history",
    topic: "philippine-presidents",
    question: "Who was the first president of the Philippines?",
    choices: ["Emilio Aguinaldo", "Manuel Quezon", "Jose Rizal", "Ferdinand Marcos"],
    correctAnswer: "Emilio Aguinaldo",
    explanation:
      "The correct answer is Emilio Aguinaldo. He became the first president of the First Philippine Republic. He also played an important role in the declaration of Philippine independence.",
  },
  {
    subject: "history",
    topic: "philippine-presidents",
    question: "Who was the first president of the Commonwealth of the Philippines?",
    choices: ["Manuel Quezon", "Emilio Aguinaldo", "Manuel Roxas", "Sergio Osmeña"],
    correctAnswer: "Manuel Quezon",
    explanation:
      "The correct answer is Manuel Quezon. He was the first president of the Commonwealth of the Philippines. He is also remembered for promoting the development of a national language.",
  },
  {
    subject: "history",
    topic: "philippine-presidents",
    question: "Who became president after Manuel Quezon?",
    choices: ["Sergio Osmeña", "Manuel Roxas", "Elpidio Quirino", "Ramon Magsaysay"],
    correctAnswer: "Sergio Osmeña",
    explanation:
      "The correct answer is Sergio Osmeña. He became president after Manuel Quezon. Osmeña served during a difficult period near the end of World War II.",
  },
  {
    subject: "history",
    topic: "philippine-presidents",
    question: "Who was the first president of the Third Republic of the Philippines?",
    choices: ["Manuel Roxas", "Manuel Quezon", "Emilio Aguinaldo", "Carlos Garcia"],
    correctAnswer: "Manuel Roxas",
    explanation:
      "The correct answer is Manuel Roxas. He became the first president of the Third Republic after the Philippines gained independence from the United States in 1946.",
  },
  {
    subject: "history",
    topic: "philippine-presidents",
    question: "Which president was known as the Champion of the Masses?",
    choices: ["Ramon Magsaysay", "Ferdinand Marcos", "Diosdado Macapagal", "Carlos Garcia"],
    correctAnswer: "Ramon Magsaysay",
    explanation:
      "The correct answer is Ramon Magsaysay. He was called the Champion of the Masses because he was known for being close to ordinary people and for promoting honest public service.",
  },
  {
    subject: "history",
    topic: "philippine-presidents",
    question: "Which president moved the celebration of Independence Day to June 12?",
    choices: ["Diosdado Macapagal", "Manuel Quezon", "Emilio Aguinaldo", "Ramon Magsaysay"],
    correctAnswer: "Diosdado Macapagal",
    explanation:
      "The correct answer is Diosdado Macapagal. He moved the official celebration of Philippine Independence Day from July 4 to June 12 to honor the 1898 declaration of independence from Spain.",
  },
  {
    subject: "history",
    topic: "philippine-presidents",
    question: "Who was the first female president of the Philippines?",
    choices: ["Corazon Aquino", "Gloria Macapagal Arroyo", "Imelda Marcos", "Leni Robredo"],
    correctAnswer: "Corazon Aquino",
    explanation:
      "The correct answer is Corazon Aquino. She became the first female president of the Philippines after the 1986 People Power Revolution. Her presidency became a symbol of the return of democracy.",
  },
  {
    subject: "history",
    topic: "philippine-presidents",
    question: "Who was president during the declaration of Martial Law in 1972?",
    choices: ["Ferdinand Marcos", "Corazon Aquino", "Ramon Magsaysay", "Manuel Roxas"],
    correctAnswer: "Ferdinand Marcos",
    explanation:
      "The correct answer is Ferdinand Marcos. Martial Law was declared in 1972 during his presidency. This period is important in Philippine history because it affected government, rights, and society.",
  },
  {
    subject: "history",
    topic: "philippine-presidents",
    question: "Who was the second female president of the Philippines?",
    choices: ["Gloria Macapagal Arroyo", "Corazon Aquino", "Miriam Defensor Santiago", "Imelda Marcos"],
    correctAnswer: "Gloria Macapagal Arroyo",
    explanation:
      "The correct answer is Gloria Macapagal Arroyo. She became the second female president of the Philippines. She is also the daughter of former president Diosdado Macapagal.",
  },
  {
    subject: "history",
    topic: "philippine-presidents",
    question: "What is the main role of the president?",
    choices: [
      "To lead the country and enforce laws",
      "To replace all teachers",
      "To stop public service",
      "To remove the constitution",
    ],
    correctAnswer: "To lead the country and enforce laws",
    explanation:
      "The correct answer is to lead the country and enforce laws. The president is the head of the executive branch and has the duty to serve the people, lead the government, and protect the country’s interests.",
  },
];