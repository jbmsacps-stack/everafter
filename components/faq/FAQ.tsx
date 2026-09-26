"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What time should we arrive?",
    answer:
      "Please arrive around 15–20 minutes before the ceremony begins so everyone can be comfortably seated before the celebration starts.",
  },
  {
    question: "Where are the wedding and reception?",
    answer:
      "The ceremony and reception are being held at separate venues. You can find the exact locations, timings, and Google Maps directions in the Schedule section above.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes. Parking information and the recommended entrance will be provided along with the venue details.",
  },
  {
    question: "What should I wear?",
    answer:
      "Come dressed comfortably and celebrate in whatever makes you feel your best. Traditional and contemporary Indian outfits are both welcome.",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "If your invitation includes a plus one, please add their name while submitting your RSVP. This helps us prepare the seating and arrangements.",
  },
  {
    question: "Are children welcome?",
    answer:
      "Yes. Children are welcome to celebrate with us. Please include them in your RSVP so we can plan accordingly.",
  },
  {
    question: "Is there anything else I should know?",
    answer:
      "If you have a question that isn't answered here, please reach out to the family directly. We will be happy to help.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="
        bg-[#EFEAE1]
        px-6
        py-28
        sm:px-8
        sm:py-36
      "
    >
      <div className="mx-auto max-w-2xl">

        {/* Heading */}
        <div className="text-center">
          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.45em]
              text-[#B99A45]
            "
          >
            Good to know
          </p>

          <h2
            className="
              mt-6
              font-display
              text-[48px]
              font-light
              leading-[0.95]
              tracking-[-0.025em]
              text-[#1C352D]
              sm:text-6xl
            "
          >
            Frequently asked
            <br />
            questions.
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-sm
              text-sm
              leading-7
              text-[#1C352D]/60
            "
          >
            A few little details to make
            your day with us easier.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-14 border-t border-[#1C352D]/15">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="
                  border-b
                  border-[#1C352D]/15
                "
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    py-6
                    text-left
                  "
                >
                  <span
                    className="
                      font-display
                      text-[21px]
                      font-light
                      leading-tight
                      text-[#1C352D]
                      sm:text-2xl
                    "
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#1C352D]/15
                      text-[#1C352D]
                      transition-transform
                      duration-500
                      ${
                        isOpen
                          ? "rotate-180"
                          : "rotate-0"
                      }
                    `}
                  >
                    <ChevronDown
                      size={15}
                      strokeWidth={1.4}
                    />
                  </span>
                </button>

                <div
                  className={`
                    grid
                    transition-[grid-template-rows]
                    duration-500
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className="
                        max-w-lg
                        pb-7
                        pr-10
                        text-sm
                        leading-7
                        text-[#1C352D]/60
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}