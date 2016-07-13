function initial(arr, n) {
    var newArray = [];
    if(n == undefined) {
        for (var i = 0; i < arr.length-1; i++) {
            newArray.push(arr[i]);
        }
    } else {
        for (var j = 0; j < arr.length-n; j++) {
            newArray.push(arr[j]);
        }
    }
    return newArray;
}