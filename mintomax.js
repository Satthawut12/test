var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function merge(collection_1, collection_2) {
    var mergedArray = __spreadArray(__spreadArray([], collection_1, true), collection_2, true);
    return mergedArray;
}
var num1 = [48, 2, 18, 65, 42, 8];
var num2 = [1, 6, 53, 5, 21, 84];
var sum = merge(num1, num2);
for (var i = 0; i < sum.length - 1; i++) {
    for (var j = 0; j < sum.length - i - 1; j++) {
        if (sum[j] > sum[j + 1]) {
            var temp = sum[j];
            sum[j] = sum[j + 1];
            sum[j + 1] = temp;
        }
    }
}
console.log("".concat(sum.join(', ')));
