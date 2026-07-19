import React, { useState } from 'react';

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

const questions: Question[] = [
  {
    id: 1,
    question: 'What does the "C" in the CIA Triad stand for?',
    options: ['Control', 'Confidentiality', 'Cybersecurity', 'Compliance'],
    correctAnswer: 1,
    explanation: 'The "C" stands for Confidentiality, ensuring secrets are kept secret.',
  },
  {
    id: 2,
    question: 'What does the "I" in the CIA Triad stand for?',
    options: ['Information', 'Identity', 'Integrity', 'Infrastructure'],
    correctAnswer: 2,
    explanation: 'The "I" stands for Integrity, ensuring data remains correct and unaltered.',
  },
  {
    id: 3,
    question: 'What does the "A" in the CIA Triad stand for?',
    options: ['Access', 'Authentication', 'Availability', 'Audit'],
    correctAnswer: 2,
    explanation: 'The "A" stands for Availability, ensuring systems are accessible when needed.',
  },
  {
    id: 4,
    question: 'A stranger reads your bank statement. Which pillar is compromised?',
    options: ['Confidentiality', 'Integrity', 'Availability', 'None'],
    correctAnswer: 0,
    explanation: 'Because unauthorized access occurred, Confidentiality is broken.',
  },
  {
    id: 5,
    question: 'A transaction amount is secretly changed. Which pillar is compromised?',
    options: ['Confidentiality', 'Integrity', 'Availability', 'None'],
    correctAnswer: 1,
    explanation: 'Since the data was improperly altered, Integrity is compromised.',
  },
  {
    id: 6,
    question: 'The banking app and ATMs remain operational. Which pillar is protected?',
    options: ['Confidentiality', 'Integrity', 'Availability', 'None'],
    correctAnswer: 2,
    explanation: 'System uptime and operational readiness fall under Availability.',
  },
  {
    id: 7,
    question: 'Which security control primarily protects Confidentiality?',
    options: ['Checksums', 'Backups', 'Encryption', 'DDoS Protection'],
    correctAnswer: 2,
    explanation: 'Encryption obscures data so unauthorized parties cannot read it.',
  },
  {
    id: 8,
    question: 'Which security control primarily protects Integrity?',
    options: ['Digital signatures', 'Passwords', 'Redundant servers', 'Multifactor Authentication'],
    correctAnswer: 0,
    explanation: 'Digital signatures verify that a message was not altered in transit.',
  },
  {
    id: 9,
    question: 'Which security control primarily protects Availability?',
    options: ['Audit logs', 'DDoS protection', 'Access controls', 'Change monitoring'],
    correctAnswer: 1,
    explanation: 'DDoS protection prevents attackers from overwhelming systems, keeping them available.',
  },
  {
    id: 10,
    question: 'Which cybersecurity role designs and maintains technical defenses?',
    options: ['Auditors', 'Program Managers', 'Penetration Testers', 'Security Engineers'],
    correctAnswer: 3,
    explanation: 'Security Engineers are responsible for designing, building, and maintaining technical defenses.',
  },
];

export const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setIsAnswered(false);
  };

  if (showResult) {
    return (
      <section className="quiz-container slide-section" aria-labelledby="quiz-heading">
        <h2 id="quiz-heading" className="section-title">Knowledge Check Results</h2>
        <div className="card text-center">
          <h3>You scored {score} out of {questions.length}</h3>
          <p className="mt-2 text-secondary">
            {score >= 8 ? 'Excellent work! You have a strong grasp of the CIA Triad.' : 'Good try! Review the concepts above and try again.'}
          </p>
          <button className="btn btn-primary mt-4" onClick={resetQuiz}>
            Retake Quiz
          </button>
        </div>
      </section>
    );
  }

  const q = questions[currentQuestion];

  return (
    <section className="quiz-container slide-section" aria-labelledby="quiz-heading">
      <h2 id="quiz-heading" className="section-title">Knowledge Check</h2>
      <div className="card">
        <div className="quiz-header">
          <span className="quiz-progress">Question {currentQuestion + 1} of {questions.length}</span>
        </div>
        <h3 className="quiz-question">{q.question}</h3>
        
        <div className="quiz-options">
          {q.options.map((option, index) => {
            let btnClass = 'quiz-option-btn';
            if (isAnswered) {
              if (index === q.correctAnswer) {
                btnClass += ' correct';
              } else if (index === selectedOption) {
                btnClass += ' incorrect';
              } else {
                btnClass += ' disabled';
              }
            }
            return (
              <button
                key={index}
                className={btnClass}
                onClick={() => handleOptionClick(index)}
                disabled={isAnswered}
                aria-pressed={selectedOption === index}
              >
                {option}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="quiz-explanation" role="alert">
            <p><strong>{selectedOption === q.correctAnswer ? 'Correct!' : 'Incorrect.'}</strong> {q.explanation}</p>
            <button className="btn btn-primary mt-2" onClick={handleNext}>
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'View Results'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
