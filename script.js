let quoteEl = document.getElementById('quote-el')
let output = '';

function generate() {
    let number = Math.floor(Math.random() * 21)
    switch (number) {
        case 0:
            output = 'You are who you are today because of the choices you made yesterday. \n~Eleanor Roosevelt';
            break;
        case 1:
            output = 'There are better days ahead! God wants to bring you through, to bring you out even better, and to restore everything you have lost, plus give you more.\n ~Joel Osteen';
            break;
        case 2:
            output = 'If you really look closely, most overnight successes took a long time.\n ~Steve Jobs';
            break;
        case 3:
            output = 'We are what we repeatedly do.\n ~Aristotle';
            break;
        case 4:
            output = `Nothing will work unless you do. \n~Maya Angelou`;
            break;
        case 5:
            output = 'The more you act on your faith in God, the more you will see his way for you.\n ~Henry Cloud';
            break;
        case 6:
            output = "There is no magic to achievement. It’s really about hard work, choices, and persistence.\n ~Michelle Obama";
            break;
        case 7:
            output = "God doesn’t throw worries and challenges that we cannot catch.";
            break;
        case 8:
            output = "Hard work beats talent when talent doesn’t work hard.\n ~Tim Notke";
            break;
        case 9:
            output = "Tomorrow doesn't come for those who don't work for it today.";
            break;
        case 10:
            output = 'Why blend in when you can stand out? \n~ayinbota';
            break;
        case 11:
            output = 'Some days are better than others. The same can be said about people.\n ~Mokokoma Mokhonoana';
            break;
        case 12:
            output = 'No matter what happens, or how bad it seems today, life goes on and it will be better tomorrow.\n ~Maya Angelou';
            break;
        case 13:
            output = 'There are far, far better things ahead than any we leave behind\n ~C.S. Lewis';
            break;
        case 14:
            output = 'There will come a day when it will be your turn. Be patient.\n ~Charlie Valentine';
            break;
        case 15:
            output = 'The big talent is persistence. \n ~Octavia E. Butler';
            break;
        case 16:
            output = 'When we pray, God hears more than we say, answers more than we ask, gives more than we imagine, in his own time and in his own way.';
            break;
        case 17:
            output = 'Commit your work to the Lord and he will crown your efforts with success.';
            break;
        case 18:
            output = 'Talent is nothing without dedication and discipline, and dedication and discipline is a talent in itself.\n ~Luke Campbel';
            break;
        case 19:
            output = "God wouldn’t put you in difficult situations if he didn’t believe you couldn’t get through them.🥺";
            break;
        case 20:
            output = 'Leave nothing for tomorrow which can be done today.\n ~Abraham Lincoln';
            break;
        default:
            output = "you've come to the end of the road";
            break;
    }
    quoteEl.textContent = output
}

