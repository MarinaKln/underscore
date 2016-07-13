function compact(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== false && arr[i] !== null && arr[i] !== 0 && arr[i] !== "" &&
            arr[i] !== undefined && isNaN(arr[i]) == false) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

