const data = [
    {
      id: 1,
      question: "ASP.NET Core applications can target which of the following?",
      answers: [
        { answer: ".NET Core", isCorrect: false },
        { answer: ".NET Framework 4.x", isCorrect: false },
        { answer: ".NET Standart", isCorrect: false },
        { answer: "All of the above", isCorrect: true },
      ],
    },
    {
      id: 2,
      question: "Which of the following is an entry point of ASP.NET Core application?",
      answers: [
        { answer: "Main method of Program class", isCorrect: true },
        { answer: "Configure method of Startup class", isCorrect: false },
        { answer: "ConfigureService method of Startup clas", isCorrect: false },
        { answer: "Application_start method of Global.asax", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "Every command in .NET Core command line interface starts with ____?",
      answers: [
        { answer: "core", isCorrect: false },
        { answer: "dotnet", isCorrect: true },
        { answer: ".net", isCorrect: false },
        { answer: "aspdotnet", isCorrect: false },
      ],
    },
    {
      id: 4,
      question: "Which of the following is environment variable in ASP.NET Core application?",
      answers: [
        { answer: "ASPNET_ENV", isCorrect: false },
        { answer: " ENVIRONMENT_VARIABLE", isCorrect: false },
        { answer: "ASPNETCORE_ENVIRONMENT", isCorrect: true },
        { answer: "ENVIRONMENT", isCorrect: false },
      ],
    },
    {
      id: 5,
      question: "What is the name of the design pattern used for view rendering in ASP.NET Core?",
    answers: [
      { answer: "Model-View-Controller (MVC)", isCorrect: true },
      { answer: "Model-View-Presenter (MVP)", isCorrect: false },
      { answer: "Model-View-Update (MVU)", isCorrect: false },
      { answer: "Layered Architecture", isCorrect: false },
      ],
    },
  ];

  const gameScreen = document.querySelector(".game")
  const submitScreen = document.querySelector(".confirmation")
  const resultScreen = document.querySelector(".result")
  const question = document.querySelector(".question")
  const answerContainer = document.querySelector(".answers")
  const prev = document.querySelector(".prev")
  const next = document.querySelector(".next")
  const back = document.querySelector(".back")
  const submit = document.querySelector(".sub")
  const restart = document.querySelector(".restart")
  
  let qIndex = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let total = 0;
  let selectedAnswer;

  const showConfirmation = () => {
    submitScreen.style.display = "block"
    gameScreen.style.display = "none"
  }

  const showResult = () => {
    resultScreen.style.display = "block"
    submitScreen.style.display = "none"
  }

  const showGame = () => {
    gameScreen.style.display = "block"
    submitScreen.style.display = "none"
  }


  const showQuestion = (qNumber) => {
    if(qIndex === data.length) return showConfirmation()
    selectedAnswer = null // Prevent user from navigating to next question without selecting an answer
    question.textContent = data[qNumber].id + " - " + data[qNumber].question
    answerContainer.innerHTML = data[qNumber].answers.map((item, index) =>
    `
    <div class="answer">
        <input name="answer" type="radio" id=${index} value=${item.isCorrect} >
        <label for=${index} >${item.answer}</label>
    </div>
    `
    ).join(""); // Removes commas between answers

    selectAnswer()
  };

  const selectAnswer = () => {
    answerContainer.querySelectorAll("input").forEach(el => {
      el.addEventListener("click", (e) => {
        selectedAnswer = e.target.value
      })
    }
    )
  }

  const prevQuestion = () => {
    prev.addEventListener("click", () => {
      if(qIndex > 0){
        qIndex--;
        showQuestion(qIndex)
      }
    })
  }

  const nextQuestion = () => {
    next.addEventListener("click", () => {
      if(selectedAnswer !== null){
        if(qIndex < data.length) {
        qIndex++;
        showQuestion(qIndex)
        }
      } else alert("Select an answer!");
    })
  }

  const backToTest = () => {
    back.addEventListener("click", () => {
      showGame()
      qIndex--;
      showQuestion(qIndex)
    })
  }

  const submitAnswers = () => {
    submit.addEventListener("click", () => {
      showResult()
    })
  } 

  showQuestion(qIndex)
  nextQuestion()
  prevQuestion()
  backToTest()
  submitAnswers()
