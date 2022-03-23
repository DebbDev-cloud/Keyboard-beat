

function playSound (e) {
    console.log(e.keyCode);
        
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    
    console.log(audio);
    console.log(key);
    if(!audio) return; //stop the function from running all together.
    
        //To play the sound on the key.
        // audio.play();
    
        // To play fast after clicking.
        // audio.currentTime = 0; //rewind to the start/
    
        //For the Keys.
    key.classList.add("playing");
    
}


function removeTransition(e) {
    console.log(e);
    if(e.propertyName !== "transform") return; //skip it if its not transform
    // console.log(e.propertyName);
    this.classList.remove("playing");

} 
const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);