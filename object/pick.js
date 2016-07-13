function pick(obj, keys) {
    var newObject = {};
    for (var i = 1; i <= arguments.length; i++) {
        for (var key in obj) {
           if (key === arguments[i]) {
               newObject[key] = obj[key];
           }
        }
    }
    return newObject;
}

console.log("pick:",pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age'));
