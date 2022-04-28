/* LEVEL 1 */
//Questions
const levelOneQuestions = [
  {
    sound: musicalNotes.CFlat,
    question: "Press the musical note Cb",
    answer: "J",
  },
  {
    sound: musicalNotes.C,
    question: "Press the musical note C",
    answer: "A",
  },
  {
    sound: musicalNotes.CSharp,
    question: "Press the musical note C#",
    answer: "W",
  },
  {
    sound: musicalNotes.DFlat,
    question: "Press the musical note Db",
    answer: "W",
  },
  {
    sound: musicalNotes.D,
    question: "Press the musical note D",
    answer: "S",
  },
  {
    sound: musicalNotes.DSharp,
    question: "Press the musical note D#",
    answer: "E",
  },
  {
    sound: musicalNotes.EFlat,
    question: "Press the musical note Eb",
    answer: "E",
  },
  {
    sound: musicalNotes.E,
    question: "Press the musical note E",
    answer: "D",
  },
  {
    sound: musicalNotes.ESharp,
    question: "Press the musical note E#",
    answer: "F",
  },
  {
    sound: musicalNotes.FFlat,
    question: "Press the musical note Fb",
    answer: "D",
  },
  {
    sound: musicalNotes.F,
    question: "Press the musical note F",
    answer: "F",
  },
  {
    sound: musicalNotes.FSharp,
    question: "Press the musical note F#",
    answer: "T",
  },
  {
    sound: musicalNotes.GFlat,
    question: "Press the musical note Gb",
    answer: "T",
  },
  {
    sound: musicalNotes.G,
    question: "Press the musical note G",
    answer: "G",
  },
  {
    sound: musicalNotes.GSharp,
    question: "Press the musical note G#",
    answer: "Y",
  },
  {
    sound: musicalNotes.AFlat,
    question: "Press the musical note Ab",
    answer: "Y",
  },
  {
    sound: musicalNotes.A,
    question: "Press the musical note A",
    answer: "H",
  },
  {
    sound: musicalNotes.ASharp,
    question: "Press the musical note A#",
    answer: "U",
  },
  {
    sound: musicalNotes.BFlat,
    question: "Press the musical note Bb",
    answer: "U",
  },
  {
    sound: musicalNotes.B,
    question: "Press the musical note B",
    answer: "J",
  },
  {
    sound: musicalNotes.BSharp,
    question: "Press the musical note B#",
    answer: "A",
  },
];

//sounds

/* LEVEL TWO */

const levelTwoQuestions = [
  {
    sound: musicalNotes.AFlat,
    question: "Press the perfect fifth of the musical note Cb",
    answer: "T",
  },
  {
    sound: musicalNotes.G,
    question: "Press the perfect fifth of the musical note C",
    answer: "G",
  },
  {
    sound: musicalNotes.GSharp,
    question: "Press the perfect fifth of the musical note C#",
    answer: "Y",
  },
  {
    sound: musicalNotes.AFlat,
    question: "Press the perfect fifth of the musical note Db",
    answer: "Y",
  },
  {
    sound: musicalNotes.A,
    question: "Press the perfect fifth of the musical note D",
    answer: "H",
  },
  {
    sound: musicalNotes.ASharp,
    question: "Press the perfect fifth of the musical note D#",
    answer: "U",
  },
  {
    sound: musicalNotes.BFlat,
    question: "Press the perfect fifth of the musical note Eb",
    answer: "U",
  },
  {
    sound: musicalNotes.B,
    question: "Press the perfect fifth of the musical note E",
    answer: "J",
  },
  {
    sound: musicalNotes.C,
    question: "Press the perfect fifth of the musical note F",
    answer: "A",
  },
  {
    sound: musicalNotes.CSharp,
    question: "Press the perfect fifth of the musical note F#",
    answer: "W",
  },
  {
    sound: musicalNotes.DFlat,
    question: "Press the perfect fifth of the musical note Gb",
    answer: "W",
  },
  {
    sound: musicalNotes.D,
    question: "Press the perfect fifth of the musical note G",
    answer: "S",
  },
  {
    sound: musicalNotes.DSharp,
    question: "Press the perfect fifth of the musical note G#",
    answer: "E",
  },
  {
    sound: musicalNotes.EFlat,
    question: "Press the perfect fifth of the musical note Ab",
    answer: "E",
  },
  {
    sound: musicalNotes.E,
    question: "Press the perfect fifth of the musical note A",
    answer: "D",
  },
  {
    sound: musicalNotes.F,
    question: "Press the perfect fifth of the musical note A#",
    answer: "F",
  },
  {
    sound: musicalNotes.F,
    question: "Press the perfect fifth of the musical note Bb",
    answer: "F",
  },
  {
    sound: musicalNotes.FSharp,
    question: "Press the perfect fifth of the musical note B",
    answer: "T",
  },
];

