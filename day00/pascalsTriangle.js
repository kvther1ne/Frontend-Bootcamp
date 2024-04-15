function paskalsTriangle(x, y) {
    return (y === 0 || x === y) ? 1:paskalsTriangle(x - 1, y - 1) + paskalsTriangle(x - 1, y);
}

console.log(paskalsTriangle(3,2)); // 3
