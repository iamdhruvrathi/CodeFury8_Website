import { Trophy, Medal, Gift, Star } from 'lucide-react';

const PrizePool = () => {
  const prizes = [
    {
      position: '1st Place',
      amount: '₹10,000',
      icon: Trophy,
      color: 'text-yellow-400',
      bg: 'from-yellow-500/20 to-orange-500/20',
      border: 'border-yellow-500/50',
    },
    {
      position: '2nd Place',
      amount: '₹5,000',
      icon: Medal,
      color: 'text-gray-300',
      bg: 'from-gray-400/20 to-gray-600/20',
      border: 'border-gray-500/50',
    },
  ];

  return (
    <section id="prizes" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-audiowide text-center mb-16">
          <span className="text-yellow-400 glow-text">Prize</span> Pool
        </h2>

        <div className="max-w-4xl mx-auto font-nunito">
          {/* Main Prizes */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {prizes.map((prize, index) => (
              <div
                key={index}
                className={`glass-card p-8 rounded-2xl bg-gradient-to-br ${prize.bg} border ${prize.border} transform hover:scale-105 transition-all duration-300`}
              >
                <div className="text-center">
                  <prize.icon className={`w-16 h-16 ${prize.color} mx-auto mb-4`} />
                  <h3 className="text-2xl font-bold text-white mb-2">{prize.position}</h3>
                  <div className={`text-4xl font-bold ${prize.color} mb-2`}>
                    {prize.amount}
                  </div>
                  <p className="text-gray-400">Cash Prize</p>
                </div>
              </div>
            ))}
          </div>

          {/* Consolation Prizes */}
          <div className="glass-card p-8 rounded-2xl text-center">
            <div className="flex items-center justify-center mb-6">
              <Gift className="w-8 h-8 text-purple-400 mr-3" />
              <Star className="w-8 h-8 text-cyan-400 mr-3" />
              <Gift className="w-8 h-8 text-green-400" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-justify">
              <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
                <div className="text-lg font-semibold text-purple-400 mb-2">Certificates</div>
                <p className="text-gray-400 text-sm">
                  Official participation certificates for everyone who competes.
                </p>
              </div>

              <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                <div className="text-lg font-semibold text-green-400 mb-2">Consolation Prize</div>
                <p className="text-gray-400 text-sm">
                  A token of appreciation and recognition for outstanding effort beyond the top winners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;


