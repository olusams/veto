import React from 'react';
import { useState } from 'react';
import Div from '../Div';
const accordionData = [
  {
    question: "What is the typical timeline for a new website project?",
    answer:
      "Our project timelines vary depending on the complexity and scope of the work. A standard informational website typically takes 4-6 weeks from initial consultation to launch. For e-commerce platforms or custom applications, the timeline can extend to 8-12 weeks or more. We provide a detailed project plan with key milestones to keep you informed every step of the way.",
  },
  {
    question: "Will I be able to update the website myself after it's built?",
    answer:
      "Absolutely. We build all our websites on user-friendly content management systems (CMS) like WordPress or a custom-built React solution with a clear administrative interface. We provide comprehensive training to ensure you can manage content, update images, and make other necessary changes with ease. Ongoing support is also available if you need it.",
  },
  {
    question: "How do you approach search engine optimization (SEO)?",
    answer:
      "SEO is integral to our development process. We implement on-page SEO best practices from the ground up, including keyword research, content optimization, meta tags, and schema markup. We also ensure your website is technically sound, with fast loading speeds and a mobile-friendly design—all of which are critical ranking factors.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We typically require a 50% deposit to initiate a project, with the remaining balance due upon completion, before the website goes live. For larger projects, we can arrange a milestone-based payment schedule to better suit your budget. We accept various payment methods for your convenience.",
  },
  {
    question: "What kind of ongoing support do you offer after launch?",
    answer:
      "Our commitment to your success extends beyond the launch. We offer a range of support and maintenance packages that include regular updates, security monitoring, performance optimization, and on-demand technical assistance. We're here to ensure your website remains a powerful asset for your business long-term.",
  },
];

export default function Accordion() {
  const [selected, setSelected] = useState(0);
  const handelToggle = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? 'active' : ''}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
          >
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
