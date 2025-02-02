class Inventory {
    clear() {

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

class Enemy {
    name: string;
    hpBar: HpBar;

    constructor() {
        this.name = 'Enemy';
        this.hpBar = new HpBar();
    }
}

function damageEntity(entity: Player | Enemy, damage: number) {
    entity.hpBar.takeDamage(damage);
    
    if(entity.hpBar.health <= 0 && entity instanceof Player) {
        entity.inventory.clear();
    }
}