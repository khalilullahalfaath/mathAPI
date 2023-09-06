const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) {
      throw new Error('Fungsi add hanya menerima dua parameter');
    }

    // const a = args[0];
    // const b = args[1];

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Fungsi add hanya menerima parameter bertipe number');
    }

    return a + b;
  },
  subtract: (...args) => {
    if (args.length !== 2) {
      throw new Error('Fungsi subtract hanya menerima dua parameter');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Fungsi subtract hanya menerima parameter bertipe number');
    }

    return a - b;
  },
  multiply: (...args) => {
    if (args.length !== 2) {
      throw new Error('Fungsi multiply hanya menerima dua parameter');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Fungsi multiply hanya menerima parameter bertipe number');
    }

    return a * b;
  },
  divide: (...args) => {
    if (args.length !== 2) {
      throw new Error('Fungsi divide hanya menerima dua parameter');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Fungsi divide hanya menerima parameter bertipe number');
    }

    return a / b;
  },
};

module.exports = MathBasic;
