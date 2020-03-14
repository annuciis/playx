//creating function for each sound 

const soundA = () => {
    aAudio = new Audio("drum-sounds/key-a.mp3")
    aAudio.play()

}

const soundD = () => {
    dAudio = new Audio("drum-sounds/key-d.mp3")
    dAudio.play()

}

const soundF = () => {
    fAudio = new Audio("drum-sounds/key-f.mp3")
    fAudio.play()

}

const soundG = () => {
    gAudio = new Audio("drum-sounds/key-g.mp3")
    gAudio.play()

}

const soundH = () => {
    hAudio = new Audio("drum-sounds/key-h.mp3")
    hAudio.play()

}

const soundS = () => {
    sAudio = new Audio("drum-sounds/key-s.mp3")
    sAudio.play()

}

// runs, when the user clicks with keyboard key

document.addEventListener("keydown", function (event) {
    let keyCode = event.code;
    switch (keyCode) {
        case 'KeyA':
            soundA()
            break;
        case 'KeyS':
            soundS()
            break;
        case 'KeyD':
            soundD()
            break;
        case 'KeyF':
            soundF()
            break;
        case 'KeyG':
            soundG()
            break;
        case 'KeyH':
            soundH()
            break;
        default:
            console.log(keyCode)
    }

});
// runs, when the user clicks on one of the buttons

document.querySelectorAll(".drum-btn")[0].addEventListener("click", soundA);
document.querySelectorAll(".drum-btn")[1].addEventListener("click", soundS);
document.querySelectorAll(".drum-btn")[2].addEventListener("click", soundD);
document.querySelectorAll(".drum-btn")[3].addEventListener("click", soundF);
document.querySelectorAll(".drum-btn")[4].addEventListener("click", soundG);
document.querySelectorAll(".drum-btn")[5].addEventListener("click", soundH);