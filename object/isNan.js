function _isNan(obj) {
    return isNaN(obj) && obj !== undefined;
}

console.log("NaN:",_isNan(NaN),
"undefined:",_isNan(undefined),
"another:",_isNan("45")
);
