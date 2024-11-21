function startQuiz() {
    document.querySelector(".content").classList.add("hidden");
    document.querySelector("#quiz").classList.remove("hidden");
}

function submitQuiz() {
    const totalQuestions = 2;
    let score = 0;

    // Example scoring logic
    if (document.querySelector('input[name="q1"]:checked')) score++;
    if (document.querySelector('input[name="q2"]:checked')) score++;

    document.querySelector("#quiz").classList.add("hidden");
    document.querySelector("#results").classList.remove("hidden");
    document.querySelector("#score").textContent = `${score}/${totalQuestions}`;
}
function goToStartPage() {
    // Hide all sections
    document.querySelector("#quiz").classList.add("hidden");
    document.querySelector("#results").classList.add("hidden");

    // Show the start content
    document.querySelector(".content").classList.remove("hidden");
}
function showIntro() {
    // Hide all sections
    document.querySelector("#start-page").classList.add("hidden");
    document.querySelector("#quiz").classList.add("hidden");
    document.querySelector("#results").classList.add("hidden");

    // Show the intro page
    document.querySelector("#intro-page").classList.remove("hidden");
}

function showQuiz() {
    // Hide all sections
    document.querySelector("#start-page").classList.add("hidden");
    document.querySelector("#intro-page").classList.add("hidden");
    document.querySelector("#results").classList.add("hidden");

    // Show the quiz page
    document.querySelector("#quiz").classList.remove("hidden");
}

function startQuiz() {
    showQuiz();
}

function goToStartPage() {
    // Hide all sections
    document.querySelector("#quiz").classList.add("hidden");
    document.querySelector("#intro-page").classList.add("hidden");
    document.querySelector("#results").classList.add("hidden");

    // Show the start page
    document.querySelector("#start-page").classList.remove("hidden");
}

function submitQuiz() {
    const totalQuestions = 2;
    let score = 0;

    // Example scoring logic
    if (document.querySelector('input[name="q1"]:checked')?.value === "Bekämpa klimatförändringar") score++;
    if (document.querySelector('input[name="q2"]:checked')?.value === "Att balansera miljö, ekonomi och samhälle") score++;

    // Hide quiz and show results
    document.querySelector("#quiz").classList.add("hidden");
    document.querySelector("#results").classList.remove("hidden");
    document.querySelector("#score").textContent = `${score}/${totalQuestions}`;
}
