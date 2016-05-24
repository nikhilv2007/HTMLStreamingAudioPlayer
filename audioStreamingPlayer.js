var audioPlayer = new Audio();
document.body.appendChild(audioPlayer);

var volume = 0.5;           // Set default volume to 50%
var streamingURL = "";
var playerTitle ="";

document.getElementById('action').addEventListener("click", playControl);

document.getElementById('volumeUp').addEventListener("click", increaseVolume);
document.getElementById('mute').addEventListener("click", muteVolume);
document.getElementById('volumeDown').addEventListener("click", decreaseVolume);

function setStreamingURL(URL){
    streamingURL = URL;
}

function setPlayerTitle(title){
    playerTitle = title;
    document.querySelector("p#title").innerHTML = title;
}

function setPlayerSource(URL){
    audioPlayer.src = URL;
}
 
function resetPlayerSource(){
    audioPlayer.src = "";
}

function playControl(){
    if ( document.getElementById('action').innerHTML == "Play"){
        setPlayerSource(streamingURL);
        audioPlayer.play();
        document.getElementById('action').innerHTML = "Stop";
    }
    else if(document.getElementById('action').innerHTML == "Stop"){
        resetPlayerSource();
        document.getElementById('action').innerHTML = "Play"
    }
}

function increaseVolume(){
    if(volume <= 0.9){
        volume += 0.1;
        x.volume = volume;
        
        if(document.getElementById('mute').innerHTML == "Unmute"){
            document.getElementById('mute').innerHTML = "Mute";
        }
    }    
}

function muteVolume(){
    if (document.getElementById('mute').innerHTML == "Mute"){
        x.volume = 0;
        document.getElementById('mute').innerHTML = "Unmute";
    }
    else if(document.getElementById('mute').innerHTML == "Unmute"){
        x.volume = volume;
        document.getElementById('mute').innerHTML = "Mute";
    }
}

function decreaseVolume(){
    if ( volume >= 0.1){
        volume -= 0.1;
        x.volume = volume;
        
        if(document.getElementById('mute').innerHTML == "Unmute"){
            document.getElementById('mute').innerHTML = "Mute";
        }
    }
}

/*
var context = new AudioContext();
var analyser = context.createAnalyser();

// Wait for window.onload to fire. See crbug.com/112368
window.addEventListener('load', function(e) {
  // Our <audio> element will be the audio source.
  var source = context.createMediaElementSource(audioPlayer);
  source.connect(analyser);
  analyser.connect(context.destination);

  // ...call requestAnimationFrame() and render the analyser's output to canvas.
}, false);
*/