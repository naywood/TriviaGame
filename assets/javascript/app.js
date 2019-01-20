//click events
$('#start').on('click', function(){
    $('#start').remove();
    $('#inst').remove();
    game.loadQuestion();
})

//clicking of one of the answer buttons button
$(document).on('click','#answer-button', function(e){
    game.clicked(e);
    $('#questions').fadeOut(3000);
    $('#answers').fadeOut(3000);

})

//clicking of the reset button
$(document).on('click','#reset',function(){
    game.reset();
})

//global variable object containing all questions, possible answers, and correct answers
var questions = [
    {
    question: "Where did Daenerys Targaryen eventually hatch her dragon eggs?",
    answers: [ "In a lightening storm", "In a fireplace", "In a funeral pyre", "In a cave"],
    correctAnswer: "In a funeral pyre",
    },
    {
    question: "The phrase 'Valar Morghulis' or 'all men must die' is usually responded with:",
    answers: ["Valar Rohnas","Valar Dohaeris", "Valar Dothraki"],
    correctAnswer: "Valar Dohaeris",
    },
    {
    question: "Wh at two material's are capable of killing White Walkers?",
    answers: ["Wildfire and Snowballs", "Weirwood and Dragonglass", "Valyrian Steel and Dragonglass","Valyrian Steel and Wildfire"],
    correctAnswer: "Valyrian Steel and Dragonglass",
    },
    {
    question: "How many times has the God of Light brought Beric Dondarrion back to life?",
    answers: ["three times","four times","five times","six times","he died"],
    correctAnswer: "six times",
    },
    {
    question: "What is the name of King Tommen's cat?",
    answers: ["Ser Pounce","Boots", "Ser Tomcat", "Lady Whiskers"],
    correctAnswer: "Ser Pounce",
    },
    {
    question: "Who created the secret tunnel in the sewers under Casterly Rock?",
    answers: ["Lord Baelish","Tyrion Lannister", "Lancel Lannister", "Cersei Lannister"],
    correctAnswer: "Tyrion Lannister",
    },
    {
    question: "At the end of his training, what must an Unsullied do to prove he has no mercy or weakness?",
    answers: ["Castrate himself", "Castrate another Unsullied","Kill a newborn slave child","kill a master"],
    correctAnswer: "Kill a newborn slave child",
    },
    {
    question: "What is the name of Rob Stark's wife?",
    answers: ["Walda","Talisa","Shirei","Tifini"],
    correctAnswer: "Talisa",
    },
    {
    question: "What is the official first sign of winter'?",
    answers: ["A White Walker takes a baby","Colder temperatures", "A white raven", "Appearance or birth of dire wolves" ],
    correctAnswer: "A white raven",
    },
    {
    question: "What direwolf dies first?",
    answers: ["Nymeria","Summer","Ghost", "Lady"],
    correctAnswer: "Lady",
    },
    {
    question: " 'You killed her children. Say her name!' Prince Oberyn Martell is shouting at the Mountain to say what name?",
    answers: ["Meria Martell", "Myriah Martell","Doran Martel", "Elia Martell"],
    correctAnswer: "Elia Martell",
    },
    {
    question: "What is Eddard Stark's kinship to Jon Snow",
    answers: ["Lord","Father","Uncle","Jon is his ward."],
    correctAnswer: "Uncle",
    },
    {
    question: "How did Jojen Reed die?",
    answers: ["Wildlings killed him", "A small army of the dead","Brandon Stark killed him","He froze to death"],
    correctAnswer: "A small army of the dead got to him",
    },
    {
    question: "Who is the Queen of Thorns?",
    answers: ["Cersei Lannister","Margaery Tyrell","Olenna Tyrell","Lynna Mormont"],
    correctAnswer: "Olenna Tyrell",
    },
    {
    question: "Who brings Ned Stark water while in his Black Cell?",
    answers: ["Petyr Baelish", "Robert Baratheon",  "Maester Pycelle", "Lord Varys"],
    correctAnswer: "Lord Varys",
    },
    {
    question: "What is Little Finger's sigil?",
    answers: ["Blackfish", "Mockingbird", "Raven", "Otter"],
    correctAnswer: "Mockingbird",
    },
    {
    question: "Who helped Sansa escape King's Landing following Joffrey's death?",
    answers: ["Dontos Hollard", "Petyr Baelish","Lord Varys", "Shae"],
    correctAnswer: "Dontos Hollard",
    },
    {
    question: "Where does Arya go to train as a Faceless Man?",
    answers: ["Volantis, House of the Undying", "Bravos", "Bravos; House of Black and White", "Meereen"],
    correctAnswer: "Bravos; House of Black and White",
    },
    {
    question: "Who killed Jon Arryn?",
    answers: ["The Hound", "Cersei Lannister", "Little Finger", "Lysa Arryn"],
    correctAnswer: "Lysa Arryn",
    },
    {
    question: "Who was the last known Targaryen in Westeros?",
    answers: ["Rheagar Targaryen","Aegon Targaryen","Aemon Targaryen","Viserys Targaryen"],
    correctAnswer: "Aemon Targaryen",
    },

]
//entire game js is held here
var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    unanswered:0,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("TIMES UP!");
            game.timeUp();
        }
    },
    loadQuestion: function(){
        timer = setInterval(game.countdown,1000);
        $('#counter').html("30");
        $("#questions").append(questions[game.currentQuestion].question);
        for(var i=0; i<questions[game.currentQuestion].answers.length; i++){
            $("#answers").append(' <button id="answer-button" class="btn btn-outline-dark" id="button-'+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>')
        };
    },
    nextQuestion: function(){
        game.counter =30;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
        $('#questions').fadeIn(3000);
        $('#answers').fadeIn(3000);

    },
    timeUp: function(){
        clearInterval(timer);
        game.unanswered++;
        $('#message').html('<h2> OUT OF TIME!</h2>');
        $('#message').append('<h2> The correct answer was:'+questions[game.currentQuestion].correctAnswer+ '</h2>');
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results, 3*1000);
        }else{
            setTimeout(game.nextQuestion, 3*1000); 
        }
    },
    results: function(){
        clearInterval(timer);
        $('#message').html("<h2> all done </h2>");
        $('#message').append("<h3> Correct:"+game.correct+ "</h3>");
        $('#message').append("<h3> incorrect:"+game.incorrect+ "</h3>");
        $('#message').append("<h3> unanswered:"+game.unanswered+ "</h3>");
        $('#message').append("<button id='reset'>Reset</button");
    },
    clicked: function(e){
        clearInterval(timer);
        if ($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
            game.answeredCorrect();
            clearInterval(timer);
            game.correct++;
            $('#message').html('<h2>YOU GOT IT RIGHT!!!!!!!</h2>');
            if(game.currentQuestion==questions.length-1){
                setTimeout(game.results, 3*1000);
            }else{
                setTimeout(game.nextQuestion, 3*1000); 
            }
        } else{
            game.answeredIncorrect();
            clearInterval(timer);
            game.incorrect++; 
            $('#message').html('<h2> OUT OF TIME!</h2>');
            $('#message').append('<h2> The correct answer was: '+questions[game.currentQuestion].correctAnswer+ '</h2>');
            $('#message').html('<h2>WRONG!!!!!!!</h2>');
            $('#message').append('<h2> The correct answer was: '+questions[game.currentQuestion].correctAnswer+ '</h2>');
            if(game.currentQuestion==questions.length-1){
                setTimeout(game.results, 3*1000);
            }else{
                setTimeout(game.nextQuestion, 3*1000); 
            }
        }
    },
    answeredCorrect: function(){

    },
    answeredIncorrect: function(){
       
    },
    reset: function(){
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();

    }

}