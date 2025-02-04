type Potion = {
    name: string;
    effect: string;
}

type Armour = {
    name: string;
    defence: number;
}

type Weapon = {
    name: string;
    damage: number;
}

type Gold = number;

type Equipment = {
    potions: Potion[];
    armour: Armour;
    weapon: Weapon;
    gold: Gold;
}

type Player = {
    equipment: Equipment;
}

const player: Player = {
    equipment:{
        potions: [
            {name: 'Health Potion', effect: 'heal'},
            {name: 'Strength Potion', effect: 'strength'},
        ],
        armour: {name: 'Chainmail', defence: 10},
        weapon: {name: 'Longsword', damage: 15},
        gold: 100
    }
}

const potions: Equipment["potions"] = player.equipment.potions;
potions[0].effect;