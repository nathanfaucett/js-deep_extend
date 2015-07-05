var keys = require("keys"),
    isObject = require("is_object"),
    isArrayLike = require("is_array_like");


module.exports = deepExtend;


function deepExtend(out) {
    var i = 0,
        il = arguments.length - 1;

    while (i++ < il) {
        baseDeepExtend(out, arguments[i]);
    }

    return out;
}

function baseDeepExtend(a, b) {
    var objectKeys = keys(b),
        i = -1,
        il = objectKeys.length - 1,
        key;

    while (i++ < il) {
        key = objectKeys[i];
        extend(a, key, b[key]);
    }
}

function extend(object, key, value) {
    var objectValue = object[key];

    if (isArrayLike(value) && isArrayLike(objectValue)) {
        extendArray(objectValue, value);
    } else if (isObject(value) && isObject(objectValue)) {
        baseDeepExtend(objectValue, value);
    } else {
        object[key] = value;
    }
}

function extendArray(a, b) {
    var i = -1,
        il = b.length - 1;

    while (i++ < il) {
        a[a.length] = b[i];
    }
}
