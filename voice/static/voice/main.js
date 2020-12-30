const icon = document.querySelector('.icon')
let paragraph = document.createElement('p');
let response = document.createElement('p')
let container = document.querySelector('.container');
container.appendChild(paragraph);

window.SpeechRecognition = webkitSpeechRecognition || window.SpeechRecognition;
const synth = window.speechSynthesis;
recognition = new SpeechRecognition();
recognition.interinResult = true;

icon.addEventListener('click', () =>{

    dictate();
});

const dictate = () => {
    recognition.start();
    recognition.onresult = (event) => {
        const speechToText = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join(' ');
        console.log(event);
        //paragraph.textContent = speechToText;

        if (event.results[0].isFinal) {
            //paragraph = document.createElement('p');
            //container.appendChild(paragraph);
            if(speechToText.includes('what is the time')) {
                speak(getTime);
                paragraph.textContent = getTime.a;
            }
            else if(speechToText.includes('what is the date')) {
                speak(getDate);
            }
            else if(speechToText.includes('hello')) {
                speake("hello");
                response = document.createElement('p');
                container.appendChild(response);
                response.textContent = "hello";
            }
            else if(speechToText.includes('how are you')) {
                speake("im fine, thank you");
                response = document.createElement('p');
                container.appendChild(response);
                response.textContent = "im fine, thank you";
            }
           /* if(speechToText.includes('who is Ayoub')) {
                speake("the man who created me");
                response = document.createElement('p');
                container.appendChild(response);
                response.textContent = "the man who created me";
            }*/
            else if(speechToText.includes('who created you')) {
                speake("the man that created me is Ayoub Boughzala");
                response = document.createElement('p');
                container.appendChild(response);
                response.textContent = "the man that created me is Ayoub Boughzala";
            }
            else if(speechToText.includes('bye' || 'goodbye' || "bye bye")) {
                speake("goodbye, see you next time");
                response = document.createElement('p');
                container.appendChild(response);
                response.textContent = "goodbye, see you next time";
                
            }
            else if(speechToText.includes('what is your name')) {
                speake("i'm Lucie");
                response = document.createElement('p');
                container.appendChild(response);
                response.textContent = "i'm Lucie";
            }
            else if(speechToText.includes('who are you')) {
                speake("i'm Lucie, i'am a voice recognition app created by Ayoub Boughzala");
                response = document.createElement('p');
                container.appendChild(response);
                response.textContent = "i'm Lucie, i'am a voice recognition app created by Ayoub Boughzala";

            }
            else if(speechToText.includes('tell me more about your creator')) {
                speake("His name is Ayoub Boughzala. He is an electronic engineering student in the 3rd year at the Faculty of Science Tunis, specialty embedded systems. But he is passionate about the field of web and mobile development. He has done many web projects and apps. He is currently looking for an end of study internship that he hopes to do in the field of web development. To know more about him visit his portfolio by clicking the first link, and his linkedin by clicking the second link.");
                response = document.createElement('p');
                container.appendChild(response);
                response.textContent = "His name is Ayoub Boughzala. He is an electronic engineering student in the 3rd year at the Faculty of Science Tunis, specialty embedded systems. But he is passionate about the field of web and mobile development. He has done many web projects and apps. He is currently looking for an end of study internship that he hopes to do in the field of web development. To know more about him visit his portfolio by clicking the first link, and his linkedin by clicking the second link.";
                link = document.createElement('a');
                container.appendChild(link);
                link.href = "http://ayoub23portfolio.pythonanywhere.com/";
                link.target = "_blank   "
                link.textContent = "http://ayoub23portfolio.pythonanywhere.com/";
                new_line = document.createElement('br');
                container.appendChild(new_line);
                link = document.createElement('a');
                container.appendChild(link);
                link.href = "https://www.linkedin.com/in/ayoub-boughzala-8792b9200/";
                link.target = "_blank   "
                link.textContent = "https://www.linkedin.com/in/ayoub-boughzala-8792b9200/";
                

            }
            else if(speechToText.includes('thank you')) {
                speake("You are welcome");
                response = document.createElement('p');
                container.appendChild(response);
                response.textContent= "You are welcome";
            }
            else if(speechToText.includes('take me to Facebook')) {
                speake("Ok");
                window.location.href = "https://www.facebook.com";
            }
            else if(speechToText.includes('take me to Google')) {
                speake("Ok");
                window.location.href = "https://www.google.com";
            }
            else if(speechToText.includes('take me to YouTube')) {
                speake("Ok");
                window.location.href = "https://www.youtube.com";
            }
            else if(speechToText.includes('take me to LinkedIn')) {
                speake("Ok");
                window.location.href = "https://www.linkedin.com";
            }
            else if(speechToText.includes('take me to Twitter')) {
                speake("Ok");
                window.location.href = "https://www.twitter.com";
            }
            else if(speechToText.includes('weather in')) {
                speake("Looking for the weather in google");
                getWeather(speechToText);

            }
            else if(speechToText.includes('search in Google for')) {
                speake("searching in google");
                search(speechToText);

            }
            else if(speechToText.includes('instructions')) {
                speake("going to instruction page");
                window.location.href = "http://127.0.0.1:8000/instructions/";
            }
            
            else {
                speake("I didnt understand what you are saying");
            }
        }
    }
};

const speake = (action) => {
    const utterThis = new SpeechSynthesisUtterance(action);
    synth.speak(utterThis)
};
const speak = (action) => {
    const utterThis = new SpeechSynthesisUtterance(action());
    synth.speak(utterThis)
};
const getTime = () => {
    const time = new Date(Date.now());
    const a = `the time is ${time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true})}`;
    return a

};

const getDate = () => {
    const time = new Date(Date.now())
    return `today is ${time.toLocaleString()}`;
};
const getWeather = (speech) => {
    window.location.href = `https://www.google.com/search?sxsrf=ALeKk01ld2jFXwTSXFAad0zUMs_K34oYUQ%3A1609294464166&ei=gOLrX67cCcq5kwWcq7igCA&q=weather+${speech.split(' ')[2]}`;

}
const getWeather1 = (speech) => {
    window.location.href = `https://www.google.com/search?sxsrf=ALeKk01ld2jFXwTSXFAad0zUMs_K34oYUQ%3A1609294464166&ei=gOLrX67cCcq5kwWcq7igCA&q=weather+${speech.split(' ')[5]}`;

}
const search = (speech) => {
    str = speech.substring(20);
    window.location.href = `https://www.google.com/search?q=${str}`;
}


