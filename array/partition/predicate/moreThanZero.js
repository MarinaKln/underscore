function moreThanZero (arr) {
    for (var i = 0;i < arr.length;i++) {
        if (arr[i] >= 0) {
            predicated.push(arr[i]);
        } else {
            notPredicated.push(arr[i]);
        }
    }
}