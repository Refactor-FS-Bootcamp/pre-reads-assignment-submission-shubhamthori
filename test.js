const num1 = 5;
const num2 = 3;

// add two numbers
const sum = num1 + num2;

// display the sum
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

function bubbleSort(array) {
            var done = false;
            while (!done) {
                done = true;
                for (var i = 1; i < array.length; i++) {
                    if (array[i - 1] > array[i]) {
                        done = false;
                        var tmp = array[i - 1];
                        array[i - 1] = array[i];
                        array[i] = tmp;
                    }
                }
            }

            return array;
        }

        var numbers = [12, 10, 15, 11, 14, 13, 16];
        bubbleSort(numbers);
        console.log(numbers);