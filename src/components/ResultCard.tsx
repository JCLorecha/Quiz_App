type ResultCardProps = {
    totalQuestions: number;
    correctAnswers: number;
    incorrectAnswers: number;
    score: number;
    percentage: number;
};

function ResultCard({
    totalQuestions,
    correctAnswers,
    incorrectAnswers,
    score,
    percentage
}: ResultCardProps) {
    return (
        <div className="result-card">

            <h2>Quiz Completed!</h2>

            <div className="result-score">
                <p>Score</p>
                <h3>
                    {score} / {totalQuestions}
                </h3>
            </div>

            <div className="result-details">

                <div className="result-item">
                    <span>Total Questions</span>
                    <strong>{totalQuestions}</strong>
                </div>

                <div className="result-item">
                    <span>Correct Answers</span>
                    <strong>{correctAnswers}</strong>
                </div>

                <div className="result-item">
                    <span>Incorrect Answers</span>
                    <strong>{incorrectAnswers}</strong>
                </div>

                <div className="result-item">
                    <span>Percentage</span>
                    <strong>{percentage}%</strong>
                </div>

            </div>

        </div>
    );
}

export default ResultCard;