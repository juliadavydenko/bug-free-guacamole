let i;
for (let i=10; i<=40; i+=1) {
if (i % 3 === 0) {
    console.log("Divisible by 3!");
} else if (i % 5 === 0) {
    console.log("Divisible by 5!");
} else if (i % 3 === 0 && i % 5 === 0) {
    console.log("Jackpot!");
} else {
        console.log(i, "This number is even")
        };
};




//let innerText = i + "This number is even";
//document.getElementById("hidden").innerHTML = innerText;