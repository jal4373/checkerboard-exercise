// Your JS goes here


document.addEventListener("DOMContentLoaded", function (event) {

    function createCheckerboard() {
        for (var i = 0; i < 63; i++) {
            let square = document.createElement("div");
            // create red squares
            if (i % 2 == 0) {
                square.style.cssText = "background-color: red; width: 11.1%; float: left; padding-bottom: 11.1%";
                square.textContent = i;
                document.body.appendChild(square);
            
            // create black squares
            } else {
                square.style.cssText = "background-color: black; width: 11.1%; float: left; padding-bottom: 11.1%";
                square.textContent = i;
                document.body.appendChild(square);
            }

        }
    }
    createCheckerboard();
});

 