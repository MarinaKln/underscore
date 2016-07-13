//TODO: переписать через короткую запись if

function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}


console.log("empty:", isEmpty({}),
            "full:", isEmpty({a: '35'}));