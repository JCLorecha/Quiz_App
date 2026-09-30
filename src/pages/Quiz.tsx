import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { questions } from "../data/questions";

import QuestionCard from "../components/QuestionCard";
import QuizHeader from "../components/QuizHeader";
import ProgressBar from "../components/ProgressBar";

function Quiz() {
    const navigate = useNavigate();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const [answers, setAnswers] = useState<(boolean | null)[]>(
        Array(questions.length).fill(null)
    );

    const [score, setScore] = useState(0);

    const currentQuestion = questions[currentIndex];

    const handleNext = () => {
        const isCorrect =
            selectedAnswer === currentQuestion.answer;

        const updatedAnswers = [...answers];

        updatedAnswers[currentIndex] = isCorrect;

        setAnswers(updatedAnswers);

        const newScore =
            score + (isCorrect ? 1 : 0);

        setScore(newScore);

        if (currentIndex === questions.length - 1) {
            navigate("/result", {
                state: {
                    score: newScore,
                    answers: updatedAnswers
                }
            });

            return;
        }

        setSelectedAnswer("");
        setCurrentIndex(currentIndex + 1);
    };

    return (
        <div className="quiz-page">

            <QuizHeader
                currentQuestion={currentIndex + 1}
                totalQuestions={questions.length}
            />

            <ProgressBar
                answers={answers}
            />

            <QuestionCard
                question={currentQuestion}
                selectedAnswer={selectedAnswer}
                onSelectAnswer={setSelectedAnswer}
            />

            {selectedAnswer && (
                <button
                    className="next-button"
                    onClick={handleNext}
                >
                    {currentIndex === questions.length - 1
                        ? "Finish Quiz"
                        : "Next"}
                </button>
            )}

        </div>
    );
}

export default Quiz;