// Set the text and shape

class SVG{
    constructor(){
        this.textEl=""
        this.shapeEl=""
    }
    setText(text, color){
        this.textEl=`<text x="50%" y="50%" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape){
        this.shapeEl=shape.render()
    }
    render(){
        return`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
    }
}
module.exports=SVG

