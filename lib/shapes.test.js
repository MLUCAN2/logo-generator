// Test for functionality
const{Circle,Triangle, Square} = require ('./shapes.js')

test(
    'should create a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="100,50 200,50 150,150" fill="blue"/>');
    }
)
test(
    'should create a blue circle', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
    }
)
test(
    'should create a blue square', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue"/>');
    }
)