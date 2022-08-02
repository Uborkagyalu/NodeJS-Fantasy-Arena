import { Armour } from './abilities.js';
import { Dodge } from './abilities.js';
import { Firestorm } from './abilities.js';
import { Headshot } from './abilities.js';
import { Heal } from './abilities.js';

export class Warrior {
    constructor(name) {
        this.name = name;
        this.initHp = 100;
        this.hp = 100;
        this.initArmour = 5;
        this.armour = 5;
        this.initEvasion = 20;
        this.evasion = 20;
        this.initDamage = 0;
        this.damage = 0;
        this.hitChance = 1;
        this.abilities = new Armour;
        this.possibleWeapons = ["Sword", "Battle_Axe"];
        this.weapon = "";
    }

    equipWeapon(weapon) {
        this.weapon = weapon;
    }
}

export class Priest {
    constructor(name) {
        this.name = name;
        this.initHp = 90;
        this.hp = 90;
        this.initArmour = 4;
        this.armour = 4;
        this.initEvasion = 20;
        this.evasion = 20;
        this.initDamage = 0;
        this.damage = 0;
        this.hitChance = 1;
        this.abilities = new Heal;
        this.possibleWeapons = ["Sword", "War_Hammer"];
        this.weapon = "";
    }

    equipWeapon(weapon) {
        this.weapon = weapon;
    }
}

export class Mage {
    constructor(name) {
        this.name = name;
        this.initHp = 70;
        this.hp = 70;
        this.initArmour = 1;
        this.armour = 1;
        this.initEvasion = 5;
        this.evasion = 5;
        this.initDamage = 0;
        this.damage = 0;
        this.hitChance = 1;
        this.abilities = new Firestorm;
        this.possibleWeapons = ["Sword", "Wand"];
        this.weapon = "";
    }

    equipWeapon(weapon) {
        this.weapon = weapon;
    }
}

export class Rouge {
    constructor(name) {
        this.name = name;
        this.initHp = 80;
        this.hp = 80;
        this.initArmour = 3;
        this.armour = 3;
        this.initEvasion = 30;
        this.evasion = 30;
        this.initDamage = 0;
        this.damage = 0;
        this.hitChance = 1;
        this.abilities = new Dodge;
        this.possibleWeapons = ["Sword", "Dagger"];
        this.weapon = "";
    }

    equipWeapon(weapon) {
        this.weapon = weapon;
    }
}

export class Archer {
    constructor(name) {
        this.name = name;
        this.initHp = 80;
        this.hp = 80;
        this.initArmour = 2;
        this.armour = 2;
        this.initEvasion = 15;
        this.evasion = 15;
        this.initDamage = 0;
        this.damage = 0;
        this.hitChance = 1;
        this.abilities = new Headshot;
        this.possibleWeapons = ["Sword", "Bow"];
        this.weapon = "";
    }

    equipWeapon(weapon) {
        this.weapon = weapon;
    }
}
