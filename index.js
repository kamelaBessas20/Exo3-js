const arme1 = createWeapon('Excalibur', 'épée', 0, 40, 500);
const arme2 = createWeapon('L\'abattoir', 'gourdin', 0, 30, 600);
const arme3 = createWeapon('Balisarde', 'épée', 0, 50, 400);


const bouclier1 = createShield('bouclier1', 200, 0);
const bouclier2 = createShield('bouclier2', 210, 10);
const bouclier3 = createShield('bouclier3', 400, 20);

const food1 = createFood('pommes', 50, 10);
const food2 = createFood('raisins', 60, 15);

let weapons = [arme1, arme2, arme3];
let foods = [food1, food2];
let shields = [bouclier1, bouclier2, bouclier3];

function main() {
    let team =[];
    let satchel = [];
    satchel.push(weapons);
    satchel.push(foods);
    satchel.push(shields);
    const hero = createPerson('Abe', satchel, { max: 100, current: 80 }, { max: 150, current: 50 },{ x: 2, y:7 },'héro', getRandom(satchel[0]), getRandom(satchel[1]), getRandom(satchel[2]), 1);
    const monstre = createPerson('Akuma', satchel, { max: 150, current: 60 }, { max: 200, current: 150 }, { x: 1, y:0 }, 'monstre', getRandom(satchel[0]), getRandom(satchel[1]), getRandom(satchel[2]), 2);
    hero.describe(hero);
    monstre.describe(monstre);
    team = [hero, monstre];
    console.log("Game overt : ");
    console.log("Votre jeu se déroule entre : " + hero.name + " et " + monstre.name);
    let attacker = getRandom(team);
    const enemy = team.find(element => element !== attacker);
    let enduranceAfterEat = attacker.eat();
    attacker.setEndurance(enduranceAfterEat);
    console.log(" L'endurance de " + attacker.name + " devient " + attacker.endurance);
    attacker.sleep();
    let enduranceAfterSleep = attacker.sleep()['endurance'];
    let healthPointsAfterSleep = attacker.sleep()['healthPoints'];
    attacker.setEndurance(enduranceAfterSleep);
    attacker.setHealthPoints(healthPointsAfterSleep);
    console.log(attacker.name + " a gagné deux points d'endurance après avoir dormi son endurance devient : " + attacker.endurance + " et un point PVS ces PVS deviennent : " + attacker.healthPoints);
    if (((attacker.details['y'] === enemy.details['y'] + 1) || (attacker.details['x'] === enemy.details['x'] + 1)) || ((attacker.details['y'] === enemy.details['y'] - 1) || (attacker.details['x'] === enemy.details['x'] - 1))) {
        let enduranceAfterAttack = attacker.attack(enemy);
        attacker.setEndurance(enduranceAfterAttack);
        console.log(attacker.name + " attaque " + enemy.name + " son endurance devient " + attacker.endurance);
    } else {
        console.log(attacker.name + " ne peut pas attacker il doit se mettre à coté de son adversaire");
    }

    console.log(enemy.name + " se defend contre " + attacker.name + " son edurance devient " + enemy.defend()['endurance'] + " et ces PVS deviennent " + enemy.defend()['healthPoints'])


}


