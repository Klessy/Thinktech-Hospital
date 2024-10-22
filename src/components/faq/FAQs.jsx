import FAQ from "./FAQ";
import { faqs } from "../../data";

import "./faq.css";

const FAQs = () => {
  return (
    <section id="faqs" className="faqs__sections">
      <div className="faqs__container container">
        <div className="section-title">
          <div className="sub-style">
            <h2 className="sub-title text_title" style={{ lineHeight: "1.2" }}>
              Frequently <br /> Asked Question
            </h2>
          </div>
          <p className="mb-6 mt-6">
            Here are some questions I usually get. Click to toggle the answer,
            and if you still have some more questions, shoot me a message from
            the contact section.
          </p>
        </div>
        <div className="faqs__items" data-aos="fade-in">
          {faqs.map((faq) => (
            <FAQ key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
