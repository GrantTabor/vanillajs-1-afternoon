let id = document.getElementById("idInput");
let color = document.getElementById("colorInput");

function setCard(){
    const card = document.getElementById(id.value);
    card.style.color = color.value;
    console.log(card);
}
function reset(){
    let diamond = document.getElementById("diamonds");
    let club = document.getElementById("clubs");
    let heart = document.getElementById("hearts");
    let spade = document.getElementById("spades");
    diamond.style.color = "grey";
    club.style.color = "grey";
    heart.style.color = "grey";
    spade.style.color = "grey";
}