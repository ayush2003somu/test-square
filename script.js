        let box = document.getElementById("box");
        let area = document.getElementById("area");

        let position = 0;
        let canScroll = true; 

        let colors = [
            "royalblue",
            "tomato",
            "orange",
            "seagreen",
            "purple",
            "deeppink"
        ];


        let places = [
            [50, 15],
            [74, 32],
            [74, 68],
            [50, 85],
            [26, 68],
            [26, 32]];

        function moveSquare(step) {
            position = (position + step + 6) % 6;

            box.style.left = "calc(" + places[position][0] + "% - 35px)";
            box.style.top = "calc(" + places[position][1] + "% - 35px)";
            box.style.backgroundColor = colors[position];
        }
        function changeColor() {
            let randomNum = Math.floor(Math.random() * colors.length);
            box.style.backgroundColor = colors[randomNum];
        }

        function resetSquare() {
            position = 0;
            moveSquare(0);
        }

        area.addEventListener("wheel", function(event) {
            event.preventDefault();

            if (!canScroll) return;
            canScroll = false;

            if (event.deltaY > 0) {
                moveSquare(1);
            } else {
                moveSquare(-1);
            }

            setTimeout(function() {
                canScroll = true;
            }, 500);
        });

        // 5. Drag the square with touch or mouse
        // box.addEventListener("pointermove", function(event) {
        //     if (event.buttons === 1 || event.pointerType === "touch") {
        //         let rect = area.getBoundingClientRect();
        //         box.style.left = (event.clientX - rect.left - 35) + "px";
        //         box.style.top = (event.clientY - rect.top - 35) + "px";
        //     }
        // });