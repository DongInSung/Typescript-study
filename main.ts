import { Marine } from "./marine";


const marine1 = new Marine({ positionX: 10, positionY: 100 });
const marine2 = new Marine({ positionX: 12, positionY: 102 });


console.log(marine1.getGroundAttackPower());
console.log(marine1.getAirAttackPower());


console.log(marine2.hitPoints);
console.log(marine2.useStimPack());
console.log(marine2.hitPoints);
