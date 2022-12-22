import { Marine } from "./marine";
import { EngineeringBay } from "./engineering-bay";
import { Academy } from "./academy";


const marine1 = new Marine({ positionX: 10, positionY: 100 });
const marine2 = new Marine({ positionX: 12, positionY: 102 });

console.log(marine1.getGroundAttackPower());

const engineeringBay1 = new EngineeringBay();
engineeringBay1.upgradeWeapons();

console.log(marine1.getGroundAttackPower());
console.log(marine2.getGroundAttackPower());

const academy1 = new Academy();

console.log(marine2.hitPoints);
console.log(marine2.useStimPack());
console.log(marine2.hitPoints);

academy1.upgradeStimPack();

console.log(marine2.hitPoints);
console.log(marine2.useStimPack());
console.log(marine2.hitPoints);

engineeringBay1.upgradeWeapons();
engineeringBay1.upgradeWeapons();
engineeringBay1.upgradeWeapons();
engineeringBay1.upgradeWeapons();
engineeringBay1.upgradeWeapons();

console.log(marine1.getGroundAttackPower());