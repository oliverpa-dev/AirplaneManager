/**
 * Represents airplane
 * @constructor
 * @param {string} iD - id of the airplane
 * @param {string} type - type of the airplane
 */
class Airplane {
    constructor(iD, type) {
        this.iD = iD;
        this.type = type;
    }
    /**
     * Represents createAirplane()
     * @param {string} - x - number that stands as the position in the @param {array}
     * @param {string} - input1 - takes the id of the input
     * @param {string} - button - takes the id of the button and assaings it eventlistener on click with add_element_to_array function
     * @param {string} - text -  takes the id of the h1
     */
    createAirplane() {
        var x = 0;
        // creates an array
        var array = Array();
        // takes the input with text1 id
        var input1 = document.getElementById("text1");
        var button = document.getElementById("button1").addEventListener("click", add_element_to_array);
        var text = document.getElementById("airplane-1");

        /**
         * Represents add_element_to_array()
         * @param {string} - ok - it is a bool that checks if the input is empty or not
         * If there is no input an error appears
         * If tere is an input, it is added to the array on the position 0 and then next one goes +1
         */
        function add_element_to_array() {
            const ok = "";
            if (input1.value == ok) {
                alert("Your input is empty");
            } else {
                array[x] = input1.value;
                x++;
                input1.value = "";
                text.innerHTML = array;
                console.log(array);
            }
        }
    }
}

const tomek = new Airplane();
tomek.createAirplane();




