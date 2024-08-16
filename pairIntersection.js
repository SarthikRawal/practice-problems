function pairIntersection(range1, range2) {
    const [a, b] = range1
    const [c, d] = range2

    const start = Math.max(a, c);
    const end = Math.min(b, d);

    if (start < end) {
        return [start, end];
    } else if (start === end) {
        return [start]
    } else {
        return null;
    }
}

const range1 = [11, 14]
const range2 = [14, 21]

const newRange = pairIntersection(range1, range2)
console.log(newRange);