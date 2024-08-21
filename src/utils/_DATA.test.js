import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("_saveQuestion", () => {
  it("will save and return a formatted question", async () => {
    const author = "mikewong";
    const optionOneText = "option_one_text";
    const optionTwoText = "option_two_text";
    const question = { author, optionOneText, optionTwoText };
    const expectation = {
      author: author,
      optionOne: {
        text: optionOneText,
      },
      optionTwo: {
        text: optionTwoText,
      },
    };

    await expect(_saveQuestion(question)).resolves.toMatchObject(expectation);
  });

  it("will return an error when required fields are missing", async () => {
    await expect(_saveQuestion({})).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("will save the answer to the question and return true", async () => {
    const authedUser = "johnsmith";
    const qid = "8xf0y6ziyjabvozdd253nd";
    const answer = "optionTwo"; // changing the answer
    const update = { authedUser, qid, answer };

    await expect(_saveQuestionAnswer(update)).resolves.toBe(true);
  });

  it("will return an error when required fields are missing", async () => {
    await expect(_saveQuestionAnswer({})).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });

  it("will return an error if user does not exist", async () => {
    const authedUser = "nonexistentuser";
    const qid = "8xf0y6ziyjabvozdd253nd";
    const answer = "optionTwo";
    const update = { authedUser, qid, answer };

    await expect(_saveQuestionAnswer(update)).rejects.toEqual(
      `User ${authedUser} does not exist.`
    );
  });
});
