// Define the shapes
const shapes= [
    {
        name: 'Circle',
        type: 'circle',
        cx: 150,
        cy: 100,
        r: 80,
    },
    {
        name: 'Triangle',
        type: 'polygon',
        points: '150,100 250,100 200,200',
    },
    {
        name: 'Square',
        type: 'rect',
        x: 150,
        y: 150,
        width: 150,
        height: 150,
    },
    {
        name: 'Pentagon',
        type: 'polygon',
        points: '150,100 250,100 200,200 150,250 100,200',
    },
];


// Exports to the shapes array
module.exports= shapes;

