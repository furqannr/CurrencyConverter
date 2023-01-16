import chalk from "chalk";
import inquirer from "inquirer";

let eurToPkr: number = 0;
let eurToUsd: number = 0;
let eurToAu: number = 0;
let auToEur: number = 0;
let auToUsd: number = 0;
let auToPkr: number = 0;
let pkrtoUsd: number = 0;
let pkrtoEur: number = 0;
let pkrtoAu: number = 0;
let usdToPkr: number = 259;
let usdToEur: number = 0;
let usdToAu: number = 0;

async function main() {
    await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "What is your source currency? ",
        choices: ["Usd", "Euro", "Au", "Pkr"]
    },
    {
        type: "list",
        name: "to",
        message: "What is your destination currency? ",
        choices: ["Usd", "Euro", "Au", "Pkr"]
    },
    {
        type: "number",
        name: "amount",
        message: `Enter the amount in source currency`
    }
    ])
        .then(async (answers) => {
            if (answers.to === answers.from) {
                console.log("Source and destination are same so no difference. Amount = " + answers.amount);
            }
            else if (answers.from == "Usd") {
                if (answers.to == "Euro") { console.log(answers.amount + " in " + answers.from + " = " + answers.amount * usdToEur + " " + answers.to) }
                else if (answers.to == "Au") { console.log(answers.amount + " in " + answers.from + " = " + answers.amount * usdToAu + " " + answers.to) }
                else if (answers.to == "Pkr") { console.log(answers.amount + " in " + answers.from + " = " + answers.amount * usdToPkr + " " + answers.to) }
            }
            else if (answers.from == "Euro") {
                if (answers.to == "Usd") { console.log(answers.amount + " in " + answers.from + " = " + answers.amount * eurToUsd + " " + answers.to) }
                else if (answers.to == "Au") { console.log(answers.amount + " in " + answers.from + " = " + answers.amount * eurToAu + " " + answers.to) }
                else if (answers.to == "Pkr") { console.log(answers.amount + " in " + answers.from + " = " + answers.amount * eurToPkr + " " + answers.to) }
            }
            else if (answers.from == "Au") {
                if (answers.to == "Euro") { console.log(answers.amount + " in " + answers.from + " = " + answers.amount * auToEur + " " + answers.to) }
                else if (answers.to == "Usd") { console.log(answers.amount + " in " + answers.from + " = " + answers.amount * auToUsd + " " + answers.to) }
                else if (answers.to == "Pkr") { console.log(answers.amount + " in " + answers.from + " = " + answers.amount * auToPkr + " " + answers.to) }
            }
            else {
                if (answers.to == "Euro") { console.log(answers.amount + " in " + answers.from + " = " + answers.amount * pkrtoEur + " " + answers.to) }
                else if (answers.to == "Au") { console.log(answers.amount + " in " + answers.from + " = " + answers.amount * pkrtoAu + " " + answers.to) }
                else if (answers.to == "Usd") { console.log(answers.amount + " in " + answers.from + " = " + answers.amount * pkrtoUsd + " " + answers.to) }
            }
        })
}
main();