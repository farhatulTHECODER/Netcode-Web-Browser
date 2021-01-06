document.querySelector('#VoiceAssistant').onsubmit = (e) =>{
    e.preventDefault();
    var Search = document.querySelector('#transcript').value;
    location.href('https://www.google.com/search?q='+Search);
};