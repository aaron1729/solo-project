import React, { Component } from 'react';




// for now, hard-code this array.


const quoteArr = [
    {
        "q": "Knowing is not enough, we must apply. Willing is not enough, we must do.  ",
        "a": "Bruce Lee",
        "c": "74",
        "h": "<blockquote>&ldquo;Knowing is not enough, we must apply. Willing is not enough, we must do.  &rdquo; &mdash; <footer>Bruce Lee</footer></blockquote>"
    },
    {
        "q": "Be true to yourself, help others, make each day your masterpiece",
        "a": "John Wooden",
        "c": "64",
        "h": "<blockquote>&ldquo;Be true to yourself, help others, make each day your masterpiece&rdquo; &mdash; <footer>John Wooden</footer></blockquote>"
    },
    {
        "q": "To live is to be willing to die over and over again.",
        "a": "Pema Chodron",
        "c": "52",
        "h": "<blockquote>&ldquo;To live is to be willing to die over and over again.&rdquo; &mdash; <footer>Pema Chodron</footer></blockquote>"
    },
    {
        "q": "If your mind is empty, it is always ready for anything, it is open to everything.",
        "a": "Shunryu Suzuki",
        "c": "81",
        "h": "<blockquote>&ldquo;If your mind is empty, it is always ready for anything, it is open to everything.&rdquo; &mdash; <footer>Shunryu Suzuki</footer></blockquote>"
    },
    {
        "q": "A man with outward courage dares to die: a man with inner courage dares to live.",
        "a": "Lao Tzu",
        "c": "80",
        "h": "<blockquote>&ldquo;A man with outward courage dares to die: a man with inner courage dares to live.&rdquo; &mdash; <footer>Lao Tzu</footer></blockquote>"
    },
    {
        "q": "It is better to disappoint people with the truth than to appease them with a lie.",
        "a": "Simon Sinek",
        "c": "81",
        "h": "<blockquote>&ldquo;It is better to disappoint people with the truth than to appease them with a lie.&rdquo; &mdash; <footer>Simon Sinek</footer></blockquote>"
    },
    {
        "q": "Life is a journey, not a destination.",
        "a": "Dan Millman",
        "c": "37",
        "h": "<blockquote>&ldquo;Life is a journey, not a destination.&rdquo; &mdash; <footer>Dan Millman</footer></blockquote>"
    },
    {
        "q": "Forgive yourself for your faults and your mistakes and move on.",
        "a": "Les Brown",
        "c": "63",
        "h": "<blockquote>&ldquo;Forgive yourself for your faults and your mistakes and move on.&rdquo; &mdash; <footer>Les Brown</footer></blockquote>"
    },
    {
        "q": "You can discover what your enemy fears most by observing the means he uses to frighten you.",
        "a": "Eric Hoffer",
        "c": "91",
        "h": "<blockquote>&ldquo;You can discover what your enemy fears most by observing the means he uses to frighten you.&rdquo; &mdash; <footer>Eric Hoffer</footer></blockquote>"
    },
    {
        "q": "Obstacles don't block the path, they are the path.",
        "a": "Zen Proverb",
        "c": "50",
        "h": "<blockquote>&ldquo;Obstacles don't block the path, they are the path.&rdquo; &mdash; <footer>Zen Proverb</footer></blockquote>"
    },
    {
        "q": "You're never too old for anything.",
        "a": "Betty White",
        "c": "34",
        "h": "<blockquote>&ldquo;You're never too old for anything.&rdquo; &mdash; <footer>Betty White</footer></blockquote>"
    },
    {
        "q": "The moment you stop to think about whether you love someone, you've already stopped loving that person forever.",
        "a": "Carlos Ruiz Zafon",
        "c": "111",
        "h": "<blockquote>&ldquo;The moment you stop to think about whether you love someone, you've already stopped loving that person forever.&rdquo; &mdash; <footer>Carlos Ruiz Zafon</footer></blockquote>"
    },
    {
        "q": "No one ever is defeated until defeat has been accepted as a reality.",
        "a": "Napoleon Hill",
        "c": "68",
        "h": "<blockquote>&ldquo;No one ever is defeated until defeat has been accepted as a reality.&rdquo; &mdash; <footer>Napoleon Hill</footer></blockquote>"
    },
    {
        "q": "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
        "a": "Dale Carnegie",
        "c": "107",
        "h": "<blockquote>&ldquo;Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.&rdquo; &mdash; <footer>Dale Carnegie</footer></blockquote>"
    },
    {
        "q": "People who belittle people, will be LITTLE people, and will accomplish very Little",
        "a": "Norman Vincent Peale",
        "c": "82",
        "h": "<blockquote>&ldquo;People who belittle people, will be LITTLE people, and will accomplish very Little&rdquo; &mdash; <footer>Norman Vincent Peale</footer></blockquote>"
    },
    {
        "q": "Time doesn't heal emotional pain, you need to learn how to let go.",
        "a": "Roy T. Bennett",
        "c": "66",
        "h": "<blockquote>&ldquo;Time doesn't heal emotional pain, you need to learn how to let go.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>"
    },
    {
        "q": "Confidence is like a dragon where, for every head cut off, two more heads grow back.",
        "a": "Criss Jami",
        "c": "84",
        "h": "<blockquote>&ldquo;Confidence is like a dragon where, for every head cut off, two more heads grow back.&rdquo; &mdash; <footer>Criss Jami</footer></blockquote>"
    },
    {
        "q": "The more reasons you have for achieving your goal, the more determined you will become.",
        "a": "Brian Tracy",
        "c": "87",
        "h": "<blockquote>&ldquo;The more reasons you have for achieving your goal, the more determined you will become.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>"
    },
    {
        "q": "Your purpose will be clear only when you listen to your heart.",
        "a": "Lolly Daskal",
        "c": "62",
        "h": "<blockquote>&ldquo;Your purpose will be clear only when you listen to your heart.&rdquo; &mdash; <footer>Lolly Daskal</footer></blockquote>"
    },
    {
        "q": "As soon as you trust yourself, you will know how to live.",
        "a": "Johann Wolfgang von Goethe",
        "c": "57",
        "h": "<blockquote>&ldquo;As soon as you trust yourself, you will know how to live.&rdquo; &mdash; <footer>Johann Wolfgang von Goethe</footer></blockquote>"
    },
    {
        "q": "an action committed in anger is an action doomed to failure. ",
        "a": "Genghis Khan",
        "c": "61",
        "h": "<blockquote>&ldquo;an action committed in anger is an action doomed to failure. &rdquo; &mdash; <footer>Genghis Khan</footer></blockquote>"
    },
    {
        "q": "I do not exist to impress the world. I exist to live my life in a way that will make me happy.",
        "a": "Richard Bach",
        "c": "94",
        "h": "<blockquote>&ldquo;I do not exist to impress the world. I exist to live my life in a way that will make me happy.&rdquo; &mdash; <footer>Richard Bach</footer></blockquote>"
    },
    {
        "q": "Follow your instincts. That is where true wisdom manifests itself.",
        "a": "Oprah Winfrey",
        "c": "66",
        "h": "<blockquote>&ldquo;Follow your instincts. That is where true wisdom manifests itself.&rdquo; &mdash; <footer>Oprah Winfrey</footer></blockquote>"
    },
    {
        "q": "Remember to look up at the stars and not down at your feet.",
        "a": "Stephen Hawking",
        "c": "59",
        "h": "<blockquote>&ldquo;Remember to look up at the stars and not down at your feet.&rdquo; &mdash; <footer>Stephen Hawking</footer></blockquote>"
    },
    {
        "q": "Love the life you live, live the life you love.",
        "a": "Bob Marley",
        "c": "47",
        "h": "<blockquote>&ldquo;Love the life you live, live the life you love.&rdquo; &mdash; <footer>Bob Marley</footer></blockquote>"
    },
    {
        "q": "Difficult and meaningful will always bring more satisfaction than easy and meaningless.",
        "a": "Maxime Lagace",
        "c": "87",
        "h": "<blockquote>&ldquo;Difficult and meaningful will always bring more satisfaction than easy and meaningless.&rdquo; &mdash; <footer>Maxime Lagace</footer></blockquote>"
    },
    {
        "q": "If you can't argue both sides, you can't argue.",
        "a": "Jack Butcher",
        "c": "47",
        "h": "<blockquote>&ldquo;If you can't argue both sides, you can't argue.&rdquo; &mdash; <footer>Jack Butcher</footer></blockquote>"
    },
    {
        "q": "Just try to be the best you can be; never cease trying to be the best you can be. That's in your power.",
        "a": "John Wooden",
        "c": "103",
        "h": "<blockquote>&ldquo;Just try to be the best you can be; never cease trying to be the best you can be. That's in your power.&rdquo; &mdash; <footer>John Wooden</footer></blockquote>"
    },
    {
        "q": "Life happens in the river, not the shore.",
        "a": "Maxime Lagace",
        "c": "41",
        "h": "<blockquote>&ldquo;Life happens in the river, not the shore.&rdquo; &mdash; <footer>Maxime Lagace</footer></blockquote>"
    },
    {
        "q": "The most difficult times for many of us are the ones we give ourselves.",
        "a": "Pema Chodron",
        "c": "71",
        "h": "<blockquote>&ldquo;The most difficult times for many of us are the ones we give ourselves.&rdquo; &mdash; <footer>Pema Chodron</footer></blockquote>"
    },
    {
        "q": "The season of failure is the best time for sowing the seeds of success. ",
        "a": "Paramahansa Yogananda",
        "c": "72",
        "h": "<blockquote>&ldquo;The season of failure is the best time for sowing the seeds of success. &rdquo; &mdash; <footer>Paramahansa Yogananda</footer></blockquote>"
    },
    {
        "q": "Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love. ",
        "a": "Lao Tzu",
        "c": "114",
        "h": "<blockquote>&ldquo;Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love. &rdquo; &mdash; <footer>Lao Tzu</footer></blockquote>"
    },
    {
        "q": "People rarely succeed unless they have fun in what they are doing.",
        "a": "Dale Carnegie",
        "c": "66",
        "h": "<blockquote>&ldquo;People rarely succeed unless they have fun in what they are doing.&rdquo; &mdash; <footer>Dale Carnegie</footer></blockquote>"
    },
    {
        "q": "When we allow negative messages to fester in our head, they take on a life of their own.",
        "a": "Lolly Daskal",
        "c": "88",
        "h": "<blockquote>&ldquo;When we allow negative messages to fester in our head, they take on a life of their own.&rdquo; &mdash; <footer>Lolly Daskal</footer></blockquote>"
    },
    {
        "q": "Successful people ask better questions, and as a result, they get better answers.",
        "a": "Tony Robbins",
        "c": "81",
        "h": "<blockquote>&ldquo;Successful people ask better questions, and as a result, they get better answers.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"
    },
    {
        "q": "Give out what you most want to come back.",
        "a": "Robin Sharma",
        "c": "41",
        "h": "<blockquote>&ldquo;Give out what you most want to come back.&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>"
    },
    {
        "q": "If a thing is worth doing, it is worth doing badly.",
        "a": "Gilbert Chesterton",
        "c": "51",
        "h": "<blockquote>&ldquo;If a thing is worth doing, it is worth doing badly.&rdquo; &mdash; <footer>Gilbert Chesterton</footer></blockquote>"
    },
    {
        "q": "Not doing it is certainly the best way to not getting it.  ",
        "a": "Wayne Gretzky",
        "c": "59",
        "h": "<blockquote>&ldquo;Not doing it is certainly the best way to not getting it.  &rdquo; &mdash; <footer>Wayne Gretzky</footer></blockquote>"
    },
    {
        "q": "Too many of us are not living our dreams because we are living our fears.",
        "a": "Les Brown",
        "c": "73",
        "h": "<blockquote>&ldquo;Too many of us are not living our dreams because we are living our fears.&rdquo; &mdash; <footer>Les Brown</footer></blockquote>"
    },
    {
        "q": "We can either add to our character each day, or we can fritter away our energies in distractions.",
        "a": "Ming-Dao Deng",
        "c": "97",
        "h": "<blockquote>&ldquo;We can either add to our character each day, or we can fritter away our energies in distractions.&rdquo; &mdash; <footer>Ming-Dao Deng</footer></blockquote>"
    },
    {
        "q": "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration. ",
        "a": "Nikola Tesla",
        "c": "100",
        "h": "<blockquote>&ldquo;If you want to find the secrets of the universe, think in terms of energy, frequency and vibration. &rdquo; &mdash; <footer>Nikola Tesla</footer></blockquote>"
    },
    {
        "q": "In peace, sons bury their fathers. In war, fathers bury their sons. ",
        "a": "Herodotus",
        "c": "68",
        "h": "<blockquote>&ldquo;In peace, sons bury their fathers. In war, fathers bury their sons. &rdquo; &mdash; <footer>Herodotus</footer></blockquote>"
    },
    {
        "q": "Obstacles are those frightful things you see when you take your eyes off your goals.",
        "a": "Sydney Smith",
        "c": "84",
        "h": "<blockquote>&ldquo;Obstacles are those frightful things you see when you take your eyes off your goals.&rdquo; &mdash; <footer>Sydney Smith</footer></blockquote>"
    },
    {
        "q": "The more you are grateful for what you have the more you will have to be grateful for.  ",
        "a": "Zig Ziglar",
        "c": "88",
        "h": "<blockquote>&ldquo;The more you are grateful for what you have the more you will have to be grateful for.  &rdquo; &mdash; <footer>Zig Ziglar</footer></blockquote>"
    },
    {
        "q": "Do what you feel in your heart to be right - for you'll be criticized anyway.",
        "a": "Eleanor Roosevelt",
        "c": "77",
        "h": "<blockquote>&ldquo;Do what you feel in your heart to be right - for you'll be criticized anyway.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"
    },
    {
        "q": "Give more than you think you can, trusting that you are richer than you think.",
        "a": "Jon Kabat-Zinn",
        "c": "78",
        "h": "<blockquote>&ldquo;Give more than you think you can, trusting that you are richer than you think.&rdquo; &mdash; <footer>Jon Kabat-Zinn</footer></blockquote>"
    },
    {
        "q": "Things turn out best for the people who make the best of the way things turn out.",
        "a": "John Wooden",
        "c": "81",
        "h": "<blockquote>&ldquo;Things turn out best for the people who make the best of the way things turn out.&rdquo; &mdash; <footer>John Wooden</footer></blockquote>"
    },
    {
        "q": "It is not how much we have, but how much we enjoy, that makes happiness.",
        "a": "Charles Spurgeon",
        "c": "72",
        "h": "<blockquote>&ldquo;It is not how much we have, but how much we enjoy, that makes happiness.&rdquo; &mdash; <footer>Charles Spurgeon</footer></blockquote>"
    },
    {
        "q": "Courage is found in unlikely places.",
        "a": "J.R.R. Tolkien",
        "c": "36",
        "h": "<blockquote>&ldquo;Courage is found in unlikely places.&rdquo; &mdash; <footer>J.R.R. Tolkien</footer></blockquote>"
    },
    {
        "q": "A man's worth is no greater than his ambitions.",
        "a": "Marcus Aurelius",
        "c": "47",
        "h": "<blockquote>&ldquo;A man's worth is no greater than his ambitions.&rdquo; &mdash; <footer>Marcus Aurelius</footer></blockquote>"
    }
];



console.log(quoteArr[8]["q"]);








class App extends Component {
    constructor(){
        super();
        this.state = {
            currentQuote: 'the quote of the moment.',
        };

        this.getQuote = this.getQuote.bind(this);
    };

    getQuote() {
        // define a function here, it might not return anything

        // const newIndex = Math.floor(Math.random() * quoteArr.length);

        const newQuote = 'the new quote.';

        // put a GET request in here shortly. but for now, hard-code a change in currentQuote.

        this.setState({currentQuote: newQuote})
    }

    render() {
        return (
            <div>
                Hello from the div in the App component! And the current quote is:
                <br />
                {this.state.currentQuote}
                <br />
                <button type="button" onClick={this.getQuote} >
                    Click me!
                </button>
            </div>
        )
    }
}

export default App;