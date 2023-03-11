// Your code here
// grab the dodger and save a reference to it
const dodger = document.getElementById("dodger");
// chage of color
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 361) {
        dodger.style.left = `${left + 1}px`;
    }
}


document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }

});






// sleep function
// async function sleep(milli_seconds = 1000) {
//     return new Promise(done => setTimeout(() => done(), milli_seconds));
// }

// traverse from left to right
// for (let i = 0; i <= 360; i++) {
//     dodger.style.left = i.toString() + "px";
//     await sleep(5);
// }


