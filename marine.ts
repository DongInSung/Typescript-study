import { Position, Terran } from './unit';
import { EngineeringBayUpgrade } from './engineering-bay';


export class Marine implements Terran {

    public readonly race = "TERRAN";
    public readonly size = "SMALL";
    public hitPoints = 40;
    public readonly maxHP = 40;
    public readonly groundAttack = 6;
    public readonly airAttack = 6;
    public readonly defense = 0;
    public speed = 4;
    public attackSpeed = 15;
    public readonly attackRange = 4;
    public readonly healable = true;
    public readonly repairable = false;
    public readonly productionBase = "BARRACKS";

    constructor(
        public position: Position,
    ) {
        console.log("You wanna piece of me, boy? ");
    }

    public move(location: Position): void {
        // speed ?
        this.position.positionX = location.positionX;
        this.position.positionY = location.positionY;
    }

    public getGroundAttackPower(): number {
        return this.groundAttack + EngineeringBayUpgrade.status().getMarinesInfantryWeapons();
    }

    public getAirAttackPower(): number {
        return this.airAttack + EngineeringBayUpgrade.status().getMarinesInfantryWeapons();
    }

    public getDefense(): number {
        return this.defense + EngineeringBayUpgrade.status().getMarinesInfantryArmor();
    }

    public getOffensiveDistance(): number {
        return this.attackRange;
    }


    public beAttacked(damage: number): number {
        const result = (this.hitPoints + this.getDefense()) - damage;

        // 유닛 사망 ==> 객체 제거?
        if (result <= 0) {
            return -1;
        }
        console.log(`HP : ${this.hitPoints}`);
        return result;
    }

    public useStimPack(): void {

        console.log("Ah! Yeah! ");

        this.hitPoints -= 10;
        this.speed += 2;
        this.attackSpeed += 5;

        // setTimeout(() => {
        //     this.speed -= 2;
        //     this.attackSpeed -= 5
        // }, 13500);

    }
}