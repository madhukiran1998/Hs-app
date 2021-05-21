import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/nova/theme.css";
import "primeflex/primeflex.css";

import { Card } from "primereact/card";
import { RadioButton } from "primereact/radiobutton";
import { setQuestion } from "../../redux/actions/question";

function Questioneditor() {
  const [postQuestion, setpostQuestion] = useState({
    questions: "",
    options: "",
    answers: "",
    score: 1,
  });
  const [displayCard, setdisplayCard] = useState(false);
  const [Finalstate, setFinalstate] = useState({
    title: "",
    companyName: "",
    Website: "",
    questionsList: [],
  });

  const [previews, setpreviews] = useState(true);

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
      Finalstate.questionsList.push(postQuestion);
      console.log(Finalstate);
      setdisplayCard(false);
      setpreviews(false);
      setpostQuestion({
        questions: "",
        options: "",
        answers: "",
        score: 1,
      });
    }
  };

  const deletequestion = (ids) => {
    if (Finalstate.questionsList < 1) {
      return setpreviews(true);
    } else {
      var lateone = Finalstate.questionsList.filter(
        (question, index) => index !== ids
      );
      return setFinalstate({ ...Finalstate, questionsList: lateone });
    }
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

  const footer2 = (indexs) => {
    return (
      <span>
        <Button
          label="Delete"
          className="p-button-raised p-button-danger p-button-text"
          onClick={() => deletequestion(Number(indexs.id))}
        />
      </span>
    );
  };

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
              <InputText
                placeholder="Title"
                value={Finalstate.title}
                onChange={(e) =>
                  setFinalstate({
                    ...Finalstate,
                    title: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="p-col-12 p-md-4">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-id-card"></i>
              </span>
              <InputText
                placeholder="Company name"
                value={Finalstate.companyName}
                onChange={(e) =>
                  setFinalstate({
                    ...Finalstate,
                    companyName: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="p-col-12 p-md-4">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">www</span>
              <InputText
                placeholder="Website"
                value={Finalstate.Website}
                onChange={(e) =>
                  setFinalstate({
                    ...Finalstate,
                    Website: e.target.value,
                  })
                }
              />
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
            <h3
              className="p-mb-3 p-text-normal"
              style={{
                textAlign: "center",
                color: "#75a0b2",
                fontFamily: "monospace",
                fontSize: "3em",
              }}
            >
              QUESTIONS PREVIEW
            </h3>
          </div>
        )}
      </div>
      <div className="p-mt-6">
        <hr
          style={{
            width: "100%",
            marginLeft: "auto",
            position: "relative",
            height: "0",
            border: " 0",
            borderTop: "1px solid rgba(0, 0, 0, 0.4)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.6)",
          }}
        />
        <h2
          className="p-text-normal"
          className="p-mb-3 p-text-normal"
          style={{
            textAlign: "center",
            fontFamily: "serif",
            fontSize: "1.5em",
          }}
        >
          SAVED QUESTIONS
        </h2>
        {previews ? (
          <h2>Name</h2>
        ) : (
          Finalstate.questionsList.map((ques, index) => {
            return (
              <>
                <Card
                  id={`${index}`}
                  style={{
                    width: "80em",
                    margin: "70 0 0 0",
                  }}
                  footer={footer2}
                  className="p-mt-3"
                >
                  <div>
                    <h3>{ques.questions}</h3>
                    {ques.options.split(",").map((opi) => {
                      return (
                        <div className="p-field-radiobutton">
                          <RadioButton name="category" value={opi} />
                          <label>{opi}</label>
                        </div>
                      );
                    })}
                    <div className="p-mb-3 p-text-normal">
                      <h5>{`Answer : ${ques.answers}`}</h5>
                    </div>
                    <div className="p-mb-3 p-text-normal">
                      <h5>{`Score Assigned : ${ques.score}`}</h5>
                    </div>
                  </div>
                </Card>
              </>
            );
          })
        )}
      </div>
    </div>
  );
}
export default Questioneditor;
