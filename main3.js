let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes =
[
    'Do you have a crush?',
    'Have you had a crush?',
    'Name two people you think should get together.',
    'Who are two people who should break up?',
    'Do you have a crush on a friend?',
    'Who is someone you want to be friends with?',
    'Who is someone you really admire?',
    'What’s an embarrassing thing you’ve done and never told anyone about?',
    'Was there an instance where you were downbad for someone?',
    'What’s the cringiest thing you’ve ever put up on social media?',
    'What’s your guilty pleasure?',
    'How much does your personality change when you’re around different people?',
    'Who is someone you secretly hate?',
    'Who is someone that has been annoying lately?',
    'Do you believe in love at first sight?',
    'Have you been in a relationship before?',
    'Are you in a relationship? If so, how is it going?',
    'Would you be okay with long distance relationships?',
    'Have you ever been hit on in public?',
    'How do you feel about PDA?',
    'What is your ideal type?',
    'Who do you think in your friend group is most likely to become a millionaire?',
    'Who do you think in your friend group is most likely to become a celebrity?',
    'Out of the two of you, who is the most caring?',
    'What is the most attractive quality in a man/woman?',
    'Would you ever take somebody back who cheated on you?',
    'What is a relationship deal-breaker for you?',
    'Do you ever want to have a family of your own someday?',
    'Have you heard of love languages? What is your love language?',
    'What is your favorite book or romantic movie?',
    'What is the sweetest thing anyone has ever done for you?',
    'Have you ever been kissed?',
    'What\'s the most wild or rebellious thing you have done?',
    'Who do you think needs to be humbled?',
];
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
    output.innerHTML = randomQuote;
})