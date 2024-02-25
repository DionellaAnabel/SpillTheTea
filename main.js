let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes =
    [
        'What’s your biggest fear?','What’s your love language?',
        'How do you like to be comforted when you’re sad or upset?',
        'Who do you look up to the most, and what qualities do you love about that person?',
        'What embarasses you?',
        'Who was the last person to make you cry and why?',
        'Do you have any regrets? If so, what are they?',
        'Out of all your family members, who are you closest to?',
        'What’s one thing most people don’t know about you?',
        'Do you want to have kids one day? How many?',
        'If you could change one thing about yourself, what would it be?',
        'Do you believe in soulmates?',
        'When you can\'t sleep, what keeps you up at night?',
        'What has your hardest goodbye in life been so far?',
        'What\'s the last lie you told?',
        'What\'s the best compliment you\'ve ever received?',
        'What do you consider your best physical feature?',
        'What are the top three things that stress you out?',
        'What are the top three things that stress you out?',
        'What are the top three things that stress you out?',
        'When was the last time you were jealous and why?',
        'What are the top three ways you deal with stress?',
        'What’s the worst decision you’ve ever made?',
        'When’s the last time you felt inspired to create something?',
        'When’s the last time you felt inspired to create something?',
        'Who was your first friend, and are they still in your life?',
        'Who was your first friend, and are they still in your life?',
        'Would you ever consider being in a long-distance relationship?',
        'What do you think the best way to resolve conflict is?',
        'What does friendship mean to you?',

    ];
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
    output.innerHTML = randomQuote;
})