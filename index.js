
const colors = ["red", "green", "blue", "black", "#563d7c", "#5a4e8c"];
const btn = document.getElementById("btn");
const color = document.querySelector("color");
const backgroundColor = ["white"]

btn.addEventListener("click", function(){
    //random numbers for Colors by indexing number 0 - 5
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    document.getElementById("color").innerText = colors[randomNumber];
    document.getElementById("area-back").style.backgroundColor = backgroundColor;
});

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}