import { useState, useEffect } from 'react';

interface ScoresProps {
  score: number;
  experience: number;
  referral: number;
}

const Scores: React.FC<ScoresProps> = ({ score: initialScore, experience, referral }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prevScore) => {
        const increment = Math.ceil(initialScore / 200); // increment by 1/300th of the initial score every 10ms
        return prevScore + increment > initialScore ? initialScore : prevScore + increment; // cap the score at the initial value
      });
    }, 10);

    return () => clearInterval(interval);
  }, [initialScore]);

  return (
    <div dir="rtl" className="flex justify-center items-center gap-5 max-md:flex-col">
      <div className="bg-green-100 gap-2 rounded-xl text-sm text-black px-3 py-2 flex justify-center items-center">
        <p>امتیاز : </p>
        <p>{score}</p>
      </div>
      <div className="bg-green-100 gap-2 rounded-xl text-sm text-black px-3 py-2 flex justify-center items-center">
        <p>سابقه : </p>
        <p>{experience}</p>
        <p>روز</p>
      </div>
      <div className="bg-green-100 gap-2 rounded-xl text-sm text-black px-3 py-2 flex justify-center items-center">
        <p>معرفی : </p>
        <p>{referral}</p>
      </div>
    </div>
  );
};

export default Scores;