import { useCountdown } from '../hooks/useCountdown';

interface CountdownTimerProps {
  targetDate: Date;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const timeLeft = useCountdown(targetDate);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="relative group"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl md:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
          <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-orange-500/30 group-hover:border-orange-500/50 transition-all duration-300 group-hover:scale-105">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 mb-1 md:mb-2 tabular-nums">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm lg:text-base text-gray-400 font-medium uppercase tracking-wider">
              {unit.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
