export function applyRatio(size, ratio) {
    const sum = ratio.reduce((a, b) => a + b);

    return ratio.map(i => (i / sum) * size);
}
