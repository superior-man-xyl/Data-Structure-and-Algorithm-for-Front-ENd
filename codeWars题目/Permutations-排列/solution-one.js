function permutations(string) {
    if (string.length <= 1) {
        return [string];
    } else {
        let res = string.split('')
            .map((char, i) => permutations(string.substr(0, i) + string.substr(i + 1))//空开char
                .map(p => char + p))//以char开头
            .reduce((r, x) => r.concat(x), [])
        return Array.from(new Set(res));
    }
}

console.log(permutations('aabb'));