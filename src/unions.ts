// input either number or string
// unions allow a varialble have multiple types
// interface can't do this with primitives (could be wrong)
type PrintArg = number | string;


function print(input: PrintArg) {
    if (typeof input === "string") {
        console.log("length", input.length)
    }else {
        console.log("pow", Math.pow(input, 2))
    }
}

print(5);
print("hey there!");