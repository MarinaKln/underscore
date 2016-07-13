function difference(arr, others) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        var index = others.indexOf(arr[i]);
        if (index < 0) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

