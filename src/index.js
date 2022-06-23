module.exports = function reverse(n) {
    let str = String(Math.abs(n));
    let long = str.length;
    let result = "";
    for (let i = 0; i < long; i++) {
        result = `${str[i]}${result}`;
    }
    return result;
}