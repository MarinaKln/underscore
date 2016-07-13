//function indexOff(arr, value, isSorted) {
//    if (isSorted == true) {
//
//    } else {
//        return arr.indexOf(value);
//    }
//}
//
//console.log(indexOff([1,2,3,4,5,6],5));

//function binarySearch(arr, value) {
//    var i = Math.floor((arr.length-1)/2);
//    console.log(arr[i]);
//    if (value == arr[i]) {
//        return i;
//    } else if (value < arr[i]) {
//
//    }
//
//}
//
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12],6));

//function binarySearch(A,t) {
//    var i = 0, j = A.length-1, k;
//    while (i <= j)  {
//        k = Math.floor((i+j)/2);
//        if (t === A[k]) return k;
//        else if (t < A[k]) j = k-1;
//        else i = k+1;
//    }
//    return '-1';
//}

function binarySearch(arr, value) {
    var j = arr.length;
    for(var i = 0; i < j; i++) {
        var k = Math.floor((i + j)/2);
        if (arr[k]=== value) {
            return k;
        } else if (value < arr[k]) {
            j = k-1;
        } else {
            i = k+1
        }
    }
}