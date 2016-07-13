//TODO: Переписать

function isArray(obj) {
    return Array.isArray(obj);
}

console.log(true === isArray([1,2,3]),
            false === isArray({1: 'a', 2: 'b'}));
