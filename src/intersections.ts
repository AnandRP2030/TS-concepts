// intersections
// a type that has every property of multiple types/interface

type Animal = {
    name: string
}

type Cat = {
    name:string;
    skill: string[]
}

// new animal required all properties of Animal and Cat
// name property repeats in both so you won't add to two times
type NewAnimal = Animal & Cat;

const boi: NewAnimal = {
    name: "boi",
    skill: ["run", "swim"]
}

