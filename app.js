//map to loop throught the quiz 
/*
function generateShoppingListElements(items){
  // Create new array of HTML strings
  const elements = items.map((item, index) => {
    return generateShoppingItemHtml(item, index);//make this functio for quiz
  });

  // Join the array into a single string and return it
  return elements.join();
}
use find(), .closest(), etc
.data(), .attr()
.html()//be wary
name shoulkd be the same for all not be linked togehter for inputs
gisabled atrrbute theat can be set on input fiels so if they are right
required 

the for attr of the label tag should be the same as id


    <div class="box">
      <h2>this is the end of the quiz</h2>
      <h3>score</h3>
      <form> 
       <button>restart quiz</button> 
      </form>
  </div>

*/
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  quizstarted:true,
  questionNumber: 0,
  score: 0
};

function startScreen(){
  return`
  <div class="box">
      <h2>this is the start of the quiz</h2>
      <form id="start"> 
       <button class = "startbutton">start quiz</button> 
      </form>
    </div>
    `;
};


function handleStart(){
  
$('#start').on('click', '.startbutton', event => {
  event.preventDefault();
  console.log('Quiz has been started');
  store.quizstarted=false;
  console.log(store.quizstarted)
  render();
});
}
function questionScreen(){
return`<div class="box">
      <h4>Question 1</h4>
      <form>
       <button>Option</button>
      </form>
    </div>
    `
};


/*function handleQuestion();
*/
function render(){
  console.log(store.quizstarted)
  if(store.quizstarted){
    console.log('`startscreen` ran');
    const start = startScreen();
    $(".main").html(start);
    return
  }
  else if(store.questionNumber > -1 && store.questionNumber<store.questions.length){
    console.log('`questionscreen` ran');
    const questionscreen = questionScreen();
    $(".main").html(questionscreen);
    //console.log("it is now false");
  }

}
/*
else if{questionNumber > 0 && questionNumber<questions.length}{
  //render the question and options
}
else{
  //render the end screen 
}*/

function renderseverything() {
render();
handleStart();
}


$(renderseverything);


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