/* LEVEL THREE */
const levelThreeQuestions = [
  {
    sound: chordsCMajorScale.CMajor,
    question: "C Major",
    answer: ["KeyA", "KeyD", "KeyG"],
  },
  {
    sound: chordsCMajorScale.Dminor,
    question: "D minor",
    answer: ["KeyS", "KeyF", "KeyH"],
  },
  {
    sound: chordsCMajorScale.Eminor,
    question: "E minor",
    answer: ["KeyD", "KeyG", "KeyJ"],
  },
  {
    sound: chordsCMajorScale.FMajor,
    question: "F Major",
    answer: ["KeyF", "KeyH", "KeyA"],
  },
  {
    sound: chordsCMajorScale.GMajor,
    question: "G Major",
    answer: ["KeyG", "KeyJ", "KeyS"],
  },
  {
    sound: chordsCMajorScale.Aminor,
    question: "A minor",
    answer: ["KeyH", "KeyA", "KeyD"],
  },
  {
    sound: chordsCMajorScale.Bdiminished,
    question: "B diminished",
    answer: ["KeyJ", "KeyS", "KeyF"],
  },
];

/* LEVEL FOUR */
const levelFourQuestions = [
  {
    sound: musicalNotes.CFlat,
    question: "What note is this?",
    answer: "J",
  },
  { sound: musicalNotes.C, question: "What note is this?", answer: "A" },
  {
    sound: musicalNotes.CSharp,
    question: "What note is this?",
    answer: "W",
  },
  {
    sound: musicalNotes.DFlat,
    question: "What note is this?",
    answer: "W",
  },
  { sound: musicalNotes.D, question: "What note is this?", answer: "S" },
  {
    sound: musicalNotes.DSharp,
    question: "What note is this?",
    answer: "E",
  },
  {
    sound: musicalNotes.EFlat,
    question: "What note is this?",
    answer: "E",
  },
  {
    sound: musicalNotes.E,
    question: "Press the musical note E",
    answer: "D",
  },
  {
    sound: musicalNotes.ESharp,
    question: "What note is this?",
    answer: "F",
  },
  {
    sound: musicalNotes.FFlat,
    question: "What note is this?",
    answer: "D",
  },
  {
    sound: musicalNotes.F,
    question: "Press the musical note F",
    answer: "F",
  },
  {
    sound: musicalNotes.FSharp,
    question: "What note is this?",
    answer: "T",
  },
  {
    sound: musicalNotes.GFlat,
    question: "What note is this?",
    answer: "T",
  },
  { sound: musicalNotes.G, question: "What note is this?", answer: "G" },
  {
    sound: musicalNotes.GSharp,
    question: "What note is this?",
    answer: "Y",
  },
  {
    sound: musicalNotes.AFlat,
    question: "What note is this?",
    answer: "Y",
  },
  { sound: musicalNotes.A, question: "What note is this?", answer: "H" },
  {
    sound: musicalNotes.ASharp,
    question: "What note is this?",
    answer: "U",
  },
  {
    sound: musicalNotes.BFlat,
    question: "What note is this?",
    answer: "U",
  },
  { sound: musicalNotes.B, question: "What note is this?", answer: "J" },
  {
    sound: musicalNotes.BSharp,
    question: "What note is this?",
    answer: "A",
  },
];
