// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle


function RightTriangle(side1, side2, base){
    this.side1 = side1;
    this.side2 = side2;
    this.base = base;
    this.area = function(side1, side2, base) {
      var semiperimeter   =   (side1 + side2 + base) / 2;
        var calculation     =   semiperimeter * (semiperimeter - side1) * (semiperimeter - side2) * (semiperimeter - base);
        return Math.sqrt( calculation );
      };

    this.perimeter = function(side1, side2, base) {
      var perimeter = side1 + side2 + base;
      return perimeter;
    };
    };


// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.

var triangle1 = new RightTriangle(4, 3, 8);
var triangle2 = new RightTriangle(9, 7, 2);

console.log(triangle2.area());;
