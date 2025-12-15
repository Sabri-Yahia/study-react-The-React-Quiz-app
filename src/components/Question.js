// import { useQuiz } from "../contexts/QuizContext";
// import Options from "./Options";

// function Question() {
//   const { questions, index } = useQuiz();
//   const question = questions.at(index);

//   console.log(question);

//   return (
//     <div>
//       <h4>{question.question}</h4>
//       <Options question={question} />
//     </div>
//   );
// }

// export default Question;
import Options from "./Options";

export default function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
