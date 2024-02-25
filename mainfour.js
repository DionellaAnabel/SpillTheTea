let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes =
[
    'Do you believe in ghosts?',
    'Do you like cilantro?',
    'Do you think water is wet?',
    'What’s an interesting conspiracy theory that you believed?',
    'Do you sing in the shower?',
    'Have you ever had deja vu?',
    'Do you believe in aliens?',
    'What is my favorite food?',
    'What job do you think I would be perfect for?',
    'Where can you always find me?',
    'Do you know my middle name?',
    'Do you know about my birthday?',
    'What’s my favorite color?',
    'If I called you in the middle of the night, would you pick me up?',
    'Would you like me if I were a worm?',
    'What’s one common behavior that you find inexplicably irritating?',
    'Do you have any specific sounds that just make you cringe? (like nails on a chalkboard)',
    'How do you feel about people who consistently show up late?',
    'Are there any words or phrases that people commonly misuse that bother you?',
    'How do you feel about people who overuse emojis or text speak in professional settings?',
    'Is there a trend or fad that you just couldn’t understand or get behind?',
    'Have you ever experienced road rage?',
    'Who was your first kiss with, and did you enjoy it?',
    'Who was your first love, and why did you love them?',
    'Do you prefer texting or talking in person?',
    'What’s something you’ve done that you didn’t expect to do at this age?',
    'Would you ever move out of state?',
    'Do you have a strange or irrational fear?',
    'What was your best year so far, and why?',
    'How were your summers spent when you were younger?',
    'What was your best birthday and how did you celebrate?',
    'Do you have a sweet tooth, why or why not?',
    'What’s your zodiac sign, and does it resonate with you?',
    'What’s your go-to coffee order?',
    'How would you improve your current living space right now, if you could?',
    'How would you improve your current living space right now, if you could?',
    'Do you prefer savory or sweet? Why?',
    'Do you like exercising? Why or why not?',

];
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
    output.innerHTML = randomQuote;
})