function union() {
    var result = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        for (var j = 0; j < arg.length; j++) {
            result.push(arg[j]);
        }
        console.log(arg);
        //result.push(arg);
    }
    return result;
}

console.log(union([1,1,2,3,4],[1,3,5]));






//function union(arrays) {
//    var result = [];
//    for (var i = 0; i < arrays.length; i++) {
//        var index = result.indexOf(arrays[i]);
//        if (index < 0) {
//            result.push(arrays[i]);
//        }
//    }
//    return result;
//}
//
//console.log(union([1,2,3,4,3]));
//
//function sum() {
//     return arguments.length;
//}
//
//console.log(sum([2,3,4]));




//function unique(arr) {
//    var result = [];
//    for (var i = 0; i < arr.length; i++) {
//        var index = result.indexOf(arr[i]);
//        if (index < 0) {
//            result.push(arr[i]);
//        }
//    }
//    return result;
//}
//
//console.log(unique([1,1,1,2,1,3,1,4]));