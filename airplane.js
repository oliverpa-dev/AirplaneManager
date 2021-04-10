
var x = 0;
// creates an array
var array = Array();
// takes the input with text1 id
var input1 = document.getElementById("text1");
var button = document.getElementById("button1").addEventListener("click", add_element_to_array);

function add_element_to_array() {
    // bool that checks if the input is empty
    const ok = "";
    // if yes -> error
    if (input1.value == ok) {
        alert("Your input is empty");
        // if not continue
    } else {
        array[x] = input1.value;
        // add another position to the array
        x++;
        // after you an airplane the input stays blank
        input1.value = "";
        // consolelog the array
        console.log(array);
    }
}





