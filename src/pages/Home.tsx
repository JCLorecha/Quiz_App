import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-page">

            <h1>Welcome to Front End Quiz</h1>

            <p>
                Test your knowledge of frontend development.
            </p>

            <button
                className="start-button"
                onClick={() => navigate("/quiz")}
            >
                Start Quiz
            </button>

        </div>
    );
}

export default Home;