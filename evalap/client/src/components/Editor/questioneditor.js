import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/nova/theme.css";
import "primeflex/primeflex.css";

import { Card } from "primereact/card";
import { RadioButton } from "primereact/radiobutton";

function Questioneditor() {
  const [postQuestion, setpostQuestion] = useState({
    questions: "",
    options: "",
    answers: "",
    score: 1,
  });
  const [state, setstate] = useState({
    question: [],
    option: [],
    answer: [],
    score: [],
  });
  const [finalSaved, setfinalSaved] = useState({
    finalQuestions: [],
    finalOptions: [],
    finalAnswer: [],
    finalScore: [],
  });

  const AddtoList = () => {
    if (postQuestion.questions) {
      state.question.push(postQuestion.questions);
      setpostQuestion({ ...postQuestion, questions: "" });
    }
    if (postQuestion.options) {
      state.option.push(postQuestion.options);
      setpostQuestion({ ...postQuestion, options: "" });
    }
    if (postQuestion.answers) {
      state.answer.push(postQuestion.answers);
      setpostQuestion({ ...postQuestion, answers: "" });
    }
    if (postQuestion.score) {
      state.score.push(postQuestion.score);
      setpostQuestion({ ...postQuestion, score: 1 });
    }
    setpostQuestion({ questions: "", options: "", answers: "", score: 1 });
  };

  const resetfun = () => {
    setstate({ question: [], option: [], answer: [], score: [] });
  };

  const finalList = () => {
    if (state.question) {
      finalSaved.finalQuestions.push(state.question[0]);
      setpostQuestion({ ...state, question: [] });
    }
    if (state.option) {
      finalSaved.finalOptions.push(state.option[0]);
      setpostQuestion({ ...state, options: [] });
    }
    if (state.answer) {
      finalSaved.finalAnswer.push(state.answer[0]);
      setpostQuestion({ ...state, answer: [] });
    }
    if (state.score) {
      finalSaved.finalScore.push(state.score[0]);
      setpostQuestion({ ...state, score: [] });
    }
    console.log(finalSaved);
    setstate({ question: [], option: [], answer: [], score: [] });
  };

  const footer = (
    <span>
      <Button
        label="Save"
        icon="pi pi-save"
        className="p-button-success p-ml-2"
        onClick={finalList}
      />
      <Button
        label="Delete"
        icon="pi pi-times"
        className="p-button-secondary p-ml-2"
        onClick={resetfun}
      />
    </span>
  );

  return (
    <div style={{ padding: " 0 100px 0 100px" }}>
      <div className="p-grid p-dir-col">
        <h3>Add Details</h3>
        <div className="p-grid p-fluid">
          <div className="p-col-12 p-md-4">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-folder"></i>
              </span>
              <InputText placeholder="Title" />
            </div>
          </div>

          <div className="p-col-12 p-md-4">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-id-card"></i>
              </span>
              <InputText placeholder="Company name" />
            </div>
          </div>

          <div className="p-col-12 p-md-4">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">www</span>
              <InputText placeholder="Website" />
            </div>
          </div>
        </div>

        <h3>Question Addons</h3>
        <div className="p-fluid">
          <div className="p-field p-grid">
            <label htmlFor="firstname4" className="p-col-12 p-md-2">
              Questions
            </label>
            <div className="p-col-12 p-md-10">
              <InputText
                id="firstname4"
                type="text"
                value={postQuestion.questions}
                onChange={(e) =>
                  setpostQuestion({
                    ...postQuestion,
                    questions: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="p-field p-grid">
            <label htmlFor="lastname4" className="p-col-12 p-md-2">
              Options
            </label>
            <div className="p-col-12 p-md-10">
              <InputText
                id="lastname3"
                type="text"
                value={postQuestion.options}
                onChange={(e) =>
                  setpostQuestion({ ...postQuestion, options: e.target.value })
                }
              />
            </div>
          </div>
          <div className="p-field p-grid">
            <label htmlFor="lastname4" className="p-col-12 p-md-2">
              Answers
            </label>
            <div className="p-col-12 p-md-10">
              <InputText
                id="lastname8"
                type="text"
                value={postQuestion.answers}
                onChange={(e) =>
                  setpostQuestion({ ...postQuestion, answers: e.target.value })
                }
              />
            </div>
          </div>
          <div className="p-field p-grid">
            <label htmlFor="lastname4" className="p-col-12 p-md-2">
              Score
            </label>
            <div className="p-col-12 p-md-3">
              <InputText
                id="lastname9"
                type="text"
                value={postQuestion.score}
                onChange={(e) =>
                  setpostQuestion({ ...postQuestion, score: e.target.value })
                }
              />
            </div>
          </div>
          <div className="p-col-12 p-md-2">
            <Button
              label="Add Question"
              icon="pi pi-plus-circle"
              onClick={AddtoList}
            />
          </div>
        </div>
      </div>
      <div>
        {state.option.length >= 1 ? (
          <Card
            style={{
              width: "80em",
              padding: "20 0 0 0",
            }}
            footer={footer}
          >
            <div>
              <h3>{state.question}</h3>
              {state.option[state.option.length - 1].split(",").map((opi) => {
                return (
                  <div className="p-field-radiobutton">
                    <RadioButton name="category" value={opi} />
                    <label>{opi}</label>
                  </div>
                );
              })}
              <div className="p-mb-3 p-text-normal">
                <h5>{`Answer : ${state.answer}`}</h5>
              </div>
              <div className="p-mb-3 p-text-normal">
                <h5>{`Score Assigned : ${state.score}`}</h5>
              </div>
            </div>
          </Card>
        ) : (
          <div>
            <h3 className="p-mb-3 p-text-normal">Question Preview</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Questioneditor;
