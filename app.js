/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'The initial, non-diffused echoes of a signal are referred to as ___ ' ,
      answers: [
        'redux',
        'reverb',
        'metaverb',
        'early-reflection'
      ],
      correctAnswer: 'early-reflection'
    },
    {
      question: 'The Fletcher-Munson Curve visually describes a given sounds perceived _______ relative to frequency ',
      answers: [
        
        'polish',
        'swing',
        'loudness',
        'key'
      ],
      correctAnswer: 'loudness'
    },
    {
      question: 'Swung grooves lack ____',
      answers: [
        'bass',
        'quantization',
        'hi end',
        'balance'
      ],
      correctAnswer: 'quantization'
    },
    {
      question: 'Full-sphere surround sound formats are called ____',
      answers: [
        'ambisonics',
        'stereo',
        'mono',
        'multisonics'
      ],
      correctAnswer: 'ambisonics'
    },
    {
      question: 'Phase cancellation can be a result of ____',
      answers: [
        'standingwaves',
        'crashing waves',
        'wave checks',
        'laying waves'
      ],
      correctAnswer: 'standingwaves'
    },
    
    
  ],
  quizstarted:true,
  questionNumber: 0,
  score: 0
};
/*****************************************************************/
/* ALL div/html components that are being used*/

function startScreen(){
  return`
  <div class="box">
      <h2>Click below to begin! </h2>
      <form id="start"> 
       <button class = "startbutton">start quiz</button>
       
      </form>
    </div>
    `;
};

function generateanswers(num){

  const items = store.questions[num].answers.map((item) => generateItemElement(item));
  
  return `<form id = "options">${items.join("")}</form>`;
  
  }
function generateItemElement(option){
  return`
  <button class = "options" id =${option} >${option}</button>
  `
}
  
function questionScreen(questionNumber){
  let html =`<div class="box">
    <h4>Question ${store.questionNumber + 1 }</h4>
    <p>Your score is ${store.score}/${store.questions.length}</p>
    <h3>${store.questions[store.questionNumber].question}</h3>
   `
  let options=generateanswers(questionNumber);
  
  let wholequetionsandchoices = html+options;
  
  return wholequetionsandchoices;
  };
  function endScreen(){
    return`
    <div class="box">
        <h2>Quiz complete!</h2>
        <h3>You got ${store.score} out of ${store.questions.length} correct</h3>
        <form id="end"> 
         <button class ="restart" >restart quiz</button> 
        </form>
    </div>
    `
  }

/*****************************************************************/
/* alll the handle functions */






function handleStart(){
  $('#start').on('click', '.startbutton', event => {
    event.preventDefault();
    console.log('Quiz has been started');
    store.quizstarted=false;
    render();//re render to question
  });
}



function handleScore(val){
  console.log(store.questions[store.questionNumber].correctAnswer)
  if(val === store.questions[store.questionNumber].correctAnswer){
    store.score++;
    return true
  }
  console.log(store.score);
  return false
}



function handleQuestion(){
  $("#options").on('click',".options", event => {
    event.preventDefault();
    console.log('Quiz answer been submitted');
    let answerchosen = event.currentTarget.getAttribute("id");
    handleScore(answerchosen);//handles if answer is correct
    store.questionNumber++;  //goes to next question
    render();//calls back to render next question everything
  });
};

function handleEnd(){
  $('#end').on('click', '.restart', event => {
    event.preventDefault();
    console.log('Quiz has been restarted');
    store.quizstarted=true;
    store.score=0;
    store.questionNumber = 0;
    render();
    $(handleStart);
  });
}


/*****************************************************************/
/* the master Render function*/

function render(){
  //console.log(store.quizstarted)
  if(store.quizstarted){
    console.log('`startscreen` ran');
    const start = startScreen();
    $(".main").html(start);
  }
  else if(store.questionNumber > -1 && store.questionNumber<store.questions.length){
    console.log('`questionscreen` ran');
    const questionscreen = questionScreen(store.questionNumber);
    $(".main").html(questionscreen);
    $(handleQuestion);//to see all options again in new dom
  }
  else{
    console.log('`endscreen` ran')
    const end = endScreen();
    $(".main").html(end);
    $(handleEnd);//to see all options again in new dom
  }
}
/*****************************************************************/
/* the whole quiz app*/

function quiz() {
  render();
  handleStart();
  handleQuestion();
  handleScore();
  handleEnd();
}

$(quiz);


/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */