
function FizzBuzz() {
    this.check = (number) => {
        if ((number == '') || (number == 0)) {
            return 'You need to enter a valid number'
        } else if (isNaN(number) || (number % 1 !== 0)) {
            return 'Error, that\'s not a valid input'
        } else if (hasZeroRemainder(number, 15)) {
            return 'FizzBuzz';
        } else if (hasZeroRemainder(number, 5)) {
            return 'Buzz';
        } else if (hasZeroRemainder(number, 3)) {
            return 'Fizz';
        } else {
            return number
        }
    }
};

let hasZeroRemainder = (number, divider) => {
    return number % divider === 0
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = FizzBuzz;
}