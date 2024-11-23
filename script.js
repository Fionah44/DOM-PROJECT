//sum of two numbers
function displaysum(a, b) {
    //calculate the sum
    const sum = a + b;
    //create an h1 element
    const h1 = document.createElement('h1');
    //set th text content
    h1.textContent = `the answer for adding ${a} and ${b} is ${sum}`;
    //append the h1 element to yhe output div
    document.getElementById('result').appendChild(h1);
}
displaysum(4, 6)