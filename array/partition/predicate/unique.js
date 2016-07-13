function unique(arr) {
    for (var i = 0; i < arr.length; i++) {
        var index = predicated.indexOf(arr[i]);
        if (index < 0) {
            predicated.push(arr[i]);
        } else {
            notPredicated.push(arr[i]);
        }
    }
}
