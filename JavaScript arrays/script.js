let nums1 = [4, 2, 9, 1, 8];
let nums2 = [4, 2, 8];

function divideArray(array){
    let evenNums = [];
    let oddNums = [];

    array.forEach(element => {
        if(element % 2 == 0){
            evenNums.push(element);
        } else{
            oddNums.push(element);
        }
    });

    evenNums.sort();
    oddNums.sort();

    console.log("Even numbers: ")
    if(evenNums.length > 0){
        for (let index = 0; index < evenNums.length; index++) {
            console.log(evenNums[index]);
        }
    }else{
        console.log("None")
    }
 

    console.log("Odd numbers: ")
    if(oddNums.length > 0){
        for (let index = 0; index < oddNums.length; index++) {
            console.log(oddNums[index]);
             
         }
    }else{
        console.log("None")
    }
}