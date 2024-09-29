setupEventHandlers()

var game = new Game()

function handleKeyDown(event) {

    let keyCode = event.key;


    switch (keyCode) {
        case 'w': //W: FORWARD
            break;

        case 's': //S: BACK
            break;

        case 'a': //A: LEFT
            break;

        case 'd': //D: RIGHT
            break;

        case 'z': // Decrease thrust
            game.controls.lock()
            break;
    }
}

function handleKeyUp(event) {

    let keyCode = event.key;

    switch (keyCode) {
        case 'w': //W: FORWARD
            break;

        case 's': //S: BACK
            break;

        case 'a': //A: LEFT
            break;

        case 'd': //D: RIGHT
            break;
    }

}

function setupEventHandlers() {
    window.addEventListener('keydown', handleKeyDown, false);
    window.addEventListener('keyup', handleKeyUp, false);
}