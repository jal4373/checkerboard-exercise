// Your JS goes here


document.addEventListener("DOMContentLoaded", function (event) {

    function createCheckerboard() {
        for (var i = 0; i < 63; i++) {
            let randomColors = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            let square = document.createElement("div");
            // create random squares
            square.style.cssText = `background-color: ${randomColors}; width: 11.1%; float: left; padding-bottom: 11.1%`;
            square.textContent = i;
            document.body.appendChild(square);
        }
    }
    createCheckerboard();
});