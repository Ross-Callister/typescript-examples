function mysteryFunction() {
  return {
    never: "string",
    gonna: 54,
    give: true,
    you: ["up"]
  };
}

type MysteryType = ReturnType<typeof mysteryFunction>;

const mysteryVariable: MysteryType = {
  never: "string",
    gonna: 54,
    give: true,
    you: ["up"]
};