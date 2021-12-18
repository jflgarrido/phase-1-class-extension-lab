// Your code here
class Polygon {
    constructor(arraySides){
        this.arraySides = arraySides
    }
    get countSides(){
        return this.arraySides.length
    }
    get perimeter(){
        const sum = this.arraySides.reduce((part_sum, a) => part_sum + a, 0)
        return sum
    }
}

class Triangle extends Polygon {
    get isValid(){
        if(this.arraySides[0] + this.arraySides[1] <= this.arraySides[2] ||
            this.arraySides[0] + this.arraySides[2] <= this.arraySides[1] ||
            this.arraySides[1] + this.arraySides[2] <= this.arraySides[0]){
                return false
            }
        return true           
    }
}
class Square extends Polygon {
    get isValid(){
        if(this.arraySides[0] === this.arraySides[1] &&
           this.arraySides[0] === this.arraySides[2] &&
           this.arraySides[0] === this.arraySides[3]){
            return true
        }
        return false
    }

    get area(){
        return Math.pow(this.arraySides[0], 2)
    }
}
