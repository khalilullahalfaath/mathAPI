const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A FigureCalculator', () => {
  it('should contain calculateRectanglePerimeter, calculateRectangleArea, calcualteTrianglePerimeter, and calculateTriangleArea function', () => {
    const figureCalculator = new FigureCalculator();

    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });

  describe('A calculateRectanglePerimeter function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator();

      expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError();
    });

    it('should return error when given non-number parameters', () => {
      const figureCalculator = new FigureCalculator();

      expect(() => figureCalculator.calculateRectanglePerimeter(null, '2')).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter([], {})).toThrowError();
    });

    it('should return 2 * (length + width) when given two number parameters', () => {
      // arrange
      const length = 20;
      const width = 10;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);

      // action
      const result = figureCalculator.calculateRectanglePerimeter(length, width);

      // assert
      expect(result).toEqual(60);
      expect(spyAdd).toBeCalledWith(length, width);
      expect(spyMultiply).toBeCalledWith(2, 30);
    });
  });

  describe('A calculateRectangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator();

      expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrowError();
    });

    it('should return error when given non-number parameters', () => {
      const figureCalculator = new FigureCalculator();

      expect(() => figureCalculator.calculateRectangleArea(null, '2')).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(true, {})).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea([], {})).toThrowError();
    });

    it('should return 2 * (length + width) when given two number parameters', () => {
      // arrange
      const length = 20;
      const width = 10;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);

      // action
      const result = figureCalculator.calculateRectangleArea(length, width);

      // assert
      expect(result).toEqual(200);
      expect(spyMultiply).toBeCalledWith(length, width);
    });
  });

  describe('A calculateTrianglePerimeter function', () => {
    it('should throw error when not given 3 parameters', () => {
      const figureCalculator = new FigureCalculator();

      expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4)).toThrowError();
    });

    it('should return error when given non-number parameters', () => {
      const figureCalculator = new FigureCalculator();

      expect(() => figureCalculator.calculateTrianglePerimeter(null, '2', true)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(true, {}, null)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter([], {}, '2')).toThrowError();
    });

    it('should return a+b+c when given three number parameters', () => {
      // arrange
      const a = 20;
      const b = 10;
      const c = 30;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const figureCalculator = new FigureCalculator(MathBasic);

      // action
      const result = figureCalculator.calculateTrianglePerimeter(a, b, c);

      // assert
      expect(result).toEqual(60);
      //   expect(spyAdd).toBeCalledWith(20, 10);
      //   expect(spyAdd).toBeCalledWith(30, 30);
      expect(spyAdd).toBeCalledWith((a + b), c);
    });
  });

  describe('A calculateTriangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator();

      expect(() => figureCalculator.calculateTriangleArea()).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(1, 2, 3)).toThrowError();
    });

    it('should return error when given non-number parameters', () => {
      const figureCalculator = new FigureCalculator();

      expect(() => figureCalculator.calculateTriangleArea(null, '2')).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(true, {})).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea([], {})).toThrowError();
    });

    it('should return 2 * (length + width) when given two number parameters', () => {
      // arrange
      const base = 20;
      const height = 10;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const figureCalculator = new FigureCalculator(MathBasic);

      // action
      const result = figureCalculator.calculateTriangleArea(base, height);

      // assert
      expect(result).toEqual(100);
      expect(spyMultiply).toBeCalledWith(base, height);
      expect(spyDivide).toBeCalledWith(200, 2);
    });
  });
});
