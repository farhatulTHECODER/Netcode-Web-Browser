function startRecognition()
 {
    if(window.hasOwnProperty('webkitSpeechRecognition'))
     {
         console.log("listening...");
         var recogAudio = new Audio("Aiaudio.mp3");
         recogAudio.play();
         var recognition = new webkitSpeechRecognition(); 
         recognition.lang = "en-US";
         recognition.continuous = false;
         recognition.interimResults = false;
         recognition.start();
         
         recognition.onresult = (e) =>{
             document.getElementById('transcript').value
             = e.results[0][0].transcript;
         //var Ai = new Artyom;
         //Ai.say("I found some information for"+e.results[0][0].transcript);
             recognition.stop();
             document.getElementById('VoiceAssistant').submit();
         }
         recognition.onerror = (e) =>{
             recognition.stop();
         }
     }
 }