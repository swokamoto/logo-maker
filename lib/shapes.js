// Generate logo based on user input
function logoGenerator (answers) {
    let logo;
    // destructure answers
    let { shape, shapeColor, logoText, textColor } = answers;

    // create logo based on shape
    switch (shape) {
        case 'circle':
            logo = new Circle(shapeColor, logoText, textColor, 75);
            break;
        case 'square':
            logo = new Square(shapeColor, logoText, textColor, 150);
            break;
        case 'triangle':
            logo = new Triangle(shapeColor, logoText, textColor);
            
            break;
        default:
            console.log('Invalid shape');
    }

    return logo.render();
}

// abstract class for Shape
class Shape {
    constructor(color, logoText, textColor) {
        this.color = color;
        this.logoText = logoText;
        this.textColor = textColor;
    }
    render() {
        throw new Error('Method not implemented');
    }
}

class Circle extends Shape {
    constructor(color, logoText, textColor, radius) {
        super(color, logoText, textColor);
        this.radius = radius;
    }
    render() {
        let svg =
`<svg height="200" width="300">
<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />
<text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="70px" dy=".3em">${this.logoText}</text>
</svg>`;
        return svg;
    }
}

class Square extends Shape {
    constructor(color, logoText, textColor, side) {
        super(color, logoText, textColor);
        this.side = side;
    }
    render() {
        let svg =
`<svg height="200" width="300">
<rect x="75" y="25" width="${this.side}" height="${this.side}" fill="${this.color}" />
<text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="80px" dy=".3em">${this.logoText}</text>
</svg>`;
        return svg;
    }
}

class Triangle extends Shape {
    constructor(color, logoText, textColor) {
        super(color, logoText, textColor);
    }
    render() {
        let svg =
`<svg height="200" width="300">
<polygon points="150,35 50,165 250,165" fill="${this.color}" />
<text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="50px" dy=".8em">${this.logoText}</text>
</svg>`;
        return svg;
    }
}

module.exports = { logoGenerator, Shape, Circle, Square, Triangle };