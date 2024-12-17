function toggleMenuIcon(menuIcon) {
    //När denna metod anropas, anropas metoderna change för varje meny i css filen
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
        { question: 
            "Vad innebär klimatförändringar?", 
            options: 
            ["Permanenta och märkbara förändringar i klimatsystem", 
            "Förändringar i temperaturen mellan två dagar", 
            "Solen lyser starkare på dagen är morgonen", 
            "Människan påverkas inte men planeten påverkas mycket och permanent"], 

            correct: "Permanenta och märkbara förändringar i klimatsystem" },

        { question: 
            "Varför är klimatförändringar viktigt att ha kunskap om vid arbete relaterat till hållbar utveckling? ", 
            options: 
            ["Det betyder samma sak som hållbar utveckling", 
            "Klimatförändringar styr människor och andra arters levnadssätt", 
            "Det är inte alls det viktigt ", 
            "Klimatförändringar påverkar bara planeten men det är viktigt att känna till ändå."], 

            correct: "Klimatförändringar styr människor och andra arters levnadssätt" },

        { question: 
            "Varför kan inte bara en del av klimatsystemet förändras?", 
            options: 
            ["Det kan de visst det", 
            "De kan inte förändras på grund av att avståndet mellan havet och atmosfären är för stort", 
            "De är väldigt små och specifika delar, därför förändras de ensamma", 
            "De olika delarna är stora och nära sammanhängande. De har en stark koppling med varandra"], 
            correct: "De olika delarna är stora och nära sammanhängande. De har en stark koppling med varandra" },

        { question: 
            "Vad kallas den tidsperiod vi lever i just nu för ibland?", 
            options: 
            ["Antropocen", 
            "De lilla istiden", 
            "Medeltida värmeperioden", 
            "Planetdöden"], 
            correct: "Antropocen" },

        { question: 
            "Vad kallas de förändringar i klimatet som är orsakade av människan?", 
            options: 
            ["Antropogena förändringar", 
            "Ko förändringar", 
            "Naturliga förändringar", 
            "Fossila förändringar"], 
            correct: "Antropogena förändringar" },

        { question: 
            "Vilken mening passar bäst in för att beskriva social rättvisa?", 
            options: 
            ["Sträva efter att alla ska ha lika många följare på sociala medier", 
            "Sträva efter en jämn fördelning av ekonomiskt välstånd, resurser och bra levnadssätt oavsett var i världen man bor", 
            "Sträva efter att alla ska vara exakt likadana", 
            "Social rättvisa innebär att det bara är vi i i-länderna som ska ha jämställdhet och jämlikhet"], 
            correct: "Sträva efter en jämn fördelning av ekonomiskt välstånd, resurser och bra levnadssätt oavsett var i världen man bor" },

        { question: 
            "Vad är ett exempel på en långsiktigt konsekvens av dåliga sanitära förhållanden?", 
            options: 
            ["En minskad mängd utbildade kvinnor, det finns i vissa länder stora problem för flickor att uträtta sina behov", 
            "Jag vet inte", 
            "Folk blir sjuka här och nu", 
            "Det blir inga konsekvenser, människors behov kan uträttas varsomhelst"], 
            correct: "En minskad mängd utbildade kvinnor, det finns i vissa länder stora problem för flickor att uträtta sina behov" },

        { question: 
            "Varför är jämlikhet och jämställdhet viktigt inom social rättvisa?", 
            options: 
            ["Det är viktigt för att politiker pratar om det", 
            "För att personer som endast bor i Europa ska få det bättre", 
            "Det är inte viktigt", 
            "Det blir svårt att uppfylla andra delar inom social rättvisa om vi inte vill och arbetar för jämlikhet och jämställdhet"], 
            correct: "Det blir svårt att uppfylla andra delar inom social rättvisa om vi inte vill och arbetar för jämlikhet och jämställdhet" },

        { question: 
            "Varför är det viktigt att människor kan leva i trygghet?", 
            options: 
            ["Det ökar sannolikheten till att människor går till skola och jobb", 
            "Kriminella inte tjänar pengar", 
            "Det är roligare att leva i trygghet", 
            "Trygghet spelar ingen roll"], 
            correct: "Det ökar sannolikheten till att människor går till skola och jobb" },

        { question: 
            "Varför är tillgången till rent vatten och el viktigt?", 
            options: 
            ["Vatten är gott", 
            "Man kan minska risken uttorkning och lysa upp gator under dygnets mörka timmar och det ökar livskvaliteten", 
            "Man kan spela playstation när man vill", 
            "Rent vatten spelar ingen roll och man ska ändå sova på natten"], 
            correct: "Man kan minska risken uttorkning och lysa upp gator under dygnets mörka timmar och det ökar livskvaliteten" },
        { question: 
            "Vad betyder biologisk mångfald?", 
            options: 
            ["Endast mångfalden av växtarter på jorden", 
            "Mångfalden av livsformer, inklusive arter, ekosystem och genetisk variation", 
            "Endast djurlivets mångfald", 
            "Endast genetisk variation inom en art"], 
            correct: "Mångfalden av livsformer, inklusive arter, ekosystem och genetisk variation" },

        { question: 
            "Vilken roll spelar pollinatörer i ekosystemen?", 
            options: 
            ["De producerar frön för växter", 
            "De säkerställer att växter kan befruktas och producera frukt", 
            "De bryter ner döda organismer", 
            "De skyddar växter från rovdjur"], 
            correct: "De säkerställer att växter kan befruktas och producera frukt" },

        { question: 
            "Vad är en av huvudorsakerna till förlust av biologisk mångfald i Sverige?", 
            options: 
            ["Översvämning", 
            "Jordbruk och avskogning", 
            "Vattenförorening", 
            "Ökad turism"], 
            correct: "Jordbruk och avskogning" },

        { question: 
            "Vad är ett effektivt sätt att minska matsvinnet enligt texten?", 
            options: 
            ["Köp mer mat än du behöver", 
            "Lita på bäst före-datum för att avgöra om maten är säker att äta", 
            "Använd ditt lukt- och smaksinne för att kontrollera om maten fortfarande är bra", 
            "Kasta ut mat som inte ser fräsch ut"], 
            correct: "Använd ditt lukt- och smaksinne för att kontrollera om maten fortfarande är bra" },

        { question: 
            "Vilket av följande är ett enkelt sätt att skydda den biologiska mångfalden i ditt vardagliga liv?", 
            options: 
            ["Öka köttkonsumtionen för att stödja ekosystemen", 
            "Välj miljömärkt eller certifierat livsmedel", 
            "Köp mat från andra länder utan miljöcertifiering", 
            "Gör inga ändringar i din kost eller konsumtionsvanor"], 
            correct: "Välj miljömärkt eller certifierat livsmedel" },

        { question: 
            "Vad innebär cirkulär ekonomi?", 
            options: 
            ["Att öka konsumtionen av nya varor", 
            "Att producera och konsumera på ett mer hållbart sätt", 
            "Att skapa mer avfall och utvinna mer resurser", 
            "Att fokusera på kortsiktig ekonomisk tillväxt"], 
            correct: "Att producera och konsumera på ett mer hållbart sätt" },

        { question: 
            "Vilket av följande ingår INTE av Europeiska unionens avfallshierarki?", 
            options: 
            ["Minska avfall", 
            "Återanvända material", 
            "Bränn avfall för energi", 
            "Kasta avfall på soptippar"], 
            correct: "Kasta avfall på soptippar" },

        { question: 
            "Hur hanteras produkter i linjär ekonomi?", 
            options: 
            ["De återanvänds, repareras och återvinns", 
            "De är designade för att hålla och repareras", 
            "De produceras, används och slängs sedan", 
            "De hyrs eller delas av andra"], 
            correct: "De produceras, används och slängs sedan" },

        { question: 
            "Varför är produktdesign viktig i en cirkulär ekonomi?", 
            options: 
            ["Det fokuserar på att skapa produkter som ska slängas", 
            "Det syftar till att designa produkter som är hållbara, reparerbara och återvinningsbara", 
            "Den fokuserar på att göra produkter för kortvarig användning", 
            "Det minskar produktionen av återanvändbara material"], 
            correct: "Det syftar till att designa produkter som är hållbara, reparerbara och återvinningsbara" },

        { question: 
            "Vad kan man göra för att stödja en cirkulär ekonomi?", 
            options: 
            ["Köpa produkter som är svåra att återvinna", 
            "Köpa bara nya produkter istället för att återanvända gamla", 
            "Reparera eller återanvända föremål istället för att slänga dem", 
            "Öka mängden avfall vi producerar"], 
            correct: "Reparera eller återanvända föremål istället för att slänga dem" }
    ];
    //15 frågor väljs slumpmässigt av 20 st
    const selectedQuestions = getRandomQuestions(questionList, 15);

    //För varje fråga skapas alternativ och knappar som användaren kan klicka
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

    //En "Svara" knapp skapas
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
    //Frågorna sorteras i samband med föregående metod
    return array.sort(() => Math.random() - 0.5);
}

