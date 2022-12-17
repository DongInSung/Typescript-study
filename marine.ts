import { Terran, Position  } from './unit';

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
    public readonly healAble = true;
    public readonly repairAble = false;
    public readonly productionBase = "BARRACKS";

    constructor(
        public position: Position,
    ) {
        console.log("You wanna piece of me, boy? ");
    }

    public move(location: Position): void {
        // spped ?
        this.position.positionX = location.positionX;
        this.position.positionY = location.positionY;
    }

    public getGroundAttackPower(): number {
        return this.groundAttack;
    }

    public getAirAttackPower(): number {
        return this.airAttack;
    }

    public getDefense(): number {
        return this.defense;
    }

    public getOffensiveDistance(): number {
        return this.attackRange;
    }


    public beAttacked(damage: number): number {
        const result = (this.hitPoints + this.getDefense()) - damage;

        // 유닛 사망
        if (result <= 0) {
            return -1;
        }
        console.log(`HP : ${this.hitPoints}`);
        return result;
    }


    public useStimPack(): void {

        if (this.hitPoints > 10) {

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
}