const input = require('sync-input');

gifts = [
    {"name": "Teddy Bear", "cost": 10, "id": 1},
    {"name": "Big Red Ball", "cost": 5, "id": 2},
    {"name": "Huge Bear", "cost": 50, "id": 3},
    {"name": "Candy", "cost": 8, "id": 4},
    {"name": "Stuffed Tiger", "cost": 15, "id": 5},
    {"name": "Stuffed Dragon", "cost": 30, "id": 6},
    {"name": "Skateboard", "cost": 100, "id": 7},
    {"name": "Toy Car", "cost": 25, "id": 8},
    {"name": "Basketball", "cost": 20, "id": 9},
    {"name": "Scary Mask", "cost": 75, "id": 10}
]

function printPrices() {
    console.log('Here\'s the list of gifts:\n');
    gifts.forEach(function (gift) {
        console.log(`${gift.id}- ${gift.name}, Cost: ${gift.cost} tickets`);
    });
}

function welcome() {
    console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`
    );
    printPrices();
}

function question() {
    console.log(`
What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop`);
}

function tickets() {
    console.log(`Total tickets: ${totalTickets}`);
}

function goodbye() {
    console.log(`Have a nice day!`);
}

function invalidNumber() {
    console.log('Please enter a valid number!');
}

function noGifts() {
    console.log('Wow! There are no gifts to buy.');
}

function insufficientTickets() {
    console.log('You don\'t have enough tickets to buy this gift.');
}

function inexistentGift() {
    console.log('There is no gift with that number!');
}

function incorrectType() {
    console.log('Please enter a valid number between 0 and 1000.');
}

let totalTickets = 0;
let totalGifts = gifts.length;
welcome();
let menu = true;
while (menu) {
    question();
    let option = Number(input());
    switch (option) {
        case 1:
            if (totalGifts === 0) {
                noGifts();
                break;
            }
            let gift = Number(input('Enter the number of the gift you want to get:'));
            if (isNaN(gift)) {
                invalidNumber();
                break;
            }
            let product = gifts.findIndex(e => e.id === gift);
            if (product === -1) {
                inexistentGift();
                break;
            } else if (gifts[product].cost > totalTickets) {
                insufficientTickets();
                break;
            }
            console.log(`Here you go, one ${gifts[product].name}!`);
            totalTickets -= gifts[product].cost;
            tickets();
            gifts.splice(product, 1);
            totalGifts--;
            break;
        case 2:
            let amount = Number(input('Enter the ticket amount:'));
            if (isNaN(amount) || amount < 0 || amount > 1000) {
                incorrectType();
                break;
            }
            totalTickets += amount;
            tickets();
            break;
        case 3:
            tickets();
            break;
        case 4:
            if (totalGifts === 0) {
                console.log('Here\'s the list of gifts:\n');
                noGifts();
                break;
            }
            printPrices();
            goodbye();
            break;
        case 5:
            goodbye();
            menu = false;
            break;
        default:
            invalidNumber();
            break;
    }
}