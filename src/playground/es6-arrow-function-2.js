// arguments object - no longer bound with arrow funvtions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(55, 2, 100));


//this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Dallas', 'New York', 'Dublin'],
    //printPlacesLived: function () {    //this is a method, we do not want to use arrow functions here
    printPlacesLived() {  //this is another wy to write methods in ES6 by removing the work function 
        return this.cities.map((dude) => this.name + ' has lived in ' + dude);

        // this.cities.forEach((city) => { 
        //     console.log(this.name + ' has lived in ' + city);
        //});
        // return cityMessages;
    }
};

console.log(user.printPlacesLived());
// user.printPlacesLived();

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());