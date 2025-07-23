// import React, { useState } from 'react';
// import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

// const FAQ = () => {
//   const [openFAQ, setOpenFAQ] = useState<number | null>(null);

//   const faqs = [
//     {
//       question: 'Who can participate in CodeFury 8.0?',
//       answer: 'Any student from any college or university can participate. Both undergraduate and postgraduate students are welcome. Professionals and working individuals are not eligible.'
//     },
//     {
//       question: 'What is the team size limit?',
//       answer: 'Teams can have 1-4 members. You can participate individually or form a team of up to 4 people. All team members must be students.'
//     },
//     {
//       question: 'Is there any registration fee?',
//       answer: 'No, CodeFury 8.0 is completely free to participate. There are no hidden charges or registration fees.'
//     },
//     {
//       question: 'What are the available tracks?',
//       answer: 'We have two main tracks: Web Development (build modern websites and web applications) and App Development (create mobile apps using Flutter or Android Studio).'
//     },
//     {
//       question: 'Are first-year students allowed to participate?',
//       answer: 'Yes! First-year students are absolutely welcome. CodeFury is open to students from all years and all branches of engineering.'
//     },
//     {
//       question: 'How do I submit my project?',
//       answer: 'Project submission details will be shared with qualified participants after the preliminary round. Typically, you\'ll need to submit your code repository, demo video, and project documentation.'
//     },
//     {
//       question: 'Is this completely an online hackathon?',
//       answer: 'Yes, CodeFury 8.0 is a fully online hackathon. You can participate from anywhere in the world. All interactions, presentations, and judging will happen virtually.'
//     },
//     {
//       question: 'What happens after the 24-hour coding period?',
//       answer: 'After the coding period ends, teams will present their projects to our panel of judges. Winners will be announced within 24 hours of submission deadline, followed by prize distribution.'
//     }
//   ];

//   const toggleFAQ = (index: number) => {
//     setOpenFAQ(openFAQ === index ? null : index);
//   };

//   return (
//     <section id="faq" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//           <span className="text-purple-400 glow-text">Frequently</span> Asked Questions
//         </h2>

//         <div className="max-w-4xl mx-auto">
//           <div className="flex items-center justify-center mb-12">
//             <HelpCircle className="w-12 h-12 text-cyan-400 mr-4" />
//             <p className="text-xl text-gray-300">Got questions? We've got answers!</p>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="glass-card rounded-2xl overflow-hidden border border-gray-700/50"
//               >
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/30 transition-all duration-300"
//                 >
//                   <h3 className="text-lg font-semibold text-white pr-4">
//                     {faq.question}
//                   </h3>
//                   {openFAQ === index ? (
//                     <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
//                   ) : (
//                     <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
//                   )}
//                 </button>
                
//                 {openFAQ === index && (
//                   <div className="px-6 pb-4">
//                     <div className="border-t border-gray-700/50 pt-4">
//                       <p className="text-gray-300 leading-relaxed">
//                         {faq.answer}
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <p className="text-gray-400 mb-4">Still have questions?</p>
//             <button
//               onClick={() => {
//                 const contactSection = document.querySelector('#contact');
//                 if (contactSection) {
//                   contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                 }
//               }}
//               className="glow-button bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
//             >
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;

// import React, { useState } from 'react';
// import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

// const FAQ = () => {
//   const [openFAQ, setOpenFAQ] = useState<number | null>(null);

