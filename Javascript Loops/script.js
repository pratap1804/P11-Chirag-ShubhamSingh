
function drawTriangle(size){


    for(let i = 0; i < size; i++){
        let triangle = "";
        for(let j = 0; j < i; j++){
            triangle += " * ";
        }

        console.log(triangle)

    }
}

drawTriangle(5);