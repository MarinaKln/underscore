function without(arr, values) {
    var newArray = [];
    for (var i =0; i < arr.length; i++) {
        if (arr[i] !== values) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
