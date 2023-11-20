// COMMENTS: I know I added a lot of comments, but I think its good for you to understand why/what I did, also
// if I want to go back I can have a look at my comments and remember my thought processes if I forget some of the methods. 

// TODO 
// 1. Put the name property in the object as the datatype string [DONE]
// 2. write what the menu should say// Create the menu and different choices for the user [DONE]
// 3. take the input from the user and store it (save it) in a variable [DONE]
// 4. use the stored variable to display the correct menu choice [DONE]
// 5. Create the switch statement layout for my menu choices - and comment on why [DONE]
// 6. Create the arrays for expenses and income [DONE]
// 7. learning about parseFloat and commenting on why we need to use it here [DONE]
// 8. Add correct prompt to income and expense in the menu [DONE]
// 9. Add addExpenses - a function that add expense to the expenses array & explain it [DONE]
// 10. add function addIncome - add income to income array [DONE]
// 11. add listAllExpenses function that lists all the expenses in the expenses array. [DONE]
// 12. Add a loop to keep my menu continusly open becuase it closes after adding income : [DONE]
// 13. Add getSummary funcion - that summarizes the total balance, it should show total income, 
//     total expenses and also calculate currant balances - Going over the forEach loop at mdn and learn about it [DONE]
// 14. Add error message for adding wrong type of income and expenses! Go over the error handling and change code if needed [DONE]
// 15. Changed the listAllExpenses and added the map method [DONE]
// 16. Deleted the dublette alerts [DONE]

// --- create the account OBJECT ---
const account = {
    //added name string and expense + income array
    name: "Hanna",
    expenses: [],
    income: [],
    // creating the function for addExpense, this is a function whitin the object "account"
    //using the PUSH array method(because it adds to my exsisting array "expenses")
    addExpense: function (description, amount){
        if (description && !isNaN(amount) && typeof amount === "number" && amount >= 0) {
            //error handling, using both typeof amount = number and isNaN to handle error messages.  
            this.expenses.push({description, amount});
            //"this" line refer to my expenses array property of the current object (account)
            return true; // successful addition, description and amount will be added 
        } else {
            return false; //invalid input
        }
    }, 
    // creating the function for income, using the "push" array method, this function works the same as addExpense  
    addIncome: function (amount) {
        //at first I had written the code "if (amount !== undefined)" and as I progressed in the assignment I realized I needed to be more specific
        //so that the functions checks that the input is a number 
        if (isNaN(amount)){
            //alert("Invalid input! Please enter a number for income"); I had to remove this since I already have alert in my switch
            return false;
            //I struggled to handle how to make sure a string couldnt be added to income, and finally i added the isNaN (info from MDN web docs)
        } else {
            this.income.push(amount);
            //alert("Income added"); (I have an alert in the Switch for this so i dont really need this)
            return true;
            //using the push array to add the income array
        }
    },
    listAllExpenses: function () {
        //At first I created a function for listAll with a for loop, but it listed all expenses seperatly, so I had to research and use
        // the array method "map", using the link provided by Helena under "array method" video  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
        const allExpenses = this.expenses.map(function (currentExpense) {
            return `Expense: ${currentExpense.description}, Amount: ${currentExpense.amount}`;
        });
        alert("All expenses:\n" + allExpenses.join("\n"));
        //"map" goes over all expenses in the this.expenses array, and then creating a new array allExpenses with the expense string
        //Using the "join " array method to concatenate all elements in the allExpenses array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    },
    getSummary: function () {
        let totalIncome = 0;
        let totalExpenses = 0;
        // setting up variabls and value 
        this.income.forEach(function(income) {
            totalIncome += income;
        });
        // using the forEach loop to go through each element in the income array, calculating the total income
        // (using information from MDN web docs on how to use forEach loop)
        this.expenses.forEach(function(expense) {
            totalExpenses += expense.amount;
        });
        // using the forEach loop, calculating the total expenses from the expenses array
        const balance = totalIncome - totalExpenses;
        // calculating the balance by subtracting total expenses from total income 
        alert(`${this.name} \nYour total income are ${totalIncome}, your total expenses are: ${totalExpenses}, your total balances are: ${balance}`);
        // message displayed using template literate 
    }
};

// --- create the FUNCTION called menu() --- 
function menu() {
    let continueMenu = true;
       while (continueMenu) {
        // added a loop to keep the menu open as it closed after adding income, I used the "while" loop (info from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
        // "The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true." 
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
            alert("Income added successfully");
            } else {
            alert("Invalid input, please use a valid number");
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
            alert("Invalid input! Please enter valid expense and amount");
            //error handling
        }
        break;

        case 3:
            account.listAllExpenses();
            //calling the function listAllExpenses
        break;

        case 4:
            account.getSummary();
            //calling the function getSummary
        break;

        default:
            alert("Invalid choice. Please select a valid option");
        break; 
        }
    }
}
menu();
