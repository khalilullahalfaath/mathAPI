const createServer = require('./createServer');
const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A HTTP Server', () => {
  describe('when GET /add', () => {
    it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyAdd).toBeCalledWith(a, b);
    });
  });

  describe('when GET /substract', () => {
    it('should respond with a status code of 200 and the payload value is substraction result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spySubs = jest.spyOn(MathBasic, 'subtract');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/substract/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(-10);
      expect(spySubs).toBeCalledWith(a, b);
    });
  });
  describe('when GET /multiply', () => {
    it('should respond with a status code of 200 and the payload value is substraction result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(200);
      expect(spyMultiply).toBeCalledWith(a, b);
    });
  });
  describe('when GET /divide', () => {
    it('should respond with a status code of 200 and the payload value is substraction result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/divide/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(0.5);
      expect(spyDivide).toBeCalledWith(a, b);
    });
  });
  describe('when GET /rectangle/perimeter', () => {
    it('should respond with a status code of 200 and the payload value is perimeter of rectangle result of length and width correctly', async () => {
      // Arrange
      const length = 8;
      const width = 4;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyRectanglePerimeter = jest.spyOn(figureCalculator, 'calculateRectanglePerimeter');
      const server = createServer({ figureCalculator });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/perimeter/${length}/${width}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(24);
      expect(spyRectanglePerimeter).toBeCalledWith(length, width);
    });
  });
  describe('when GET /rectangle/area', () => {
    it('should respond with a status code of 200 and the payload value is area of rectangle result of length and width correctly', async () => {
      // Arrange
      const length = 8;
      const width = 4;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyRectangleArea = jest.spyOn(figureCalculator, 'calculateRectangleArea');
      const server = createServer({ figureCalculator });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/area/${length}/${width}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(32);
      expect(spyRectangleArea).toBeCalledWith(length, width);
    });
  });
  describe('when GET /triangle/perimeter', () => {
    it('should respond with a status code of 200 and the payload value is triangle perimeter result of a, b, c correctly', async () => {
      // Arrange
      const a = 8;
      const b = 4;
      const c = 2;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyTrianglePerimeter = jest.spyOn(figureCalculator, 'calculateTrianglePerimeter');
      const server = createServer({ figureCalculator });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/perimeter/${a}/${b}/${c}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(14);
      expect(spyTrianglePerimeter).toBeCalledWith(a, b, c);
    });
  });
  describe('when GET /triangle/area', () => {
    it('should respond with a status code of 200 and the payload value is the result of area of the triangle based on base and height correctly', async () => {
      // Arrange
      const base = 8;
      const height = 4;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyTriangleArea = jest.spyOn(figureCalculator, 'calculateTriangleArea');
      const server = createServer({ figureCalculator });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/area/${base}/${height}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(16);
      expect(spyTriangleArea).toBeCalledWith(base, height);
    });
  });
});
