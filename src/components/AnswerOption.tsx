type AnswerOptionProps = {
    option: string;
    selected: boolean;
    onSelect: () => void;
};

function AnswerOption({
    option,
    selected,
    onSelect
}: AnswerOptionProps) {
    return (
        <button
            className={`answer-option ${selected ? "selected" : ""}`}
            onClick={onSelect}
        >
            {option}
        </button>
    );
}

export default AnswerOption;