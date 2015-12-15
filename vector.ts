class Vector extends Array<number> {
    public normalize(vector: Vector) {
        var l = this.length(vector)
        return vector.map(function (p) { return p / l || 0 });
    }
    public length(vector: Vector) {
        return Math.sqrt(
            vector.reduce(function (prev, current) {
                return prev + (current * current)
            }, 0)
        )
    }
}
export = Vector;