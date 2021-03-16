/**
 * @param {number[]} postorder
 * @return {boolean}
 */
function verifyPostorder(sequence) {
    if (sequence && sequence.length > 0) {
        var root = sequence[sequence.length - 1]
        for (var i = 0; i < sequence.length - 1; i++) {
            if (sequence[i] > root) {
                break;
            }
        }
        for (let j = i; j < sequence.length - 1; j++) {
            if (sequence[j] < root) {
                return false;
            }
        }
        var left = true;
        if (i > 0) {
            left = verifyPostorder(sequence.slice(0, i));
        }
        var right = true;
        if (i < sequence.length - 1) {
            right = verifyPostorder(sequence.slice(i, sequence.length - 1));
        }
        return left && right;
    }
    return true;
}