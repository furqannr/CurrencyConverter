import inquirer from "inquirer";
let eurToPkr = 0;
let eurToUsd = 0;
let eurToAu = 0;
let auToEur = 0;
let auToUsd = 0;
let auToPkr = 0;
let pkrtoUsd = 0;
let pkrtoEur = 0;
let pkrtoAu = 0;
let usdToPkr = 259;
let usdToEur = 0;
let usdToAu = 0;
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
            if (answers.to == "Usd") { }
            else if (answers.to == "Au") { }
            else if (answers.to == "Pkr") { }
        }
        else if (answers.from == "Au") {
            if (answers.to == "Euro") { }
            else if (answers.to == "Usd") { }
            else if (answers.to == "Pkr") { }
        }
        else {
            if (answers.to == "Euro") { }
            else if (answers.to == "Au") { }
            else if (answers.to == "Usd") { }
        }
    });
}
main();
