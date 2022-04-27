/* LEVEL 1 */
//Questions
const levelOneQuestions = [
  {
    sound: musicalNotes.CFlat.play(),
    question: "Press the musical note Cb",
    answer: "J",
  },
  { sound: musicalNotes.C, question: "Press the musical note C", answer: "A" },
  {
    sound: musicalNotes.CSharp.play(),
    question: "Press the musical note C#",
    answer: "W",
  },
  {
    sound: musicalNotes.DFlat.play(),
    question: "Press the musical note Db",
    answer: "W",
  },
  {
    sound: musicalNotes.D.play(),
    question: "Press the musical note D",
    answer: "S",
  },
  {
    sound: musicalNotes.DSharp.play(),
    question: "Press the musical note D#",
    answer: "E",
  },
  {
    sound: musicalNotes.EFlat.play(),
    question: "Press the musical note Eb",
    answer: "E",
  },
  {
    sound: musicalNotes.E.play(),
    question: "Press the musical note E",
    answer: "D",
  },
  {
    sound: musicalNotes.ESharp.play(),
    question: "Press the musical note E#",
    answer: "F",
  },
  {
    sound: musicalNotes.FFlat.play(),
    question: "Press the musical note Fb",
    answer: "D",
  },
  {
    sound: musicalNotes.F.play(),
    question: "Press the musical note F",
    answer: "F",
  },
  {
    sound: musicalNotes.FSharp.play(),
    question: "Press the musical note F#",
    answer: "T",
  },
  {
    sound: musicalNotes.GFlat.play(),
    question: "Press the musical note Gb",
    answer: "T",
  },
  {
    sound: musicalNotes.G.play(),
    question: "Press the musical note G",
    answer: "G",
  },
  {
    sound: musicalNotes.GSharp.play(),
    question: "Press the musical note G#",
    answer: "Y",
  },
  {
    sound: musicalNotes.AFlat.play(),
    question: "Press the musical note Ab",
    answer: "Y",
  },
  {
    sound: musicalNotes.A.play(),
    question: "Press the musical note A",
    answer: "H",
  },
  {
    sound: musicalNotes.ASharp.play(),
    question: "Press the musical note A#",
    answer: "U",
  },
  {
    sound: musicalNotes.BFlat.play(),
    question: "Press the musical note Bb",
    answer: "U",
  },
  {
    sound: musicalNotes.B.play(),
    question: "Press the musical note B",
    answer: "J",
  },
  {
    sound: musicalNotes.BSharp.play(),
    question: "Press the musical note B#",
    answer: "A",
  },
];

//sounds

/* LEVEL TWO */

const levelTwoQuestions = [
  {
    sound: musicalNotes.G.play(),
    question: "Press the perfect fifth of the musical note C",
    answer: "G",
  },
  {
    sound: musicalNotes.GSharp.play(),
    question: "Press the perfect fifth of the musical note C#/Db",
    answer: "Y",
  },
  {
    sound: musicalNotes.A.play(),
    question: "Press the perfect fifth of the musical note D",
    answer: "H",
  },
  {
    sound: musicalNotes.ASharp.play(),
    question: "Press the perfect fifth of the musical note D#/Eb",
    answer: "U",
  },
  {
    sound: musicalNotes.B.play(),
    question: "Press the perfect fifth of the musical note E",
    answer: "J",
  },
  {
    sound: musicalNotes.C.play(),
    question: "Press the perfect fifth of the musical note F",
    answer: "A",
  },
  {
    sound: musicalNotes.CSharp.play(),
    question: "Press the perfect fifth of the musical note F#/Gb",
    answer: "W",
  },
  {
    sound: musicalNotes.D.play(),
    question: "Press the perfect fifth of the musical note G",
    answer: "S",
  },
  {
    sound: musicalNotes.DSharp.play(),
    question: "Press the perfect fifth of the musical note G#/Ab",
    answer: "E",
  },
  {
    sound: musicalNotes.E.play(),
    question: "Press the perfect fifth of the musical note A",
    answer: "D",
  },
  {
    sound: musicalNotes.F.play(),
    question: "Press the perfect fifth of the musical note A#/Bb",
    answer: "F",
  },
  {
    sound: musicalNotes.FSharp.play(),
    question: "Press the perfect fifth of the musical note B",
    answer: "T",
  },
];

