const shapes= ['Circle', 'Triangle', 'Square', 'Pentagon'];

// Define the shapes
const shape= {
    Circle: {
        type: 'circle',
        cx: 150,
        cy: 100,
        r: 80,
    },
    Triangle: {
        type: 'polygon',
        points: '150,100 250,100 200,200',
    },
    Square: {
        type: 'rect',
        x: 150,
        y: 150,
        width: 150,
        height: 150,
    },
    Pentagon: {
        type: 'polygon',
        points: '150,100 250,100 200,200 150,250 100,200',
    },
};


