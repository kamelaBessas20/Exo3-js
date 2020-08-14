function Person () {
    this.name = '';
    this.satchel = [];
    this.healthPoints = { max: 200, current: 100 };
    this.endurance = { max: 150, current: 150 };
    this.details = { x: 10, y:20 };
    this.type = 'héro';
    this.weapon = {};
    this.food = {};
    this.shield = {};
    this.strength = 0;

    /* Getters*/
    this.getName = function () {
        return this.name
    }
    this.getSatchel = function () {
       let names =[];
        let objectName = '';
       for(let i = 0 ; i < this.satchel.length; i++ ) {
           objectName = this.satchel[i]['name'];
           names.push(objectName);
       }

       return names;
   }
    this.getHealthPoints = function () {
        return this.healthPoints
    }
    this.getEndurance = function () {
        return this.endurance
    }
    this.getType = function () {
        return this.type
    }
    this.getWeapon = function () {
        return this.weapon.name
    }
    this.getShield = function () {
        return this.shield.name
    }
    this.getStrength = function () {
        return this.strength
    }
    this.getDetails = function () {
        return this.details
    }

    this.getFood = function () {
        return this.food
    }

    /* Setters */
    this.setName = function (value) {
        this.name = value;
    }
    this.setHealthPoints = function (value){
        this.healthPoints = value;
    }
    this.setEndurance = function (value) {
        this.endurance = value;
    }
    this.setType = function (value) {
        this.type = value;
    }
    this.setWeapon = function (value) {
        this.weapon = value;
    }
    this.setShield = function (value) {
        this.shield = value;
    }
    this.setFood = function (value) {
        this.food = value;
    }
    this.setSatchel = function (value) {
        this.satchel = value;
    }
    this.setStrength = function (value) {
        this.strength = value;
    }
    this.setDetails = function (value) {
        this.details = value;
    }

    /* functions */
    this.describe = function (obj) {
        console.log("Nom de personnage : " + obj.getName());
        console.log("Appartient à l'équipe : " + obj.getType());
        console.log("Son endurance est : " + obj.getEndurance()['current'] + " son max d'endurance : " + obj.getEndurance()['max']);
        console.log("Nombre de points de vie : " + obj.getHealthPoints()['current'] + " son max de PVS : " + obj.getHealthPoints()['max']);
        console.log("Il bat avec : " +  obj.getWeapon());
        console.log("Il se défend par : " +  obj.getShield());
    }
   this.attack = function (obj) {
        let endurance = 0;
        if (this.healthPoints > 0 && this.endurance > 0) {
            endurance = this.endurance - ((this.weapon['weight'] * this.weapon['length'])/1000 * this.strength);
        } else {
            console.log(this.name + " n'a plus de points de vie il rejoint le cimetière (ne fait plus partie de l'équipe) " + obj.name + " a gagné la partie");
        }
        return  endurance;

    }
    this.defend = function () {
        let endurance = 0;
        if (this.weapon != null) {
            let healthPoints = this.healthPoints['current'] + 5;
            endurance = this.endurance['current'] - (this.weapon['weight']/100 * this.strength);

            return { endurance: endurance, healthPoints: healthPoints }

        } else {
            console.log("Malheureusement pour " + this.name + " ne possède pas de bouclier ne pourra pas se déffendre");
        }
    }
    this.eat = function () {
        let endurance = 0;
        if (this.food['name'] != null) {
            console.log(this.name + " mange les " + this.food['name']);
            endurance = this.endurance['current'] + this.food['recovery'];
            return endurance;
        } else {
            console.log(this.name + " n'a plus de nourriture il ne pourra pas manger" );
        }
    }
    this.move = function () {
       let  endurance = 0;
       if (this.endurance > 0) {
           endurance = this.getEndurance()['current'] - (this.weapon['weight']/1000 * this.strength);

       }else{
               console.log("Le personnage n'a plus d'endurance il ne peut plus se déplacer");
           }

           return endurance;
   }

    this.sleep = function () {
        if (this.healthPoints['current'] >= this.healthPoints['max'] || this.endurance['current'] >=  this.endurance['max']) {

            console.log("L'endurance et/ou les PVS atteignent le Max le " + this.name + " ne pourra pas regagner des points");

        } else {
            let healthPoints = this.healthPoints['current'] + 1;
            let endurance = this.endurance + 2;

            return { endurance: endurance, healthPoints: healthPoints }

               }
    }

    this.fee = function () {

    }
}

function createPerson (name, satchel, healthPoints, endurance, details, type, weapon, food, shield, strength) {
    const person = new Person();
    person.setName(name);
    person.setSatchel(satchel);
    person.setHealthPoints(healthPoints);
    person.setEndurance(endurance);
    person.setDetails(details);
    person.setType(type);
    person.setWeapon(weapon);
    person.setFood(food);
    person.setShield(shield);
    person.setStrength(strength);

    return person;
}

/*doAction = function (attacker, opponent,  action) {
    switch (action){

        case "attack":

            break;

        case "defend":

            break;

        case "eat":
            break;
        default:
            console.log("Le personnage n'a plus de Pvs il rejoint le cémitière");
    }

}*/
