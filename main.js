/*
Hide the difficulty if found
*/

(() => {
    console.log("EXTENSION to Hide Difficulty Starting Up");
    let intervalId;
    let loopCount = 0;
    const NUM_SECONDS_TO_TRY = 10;
    const TIMES_PER_SECOND = 4;
    // Has to be repeated for several seconds because leetcode takes a while to finish loading the page and will overwrite
    // our changes if we only do it once and we may do it before the element exists.
    const REPEAT_COUNT = NUM_SECONDS_TO_TRY * TIMES_PER_SECOND;

    function hideDifficulty() {
        loopCount += 1;
        console.log(`Loop iteration: ${loopCount}`);
        if (loopCount > REPEAT_COUNT) {
            // Repeated enough times, it's either done or won't be done
            clearInterval(intervalId);
            console.log("Stopping Loops to hide difficulty");
        }

        let element = document.getElementById("qd-content");
        function not_found() {
            document.body.style.border = "5px solid red";
            throw "Not Found";
        }
        if (element === null) { not_found() }

        element = element.children[0];
        if (element === undefined) { not_found() }

        element = element.children[3];
        if (element === undefined) { not_found() }

        element = element.children[0];
        if (element === undefined) { not_found() }

        element = element.children[0];
        if (element === undefined) { not_found() }

        element = element.children[1];
        if (element === undefined) { not_found() }

        element = element.children[0];
        if (element === undefined) { not_found() }

        document.body.style.border = ""; // Clear any error status
        element.style.color = "black";
        element.style.backgroundColor = "black";
        element.style.width = "100px"; // To prevent determination based on width as Hard is shorter than Medium
    }

    intervalId = setInterval(hideDifficulty, 1000 / TIMES_PER_SECOND);
})()
