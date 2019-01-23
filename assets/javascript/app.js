//click events
$('#start').on('click', function(){
    $('#start').remove();
    $('#inst').remove();
    game.loadQuestion();
})

//clicking of one of the answer buttons button
$(document).on('click','#answer-button', function(e){
    game.clicked(e);
    $("#questions").fadeIn(3000);
    $("#answers").fadeOut(3000);


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
    question: "What two material(s) are capable of killing White Walkers?",
    answers: ["Wildfire", "Weirwood and Dragonglass", "Valyrian Steel and Dragonglass","Valyrian Steel"],
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
    question: "Who is the Onion Knight?",
    answers: ["Davos Seaworth", "Bron","Ilyn Payne", "Podrick Payne"],
    correctAnswer: "Davos Seaworth",
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
    question: "What are the 3 cities that make up Slaver's Bay?",
    answers: ["Qarth, Tarth, Casterly Rock", "Astapoll, Volantis, Qarth", "Astapor, Yunkai, Meereen","Red Waste, Valyia, Vaes"],
    correctAnswer: "Astapor, Yunkai, Meereen",
    },
    {
    question: "What is the Widow's Wail?",
    answers: ["The song played at the Red Wedding", "The name of a Greyjoy Ship","Joffrey's Valyrian steel sword", "Poison used to kill Lady Olenna"],
    correctAnswer: "Joffrey's Valyrian steel sword",
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
    question: "How did Davos find out about Princess Shireen's death?",
    answers: ["The Red Woman told him", "He watched as she burned at the stake","He found the wooden stag, charred", "The Lord of Light showed him"],
    correctAnswer: "He found the wooden stag, charred",
    },
    {
    question: "What are the names of Daenery's dragons?",
    answers: ["Dragon, Rheagal, Viserys", "Drogon, Eagon, Viserion","Drogon, Rhaegal, Viserion", "Smaug, Saphira, Dragon"],
    correctAnswer: "Drogon, Rhaegal, Viserion",
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
    counter: 15,
    correct: 0,
    incorrect: 0,
    unanswered:0,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter===0){
            console.log("TIMES UP!");
            game.timeUp();
        }
    },
    loadQuestion: function(){
        timer = setInterval(game.countdown,1000);
        $('#counter').html("<h2>15</h2>");
        $("#questions").html(questions[this.currentQuestion].question);
        $("#answers").html("");
        $("#message").html("");
        for(var i=0; i<questions[this.currentQuestion].answers.length; i++){
            $("#answers").append(' <button id="answer-button" class="btn btn-outline-dark" id="button-'+i+'" data-name="'+questions[this.currentQuestion].answers[i]+'">'+questions[this.currentQuestion].answers[i]+'</button>');
        };
    },
    nextQuestion: function(){
        game.counter = 15;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();


    },
    timeUp: function(){
        clearInterval(timer);
        game.unanswered++;
        $('#message').html('<h2> OUT OF TIME!</h2>');
        $('#message').append('<h2> The correct answer was: '+questions[this.currentQuestion].correctAnswer+ '</h2>');
        if(this.currentQuestion === questions.length-1){
            setTimeout(game.results, 2*1000);
        }else{
            setTimeout(game.nextQuestion, 2*1000); 
        }
    },
    results: function(){
        clearInterval(timer);
        $('#message').html("<h2> all done! </h2>");
        $('#message').append("<h3> Correct: "+game.correct+ "</h3>");
        $('#message').append("<h3> incorrect: "+game.incorrect+ "</h3>");
        $('#message').append("<h3> unanswered: "+game.unanswered+ "</h3>");
        $('#message').append("<button id='reset'>Reset</button");
    },
    clicked: function(e){
        clearInterval(timer);
        if ($(e.target).data("name")==questions[this.currentQuestion].correctAnswer){
            game.answeredCorrect();
            }else{
            game.answeredIncorrect();    
            }
    },
    answeredCorrect: function(){
        clearInterval(timer);
        game.correct++;
        $('#message').html('You got it right!');
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results, 2*1000);
        } else{
            setTimeout(game.nextQuestion, 2*1000);
        }
    },
    answeredIncorrect: function(){
        clearInterval(timer);
        game.incorrect++;
        $('#message').html('You got it wrong!<');
        $('#message').html('The correct answer was:'+questions[game.currentQuestion].correctAnswer +'!');
        if(game.currentQuestion === questions.length-1){
            setTimeout(game.results, 2*1000);
        } else{
            setTimeout(game.nextQuestion, 2*1000);
        }
       
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