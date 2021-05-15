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
  const [displayCard, setdisplayCard] = useState(false);
  const [Finalstate, setFinalstate] = useState({
    finalQuestions: [],
    finalOptions: [],
    finalAnswer: [],
    finalScore: [],
  });

  const AddtoList = () => {
    if (
      postQuestion.options.length >= 1 &&
      postQuestion.questions.length >= 1 &&
      postQuestion.answers.length >= 1
    ) {
      setdisplayCard(true);
    }
  };

  const resetfun = () => {
    setpostQuestion({
      questions: "",
      options: "",
      answers: "",
      score: 1,
    });
    setdisplayCard(false);
  };

  const finalList = () => {
    if (postQuestion.questions) {
      Finalstate.finalQuestions.push(postQuestion.questions);
    }
    if (postQuestion.options) {
      Finalstate.finalOptions.push(postQuestion.options);
    }
    if (postQuestion.answers) {
      Finalstate.finalAnswer.push(postQuestion.answers);
    }
    if (postQuestion.score) {
      Finalstate.finalScore.push(postQuestion.score);
    }
    console.log(Finalstate);
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
        {displayCard ? (
          <Card
            style={{
              width: "80em",
              padding: "20 0 0 0",
            }}
            footer={footer}
          >
            <div>
              <h3>{postQuestion.questions}</h3>
              {postQuestion.options.split(",").map((opi) => {
                return (
                  <div className="p-field-radiobutton">
                    <RadioButton name="category" value={opi} />
                    <label>{opi}</label>
                  </div>
                );
              })}
              <div className="p-mb-3 p-text-normal">
                <h5>{`Answer : ${postQuestion.answers}`}</h5>
              </div>
              <div className="p-mb-3 p-text-normal">
                <h5>{`Score Assigned : ${postQuestion.score}`}</h5>
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
