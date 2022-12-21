interface InfantryWeaponsUnits {
    marines: number,
    firebats: number,
    ghosts: number,
    grade: number
}

interface InfantryArmorUnits {
    SCVs: number,
    marines: number,
    firebats: number,
    ghosts: number,
    medics: number,
    grade: number
}


// 업그레이드 상태
export class EngineeringBayUpgrade {

    private static INSTANCE: EngineeringBayUpgrade;

    // 공격력 업그레이드
    private infantryWeapons: InfantryWeaponsUnits = {
        marines: 0,
        firebats: 0,
        ghosts: 0,
        grade: 0
    }
    private maxWeaponsUpgrade: number = 3;

    // 방어력 업그레이드
    private infantryArmor: InfantryArmorUnits = {
        SCVs: 0,
        marines: 0,
        firebats: 0,
        ghosts: 0,
        medics: 0,
        grade: 0
    }
    private maxArmorUpgrade: number = 3;


    private constructor() { }

    static status(): EngineeringBayUpgrade {

        if (!EngineeringBayUpgrade.INSTANCE) {
            EngineeringBayUpgrade.INSTANCE = new EngineeringBayUpgrade();
        }

        return EngineeringBayUpgrade.INSTANCE;
    }


    public upgradeWeapons(): void {

        // 3업
        if (this.getGradeInfantryWeapons() === this.maxWeaponsUpgrade) {
            return;
        }

        // if(this.getGradeInfantryWeapons() > 1 && !scienceFacility) {
        //     return false;
        // }

        this.infantryWeapons.marines += 1;
        this.infantryWeapons.firebats += 2;
        this.infantryWeapons.ghosts += 1;
        this.infantryWeapons.grade += 1;

        console.log("Upgrade complete ");

        return;
    }

    public upgradeArmor(): void {

        // 3업
        if (this.getGradeInfantryArmor() === this.maxArmorUpgrade) {
            return;
        }

        // if(this.getGradeInfantryArmor() > 1 && !scienceFacility) {
        //     return;
        // }

        //Object.keys(this.infantryArmor).forEach(unitArmor => unitArmor += 1);

        this.infantryArmor.SCVs += 1;
        this.infantryArmor.marines += 1;
        this.infantryArmor.firebats += 1;
        this.infantryArmor.ghosts += 1;
        this.infantryArmor.medics += 1;
        this.infantryArmor.grade += 1;

        console.log("Upgrade complete ");

        return;
    }


    public getMarinesInfantryWeapons(): number {
        return this.infantryWeapons.marines;
    }

    public getMarinesInfantryArmor(): number {
        return this.infantryArmor.marines;
    }

    public getGradeInfantryWeapons(): number {
        return this.infantryWeapons.grade;
    }

    public getGradeInfantryArmor(): number {
        return this.infantryArmor.grade;
    }
}



export class EngineeringBay {

    public hitPoint: number = 850;
    public readonly maxHP: number = 850;
    public readonly repairable: boolean = true;
    private isLiftOff: boolean = false;
    private isProcessingUpgrade: boolean = false;

    constructor() { }


    public upgradeWeapons(): void {

        // 이륙 중이거나 업그레이드 중이면
        if (this.isLiftOff || this.isProcessingUpgrade) {
            return;
        }

        this.isProcessingUpgrade = true;
        EngineeringBayUpgrade.status().upgradeWeapons();
        this.isProcessingUpgrade = false;
    }

    public upgradeArmors(): void {

        // 이륙 중이거나 업그레이드 중이면
        if (this.isLiftOff || this.isProcessingUpgrade) {
            return;
        }

        this.isProcessingUpgrade = true;
        EngineeringBayUpgrade.status().upgradeArmor();
        this.isProcessingUpgrade = false;
    }

    public lift(): void {

        // 이륙 중이거나 업그레이드 중이면
        if (this.isLiftOff || this.isProcessingUpgrade) {
            return;
        }
        this.isLiftOff = true;
    }

    public move() { }
    public stop() { }
    public land() { }

}

