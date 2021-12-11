let counter = document.getElementById("counter") ;

function handleDecrease() {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
}
function handleReset() {
   counter.innerHTML = 0;
}
function handleIncrease() {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}