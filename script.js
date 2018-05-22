// Your JS goes here

// clear page
document.addEventListener("DOMContentLoaded", function (event) {

    function createGradientBoard() {
        let alpha = 1;

        for (let i = 0; i < 63; i++) {
            let color1 = "rgba( 160, 0, 80," + alpha + ")";
            let color2 = "rgba( 80, 20, 0," + alpha + ")";
            let square = document.createElement("div");
            if (i % 2 == 0) {
                square.style.cssText = `background-color: ${color1}; width: 11.1%; float: left; padding-bottom: 11.1%`;
            } else {
                square.style.cssText = `background-color: ${color2}; width: 11.1%; float: left; padding-bottom: 11.1%`;
            }
            if (i % 9 == 0 && i != 0) {
                alpha -= .125;
                console.log(alpha);
            }
            square.textContent = i;
            document.body.appendChild(square);
        }
    }

    function createRandomBoard() {
        let list_squares = [];
        for (let i = 0; i < 63; i++) {
            let color1 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            let square = document.createElement("div");
            square.style.cssText = `background-color: ${color1}; width: 11.1%; float: left; padding-bottom: 11.1%`;
            square.textContent = i;
            document.body.appendChild(square);
            list_squares.push(square);

        }
        setInterval(createNewColors, 200, list_squares);
    }
        
    function createNewColors(list_squares) {

        list_squares.forEach(element => {
            element.style.backgroundColor = "rgb(" + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        });
    
    }
    function createClassicBoard(color1, color2) {
        
        let color1 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        let color2 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        for (let i = 0; i < 63; i++) {
            let square = document.createElement("div");
            if (i % 2 == 0) {
                square.style.cssText = `background-color: ${color1}; width: 11.1%; float: left; padding-bottom: 11.1%`;
            } else {
                square.style.cssText = `background-color: ${color2}; width: 11.1%; float: left; padding-bottom: 11.1%`;
            }
           
            square.textContent = i;
            document.body.appendChild(square);
            // body.replaceChild() 
        }
        
    }

    // createGradientBoard();
    let answer = prompt("Random, Gradient, or Other (R/G/O)").toLowerCase();
    if (answer == 'r') {
        createRandomBoard();
    } else if (answer == 'g') {
        createGradientBoard();
    } else {
        createClassicBoard();
    }
});