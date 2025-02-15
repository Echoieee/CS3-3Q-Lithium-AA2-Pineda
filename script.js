function calculateGrowth() {

    let P0 = parseFloat(prompt("Enter the initial population:"));
    let r = parseFloat(prompt("Enter the rate of growth (between 0 and 1):"));
    let t = parseFloat(prompt("Enter the time in hours:"));

    if (isNaN(P0) || isNaN(r) || isNaN(t)) {
        alert("Please enter valid numbers.");
        return;
    }

    let P = P0 * Math.exp(r * t);
    P = Math.round(P);

    let region = prompt("Enter the region/location of the monster:");
    let monsterName = prompt("Enter the name of the monster:");

    let monsterInfo = (region + " " + monsterName).toUpperCase();

    let output = `After ${t} hours, the population of ${monsterInfo} has increased to ${P}!`;
    document.getElementById("result").innerText = output;
}
