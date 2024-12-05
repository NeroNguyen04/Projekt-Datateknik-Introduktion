function toggleMenuIcon(menuIcon) {
    document.getElementById("rightMenu").classList.toggle("change");
    document.getElementById("topMenu").classList.toggle("change");
    document.getElementById("leftMenu").classList.toggle("change");
    menuIcon.classList.toggle("change");

}
function printQuestion() {
    var questionContainer = document.getElementById("questions");
    questionContainer.innerHTML = "";

    //Frågor lista
    const questionList = [
        { question: "Fråga 1", options: ["1", "2", "3", "4"], correct: "1" },
        { question: "Fråga 2", options: ["1", "2", "3", "4"], correct: "2" },
        { question: "Fråga 3", options: ["1", "2", "3", "4"], correct: "3" },
        { question: "Fråga 4", options: ["1", "2", "3", "4"], correct: "4" },
        { question: "Fråga 5", options: ["5", "6", "7", "8"], correct: "5" },
        { question: "Fråga 6", options: ["5", "6", "7", "8"], correct: "6" },
        { question: "Fråga 7", options: ["5", "6", "7", "8"], correct: "7" },
        { question: "Fråga 8", options: ["5", "6", "7", "8"], correct: "8" },
        { question: "Fråga 9", options: ["9", "10", "11", "12"], correct: "9" },
        { question: "Fråga 10", options: ["9", "10", "11", "12"], correct: "10" },
        { question: "Fråga 11", options: ["9", "10", "11", "12"], correct: "11" },
        { question: "Fråga 12", options: ["9", "10", "11", "12"], correct: "12" },
        { question: "Fråga 13", options: ["13", "14", "15", "16"], correct: "13" },
        { question: "Fråga 14", options: ["13", "14", "15", "16"], correct: "14" },
        { question: "Fråga 15", options: ["13", "14", "15", "16"], correct: "15" },
        { question: "Fråga 16", options: ["13", "14", "15", "16"], correct: "16" },
        { question: "Fråga 17", options: ["17", "18", "19", "20"], correct: "17" },
        { question: "Fråga 18", options: ["17", "18", "19", "20"], correct: "18" },
        { question: "Fråga 19", options: ["17", "18", "19", "20"], correct: "19" },
        { question: "Fråga 20", options: ["17", "18", "19", "20"], correct: "20" }
    ];
    //15 frågor väljs slumpmässigt av 20 st
    const selectedQuestions = getRandomQuestions(questionList, 15);

    selectedQuestions.forEach((qObj, index) => {
        qObj.options = shuffleArray(qObj.options);

        let questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        let questionElement = document.createElement("p");
        questionElement.textContent = `${index + 1}. ${qObj.question}`;
        questionDiv.appendChild(questionElement);

        qObj.options.forEach((option, optionIndex) => {
            let optionDiv = document.createElement("div");
            optionDiv.classList.add("option");

            let radioButton = document.createElement("input");
            radioButton.type = "radio";
            radioButton.name = `question-${index + 1}`;
            radioButton.value = option;
            radioButton.id = `question-${index + 1}-option-${optionIndex}`;

            let label = document.createElement("label");
            label.textContent = option;
            label.htmlFor = radioButton.id;

            optionDiv.appendChild(radioButton);
            optionDiv.appendChild(label);

            questionDiv.appendChild(optionDiv);
        });

        questionContainer.appendChild(questionDiv);
    });

    let submitButton = document.createElement("button");
    submitButton.textContent = "Svara";
    submitButton.onclick = function () {
        submitQuiz(selectedQuestions);
    };
    questionContainer.appendChild(submitButton);
}

function getRandomQuestions(questions, count) {
    //Vi använder Math.random() - 0.5 för att sortera med ett tal i intervallet -1 < 0 < 1 dvs att om siffran blir -1 så prioriteras fråga B jämfört med fråga A 
    let shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function submitQuiz(questions) {
    const userAnswers = questions.map((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question-${index + 1}"]:checked`);
        return {
            question: q.question,
            options: q.options,
            correct: q.correct,
            userAnswer: selectedAnswer ? selectedAnswer.value : null
        };
    });

    const allAnswered = userAnswers.every(answer => answer.userAnswer !== null);
    if (!allAnswered) {
        alert("Svara på alla frågor först.");
        return;
    }

    localStorage.setItem("quizResults", JSON.stringify(userAnswers));

    window.location.href = "Svar.html";
}
function displayResults() {
    const resultContainer = document.getElementById("results");

    const quizResults = JSON.parse(localStorage.getItem("quizResults"));

    if (!quizResults) {
        resultContainer.innerHTML = "<p>Svara på quizet först?</p>";
        return;
    }

    quizResults.forEach((result, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("result");

        const questionElement = document.createElement("p");
        questionElement.innerHTML = `<strong>${index + 1}. ${result.question}</strong>`;
        questionDiv.appendChild(questionElement);

        result.options.forEach((option, optionIndex) => {
            const optionDiv = document.createElement("div");
            optionDiv.classList.add("radio-button");

            const circleDiv = document.createElement("div");
            circleDiv.classList.add("circle");

            if (option === result.correct) {
                circleDiv.classList.add("green-circle");
            } else if (option === result.userAnswer) {
                circleDiv.classList.add("red-circle");
            } else {
                circleDiv.classList.add("empty-circle");
            }

            const label = document.createElement("label");
            label.textContent = option;

            optionDiv.appendChild(circleDiv);
            optionDiv.appendChild(label);
            questionDiv.appendChild(optionDiv);
        });

        resultContainer.appendChild(questionDiv);
    });
}


