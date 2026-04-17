import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: {
    "alice@mail.com": {
      name: "Алиса",
      grades: {
        math: [5, 4, 5, 4],
        physics: [3, 4, 5],
        chemistry: [5, 5],
      },
    },
    "bob@mail.com": {
      name: "Боб",
      grades: {
        math: [2, 3, 4],
        physics: [5, 5, 4, 5],
        chemistry: [3, 3],
      },
    },
    "carol@mail.com": {
      name: "Кэрол",
      grades: {
        math: [4, 4],
        physics: [3, 3, 3],
      },
    },
  },
  subjects: ["math", "physics", "chemistry"],
};

