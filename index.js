const wilder = require('./information');
let cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hello I'm ${wilder.name} from ${wilder.campus} campus!`,
    e: "oO",
    T: "U "
}));
