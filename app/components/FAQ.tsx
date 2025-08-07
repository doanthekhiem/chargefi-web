export default function FAQ() {
  const faqs = [
    {
      question: "Do I need to make a physical payment?",
      answer: "No, ChargeFi is completely free to use. You earn tokens by simply charging your devices as you normally would."
    },
    {
      question: "How do you detect free charging?",
      answer: "Our AI-powered system uses multiple sensors and verification methods to ensure only legitimate charging activities are rewarded."
    },
    {
      question: "What wallets are supported?",
      answer: "We support all major wallets including MetaMask, WalletConnect, and other Polygon-compatible wallets."
    },
    {
      question: "How do I withdraw my $CHARGE tokens?",
      answer: "You can withdraw your tokens directly to your connected wallet or swap them on supported DEXs like QuickSwap."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-glow">FREQUENTLY ASKED QUESTIONS</h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800/50 p-4 sm:p-6 rounded-lg border border-gray-700">
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-primary">{faq.question}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