function submitQuiz(questions) {
    //UserAnswers hämtar en lista baserad på alla frågor och dess egenskaper samt användarens svar
    const userAnswers = questions.map((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question-${index + 1}"]:checked`);
        return {
            question: q.question,
            options: q.options,
            correct: q.correct,
            userAnswer: selectedAnswer ? selectedAnswer.value : null
        };
    });
    //Vi kollar om alla frågor har blivit besvarad
    const allAnswered = userAnswers.every(answer => answer.userAnswer !== null);
    if (!allAnswered) {
        alert("Svara på alla frågor först.");
        return;
    }
    //Svaren sparas ner i webbläsarens minne
    localStorage.setItem("quizResults", JSON.stringify(userAnswers));

    //Därefter tas anvåndaren till svar sidan där man kan se frågorna man har fått rätt på
    window.location.href = "Svar.html";
}
function displayResults() {
    const resultContainer = document.getElementById("results");

    //Svaren som svarades på förra sidan hämtas från webbläsarens minne
    const quizResults = JSON.parse(localStorage.getItem("quizResults"));

    //Kollar om det finns sparad data
    if (!quizResults) {
        resultContainer.innerHTML = "<p>Svara på quizet först?</p>";
        return;
    }

    //Den sparade data används för att skapa en identisk sida med samma frågor, samma alternativ i samma ordning
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

            //Vilken typ av cirkel ska alternativet ha för egenskap (Grön för rätt, röd för fel där användaren har besvarat, annars grå för alternativ som inte blev vald)
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


