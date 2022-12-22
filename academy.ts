

// 업그레이드 상태
export class AcademyUpgrade {

    private static INSTANCE: AcademyUpgrade;

    private U_238_Shells: boolean = false; // 마린 사거리 업그레이드
    private stimPack: boolean = false;

    // private stimPack = {
    //     isUpgrade: false,
    //     requiredHp: 10
    // }

    // 메딕
    // private caduceusReactor : boolean = false;
    // private restoration : boolean = false;
    // private opticFlare : boolean = false;

    constructor() { }

    public static status() {

        if (!AcademyUpgrade.INSTANCE) {
            AcademyUpgrade.INSTANCE = new AcademyUpgrade();
        }
        return AcademyUpgrade.INSTANCE;
    }

    public upgradeShells(): void {
        this.U_238_Shells = true;
    }

    public upgradeStimPack(): void {
        this.stimPack = true;
    }

    public getShells(): boolean {
        return this.U_238_Shells;
    }

    public getStimPack(): boolean {
        return this.stimPack;
    }
}


export class Academy {

    public hitPoint: number = 600;
    public readonly maxHP: number = 600;
    public readonly repairable: boolean = true;
    private isProcessingUpgrade: boolean = false;

    constructor() { }

    public upgradeShells() : void {
        if(this.isProcessingUpgrade) {
            return;
        }
        this.isProcessingUpgrade = true;
        AcademyUpgrade.status().upgradeShells();
        this.isProcessingUpgrade = false;
    }

    public upgradeStimPack() :void {
        if(this.isProcessingUpgrade) {
            return;
        }
        this.isProcessingUpgrade = true;
        AcademyUpgrade.status().upgradeStimPack();
        this.isProcessingUpgrade = false;
    }

}