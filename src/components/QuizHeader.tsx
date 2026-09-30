type QuizHeaderProps = {
    currentQuestion: number;
    totalQuestions: number;
};

function QuizHeader({
    currentQuestion,
    totalQuestions
}: QuizHeaderProps) {
    return (
        <div className="quiz-header">
            <h1>Frontend Quiz</h1>

            <p>
                Question {currentQuestion} of {totalQuestions}
            </p>
        </div>
    );
}

export default QuizHeader;