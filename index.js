import { Arena } from './arena.js';

import { Warrior } from './characters.js';
import { Priest } from './characters.js';
import { Mage } from './characters.js';
import { Rouge } from './characters.js';
import { Archer } from './characters.js';

import { Sword } from './weapons.js';
import { Battle_Axe } from './weapons.js';
import { War_Hammer } from './weapons.js';
import { Dagger } from './weapons.js';
import { Bow } from './weapons.js';
import { Wand } from './weapons.js';

const characterTypes = { Warrior, Priest, Mage, Rouge, Archer };
const weapons = { Sword, Battle_Axe, War_Hammer, Dagger, Bow, Wand };

const createNewCharacter = (characterType, characterName, weapon) => {
    if (characterTypes[characterType]) {
        const character = new characterTypes[characterType](characterName);
        if (character.possibleWeapons.includes(weapon)) {
            character.equipWeapon(new weapons[weapon]);
            return character;
        }
        else {
            console.log(character.name + " cannot equip that weapon! He fights without one...");
            return character;
        }

    } else {
        return ("No such character type");
    }
}

const contender1 = createNewCharacter("Warrior", "Béla", "Battle_Axe");
const contender2 = createNewCharacter("Warrior", "Ákos", "Sword");

const tournament = new Arena;
tournament.startFight(contender1, contender2);
