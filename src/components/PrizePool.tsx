

import { Trophy, Medal, BadgeDollarSign } from 'lucide-react';

const PrizePool = () => {
  const prizes = [
    {
      position: '1st PRIZE',
      amount: '₹20,000',
      icon: Trophy,
      color: 'text-yellow-400 drop-shadow-[0_0_35px_#00f6ff]',
      bg: 'from-yellow-500/20 to-orange-500/20',
      border: 'border-yellow-500/50',
      benefits: [],
    },
    {
      position: '2nd PRIZE',
      amount: '₹15,000',
      icon: Medal,
      color: 'text-cyan-400 drop-shadow-[0_0_35px_#00f6ff]',
      bg: 'from-gray-400/20 to-gray-600/20',
      border: 'border-gray-500/50',
      benefits: [],
    },
    {
      position: '3rd PRIZE',
      amount: '₹10,000',
      icon: BadgeDollarSign,
      color: 'text-fuchsia-500 drop-shadow-[0_0_35px_#00f6ff]',
      bg: 'from-orange-500/20 to-red-500/20',
      border: 'border-orange-500/50',
      benefits: [],
    },
  ];

  const consolationPrize = {
    position: 'CONSOLATION PRIZES WORTH',
    amount: '₹15,000',
    icon: BadgeDollarSign,
    color: 'text-green-400 drop-shadow-[0_0_35px_#00f6ff]',
    bg: 'from-gray-400/20 to-gray-600/20',
    border: 'border-gray-500/50',
    benefits: [],
  };

  return (
    <section id="prizes" className="pt-12 pb-20 relative font-[Poppins]">
      <div className="container mx-auto px-6">
        <h2 className=" font-audiowide text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-wide text-white">
         <span className='text-cyan-400 glow-text'>PRIZE</span> POOL
        </h2>

        <div className="text-center mb-8">
          <h3 className="text-white text-2xl md:text-3xl font-nunito font-bold mb-2">
             TOTAL PRIZE POOL OF ₹60,000
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-6xl mx-auto">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`glass-card p-8 font-nunito rounded-2xl bg-gradient-to-br ${prize.bg} border ${prize.border} hover:scale-105 transform transition-all duration-300`}
            >
              <div className="text-center mb-4">
                <prize.icon className={`w-12 h-12 mx-auto mb-3 ${prize.color}`} />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-wide">
                  {prize.position}
                </h3>
                <div className={`text-3xl md:text-4xl font-extrabold ${prize.color}`}>
                  {prize.amount}
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-left text-sm md:text-base text-gray-300 pl-4 list-disc">
                {prize.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
      <div className="md:col-span-2 md:ml-32 md:col-start-1 mt-6">
        <div
              className={`md:ml-[16.75rem] md:mr-0 font-nunito glass-card p-8 rounded-2xl bg-gradient-to-br ${consolationPrize.bg} border ${consolationPrize.border} hover:scale-105 transform transition-all duration-300`}
            >
          <div className=" text-center mb-4">
            <consolationPrize.icon className={`w-12 h-12 mx-auto mb-3 ${consolationPrize.color}`} />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 tracking-wide">
              {consolationPrize.position}
            </h3>
            <div className={`text-3xl md:text-4xl font-nunito font-extrabold ${consolationPrize.color}`}>
              {consolationPrize.amount}
            </div>
          </div>
          <ul className="mt-4 space-y-2 text-left text-sm md:text-base text-gray-300 pl-4 list-disc">
            {consolationPrize.benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>

        </div>

        {/* Certificate Info */}
        <div className="glass-card p-6 md:p-8 rounded-2xl text-center max-w-4xl mx-auto border border-white/10 bg-white/5">
          <p className="text-white text-base md:text-lg font-medium tracking-wide">
            <span className="text-purple-400 font-semibold">Certificate of Participation</span> will Be Provided For Everyone!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;

