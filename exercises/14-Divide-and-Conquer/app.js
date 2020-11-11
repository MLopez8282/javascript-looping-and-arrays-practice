let list_of_numbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

const mergeTwoList = arr => {
    let oddNumbers = [];
    for (i = 0; i < arr.length - 1; i++) {
        if (arr % 3 === 0) {
            oddNumbers.push(arr)
        }
    };
    let evenNumbers = [];
    for (j = 0; j < arr.length - 1; i++) {
        if (arr % 2 === 0) {
            evenNumbers.push(arr)
        };

        let arrays = oddNumbers.concat(evenNumbers)
        return evenNumbers.push(arrays);
    };
};

console.log(mergeTwoList(list_of_numbers));
