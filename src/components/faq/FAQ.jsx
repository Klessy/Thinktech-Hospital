import { useState } from "react";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQ = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="faq card" onClick={() => setShowAnswer((prev) => !prev)}>
      <div>
        <h5 className="faq__question">{faq.question}</h5>
        <button className="faq__icon">
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showAnswer && <p className="faq__answer">{faq.answer}</p>}
    </div>
  );
};

export default FAQ;
