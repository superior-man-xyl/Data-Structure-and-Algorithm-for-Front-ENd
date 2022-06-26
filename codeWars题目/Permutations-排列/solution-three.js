function permutations(string) {
    var s = string.split('').sort();
    var res = [s.join('')]
    while (true) {

        var j = s.length - 2;
        while (j != -1 && s[j] >= s[j + 1])
            j--;
        if (j == -1)
            break;

        var k = s.length - 1;
        while (s[j] >= s[k])
            k--;

        [s[j], s[k]] = [s[k], s[j]];
        var l = j + 1,
            r = s.length - 1;
        while (l < r) {
            [s[l], s[r]] = [s[r], s[l]];
            l++;
            r--;
        }
        res.push(s.join(''));
    }
    return res;
}