const { Shape, Circle, Square, Triangle } = require('./shapes');

describe('Shape', () => {
    test('Shape renders throws exception', () => {
        const shape = new Shape('red', 'A', 'black');
        expect(() => shape.render()).toThrow('Method not implemented');
    });
});

describe('Circle', () => {
    test('Circle has a radius', () => {
        const circle = new Circle('red', 'A', 'black', 75);
        expect(circle.radius).toBe(75);
    });
    test('Circle renders an SVG circle', () => {
        const circle = new Circle('red', 'ABC', 'black', 75);
        expect(circle.render()).toContain( `<svg height="200" width="300">
<circle cx="150" cy="100" r="75" fill="red" />
<text x="50%" y="50%" text-anchor="middle" fill="black" font-size="70px" dy=".3em">ABC</text>
</svg>`);
    });
});

describe('Square', () => {
    test('Square has a side', () => {
        const square = new Square('red', 'A', 'black', 150);
        expect(square.side).toBe(150);
    });
    test('Square renders an SVG square', () => {
        const square = new Square('red', 'ABC', 'black', 150);
        expect(square.render()).toContain( `<svg height="200" width="300">
<rect x="75" y="25" width="150" height="150" fill="red" />
<text x="50%" y="50%" text-anchor="middle" fill="black" font-size="80px" dy=".3em">ABC</text>
</svg>`);
    });
}
);

describe('Triangle', () => {
    test('Triangle renders an SVG triangle', () => {
        const triangle = new Triangle('red', 'ABC', 'black');
        expect(triangle.render()).toContain(   `<svg height="200" width="300">
<polygon points="150,35 50,165 250,165" fill="red" />
<text x="50%" y="50%" text-anchor="middle" fill="black" font-size="50px" dy=".8em">ABC</text>
</svg>`);
    });
});
