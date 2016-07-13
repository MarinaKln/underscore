function omit(obj, keys) {
    var newObject = {};
    for (var key in obj) {
        newObject[key] = obj[key];
    }
    for (var i = 1; i <= arguments.length; i++) {
        for (key in newObject) {
            if (key === arguments[i]) {
                delete newObject[key];
            }
        }
    }
    return newObject;
}

console.log("omit:", omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid','age'));