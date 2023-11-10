// THE ACCOUNT OBJECT SHOULD HAVE THE FOLLWOING PROPERTIES:
// listAllExpenses: a function that should list all the expenses in the expenses array
// getSummary: a function that should summarize your total balances. It should show your total
// income, your total expenses and also calculate your current balances (income - expenses).

// TODO - my plan
// 1. Put the name property in the object as the datatype string [DONE]
// 2. write what the menu should say// Create the menu and different choices for the user [DONE]
// 3. take the input from the user and store it (save it) in a variable [DONE]
// 4. use the stored variable to display the correct menu choice 
// 5. Create the switch statement layout for my menu choices - and comment on why [DONE]
// 6. Create the arrays for expenses and income [DONE]
// 7. googleing parseFloat and commenting on why we need to use it here [DONE]
// 8. Add correct prompt to income and expense in the menu [DONE]
// 9. Add addExpenses - a function that add expense to the expenses array & explain it [DONE]
// 10. add function addIncome - add income to income array [DONE]
// 11. listAllExpenses - add a function that lists all the expenses in the expenses array
// 12. add getSummary funcion - that summarizes the total balance, it should show total income, total expenses and also calculate currant balances

// --- create the account OBJECT ---
const account = {
    //added name string and expense + income array
    name: "Hanna",
    expenses: [],
    income: [],
    // creating the function for addExpense, (its a property function, so its an function inside an object) using the PUSH array method(because it adds to my exsisting array "expenses")
    addExpense: function (description, amount){
        if (description !== undefined && amount !== undefined) {
            this.expenses.push({description, amount});
            //"this" line refer to my expenses array property of the current object (account)
            return true; // successful addition, description and amount will be added if they are not undefined 
        } else {
            return false; //invalid input, not defined 
        }
    }, // ((first i forgot to add a coma here and didnt see why it not worked, now ive learnt that in JS object literals porterties are separated by comas))
    // creating the function for income, using the "push" array method, this function works the same as addExpense 
    addIncome: function (amount) {
        if (amount !== undefined) {
            this.income.push(amount);
            return true; // amount is added if it's not undefined
        } else {
            return false; // if it's not defined, it's invalid input
        }
    }
}

// --- create the FUNCTION called menu() --- 
function menu() {
// we need to use prompt() in parseFloat() to get numeric input from the user(such as expenses).
// It's converting the user's input (which is a string) to a number using parseFloat, that allows the calculator to work properly and be able to calculate 
const choice = parseFloat(
    prompt(
        "EXPENSE TRACKER\nPlease select from the menu:\n1.) Add income\n2.) Add expense\n3.) List all expenses\n4.) See total balance"
        )
    ); 
    console.log("Choice: " + choice);
// Im using Swtich instead for if/else, beacause its clear and easy to read. The menu is pretty straightforward so Switch Statement is a good choice for simplicity
switch (choice) {
    case 1:
        const incomeAmount = parseFloat(prompt("How much was your income?"));
        //I dont need a description for the income, just need to ad the number to the income array
        break;

    case 2:
        const expenseDescription = prompt("What was your expense? (rent, food, gas etc.)");
        const expenseAmount = parseFloat(prompt("How much was your expense?"));
        //Here i need first a descrition - which is a string (works without parseFloat) then i need parseFloat for number
        break;

    case 3:
        // HEre i need to get back
        // // listAllExpenses: a function that should list all the expenses in the expenses array
        break;

    case 4:
        // HEre i need to go back
        // // getSummary: a function that should summarize your total balances. It should show your total
        break;

    default:
        alert("Invalid choice. Please select a valid option");
        break; 
    }
}
menu();
