class Rectangle {
    constructor(width,height) {
        this.width = width;
        this.height = height;
    }
    
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    render(area) {
        console.log(area)
    }
}

class Square extends Rectangle {
    setWidth(width) {
        this.width = width;
        this.height = width;
    }
    setHeight(height) {
        this.width = height;
        this.height = height;
    }
}

function renderLargeRectangles(rectangles) {
    rectangles.forEach(rectangle => {
        rectangle.setHeight(4);
        rectangle.setWidth(5);
       
        const area = rectangle.getArea(); // BAD: Returns 25 for Square. Should be 20.
        rectangle.render(area);
    });
}

const rectangles = [new Square(), new Square(), new Square()];
renderLargeRectangles(rectangles);
