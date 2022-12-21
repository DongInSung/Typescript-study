type RACE = "TERRAN" | "ZERG" | "PROTOSS";

type UNIT_SIZE = "SMALL" | "MEDIUM" | "LARGE";

// enum UnitSize{  
//     SMALL,
//     MEDIUM,
//     LARGE
// }

type TERRAN_PRODUCTION_BASE = "COMMAND CENTER" | "BARRACKS" | "FACTORY" | "STARPORT";
type ZERG_PRODUCTION_BASE = "HATCHERY";
type PROTOSS_PRODUCTION_BASE = "NEXUS" | "GATEWAY" | "ROBOTICS FACILITIES" | "STARGATE";

interface Position {
    positionX: number,
    positionY: number
}

interface LimitedLocation {
    minimumPositionX: -255;
    minimumPositionY: -255;
    maximumPositionX: 255;
    maximumPositionY: 255;
}


interface Unit<P> {
    race: RACE;
    size: UNIT_SIZE;
    // attackType;
    hitPoints: number;
    maxHP: number;
    manaPoints?: number;
    maxMP?: number;
    groundAttack: number;
    airAttack?: number;
    defense: number;
    speed: number;
    attackSpeed: number;
    attackRange: number;
    productionBase: P;
    position: Position;
    getDefense(): number;
}


interface Terran extends Unit<TERRAN_PRODUCTION_BASE> {
    repairable: boolean;
    healable: boolean;
}


interface Protoss extends Unit<PROTOSS_PRODUCTION_BASE> {
    shields: number;
    shiledsRegenerationRate: number;
}


interface ZERG extends Unit<ZERG_PRODUCTION_BASE> {
    hpRegenerationRate: number;
}

export { Terran, Protoss, ZERG, Position }