/* LEVEL THREE */
const levelThreeQuestions = [
  {
    sound: chordsCMajorScale.CMajor.play(),
    question: "C Major",
    answer: ["KeyA", "KeyD", "KeyG"],
  },
  {
    sound: chordsCMajorScale.Dminor.play(),
    question: "D minor",
    answer: ["KeyS", "KeyF", "KeyH"],
  },
  {
    sound: chordsCMajorScale.Eminor.play(),
    question: "E minor",
    answer: ["KeyD", "KeyG", "KeyJ"],
  },
  {
    sound: chordsFMajorScale.CMajor.play(),
    question: "F Major",
    answer: ["KeyF", "KeyH", "KeyA"],
  },
  {
    sound: chordsCMajorScale.GMajor.play(),
    question: "G Major",
    answer: ["KeyG", "KeyJ", "KeyS"],
  },
  {
    sound: chordsCMajorScale.Aminor.play(),
    question: "A minor",
    answer: ["KeyH", "KeyA", "KeyD"],
  },
  {
    sound: chordsCMajorScale.Bdiminished.play(),
    question: "B diminished",
    answer: ["KeyJ", "KeyS", "KeyF"],
  },
];

/* LEVEL FOUR */
const levelFourQuestions = [
  {
    sound: musicalNotes.CFlat.play(),
    question: "What note is this?",
    answer: "J",
  },
  { sound: musicalNotes.C.play(), question: "What note is this?", answer: "A" },
  {
    sound: musicalNotes.CSharp.play(),
    question: "What note is this?",
    answer: "W",
  },
  {
    sound: musicalNotes.DFlat.play(),
    question: "What note is this?",
    answer: "W",
  },
  { sound: musicalNotes.D.play(), question: "What note is this?", answer: "S" },
  {
    sound: musicalNotes.DSharp.play(),
    question: "What note is this?",
    answer: "E",
  },
  {
    sound: musicalNotes.EFlat.play(),
    question: "What note is this?",
    answer: "E",
  },
  {
    sound: musicalNotes.E.play(),
    question: "Press the musical note E",
    answer: "D",
  },
  {
    sound: musicalNotes.ESharp.play(),
    question: "What note is this?",
    answer: "F",
  },
  {
    sound: musicalNotes.FFlat.play(),
    question: "What note is this?",
    answer: "D",
  },
  {
    sound: musicalNotes.F.play(),
    question: "Press the musical note F",
    answer: "F",
  },
  {
    sound: musicalNotes.FSharp.play(),
    question: "What note is this?",
    answer: "T",
  },
  {
    sound: musicalNotes.GFlat.play(),
    question: "What note is this?",
    answer: "T",
  },
  { sound: musicalNotes.G.play(), question: "What note is this?", answer: "G" },
  {
    sound: musicalNotes.GSharp.play(),
    question: "What note is this?",
    answer: "Y",
  },
  {
    sound: musicalNotes.AFlat.play(),
    question: "What note is this?",
    answer: "Y",
  },
  { sound: musicalNotes.A.play(), question: "What note is this?", answer: "H" },
  {
    sound: musicalNotes.ASharp.play(),
    question: "What note is this?",
    answer: "U",
  },
  {
    sound: musicalNotes.BFlat.play(),
    question: "What note is this?",
    answer: "U",
  },
  { sound: musicalNotes.B.play(), question: "What note is this?", answer: "J" },
  {
    sound: musicalNotes.BSharp.play(),
    question: "What note is this?",
    answer: "A",
  },
];
