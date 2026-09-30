import AnswerOption from "./AnswerOption";
import type { Question } from "../data/questions";

type QuestionCardProps = {
    question: Question;
    selectedAnswer: string;
    onSelectAnswer: (answer: string) => void;
};

function QuestionCard({
    question,
    selectedAnswer,
    onSelectAnswer
}: QuestionCardProps) {
    return (
        <div className="question-card">
            <h2>
                Question {question.qnum}
            </h2>

            <p className="question-text">
                {question.question}
            </p>

            <div className="answer-options">
                {question.options.map((option) => (
                    <AnswerOption
                        key={option}
                        option={option}
                        selected={selectedAnswer === option}
                        onSelect={() => onSelectAnswer(option)}
                    />
                ))}
            </div>
        </div>
    );
}

export default QuestionCard;