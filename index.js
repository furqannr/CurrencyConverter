#! /usr/bin/env node
import inquirer from "inquirer";
let eurToPkr = 248.92;
let eurToUsd = 1.08;
let eurToAu = 1.56;
let auToEur = 0.64;
let auToUsd = 0.69;
let auToPkr = 158;
let pkrtoUsd = 0.0044;
let pkrtoEur = 0.004;
let pkrtoAu = 0.0063;
let usdToPkr = 229;
let usdToEur = 0.92;
let usdToAu = 1.44;
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
            if (answers.to == "Euro") {
                console.log(answers.amount + " in " + answers.from + " = " + answers.amount * usdToEur + " " + answers.to);
            }
            else if (answers.to == "Au") {
                console.log(answers.amount + " in " + answers.from + " = " + answers.amount * usdToAu + " " + answers.to);
            }
            else if (answers.to == "Pkr") {
                console.log(answers.amount + " in " + answers.from + " = " + answers.amount * usdToPkr + " " + answers.to);
            }
        }
        else if (answers.from == "Euro") {
            if (answers.to == "Usd") {
                console.log(answers.amount + " in " + answers.from + " = " + answers.amount * eurToUsd + " " + answers.to);
            }
            else if (answers.to == "Au") {
                console.log(answers.amount + " in " + answers.from + " = " + answers.amount * eurToAu + " " + answers.to);
            }
            else if (answers.to == "Pkr") {
                console.log(answers.amount + " in " + answers.from + " = " + answers.amount * eurToPkr + " " + answers.to);
            }
        }
        else if (answers.from == "Au") {
            if (answers.to == "Euro") {
                console.log(answers.amount + " in " + answers.from + " = " + answers.amount * auToEur + " " + answers.to);
            }
            else if (answers.to == "Usd") {
                console.log(answers.amount + " in " + answers.from + " = " + answers.amount * auToUsd + " " + answers.to);
            }
            else if (answers.to == "Pkr") {
                console.log(answers.amount + " in " + answers.from + " = " + answers.amount * auToPkr + " " + answers.to);
            }
        }
        else {
            if (answers.to == "Euro") {
                console.log(answers.amount + " in " + answers.from + " = " + answers.amount * pkrtoEur + " " + answers.to);
            }
            else if (answers.to == "Au") {
                console.log(answers.amount + " in " + answers.from + " = " + answers.amount * pkrtoAu + " " + answers.to);
            }
            else if (answers.to == "Usd") {
                console.log(answers.amount + " in " + answers.from + " = " + answers.amount * pkrtoUsd + " " + answers.to);
            }
        }
    });
}
main();
