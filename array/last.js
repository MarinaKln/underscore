function last(arr, n) {
    if(n !== undefined) {
        var newArray = [];
        for(var i = arr.length-1; i > arr.length-n-1; i--) {
            newArray.push(arr[i]);
        }
        return newArray;
    } else  {
        return arr[arr.length-1];
    }
}