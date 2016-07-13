function isNumber(obj) {
    return typeof (obj) === "number";
}

console.log("numbers:",isNumber(8.4 * 5),
            "NaN:",isNumber(NaN),
            "another:",isNumber(null)
);
