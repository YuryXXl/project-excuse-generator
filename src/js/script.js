
// This line of code will make sure the page is fully loaded
window.onload = function () {
    // Write the logic in this function

    // 1. Get the excuse element
    const excuse = document.getElementById('excuse');

    // 2. Generate a random excuse
    const part1 = ['A dragon', 'The cat', 'The dog', 'The unicorn', 'Spider-Man'];
    const part2 = ['stole', 'misplaced', 'ate', 'rewrote', 'webbed'];
    const part3 = ['my sword', 'my report', 'my homework', 'my code', 'my laptop'];
    const part4 = ['last night', 'yesterday', 'this morning', 'this afternoon', 'this evening'];

    const indexPart1 = Math.floor(Math.random() * part1.length);
    const indexPart2 = Math.floor(Math.random() * part2.length);
    const indexPart3 = Math.floor(Math.random() * part3.length);
    const indexPart4 = Math.floor(Math.random() * part4.length);

    const excuseText = `${part1[indexPart1]} ${part2[indexPart2]} ${part3[indexPart3]} ${part4[indexPart4]}`;
    

    

    // 3. Inseart the excuse into the excuse element
    excuse.innerHTML = excuseText;
}