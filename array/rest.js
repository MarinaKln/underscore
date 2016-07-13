function rest(arr, index) {
    var newArray = [];
    if(index == undefined) {
    for (var i = 1; i < arr.length; i++) {
        newArray.push(arr[i]);
    }
    } else {
        for (var j = index-1; j < arr.length; j++) {
            newArray.push(arr[j]);
        }
    }
    return newArray;
}
