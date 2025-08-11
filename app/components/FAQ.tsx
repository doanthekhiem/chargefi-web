"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need to make a physical payment?",
      answer:
        "No, ChargeFi is completely free to use. You earn tokens by simply charging your devices as you normally would.",
    },
    {
      question: "How do you detect free charging?",
      answer:
        "Our AI-powered system uses multiple sensors and verification methods to ensure only legitimate charging activities are rewarded.",
    },
    {
      question: "What wallets are supported?",
      answer:
        "We support all major wallets including MetaMask, WalletConnect, and other Polygon-compatible wallets.",
    },
    {
      question: "How do I withdraw my $CHARGE tokens?",
      answer:
        "You can withdraw your tokens directly to your connected wallet or swap them on supported DEXs like QuickSwap.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-base text-center mb-4 text-primary">
          FREQUENTLY ASKED QUESTIONS
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" border-b border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-4 sm:p-6 px-0 sm:px-0 text-left flex justify-between items-center hover:bg-gray-700/30 transition-colors duration-200"
              >
                <h3 className="text-base  text-white">{faq.question}</h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5  transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
