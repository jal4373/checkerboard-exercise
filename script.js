// Your JS goes here


document.addEventListener("DOMContentLoaded", function (event) {
    let x = document.createElement("div");
    // x.textContent = 'We hope you enjoyed the ride.';
    x.style.cssText = "background-color: red";

    function createCheckerboard() {
        for (var i = 0; i < 63; i++) {
            let square = document.createElement("div");
            if (i % 2 == 0) {
                square.style.cssText = "background-color: red; width: 11.1%; float: left; padding-bottom: 11.1%";
                square.textContent = i;
                document.body.appendChild(square);
                //remove all children and then repoluate
            } else {
                square.style.cssText = "background-color: black; width: 11.1%; float: left; padding-bottom: 11.1%";
                square.textContent = i;
                document.body.appendChild(square);
            }

        }
    }
    createCheckerboard();
});