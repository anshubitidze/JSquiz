
var questions = [
    {
        text: "Which of the following is a greenhouse gas responsible for trapping heat in the Earth's atmosphere?\n(A) Oxygen\n (B) Nitrogen\n (C) Carbon Dioxide\n (D) Hydrogen\n",
        answer:"C" && "c"
    },
    {
        text: "Which river is the longest in the world?\n (A) Amazon River\n (B) Nile River\n (C) Mississippi River\n (D) Yangtze River \n",
        answer:"B" && "b"
    },
    {
        text:"Who wrote the famous play 'Romeo and Juliet'?\n (A) Charles Dickens\n (B) William Shakespeare\n (C) Jane Austen\n (D) Mark Twain\n",
        answer: "B" && "b"
    }

]
var score = 0;
for(var i =0; i<questions.length; i++){
    var response = prompt(questions[i].text)
    if(response == questions[i].answer){
        score ++;
        alert("Correct!")
    }else{
        alert("Wrong!")
    }
}
alert("your score is " + score + "/" +  questions.length)


