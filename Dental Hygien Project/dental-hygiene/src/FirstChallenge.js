import { useState } from "react";
import { data } from "./data";
import background from './images/7701518.jpg';

export default function FirstChallenge() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null); 

  const checkAns = (ans) => {
    if (!lock) {
      if (question.ans === ans) {
        setScore((prev) => prev + 1);
        setSelectedAnswer(ans); 
      } else {
        setSelectedAnswer(ans); 
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      const newIndex = index + 1;
      setIndex(newIndex);
      setQuestion(data[newIndex]);
      setLock(false);
      setSelectedAnswer(null); 
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setLock(false);
    setScore(0);
    setResult(false);
    setSelectedAnswer(null); 
  };

  return (
    <div  className="px-4 py-10 sm:px-10 sm:py-20 md:px-20 md:py-32 lg:p-40 flex justify-center  bg-gradient-to-b from-teal-custom-green to-teal-custom-DarkCayan ">
      <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 bg-white/80 rounded-2xl flex flex-col gap-5 p-6 sm:p-8 md:p-12">
        <h2 className="text-4xl font-semibold text-black text-center">أد ايه سنانك صحية</h2>
        <hr className="h-0.5 bg-[#707070]" />
        {result ? (
          <>
            <h3 className="text-3xl font-normal text-black text-center">{score} من {data.length}</h3>
            <button
              onClick={reset}
              className="bg-gradient-to-r from-teal-custom-Poppy to-teal-custom-orange rounded-full text-white text-base p-3 font-semibold transition-all duration-500 transform hover:scale-105"
            >
              إعادة التحدي
            </button>
          </>
        ) : (
          <>
            <h3 className="text-2xl text-black from-neutral-500">
              {index + 1}. {question.question}
            </h3>
            <ul>
              <li
                className={`border-2 border-[#707070] p-2 rounded-lg mb-3 cursor-pointer ${selectedAnswer === 1 ? (question.ans === 1 ? "border-green-300 bg-green-200" : "border-red-300 bg-red-200") : ""}`}
                onClick={() => checkAns(1)}
              >
                {question.option1}
              </li>
              <li
                className={`border-2 border-[#707070] p-2 rounded-lg cursor-pointer ${selectedAnswer === 2 ? (question.ans === 2 ? "border-green-300 bg-green-200" : "border-red-300 bg-red-200") : ""}`}
                onClick={() => checkAns(2)}
              >
                {question.option2}
              </li>
            </ul>
            <button
              onClick={next}
              className="bg-gradient-to-r from-teal-custom-Poppy to-teal-custom-orange rounded-full text-white text-base p-3 font-semibold transition-all duration-500 transform hover:scale-105"
            >
              التالي
            </button>
            <div className="m-auto text-lg">
              {index + 1} من {data.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
