
// Quiz about Uganda
function ugandaQuiz() {
    var answer = prompt('Quiz Time!\n\nWhat is Uganda known as?\n\nA) Pearl of Africa\nB) Heart of Africa\nC) Star of Africa\n\nType A, B, or C:');
    
    if (answer && answer.toUpperCase() === 'A') {
        alert('Correct! Uganda is known as the Pearl of Africa!');
    } else if (answer) {
        alert('Not quite! Uganda is known as the Pearl of Africa.');
    }
}
