import { useLocation, useNavigate } from "react-router-dom";

import ResultCard from "../components/ResultCard";

function Result() {
    const location = useLocation();
    const navigate = useNavigate();

    const score = location.state?.score ?? 0;
    const answers = location.state?.answers ?? [];

    const totalQuestions = answers.length;
    const correctAnswers = score;
    const incorrectAnswers =
        totalQuestions - correctAnswers;

    const percentage =
        totalQuestions > 0
            ? Math.round(
                (correctAnswers / totalQuestions) * 100
            )
            : 0;

    return (
        <div className="result-page">

            <ResultCard
                totalQuestions={totalQuestions}
                correctAnswers={correctAnswers}
                incorrectAnswers={incorrectAnswers}
                score={score}
                percentage={percentage}
            />

            <div className="result-buttons">

                <button
                    className="result-button"
                    onClick={() => navigate("/quiz")}
                >
                    Retake Quiz
                </button>

                <button
                    className="result-button secondary"
                    onClick={() => navigate("/")}
                >
                    Return Home
                </button>

            </div>

        </div>
    );
}

export default Result;