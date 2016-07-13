function isUndefined(obj) {
   return obj === undefined;
}

console.log("undefined:",isUndefined(window.missingVariable),
            "another:",isUndefined(null));
