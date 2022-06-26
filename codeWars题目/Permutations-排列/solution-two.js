function permutations(string) {
    var arr = string.split(''),
        tmp = arr.slice(),
        heads = [],
        out = [];
    if (string.length == 1) return [string];
    arr.forEach(function (v) {
        if (heads.indexOf(v) == -1) {
            heads.push(v);
            tmp.splice(tmp.indexOf(v), 1);
            permutations(tmp.join('')).forEach(function (w) {
                out.push(v + w);
            });
            tmp.push(v);
        }
    });
    return out;
}