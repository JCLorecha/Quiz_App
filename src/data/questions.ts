export interface Question {
    qnum: number;
    question: string;
    options: string[];
    answer: string;
}
export const questions: Question[] = [
    {
        qnum: 1,
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        qnum: 2,
        question: "What is CSS mainly used for?",
        options: [
            "Creating database tables",
            "Styling and designing web pages",
            "Managing server hardware",
            "Writing SQL queries"
        ],
        answer: "Styling and designing web pages"
    },

    {
        qnum: 3,
        question: "Which language is primarily used to add interactivity to web pages?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: "JavaScript"
    },

    {
        qnum: 4,
        question: "Which HTML element is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        answer: "<a>"
    },

    {
        qnum: 5,
        question: "Which CSS property is used to change the text color?",
        options: [
            "font-style",
            "background",
            "color",
            "text-style"
        ],
        answer: "color"
    },

    {
        qnum: 6,
        question: "Which symbol is commonly used to select an element by ID in CSS?",
        options: [
            ".",
            "#",
            "*",
            "@"
        ],
        answer: "#"
    },

    {
        qnum: 7,
        question: "Which keyword is used to declare a variable that cannot be reassigned in JavaScript?",
        options: [
            "var",
            "let",
            "const",
            "static"
        ],
        answer: "const"
    },

    {
        qnum: 8,
        question: "What does DOM stand for?",
        options: [
            "Document Object Model",
            "Data Object Management",
            "Document Orientation Method",
            "Digital Object Model"
        ],
        answer: "Document Object Model"
    },

    {
        qnum: 9,
        question: "Which React Hook is commonly used to manage component state?",
        options: [
            "useState",
            "useStyle",
            "useComponent",
            "useData"
        ],
        answer: "useState"
    },

    {
        qnum: 10,
        question: "Which method is commonly used in React to render multiple items from an array?",
        options: [
            "filter()",
            "map()",
            "push()",
            "sort()"
        ],
        answer: "map()"
    }
];