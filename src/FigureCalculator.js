class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  calculateRectanglePerimeter(...args) {
    if (args.length !== 2) {
      throw new Error('Fungsi calculateRectanglePerimeter hanya menerima dua parameter');
    }

    const [length, width] = args;

    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('Fungsi calculateRectanglePerimeter hanya menerima parameter bertipe number');
    }

    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    if (args.length !== 2) {
      throw new Error('Fungsi calculateRectangleArea hanya menerima dua parameter');
    }

    const [length, width] = args;

    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('Fungsi calculateRectangleArea hanya menerima parameter bertipe number');
    }

    return this._mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    if (args.length !== 3) {
      throw new Error('Funsgi calculatTrianglePerimeter hanya menerima 3 parameter');
    }

    const [a, b, c] = args;

    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      throw new Error('Fungsi calculatetrianglePerimeter hanya menerima parameter bertipe number');
    }

    return this._mathBasic.add(this._mathBasic.add(a, b), c);
  }

  calculateTriangleArea(...args) {
    if (args.length !== 2) {
      throw new Error('Fungsi calculateTriangleArea hanya menerima 2 parameter');
    }

    const [base, height] = args;

    if (typeof base !== 'number' || typeof height !== 'number') {
      throw new Error('Fungsi calculateTriangleArea hanya menerima parameter bertipe number');
    }

    return this._mathBasic.divide(this._mathBasic.multiply(base, height), 2);
  }
}

module.exports = FigureCalculator;
