import { Marine } from "./marine";
import { EngineeringBay } from "./engineering-bay";


const marine1 = new Marine({ positionX: 10, positionY: 100 });
const marine2 = new Marine({ positionX: 12, positionY: 102 });

console.log(marine1.getGroundAttackPower());

const engineeringBay1 = new EngineeringBay();
engineeringBay1.upgradeWeapons();

console.log(marine1.getGroundAttackPower());
console.log(marine2.getGroundAttackPower());

console.log(marine2.hitPoints);
console.log(marine2.useStimPack());
console.log(marine2.hitPoints);

engineeringBay1.upgradeWeapons();
engineeringBay1.upgradeWeapons();
engineeringBay1.upgradeWeapons();
engineeringBay1.upgradeWeapons();
engineeringBay1.upgradeWeapons();

console.log(marine1.getGroundAttackPower());