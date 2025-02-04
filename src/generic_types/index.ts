type EntityType = "shop" | "theater" | "player" | "trafficLight";

class Location {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    distanceTo(playerX: number, playerY: number): number {
        return Math.sqrt(
            Math.pow(this.x - playerX, 2) +
            Math.pow(this.y - playerY, 2)
        );
    }
}

type Entity = {
    location: Location;
    type: EntityType;
}

class Shop implements Entity {
    type: "shop" = "shop";
    location: Location;
    constructor(x: number, y: number) {
        this.location = new Location(x, y);
    }

    sellItem() {
        console.log("Item sold");
    }
}

class Theater implements Entity {
    type: "theater" = "theater";
    location: Location;
    constructor(x: number, y: number) {
        this.location = new Location(x, y);
    }

    watchMovie() {
        console.log("Movie watched");
    }
}

class TrafficLight implements Entity {
    type: "trafficLight" = "trafficLight";
    location: Location;
    constructor(x: number, y: number) {
        this.location = new Location(x, y);
    }

    changeLight() {
        console.log("Light changed");
    }
}

const allEntities: Entity[] = [];

class Player implements Entity {
    type: EntityType = "player";
    location: Location;

    constructor() {
        this.location = new Location(0, 0);
        allEntities.push(this);   
    }

    //Demonstrates Generic Types - can control the type of the return value
    findNearest<T extends Entity>(type: EntityType): T | null{
        //#region - Logic for finding nearest entity from all entities
        let nearest: T | null = null;
        let nearestDistance = Infinity;
        for (const entity of allEntities) {
            if (entity.type === type) {
                const distance = entity.location.distanceTo(this.location.x, this.location.y);
                if (distance < nearestDistance) {
                    nearest = entity as T;
                    nearestDistance = distance;
                }
            }
        }
        //#endregion
    
        return nearest; // type T or null
    }
}

const player = new Player();

const nearestShop = player.findNearest<Shop>("shop");

if(nearestShop !== null){
    nearestShop.sellItem();
}

//Demonstrates Sum Types - can be discriminated by "type" property
function performActionAtLocation(entity: Shop | Theater | TrafficLight) { 
    switch (entity.type) {
        case "shop":
            entity.sellItem();
            break;
        case "theater":
            entity.watchMovie();
            break;
        case "trafficLight":
            entity.changeLight();
            break;
    }
}