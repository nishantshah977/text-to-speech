if('speechSynthesis' in window){
  document.querySelector('button').addEventListener('click',play);
  }else{
  alert("Not supported in your browser"); 
}


function play(){
    var play = new SpeechSynthesisUtterance();
    play.voice = speechSynthesis.getVoices()[0];
    play.text = document.querySelector('textarea').value;
    play.lang = "en-US";
    window.speechSynthesis.speak(play);
}
