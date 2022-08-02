export class Armour {
    constructor() {
        this.name = "Armour";
        this.effectBase = "initArmour";
        this.effect = "armour";
        this.effectValue = 10;
    }
}

export class Dodge {
    constructor() {
        this.name = "Dodge";
        this.effectBase = "initEvasion";
        this.effect = "evasion";
        this.effectValue = 100;
    }
}

export class Firestorm {
    constructor() {
        this.name = "Firestorm";
        this.effectBase = "initDamage";
        this.effect = "damage";
        this.effectValue = 20;
    }
}

export class Headshot {
    constructor() {
        this.name = "Headshot";
        this.effectBase = "initDamage";
        this.effect = "damage";
        this.effectValue = 15;
    }
}

export class Heal {
    constructor() {
        this.name = "Heal";
        this.effectBase = "initHp";
        this.effect = "hp";
        this.effectValue = 10;
    }
}