let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes =
[
    'What\’s your zodiac sign?',
    'What’s your MBTI?',
    'On vacation, are you the relax-by-the-pool type or a get-up-and-go adventurer?',
    'What college major are you thinking of choosing and why?',
    'What classes are you taking currently?',
    'What classes have you taken in the past?',
    'What’s your current hobby?',
    'What’s your favorite singer or band?',
    'What’s your favorite song?',
    'How would you describe your music taste?',
    'What’s your comfort food?',
    'What’s your favorite game?',
    'What kind of gifts do you like?',
    'If you had to describe yourself in only three words, what would you choose?',
    'What words do you think your friends would choose to describe you?',
    'What are your pet peeves?',
    'What would your dream vacation consist of?',
    'Are you competitive?',
    'What sports do you like?',
    'What’re your red flags?',
    'What’s your beige flags?',
    'What was your last romantic relationship like?',
    'What\s your absolute dream job?',
    'What was the last movie you watched in a theater?',
    'What’s your favorite show or movie?',
    'How is your sleep schedule?',
    'Are you a cat or dog person?',
    'What kind of weather do you like?',
    'What’s your favorite restaurant or cafe?',
    'What’s your favorite fast food place?',
    'Do you have any hidden talents?',
    'What’s your favorite holiday?',
    'Where are you from?',
    'Would you rather live by the ocean or in the mountains',
    'What’s the longest trip you’ve taken?',
    'What’s a bad habit you’re trying to break?',
    'What is your most-used emoji?',
    'Are you a morning person or a night owl?',
    'Do you like to recharge alone or around other people?',
    'What\'s your favorite childhood memory?',
    'Do you have dreams? What\’s an interesting dream you had lately?',
    'What really makes you angry?',
    'What do you need more of in your life?',
    'What do you need less of in your life?',
    'How would you describe your fashion? Do you like shopping?',
    'Can you cook?',
    'Do you like books? If so, what\'s your favorite book?',
    'Do you prefer books or movies?',
    'What is your favorite trait in me?',
    'What’s your favorite subject?',
    'How was your first impression of me?',
];
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
    output.innerHTML = randomQuote;
})
