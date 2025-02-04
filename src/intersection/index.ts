class Inventory {
    clear() {

    }
}

class Gun {
    shoot() {
        console.log('Bang!');
    }
}

class Sword {
    slash() {
        console.log('Slash!');
    }
}

class HpBar {
    health: number;
    constructor() {
        this.health = 100;
    }

    takeDamage(damage: number) {
        this.health -= damage;
    }

    heal(heal: number) {
        this.health += heal;
    }
}

class Player {
    name: string;
    inventory: Inventory
    hpBar: HpBar;
    
    constructor() {
        this.name = 'Player';
        this.inventory = new Inventory();
        this.hpBar = new HpBar();
    }
}

type Enemy = {
    name: string;
    hpBar: HpBar;
}

type EnemyWithGun = {
    gun: Gun;
}

type EnemyWithSword = {
    sword: Sword;
}

class Pirate implements EnemyWithGun, EnemyWithSword {
    name: string;
    hpBar: HpBar;
    gun: Gun;
    sword: Sword;

    constructor() {
        this.name = 'Pirate';
        this.hpBar = new HpBar();
        this.gun = new Gun();
        this.sword = new Sword();
    }
}