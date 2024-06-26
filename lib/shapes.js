// Define the shapes
class Shape{
    constructor(){
        this.color=""
    }
    setColor(color){
        this.color=color
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}
class Triangle extends Shape{
    render(){
        return `<polygon points="100,50 200,50 150,150" fill="${this.color}"/>`
    }
}
class Square extends Shape{
    render(){
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}"/>`
    }
}
module.exports= {Circle,Triangle,Square};

