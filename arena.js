
export class Arena {
    constructor() { }

    startFight(contender1, contender2) {
        console.log(contender1);
        console.log(contender2);
        let roundNumber = 0;
        while (contender1.hp > 0 && contender2.hp > 0) {
            roundNumber++;
            console.log("========");
            console.log("Round " + roundNumber);
            this.activateAbilities(contender1, contender2);
            let roundHits = this.roundHitOrder(contender1, contender2);
            this.hit(roundHits[0], roundHits[1]);
            if(roundHits[1].hp > 0) this.hit(roundHits[1], roundHits[0]);

            if(contender1.hp <= 0) console.log(contender2.name + " wins!");
            if(contender2.hp <= 0) console.log(contender1.name + " wins!");
            this.removeAbilities(contender1, contender2);
        }

    }

    roundHitOrder(contender1, contender2) {
        let rnj = Math.floor(Math.random() * 2);
        if (rnj > 0) return [contender1, contender2];
        else return [contender2, contender1];
    }

    hit(hitter, target) {
        let minDamage = hitter.damage + hitter.weapon.minDamage || hitter.damage;
        let maxDamage = hitter.damage + hitter.weapon.maxDamage || hitter.damage;
        let initialDamage = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;

        let hit = true;

        if(hitter.weapon.hitChance && hitter.weapon.hitChance < Math.floor(Math.random() * 101) / 100) hit = false;
        if(target.evasion > Math.floor(Math.random() * 101)) hit = false;

        if (hit === true) {
            let finalDamage = initialDamage - Math.floor(target.armour / 3);
            if (finalDamage < 0) finalDamage = 0;

            console.log(`${hitter.name}(${hitter.hp}hp) hits ${target.name}(${target.hp}hp) for ${initialDamage} damage. ${finalDamage} damage received`);
            target.hp = target.hp - finalDamage;
            if(target.hp <= 0) {
                target.hp = 0;
                console.log(hitter.name + " finished off " + target.name + "!");
            } else console.log(target.name + " has only " + target.hp + "hp remaining!");
        } else {
            console.log(`${hitter.name}(${hitter.hp}hp) tries to hit ${target.name}(${target.hp}hp) but ${target.name} evades it!`);
            console.log(target.name + " still has " + target.hp + "hp remaining!");
        }

    }

    activateAbilities(contender1, contender2) {
        if(Math.floor(Math.random() * 10) === 0) {
            contender1[contender1.abilities.effect] += contender1.abilities.effectValue;
            if(contender1.hp > contender1.initialHp) contender1.hp = contender1.initHp;
            console.log(contender1.name + " activated " + contender1.abilities.name);
        }
        if(Math.floor(Math.random() * 10) === 0) {
            contender2[contender2.abilities.effect] += contender2.abilities.effectValue;
            if(contender2.hp > contender2.initialHp) contender2.hp = contender2.initHp;
            console.log(contender2.name + " activated " + contender2.abilities.name);
        }
    }

    removeAbilities(contender1, contender2) {
        if(contender1.abilities.name !== "Heal") contender1[contender1.abilities.effect] = contender1[contender1.abilities.effectBase];
        if(contender2.abilities.name !== "Heal") contender2[contender2.abilities.effect] = contender2[contender2.abilities.effectBase];
    }

}