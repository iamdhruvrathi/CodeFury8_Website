import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who can participate in CodeFury 8.0?',
      answer: (
        <>
          <span className="text-purple-400 font-semibold">Any student from any college or university</span> can participate. Both undergraduate and postgraduate students are welcome. Professionals and working individuals are not eligible.
        </>
      )
    },
    {
      question: 'What is the team size limit?',
      answer: (
        <>
          Teams can have <span className="text-purple-400 font-semibold">1-4 members</span>. You can participate individually or form a team of up to 4 people. All team members must be students.
        </>
      )
    },
    {
      question: 'Is there any registration fee?',
      answer: (
        <>
          <span className="text-purple-400 font-semibold">Yes, the registration fee for CodeFury 8.0 is ₹120 per head.</span>
        </>
      )
    },
    {
      question: 'What are the available tracks?',
      answer:(
        <>
          Participants will choose from <span className="text-purple-400 font-semibold">three themes</span>, each with its own problem statement. Participants may opt to build a <span className="text-purple-400 font-semibold">web or mobile application </span>depending on their area of expertise and preference.

        </>
      )
    },
    {
      question: 'Are first-year students allowed to participate?',
      answer: (
        <>
          <span className="text-purple-400 font-semibold">Yes! First-year students are absolutely welcome.</span> CodeFury is open to students from all years and all branches of engineering.
        </>
      )
    },
    {
      question: 'How do I submit my project?',
      answer: (
        <>
          <span className="text-purple-400 font-semibold">Project submission details will be shared with qualified participants after the preliminary round.</span> Typically, you'll need to submit your code repository, demo video, and project documentation.
        </>
      )
    },
    {
      question: 'Is this completely an online hackathon?',
      answer: (
        <>
          <span className="text-purple-400 font-semibold">Yes, CodeFury 8.0 is a fully online hackathon.</span> You can participate from anywhere in the world. All interactions, presentations, and judging will happen virtually.
        </>
      )
    },
    {
      question: 'What happens after the 24-hour coding period?',
      answer:
        'After the coding period ends, teams will present their projects to our panel of judges. Winners will be announced within 24 hours of submission deadline, followed by prize distribution.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="pt-10 pb-8 relative">
      <div className="container mx-auto px-6 font-nunito">
        <h2 className="text-3xl md:text-4xl font-audiowide text-center mb-16">
          <span className="text-cyan-400 glow-text">Frequently</span> Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12 font-heading">
            <HelpCircle className="w-12 h-12 text-purple-400 mr-4" />
            <p className="text-xl text-gray-300">Got questions? We've got answers!</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden border border-gray-700/50"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-700/50 pt-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