//   const faqs = [
//     {
//       question: 'Who can participate in CodeFury 8.0?',
//       answer: 'Any student from any college or university can participate. Both undergraduate and postgraduate students are welcome. Professionals and working individuals are not eligible.'
//     },
//     {
//       question: 'What is the team size limit?',
//       answer: 'Teams can have 1-4 members. You can participate individually or form a team of up to 4 people. All team members must be students.'
//     },
//     {
//       question: 'Is there any registration fee?',
//       answer: 'No, CodeFury 8.0 is completely free to participate. There are no hidden charges or registration fees.'
//     },
//     {
//       question: 'What are the available tracks?',
//       answer: 'We have two main tracks: Web Development (build modern websites and web applications) and App Development (create mobile apps using Flutter or Android Studio).'
//     },
//     {
//       question: 'Are first-year students allowed to participate?',
//       answer: 'Yes! First-year students are absolutely welcome. CodeFury is open to students from all years and all branches of engineering.'
//     },
//     {
//       question: 'How do I submit my project?',
//       answer: 'Project submission details will be shared with qualified participants after the preliminary round. Typically, you\'ll need to submit your code repository, demo video, and project documentation.'
//     },
//     {
//       question: 'Is this completely an online hackathon?',
//       answer: 'Yes, CodeFury 8.0 is a fully online hackathon. You can participate from anywhere in the world. All interactions, presentations, and judging will happen virtually.'
//     },
//     {
//       question: 'What happens after the 24-hour coding period?',
//       answer: 'After the coding period ends, teams will present their projects to our panel of judges. Winners will be announced within 24 hours of submission deadline, followed by prize distribution.'
//     }
//   ];

//   const toggleFAQ = (index: number) => {
//     setOpenFAQ(openFAQ === index ? null : index);
//   };

//   return (
//     <section id="faq" className="pt-10 pb-20 relative">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
//           <span className="text-purple-400 glow-text">Frequently</span> Asked Questions
//         </h2>

//         <div className="max-w-4xl mx-auto">
//           <div className="flex items-center justify-center mb-12">
//             <HelpCircle className="w-12 h-12 text-cyan-400 mr-4" />
//             <p className="text-xl text-gray-300">Got questions? We've got answers!</p>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="glass-card rounded-2xl overflow-hidden border border-gray-700/50"
//               >
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/30 transition-all duration-300"
//                 >
//                   <h3 className="text-lg font-semibold text-white pr-4">
//                     {faq.question}
//                   </h3>
//                   {openFAQ === index ? (
//                     <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
//                   ) : (
//                     <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
//                   )}
//                 </button>
//                 {openFAQ === index && (
//                   <div className="px-6 pb-4">
//                     <div className="border-t border-gray-700/50 pt-4">
//                       <p className="text-gray-300 leading-relaxed">
//                         {faq.answer}
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <p className="text-gray-400 mb-4">Still have questions?</p>
//             <button
//               onClick={() => {
//                 const contactSection = document.querySelector('#contact');
//                 if (contactSection) {
//                   contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                 }
//               }}
//               className="glow-button bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
//             >
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who can participate in CodeFury 8.0?',
      answer:
        'Any student from any college or university can participate. Both undergraduate and postgraduate students are welcome. Professionals and working individuals are not eligible.'
    },
    {
      question: 'What is the team size limit?',
      answer:
        'Teams can have 1-4 members. You can participate individually or form a team of up to 4 people. All team members must be students.'
    },
    {
      question: 'Is there any registration fee?',
      answer:
        'No, CodeFury 8.0 is completely free to participate. There are no hidden charges or registration fees.'
    },
    {
      question: 'What are the available tracks?',
      answer:
        'We have two main tracks: Web Development (build modern websites and web applications) and App Development (create mobile apps using Flutter or Android Studio).'
    },
    {
      question: 'Are first-year students allowed to participate?',
      answer:
        'Yes! First-year students are absolutely welcome. CodeFury is open to students from all years and all branches of engineering.'
    },
    {
      question: 'How do I submit my project?',
      answer:
        "Project submission details will be shared with qualified participants after the preliminary round. Typically, you'll need to submit your code repository, demo video, and project documentation."
    },
    {
      question: 'Is this completely an online hackathon?',
      answer:
        'Yes, CodeFury 8.0 is a fully online hackathon. You can participate from anywhere in the world. All interactions, presentations, and judging will happen virtually.'
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
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-purple-400 glow-text">Frequently</span> Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <HelpCircle className="w-12 h-12 text-cyan-400 mr-4" />
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
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <button
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="glow-button bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
