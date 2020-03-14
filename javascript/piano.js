
// set the sound for each button when user clicks the button on the screen
var pianoKeys = document.querySelectorAll(".pianoKey").length;

for(i=0; i<pianoKeys;i++){
    const eachButton = document.querySelectorAll(".pianoKey")[i];
    eachButton.addEventListener("click", function(){
        var innerText = this.innerHTML;
        switch (innerText) {
        case "C3":
            audioC3 = new Audio("piano-sounds/pianoC3.mp3");
            audioC3.play();
            break;
        case "D3":
            audioD3 = new Audio("piano-sounds/pianoD3.mp3");
            audioD3.play();
            break;
        case "E3":
            audioE3 = new Audio("piano-sounds/pianoE3.mp3");
            audioE3.play();
            break;
        case "F3":
            audioF3 = new Audio("piano-sounds/pianoF3.mp3");
            audioF3.play();
            break;
        case "G3":
            audioG3 = new Audio("piano-sounds/pianoG3.mp3");
            audioG3.play();
            break;
        case "A4":
            audioA4 = new Audio("piano-sounds/pianoA4.mp3");
            audioA4.play();
            break;
        case "B4":
            audioB4 = new Audio("piano-sounds/pianoB4.mp3");
            audioB4.play();
            break;
        case "C4":
            audioC4 = new Audio("piano-sounds/pianoC4.mp3");
            audioC4.play();
            break;
        case "#C":
            audioC_ = new Audio("piano-sounds/pianoC--.mp3");
            audioC_.play();
            break;
        case "#D":
            audioD_ = new Audio("piano-sounds/pianoD--.mp3");
            audioD_.play();
            break;
        case "#F":
            audioF_ = new Audio("piano-sounds/pianoF--.mp3");
            audioF_.play();
            break;
        case "#G":
            audioG_ = new Audio("piano-sounds/pianoG--.mp3");
            audioG_.play();
             break;
        case "#A":
            audioA_ = new Audio("piano-sounds/pianoA--.mp3");
            audioA_.play();
            break;
            default:
             console.log(innerText);
            
        }
    }
)}

// set the sound, when the user clicks a button on the keyboard


    document.addEventListener("keydown", function(event){
        switch (event.which) {
           case 65:
            audioC3 = new Audio("piano-sounds/pianoC3.mp3");
            audioC3.play();
               break;
            case 83:
                audioD3 = new Audio("piano-sounds/pianoD3.mp3");
                audioD3.play();
                break;
            case 68:
                audioE3 = new Audio("piano-sounds/pianoE3.mp3");
                audioE3.play();
                break;
            case 70:
                audioF3 = new Audio("piano-sounds/pianoF3.mp3");
                audioF3.play();
                break;
            case 71:
                audioG3 = new Audio("piano-sounds/pianoG3.mp3");
                audioG3.play();
                break;
            case 72:
                audioA4 = new Audio("piano-sounds/pianoA4.mp3");
                audioA4.play();
                break;
            case 74:
                audioB4 = new Audio("piano-sounds/pianoB4.mp3");
                audioB4.play();
                break;
            case 75:
                audioC4 = new Audio("piano-sounds/pianoC4.mp3");
                audioC4.play();
                break;
            case 90:
                audioC_ = new Audio("piano-sounds/pianoC--.mp3");
                audioC_.play()
                break;
            case 88:
                audioD_ = new Audio("piano-sounds/pianoD--.mp3");
                audioD_.play();
                break;
            case 67:
                audioF_ = new Audio("piano-sounds/pianoF--.mp3");
                audioF_.play();
                break;
            case 86:
                audioG_ = new Audio("piano-sounds/pianoG--.mp3");
                audioG_.play();
                break;
            case 66:
                audioA_ = new Audio("piano-sounds/pianoA--.mp3");
                audioA_.play();
                break;
        }
    }
 );

 // Popover for keyboard key

 $(document).ready(function(){
    $('[data-toggle="popover"]').popover();
  });