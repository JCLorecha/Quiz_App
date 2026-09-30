type ProgressBarProps = {
    answers: (boolean | null)[];
};

function ProgressBar({ answers }: ProgressBarProps) {
    return (
        <div className="progress-container">
            {answers.map((answer, index) => (
                <div
                    key={index}
                    className={`progress-box ${
                        answer === true
                            ? "correct"
                            : answer === false
                            ? "incorrect"
                            : ""
                    }`}
                >
                    {answer === true
                        ? "✓"
                        : answer === false
                        ? "X"
                        : index + 1}
                </div>
            ))}
        </div>
    );
}

export default ProgressBar;