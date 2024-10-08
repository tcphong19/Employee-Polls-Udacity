import { fetchData, saveQuestion, saveQuestionAnswer } from "./api";

describe("fetchData", () => {
  it("will load startup data", async () => {
    const { users, questions } = await fetchData();
    expect(users).toBeDefined();
    expect(questions).toBeDefined();
  });
});

describe("saveQuestion", () => {
  it("will save the poll question to the database", async () => {
    const author = "johnsmith";
    const optionOneText = "option one";
    const optionTwoText = "option two";
    const question = await saveQuestion({
      author,
      optionOneText,
      optionTwoText,
    });

    expect(question).toBeDefined();
  });
});

describe("saveQuestionAnswer", () => {
  it("will save a poll answer for a particular question", async () => {
    const authedUser = "johnsmith";
    const qid = "8xf0y6ziyjabvozdd253nd";
    const answer = "optionTwo";
    const saved = await saveQuestionAnswer(authedUser, qid, answer);

    expect(saved).toBe(true);
  });
});
