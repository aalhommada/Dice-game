let images = [
    "/images/d1.svg",
    "/images/d2.svg",
    "/images/d3.svg",
    "/images/d4.svg",
    "/images/d5.svg",
    "/images/d6.svg",
];
let dice = document.querySelectorAll("img");

const rollTheDice = () => {
dice.forEach(die => {
    die.classList.add("animate-spin");
});
setTimeout(() => {
    dice.forEach(die => {
        die.classList.remove("animate-spin");
    });
     
    let randomNumber1 = Math.floor(Math.random() * 6);
    let randomNumber2 = Math.floor(Math.random() * 6);

    document.querySelector("#dice1").setAttribute("src", images[randomNumber1]);
    document.querySelector("#dice2").setAttribute("src", images[randomNumber2]);

    document.querySelector(".total").innerHTML = "Total is : " + ((randomNumber1 + 1) + (randomNumber2 + 1));
}, 1000);
}


