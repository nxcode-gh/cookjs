export function randomString(start, end) {
    return Math.random().toString(36).slice(start, end);
}
export function currentDateTime() {
    return new Date().toJSON();
}
export function removeValueFromArray(arr, value) {
    const index = arr.indexOf(value);
    arr.splice(index, 1);
    return arr;
}
export function sortArrayBy(data, byKey) {
    return data.sort(function (a, b) {
        // here a , b is whole object, you can access its property
        // it will return the difference to sort function and then 
        // sort compare that difference is equal to 0 or smaller than 0 or 
        // greater than 0. on the basis of that it will give sorted number list
        return a.parentId - b.parentId;
    });
}
//# sourceMappingURL=Utl.js.map