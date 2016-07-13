function first(arr, n) {
    if(n !== undefined) {
        var newArray = [];
        for(var i = 0; i < n+1; i++) {
            newArray.push(arr[i]);
        }
        return newArray;
       } else  {
        return arr[0];
    }
}



