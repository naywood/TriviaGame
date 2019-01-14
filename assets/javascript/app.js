$('#start').on('click', function(){
    $('#start').remove();
    $('#inst').remove();
})


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
    question: "What two material's are capable of killing White Walkers?",
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
    answers: ["Ser Pounce","Boots", "Nymeria", "Lady Whiskers"],
    correctAnswer: "Ser Pounce",
    },
    {
    question: "Who created the secret tunnel in the sewers under Casterly Rock?",
    answers: ["Lord Baelish","Tyrion Lannister", "Lancel Lannister", "Cersei Lannister"],
    correctAnswer: "Tyrion Lannister",
    },
    {
    question: "At the end of his training, what must an Unsullied doto prove he has no mercy or weakness?",
    answers: ["Castrate himself", "Castrate another Unsullied","Kill a newborn slave child","kill a master"],
    correctAnswer: "Kill a newborn slave child",
    },
    {
    question: "What is the name of Rob Stark's wife?",
    answers: ["Walda","Talisa","Shirei","Tifini"],
    correctAnswer: "Talisa",
    },
    {
    question: "Who says 'Killing is the sweetest thing there is'?",
    answers: ["Oberyn Martell","Jaime Lannister", "Rob Baratheon", "Sandor Clegane" ],
    correctAnswer: "Sandor Clegane",
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
    answers: ["Wildlings", "A small army fof "],
    correctAnswer: "",
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
    answers: ["Blackfish", "Mokingbird", "Raven", "Otter"],
    correctAnswer: "Mockingbird",
    },
    {
    question: "?",
    answers: [],
    correctAnswer: "",
    },
    {
    question: "?",
    answers: [],
    correctAnswer: "",
    },
    {
    question: "?",
    answers: [],
    correctAnswer: "",
    },
    {
    question: "?",
    answers: [],
    correctAnswer: "",
    },

]