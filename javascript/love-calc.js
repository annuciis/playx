const calculate = () => {
    let person1 = document.getElementById("person1").value;
    let person2 = document.getElementById("person2").value;
    if (person1 == "" && person2 == "") {
        alert("You need to write the names to calculate the love score!")
    } else if (person1 == "" || person2 == "") {
        alert("You need to write both names to calculate the love score!")
    } else {


        let loveScore = Math.random();
        loveScore = loveScore * 101;
        loveScore = Math.floor(loveScore);
        let loveScoreText = "Your love score is: <strong>" + loveScore + "%</strong> "
        if (loveScore == 100) {
            document.getElementsByClassName("love-text")[0].innerHTML = loveScoreText +
                "I think you may have the strongest love ever!";
        } else if (loveScore < 100 && loveScore >= 50) {
            document.getElementsByClassName("love-text")[0].innerHTML = loveScoreText + "<br> We think that you will have good future together!"
        } else {
            document.getElementsByClassName("love-text")[0].innerHTML = loveScoreText + "<br> Maybe think more if you really want to be together with this person, you probably can find better match!"
        }
    }

}

function clearText() {

    document.getElementById("person1").value = '';
    document.getElementById("person2").value = '';
    document.getElementsByClassName("love-text")[0].innerHTML = '';

}