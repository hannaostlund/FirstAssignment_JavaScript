// THE ACCOUNT OBJECT SHOULD HAVE THE FOLLWOING PROPERTIES:
// expenses: an array that should hold all of your expenses, can be empty from start
// income: an array that should hold all of your income, can be empty from start
// addExpenses: a function that vill add an expense to the expenses array
// addIncome: a function that vill add an income to the income array
// listAllExpenses: a function that should list all the expenses in the expenses array
// getSummary: a function that should summarize your total balances. It should show your total
// income, your total expenses and also calculate your current balances (income - expenses).

// TODO - my plan
// 1. Put the name property in the object as the datatype string [DONE]
// 2. write what the menu should say// Create the menu and different choices for the user [DONE]
// 3. take the input from the user and store it (save it) in a variable [DONE]
// 4. use the stored variable to display the correct menu choice 
// 5. Create the switch statement layout for my menu choices - and comment on why [DONE]
// 6. Create the arrays for expenses and income 


// --- create the account OBJECT ---
const account = {
    // name: the account holders name, should be a string
    name: "Hanna"
}
//arrays for expenses and incomes 
let expenses = []
let income = []



// --- create the FUNCTION called menu() --- 
function menu() {
// the function menu() should only be responsible to show the different choices
// for the user.
const choice = parseFloat(
    prompt(
        "Please select from the menu:\n1) Add income\n2) Add expense\n3) List all expenses\n4) See total balance"
        )
    ); 
    console.log("Choice: " + choice);
// Im using Swtich instead for if/else, beacause its clear and easy to read. The menu is pretty straightforward so Switch Statement is a good choice for simplicity
// at the moment im not sure what to put inside/ what the switch should display so im comming back to this one 
switch (choice) {
    case 1:
        console.log("This is choice 1");
        break;

    case 2:
        console.log("This is choice 2");
        break;

    case 3:
        console.log("This is choice 3");
        break;

    case 4:
        console.log("This is choice 5");
        break;

    default:
        alert("Invalid choice. Please select a valid option");
        break; 
}
}
menu();
