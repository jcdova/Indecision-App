var nameVar = 'Andrew';
var Name = 'Mike';
console.log('nameVar', nameVar); //Andrew

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);  //Julie

const nameCosnt = 'Frank';
console.log('nameConst', nameCosnt); //Frank

//Block Scripting

var fullName = 'Andrew Mead';

if (fullName) {
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
