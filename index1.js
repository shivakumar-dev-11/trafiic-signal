const question = [
    { category:"science",
    question:"how the plants prepare food? ",
    choices:["through photosynthesis"," water","air", "sunlight",],
    answer:  "through photosynthesis",

    },
    {category:"history",
    question:"who established the maratha empire? ",
    choices:[" chola raja"," chathrapathi shivaji maharaj"," chandraguptha", "ashoka",],
    answer:  "chathrapathi shivaji maharaj",


    },
    {category:" physics",
    question:"what is SI unit of force ? ",
    choices:[" newton" , " ohms law"," force"," speed",],
    answer: " newton"  

    },
    {category:"social ",
    question:"which is called as blue planet ?  ",
    choices:[" sun"," mercury"," earth"," pluto"],
    answer: "earth "  


    },
    {category:"English ",
    question:"she_____to school every day  ",
    choices:["go","goes","going"," went"],
    answer: "goes"  


    },
];
function getRandomQuestion(questionArray) {
  const randomIndex = Math.floor(Math.random() * questionArray.length);
  return questionArray[randomIndex];
}
function getRandomQuestion(questionArray) {
  const randomIndex = Math.floor(Math.random() * questionArray.length);
  return questionArray[randomIndex];
}


function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}
function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const selectedQuestion = getRandomQuestion(question);
const computerChoice = getRandomComputerChoice(selectedQuestion.choices);

console.log("Question:", selectedQuestion.question);
console.log("Computer chose:", computerChoice);
console.log(getResults(selectedQuestion, computerChoice));