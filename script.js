// THE ACCOUNT OBJECT SHOULD HAVE THE FOLLWOING PROPERTIES:
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
// 11. add listAllExpenses function that lists all the expenses in the expenses array. 
//     Also going over info about the "for" statement loop (at mdn web docs) [DONE]
// 12. ADD a loop to keep my menu continusly open becuase it closes after adding income : 
// 13. add getSummary funcion - that summarizes the total balance, it should show total income, 
//     total expenses and also calculate currant balances [DONE]
// 14. Add error message for adding wrong type of income !!! check all error functions

// --- create the account OBJECT ---
const account = {
    //added name string and expense + income array
    name: "Hanna",
    expenses: [],
    income: [],
    // creating the function for addExpense, using a method declaration. (its a property function, so its an function inside an object) 
    //using the PUSH array method(because it adds to my exsisting array "expenses")
    addExpense: function (description, amount){
        if (description !== undefined && amount !== undefined) {
            this.expenses.push({description, amount});
            //"this" line refer to my expenses array property of the current object (account)
            return true; // successful addition, description and amount will be added if they are not undefined 
        } else {
            return false; //invalid input, not defined 
        }
    }, // ((btw first I forgot to add a coma here and didnt see why it not worked, now i've learnt that in JS object literals porterties are separated by comas))
    // creating the function for income, using the "push" array method, this function works the same as addExpense  
    addIncome: function (amount) {
        if (amount !== undefined) {
            this.income.push(amount);
            return true; // amount is added if it's not undefined
        } else {
            return false; // if it's not defined, it's invalid input
        }
    },
    listAllExpenses: function () {
        //created a function as a method within the object
        for (let i = 0; i < this.expenses.length; i++) {
            //using the "for" loop, to go through each expense in the expenses array (using info from mdn web docs)
            // setting up initialization (let i = 0), condition (i < this.expense.length) and incresment (i++)
            // I did see in the instructions that you suggested the forEach loop, and I think i could have solved this part with that as well? 
            //(I will try the forEach loop in the getSummary function to try it out)
            const currentExpense = this.expenses [i];
            //get the current expense at index i, within the loop
            alert (`Expense: ${currentExpense.description}, Amount:${currentExpense.amount}`);
            // Using templete literal to display alert message (not using console.log as the instructions says)
        }
    },
    getSummary: function () {
        let totalIncome = 0;
        let totalExpenses = 0;
        // setting up vsriables and value 
        this.income.forEach(function(income) {
            totalIncome += income;
        });
        //using the forEach loop to go through each element in the income array, calculating total income
        this.expenses.forEach(function(expense) {
            totalExpenses += expense.amount;
        });
        // using forEach loop, calculating total expenses from the expenses array
        const balance = totalIncome - totalExpenses;
        // calculating the balance by subtracting total expenses from total income 
        alert(`Total income ${totalIncome}, total expenses: ${totalExpenses}, balance: ${balance}`);
        // message displayed using template literate 
    }
};

// --- create the FUNCTION called menu() --- 
function menu() {
    let continueMenu = true;
       while (continueMenu) {
        // added a loop to keep the menu open as it closed after adding income, I used the "while" loop which I found googleing
        //I didnt see any instructions on keeping the menu continusly open, so im not sure if Ive missed something
        //i found it more user friendly to have the menu open so i didnt have to re-start it
        const choice = parseFloat(
            prompt(
                "EXPENSE TRACKER\nPlease select from the menu:\n1.) Add income\n2.) Add expense\n3.) List all expenses\n4.) See total balance"
        )
        // we need to use prompt() in parseFloat() to get numeric input from the user(such as expenses).
        // It's converting the user's input (which is a string) to a number using parseFloat, that allows the calculator to work properly and be able to calculate 
    ); 
        // Im using Swtich instead for if/else, beacause its clear and easy to read. The menu is pretty straightforward so 
        //Switch Statement is a good choice for simplicity
        switch (choice) {
            case 1:
            const incomeAmount = parseFloat(prompt("How much was your income?"));
            //I dont need a description for the income, just need to ad the number to the income array
            if (account.addIncome(incomeAmount)) {
                //adding the income 
                alert("Income added");
            } else {
                alert("Invalid input");
                //error handling 
            }
            break;

        case 2:
            const expenseDescription = prompt("What was your expense? (rent, food, gas etc.)");
            const expenseAmount = parseFloat(prompt("How much was your expense?"));
            //Here i need first a descrition - which is a string (works without parseFloat) then i need parseFloat for number
        if (account.addExpense(expenseDescription, expenseAmount)) {
            alert("Expense added successfully");
            //adding expenses 
        } else {
            alert("Invalid input");
            //error handling
        }
        break;

        case 3:
            account.listAllExpenses();
            //calling the function listAllExpenses
        break;

        case 4:
            account.getSummary();
            // // getSummary: a function that should summarize your total balances. It should show your total
        break;

        default:
            alert("Invalid choice. Please select a valid option");
        break; 
        }
    }
}
menu();
