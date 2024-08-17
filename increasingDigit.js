function findCombinations(N) {
    function recurse(remainingSum, start, currentCombination) {
        if (remainingSum === 0) {
            console.log(currentCombination.join(' '));
            return;
        }

        for (let i = start; i <= remainingSum; i++) {
            currentCombination.push(i);

            recurse(remainingSum - i, i, currentCombination);

            currentCombination.pop();
        }
    }
    recurse(N, 1, []);
}
const N = 4;
findCombinations(N);
