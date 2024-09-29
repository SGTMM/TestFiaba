setupEventHandlers();
var game = new Game();
function handleKeyDown(event) {
    let keyCode = event.key;
    switch(keyCode){
        case "w":
            break;
        case "s":
            break;
        case "a":
            break;
        case "d":
            break;
        case "z":
            game.controls.lock();
            break;
    }
}
function handleKeyUp(event) {
    let keyCode = event.key;
    keyCode;
}
function setupEventHandlers() {
    window.addEventListener("keydown", handleKeyDown, false);
    window.addEventListener("keyup", handleKeyUp, false);
}

//# sourceMappingURL=index.5eaef77d.js.map
