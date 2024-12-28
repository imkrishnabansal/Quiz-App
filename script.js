const questions = [
    {
        ques: "Which company developed JavaScript?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Netscape", correct: true },
            { text: "Google", correct: false },
            { text: "Apple", correct: false },
        ],
    },
    {
        ques: "Which of the following is a JavaScript framework?",
        answers: [
            { text: "React", correct: true },
            { text: "Django", correct: false },
            { text: "Laravel", correct: false },
            { text: "Flutter", correct: false },
        ],
    },
    {
        ques: "What keyword is used to declare a variable in JavaScript?",
        answers: [
            { text: "var", correct: false },
            { text: "let", correct:  false },
            { text: "const", correct: true },
            { text: "int", correct: false },
        ],
    },
    {
        ques: "What is the output of '2' + 2 in JavaScript?",
        answers: [
            { text: "4", correct: false },
            { text: "'22'", correct: true },
            { text: "NaN", correct: false },
            { text: "undefined", correct: false },
        ],
    },
    {
        ques: "Which of the following is not a primitive data type in JavaScript?",
        answers: [
            { text: "String", correct: false },
            { text: "Number", correct: false },
            { text: "Object", correct: true },
            { text: "Boolean", correct: false },
        ],
    },
    {
        ques: "How can you add an element to the end of an array in JavaScript?",
        answers: [
            { text: "push()", correct: true },
            { text: "pop()", correct: false },
            { text: "shift()", correct: false },
            { text: "unshift()", correct: false },
        ],
    },
    {
        ques: "Which operator is used for strict equality comparison?",
        answers: [
            { text: "==", correct: false },
            { text: "=", correct: false },
            { text: "===", correct: true },
            { text: "!==", correct: false },
        ],
    },
    {
        ques: "What is the purpose of the `map()` method in JavaScript?",
        answers: [
            { text: "To iterate through an array", correct: false },
            { text: "To transform each element of an array", correct: true },
            { text: "To filter elements of an array", correct: false },
            { text: "To sort elements of an array", correct: false },
        ],
    },
    {
        ques: "Which method converts a JSON object to a string?",
        answers: [
            { text: "JSON.stringify()", correct: true },
            { text: "JSON.parse()", correct: false },
            { text: "JSON.toString()", correct: false },
            { text: "None of the above", correct: false },
        ],
    },
    {
        ques: "What is the default value of an uninitialized variable in JavaScript?",
        answers: [
            { text: "null", correct: false },
            { text: "0", correct: false },
            { text: "undefined", correct: true },
            { text: "NaN", correct: false },
        ],
    },
    {
        ques: "How do you create a function in JavaScript?",
        answers: [
            { text: "function myFunction() {}", correct: true },
            { text: "let myFunction = function() {}", correct: true },
            { text: "function: myFunction() {}", correct: false },
            { text: "function => myFunction() {}", correct: false },
        ],
    },
    {
        ques: "Which of the following is a falsy value in JavaScript?",
        answers: [
            { text: "0", correct: true },
            { text: "'0'", correct: false },
            { text: "[]", correct: false },
            { text: "{}", correct: false },
        ],
    },
    {
        ques: "How can you find the length of a string in JavaScript?",
        answers: [
            { text: "str.length()", correct: false },
            { text: "length(str)", correct: false },
            { text: "str.length", correct: true },
            { text: "strlen(str)", correct: false },
        ],
    },
    {
        ques: "What will `typeof NaN` return?",
        answers: [
            { text: "'undefined'", correct: false },
            { text: "'number'", correct: true },
            { text: "'object'", correct: false },
            { text: "'NaN'", correct: false },
        ],
    },
    {
        ques: "What does the `this` keyword refer to in JavaScript?",
        answers: [
            { text: "The current function", correct: false },
            { text: "The global object", correct: false },
            { text: "The current object context", correct: true },
            { text: "None of the above", correct: false },
        ],
    },
    {
        ques: "Which method is used to remove the last element of an array?",
        answers: [
            { text: "shift()", correct: false },
            { text: "pop()", correct: true },
            { text: "splice()", correct: false },
            { text: "remove()", correct: false },
        ],
    },
    {
        ques: "What is the purpose of the `filter()` method in JavaScript?",
        answers: [
            { text: "To transform elements of an array", correct: false },
            { text: "To remove elements from an array", correct: false },
            { text: "To create a new array with elements that pass a test", correct: true },
            { text: "To sort elements of an array", correct: false },
        ],
    },
    {
        ques: "Which of the following is a feature of ES6?",
        answers: [
            { text: "Arrow functions", correct: false },
            { text: "Classes", correct: false },
            { text: "Generators", correct: false },
            { text: "All of the above", correct: true },
        ],
    },
    {
        ques: "How can you create an object in JavaScript?",
        answers: [
            { text: "Using curly braces {}", correct: true },
            { text: "Using square brackets []", correct: false },
            { text: "Using parentheses ()", correct: false },
            { text: "Using <object>", correct: false },
        ],
    },
    {
        ques: "What is the purpose of the `reduce()` method in JavaScript?",
        answers: [
            { text: "To sum up all elements of an array", correct: true },
            { text: "To reduce the size of an array", correct: false },
            { text: "To filter elements of an array", correct: false },
            { text: "To sort elements of an array", correct: false },
        ],
    },
];


const questionelement = document.getElementById("ques");
const answerbtn = document.getElementById("ansbtn");
const nextbtn = document.getElementById("next");

let currentquestionindex = 0;
let score = 0;

function startQuiz() {
    currentquestionindex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetstate();
    let curr = questions[currentquestionindex];
    let quesno = currentquestionindex + 1;
    questionelement.innerHTML = quesno + ". " + curr.ques;

    curr.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text; // Fix incorrect reference to `answerbtn.text`
        button.classList.add("btn");
        answerbtn.appendChild(button);
        
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetstate(){
    nextbtn.style.display = "none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}
function selectAnswer(e){
    const selectbtn = e.target;
    const iscorrect = selectbtn.dataset.correct ==="true";
    if(iscorrect){
        selectbtn.classList.add("correct");
        score++;
    }
    else{
        selectbtn.classList.add("incorrect")
    }
    Array.from(answerbtn.children).forEach(button=>{
        if(button.dataset.correct=== "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbtn.style.display ="block"
}
function showscore(){
    resetstate();
    questionelement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextbtn.innerHTML = "Play Again"
    nextbtn.style.display = "block";
}


function handleNextbtn(){
    currentquestionindex++;
    if(currentquestionindex<questions.length){
        showQuestion();
    }
    else{
        showscore();
    }
}
nextbtn.addEventListener("click",()=>{
    if(currentquestionindex<questions.length){
        handleNextbtn();
    }
    else{
        startQuiz();
    }
})


startQuiz();
