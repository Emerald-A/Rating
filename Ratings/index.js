var rating = "";
function ratings(buttonID) {
    if (buttonID == "button1") {
        document.getElementById("star1").src="fullStar.svg";
        document.getElementById("star2").src="emptyStar.svg";
        document.getElementById("star3").src="emptyStar.svg";
        document.getElementById("star4").src="emptyStar.svg";
        document.getElementById("star5").src="emptyStar.svg";
        rating = "1/5";
        console.log(rating);
    } else if (buttonID == "button2") {
        document.getElementById("star1").src="fullStar.svg";
        document.getElementById("star2").src="fullStar.svg";
        document.getElementById("star3").src="emptyStar.svg";
        document.getElementById("star4").src="emptyStar.svg";
        document.getElementById("star5").src="emptyStar.svg";
        rating = "2/5";
        console.log(rating);
    } else if (buttonID == "button3") {
        document.getElementById("star1").src="fullStar.svg";
        document.getElementById("star2").src="fullStar.svg";
        document.getElementById("star3").src="fullStar.svg";
        document.getElementById("star4").src="emptyStar.svg";
        document.getElementById("star5").src="emptyStar.svg";
        rating = "3/5";
        console.log(rating);
    } else if (buttonID == "button4") {
        document.getElementById("star1").src="fullStar.svg";
        document.getElementById("star2").src="fullStar.svg";
        document.getElementById("star3").src="fullStar.svg";
        document.getElementById("star4").src="fullStar.svg";
        document.getElementById("star5").src="emptyStar.svg";
        rating = "4/5";
        console.log(rating);
    } else if (buttonID == "button5") {
        document.getElementById("star1").src="fullStar.svg";
        document.getElementById("star2").src="fullStar.svg";
        document.getElementById("star3").src="fullStar.svg";
        document.getElementById("star4").src="fullStar.svg";
        document.getElementById("star5").src="fullStar.svg";
        rating = "5/5";
        console.log(rating);
    }
    document.getElementById('note').classList.remove("displayNone");

}
function submit() {
    document.getElementById("beginning").classList.add("displayNone");
    document.getElementById("end").classList.remove("displayNone");
}

