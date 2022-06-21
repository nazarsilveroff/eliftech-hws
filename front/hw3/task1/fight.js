function block() {
    const num = Math.floor(Math.random() * 2);
    return num > 0;
}

function fighterStats(someFighter) {
    const {wins, loses} = someFighter
    return {wins, loses}
}

function fighterProperties(someFighter) {
    const {name, attack, hp} = someFighter
    return {name, attack, hp}
}

function showResult(someFighter) {
    const {name} = someFighter
    const massage = `
         Fighter ${name} 
         - Combat stats: ${JSON.stringify(fighterStats(someFighter))}
         - Properties: ${JSON.stringify(fighterProperties(someFighter))}   
        `
    console.log(massage)
}

function Fighter({name, attack, hp, wins = 0, loses = 0}) {
    this.name = name;
    this.attack = attack;
    this.hp = hp
    this.wins = wins;
    this.loses = loses
}

Fighter.prototype.fight = function (someFighter) {
    if (block()) {
        return
    } else {
        if (someFighter.hp >= this.attack) {
            someFighter.hp = someFighter.hp - this.attack
        }
        if (someFighter.hp === 0 || someFighter.hp < this.attack) {
            this.wins += 1
            someFighter.loses += 1
        }
    }
}

const fighter1 = new Fighter({name: 'John', attack: 100, hp: 100});
const fighter2 = new Fighter({name: 'Kayn', attack: 50, hp: 300});
const fighter3 = new Fighter({name: 'Bill', attack: 40, hp: 100});

fighter1.fight(fighter3)
fighter1.fight(fighter2)
fighter1.fight(fighter2)
fighter1.fight(fighter2)
showResult(fighter1)
showResult(fighter2)
showResult(fighter3)


