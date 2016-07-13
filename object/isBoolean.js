function isBoolean(obj) {
    return typeof (obj) === "boolean";
}

console.log('true:',isBoolean(true),
            'false:',isBoolean(false),
            'another:',isBoolean(null));
