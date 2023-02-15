// Set the date we're counting down to
var countDownDate = new Date("Feb 23, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


// tap countdown function 
var i = 0
var heart = document.querySelector(".tap");
var timer = document.querySelector(".timer");
var demo = document.querySelector("#demo");
var count = document.querySelector(".c");
var flip = document.querySelector("#flipdown");

console.log(heart);
heart.addEventListener("click",function(){
    console.log("yes");
    timer.classList.remove("none");
    flip.classList.remove("none");
    demo.classList.remove("none");
    count.classList.remove("none");
});

document.addEventListener("click",function(){
    i++;
    if(i>1){
        console.log("no");
        timer.classList.add("none");
        flip.classList.add("none");
        demo.classList.add("none");
        count.classList.add("none");
        i=0;
    }
});

//falling heart
function heart1(){
    const drop = document.createElement("div");
    drop.classList.add("drop");
    
    drop.style.left=Math.random()*100+'vw';
    drop.style.animationDuration = Math.random()*2 + 3;

    drop.innerHTML="🧡"
    document.body.appendChild(drop);

    setTimeout(()=>{
        drop.remove();
    },3000)
}

setInterval(heart1,200);

function heart2(){
    const drop2 = document.createElement("div");
    drop2.classList.add("drop2");
    
    drop2.style.left=Math.random()*100+'vw';
    drop2.style.animationDuration = Math.random()*2 + 3;

    drop2.innerHTML="🤍"
    document.body.appendChild(drop2);

    setTimeout(()=>{
        drop2.remove();
    },3000)
}

setInterval(heart2,100);