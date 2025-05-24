const args = process.argv.slice(2);

const num = parseInt(args[0], 10);

// Check if parseInt returns a valid number and args[0] is not undefined or empty
if (!isNaN(num)) {
    console.log(`My number: ${num}`);
} else {
    console.log("Not a number");
}

