function isFunction(obj) {
    return typeof (obj) === "function";
}

console.log("function(){}:",isFunction(function(){}),
            "alert:",isFunction(alert),
            "isBoolean:",isFunction(isBoolean),
            "another:",isFunction({a: 1, b: 2, c: 3})
);