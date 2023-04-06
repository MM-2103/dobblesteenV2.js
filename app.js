// initialize an empty array
// The empty array rollHistory is used to store the results of each dice roll in order to keep track of the roll history.
const rollHistory = [];

        const rollDice = () => {
            // get html element with ID "cube" and assign it to a variable
            const dice = document.getElementById("cube");
            // creates an array called sides containing the values 1, 2, 3, 4, 5, and 6
            const sides = [1, 2, 3, 4, 5, 6];
            // generates a random integer
            const randomSide = sides[Math.floor(Math.random() * sides.length)];
            dice.className = "dice"; // reset the dice class
            dice.classList.add(randomSide); // add the new class to display the correct side

            rollHistory.push(randomSide); // add the result to the roll history
            // get the HTML element with the ID "history-list" and assigns it to a variable called historyList.
            const historyList = document.getElementById("history-list");
            // create a new list item
            const listItem = document.createElement("li");
            // gets a random class from randomSide and add it to the list item
            listItem.textContent = randomSide;
            // appends the 'list item' to the historyList
            historyList.appendChild(listItem);
        }

        function calculateAverage() {
            // grabs the id historylist
            const history = document.getElementById("history-list");
            // get all the child elements using children property
            const rolls = history.children;

            let sum = 0;
            // it loops over all the rolls so the listitem in history
            for (let i = 0; i < rolls.length; i++) {
                // convert the value to a number using Number() function
                sum += Number(rolls[i].innerText);
            }
            // calculateAverage by dividing the sum by the number of rolls
            const average = sum / rolls.length;
            // get average-list id
            const averageList = document.getElementById("average-list");
            // create a list item 
            const averageItem = document.createElement("li");
            // set the reasult as a string that contain average value 
            // formatted to 2 decimal using toFixed() 
            averageItem.textContent = `Average roll: ${average.toFixed(2)}`;
            // appends the new element to the averagelist element 
            averageList.appendChild(averageItem);
}
