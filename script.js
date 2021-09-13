const quizData = [
    {
        question : "Which language runs on browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct : "d"
    },
    {
        question : "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Hot Mail",
        c: "How to Make Lasagna",
        d: "Hyper Markup Language",
        correct : "a"
    },
    {
        question : "What is the correct sequence of HTML tags for starting a webpage?",
        a: "Head, Title, HTML",
        b: "Title, Head, HTML",
        c: "HTML, Head, Title",
        d: "HTML,  Title, Head",
        correct : "c"
    },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswer(){
    answerElements.forEach(answerElements => answerElements.checked = false);        
}

function getSelected(){
    let answer
    answerElements.forEach(answerElement => {
        if (answerElement.checked){
            answer = answerElement.id
        }
    })

    return answer;
}

submitBtn.addEventListener('click',() => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz <quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `<h2> You answered ${score} / ${quizData.length} questions correct<h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }
})