//Enums (short for enumerations) in TS are a feature that allows you to define a set of named constants. 

// type Direction = "TOP" | "LEFT" | "RIGHT" | "BOTTOM";

enum Direction {
    UP = "UP",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    DOWN = "DOWN"
}
function move(direction: Direction) {
    console.log("direction", direction)
}

move(Direction.UP)
move(Direction.LEFT)
move(Direction.DOWN)