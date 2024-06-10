import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [category, setCategory] = useState(0);
  const [quiz, setQuiz] = useState([]);
  const [answer, setAnswer] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState("");
  const [answer8, setAnswer8] = useState("");
  const [answer9, setAnswer9] = useState("");

  const [wrong01, setWrong01] = useState(false);
  const [wrong02, setWrong02] = useState(false);
  const [wrong03, setWrong03] = useState(false);
  const [wrong11, setWrong11] = useState(false);
  const [wrong12, setWrong12] = useState(false);
  const [wrong13, setWrong13] = useState(false);
  const [wrong21, setWrong21] = useState(false);
  const [wrong22, setWrong22] = useState(false);
  const [wrong23, setWrong23] = useState(false);
  const [wrong31, setWrong31] = useState(false);
  const [wrong32, setWrong32] = useState(false);
  const [wrong33, setWrong33] = useState(false);
  const [wrong41, setWrong41] = useState(false);
  const [wrong42, setWrong42] = useState(false);
  const [wrong43, setWrong43] = useState(false);
  const [wrong51, setWrong51] = useState(false);
  const [wrong52, setWrong52] = useState(false);
  const [wrong53, setWrong53] = useState(false);
  const [wrong61, setWrong61] = useState(false);
  const [wrong62, setWrong62] = useState(false);
  const [wrong63, setWrong63] = useState(false);
  const [wrong71, setWrong71] = useState(false);
  const [wrong72, setWrong72] = useState(false);
  const [wrong73, setWrong73] = useState(false);
  const [wrong81, setWrong81] = useState(false);
  const [wrong82, setWrong82] = useState(false);
  const [wrong83, setWrong83] = useState(false);
  const [wrong91, setWrong91] = useState(false);
  const [wrong92, setWrong92] = useState(false);
  const [wrong93, setWrong93] = useState(false);

  const [score, setScore] = useState(0);
  const [unscore, setUnScore] = useState(0);
  const [display, setDisplay] = useState("none");

  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);

  let handlequiz = async () => {
    setLoading(true);
    try {
      let res = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=medium&type=multiple`
      );
      let data = await res.json();
      setQuiz(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <div className="container">
      <div className="header">
        <h2>Quizzzz</h2>
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value={9}>General Knowledge</option>
          <option value={11}>Entertainment: Film</option>
          <option value={15}>Entertainment: Video Games</option>
          <option value={29}>Entertainment: Comics</option>
          <option value={17}>Science & Nature</option>
          <option value={18}>Science: Computers</option>
          <option value={19}>Science: Mathematics</option>
          <option value={20}>Mythology</option>
          <option value={22}>Geography</option>
          <option value={23}>History</option>
          <option value={21}>Sports</option>
          <option value={24}>Politics</option>
          <option value={26}>Celebrities</option>
        </select>
        <button onClick={handlequiz}>click</button>
      </div>
      {error && <p>server error ....try again</p>}
      {loading && (
        <div className="loader">
          LOADING<div className="rotate"></div>
        </div>
      )}
      {/* <div className="rotate"></div> */}
      {quiz.map((item, i) => (
        <div key={i} className="area">
          <p>{item.question}</p>
          {i === 0 && (
            <div className="answer">
              <p
                className="options"
                style={{
                  backgroundColor: wrong01 && "red",
                  color: wrong01 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong01(true);
                }}
              >
                {item.incorrect_answers[0]}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong02 && "red",
                  color: wrong02 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong02(true);
                }}
              >
                {item.incorrect_answers[2]}
              </p>
              <p
                className={`options ${answer}`}
                onClick={() => (setAnswer("green"), setScore((s) => s + 1))}
              >
                {item.correct_answer}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong03 && "red",
                  color: wrong03 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong03(true);
                }}
              >
                {item.incorrect_answers[1]}
              </p>
            </div>
          )}

          {i === 1 && (
            <div className="answer">
              <p
                className={`options ${answer1}`}
                onClick={() => (setAnswer1("green"), setScore((s) => s + 1))}
              >
                {item.correct_answer}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong11 && "red",
                  color: wrong11 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong11(true);
                }}
              >
                {item.incorrect_answers[2]}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong12 && "red",
                  color: wrong12 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong12(true);
                }}
              >
                {item.incorrect_answers[0]}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong13 && "red",
                  color: wrong13 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong13(true);
                }}
              >
                {item.incorrect_answers[1]}
              </p>
            </div>
          )}

          {i === 2 && (
            <div className="answer">
              <p
                className="options"
                style={{
                  backgroundColor: wrong21 && "red",
                  color: wrong21 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong21(true);
                }}
              >
                {item.incorrect_answers[1]}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong22 && "red",
                  color: wrong22 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong22(true);
                }}
              >
                {item.incorrect_answers[2]}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong23 && "red",
                  color: wrong23 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong23(true);
                }}
              >
                {item.incorrect_answers[0]}
              </p>
              <p
                className={`options ${answer2}`}
                onClick={() => (setAnswer2("green"), setScore((s) => s + 1))}
              >
                {item.correct_answer}
              </p>
            </div>
          )}

          {i === 3 && (
            <div className="answer">
              <p
                className="options"
                style={{
                  backgroundColor: wrong31 && "red",
                  color: wrong31 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong31(true);
                }}
              >
                {item.incorrect_answers[1]}
              </p>
              <p
                className={`options ${answer3}`}
                onClick={() => (setAnswer3("green"), setScore((s) => s + 1))}
              >
                {item.correct_answer}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong32 && "red",
                  color: wrong32 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong32(true);
                }}
              >
                {item.incorrect_answers[0]}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong33 && "red",
                  color: wrong33 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong33(true);
                }}
              >
                {item.incorrect_answers[2]}
              </p>
            </div>
          )}

          {i === 4 && (
            <div className="answer">
              <p
                className="options"
                style={{
                  backgroundColor: wrong41 && "red",
                  color: wrong41 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong41(true);
                }}
              >
                {item.incorrect_answers[1]}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong42 && "red",
                  color: wrong42 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong42(true);
                }}
              >
                {item.incorrect_answers[2]}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong43 && "red",
                  color: wrong43 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong43(true);
                }}
              >
                {item.incorrect_answers[0]}
              </p>
              <p
                className={`options ${answer4}`}
                onClick={() => (setAnswer4("green"), setScore((s) => s + 1))}
              >
                {item.correct_answer}
              </p>
            </div>
          )}

          {i === 5 && (
            <div className="answer">
              <p
                className={`options ${answer5}`}
                onClick={() => (setAnswer5("green"), setScore((s) => s + 1))}
              >
                {item.correct_answer}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong51 && "red",
                  color: wrong51 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong51(true);
                }}
              >
                {item.incorrect_answers[2]}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong52 && "red",
                  color: wrong52 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong52(true);
                }}
              >
                {item.incorrect_answers[0]}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong53 && "red",
                  color: wrong53 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong53(true);
                }}
              >
                {item.incorrect_answers[1]}
              </p>
            </div>
          )}

          {i === 6 && (
            <div className="answer">
              <p
                className="options"
                style={{
                  backgroundColor: wrong61 && "red",
                  color: wrong61 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong61(true);
                }}
              >
                {item.incorrect_answers[1]}
              </p>
              <p
                className={`options ${answer6}`}
                onClick={() => (setAnswer6("green"), setScore((s) => s + 1))}
              >
                {item.correct_answer}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong62 && "red",
                  color: wrong62 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong62(true);
                }}
              >
                {item.incorrect_answers[0]}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong63 && "red",
                  color: wrong63 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong63(true);
                }}
              >
                {item.incorrect_answers[2]}
              </p>
            </div>
          )}

          {i === 7 && (
            <div className="answer">
              <p
                className="options"
                style={{
                  backgroundColor: wrong71 && "red",
                  color: wrong71 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong71(true);
                }}
              >
                {item.incorrect_answers[1]}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong72 && "red",
                  color: wrong72 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong72(true);
                }}
              >
                {item.incorrect_answers[2]}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong73 && "red",
                  color: wrong73 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong73(true);
                }}
              >
                {item.incorrect_answers[0]}
              </p>
              <p
                className={`options ${answer7}`}
                onClick={() => (setAnswer7("green"), setScore((s) => s + 1))}
              >
                {item.correct_answer}
              </p>
            </div>
          )}

          {i === 8 && (
            <div className="answer">
              <p
                className="options"
                style={{
                  backgroundColor: wrong81 && "red",
                  color: wrong81 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong81(true);
                }}
              >
                {item.incorrect_answers[0]}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong82 && "red",
                  color: wrong82 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong82(true);
                }}
              >
                {item.incorrect_answers[2]}
              </p>
              <p
                className={`options ${answer8}`}
                onClick={() => (setAnswer8("green"), setScore((s) => s + 1))}
              >
                {item.correct_answer}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong83 && "red",
                  color: wrong83 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong83(true);
                }}
              >
                {item.incorrect_answers[1]}
              </p>
            </div>
          )}

          {i === 9 && (
            <div className="answer">
              <p
                className="options"
                style={{
                  backgroundColor: wrong91 && "red",
                  color: wrong91 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong91(true);
                }}
              >
                {item.incorrect_answers[1]}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong92 && "red",
                  color: wrong92 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong92(true);
                }}
              >
                {item.incorrect_answers[2]}
              </p>
              <p
                className="options"
                style={{
                  backgroundColor: wrong93 && "red",
                  color: wrong93 && "white",
                }}
                onClick={() => {
                  setScore(score - 1);
                  setWrong93(true);
                }}
              >
                {item.incorrect_answers[0]}
              </p>
              <p
                className={`options ${answer9}`}
                onClick={() => (setAnswer9("green"), setScore((s) => s + 1))}
              >
                {item.correct_answer}
              </p>
            </div>
          )}
        </div>
      ))}

      <button
        onClick={() => {
          if (loading === false) setDisplay("block");
          else alert("get the question first");
        }}
      >
        score
      </button>
      <h3 className="score" style={{ display: `${display}` }}>
        {score}/10
      </h3>
    </div>
  );
};

export default App;

{
  /* {arr.push(item.correct_answer)}
          {arr.push(item.incorrect_answers[0])}
          {arr.push(item.incorrect_answers[1])}
          {arr.push(item.incorrect_answers[2])} */
}

{
  /* {arr.map((ans, i) => (
            <p key={i}>{arr[Math.floor(Math.random() * 4)]}</p>
          ))} */
}
