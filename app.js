const budgetAmount = document.getElementById("budget-amount");
const expenseAmount = document.getElementById("expense-amount");
const balanceAmount = document.getElementById("balance-amount");
const newExpense = document.getElementById("new-expense")
const revert = document.getElementById("revert")
const addBudget = document.getElementById("add-budget");
const budgetInput = document.getElementById("budget-number");
function getBudgetAmount(budget) {
    if (!budget) {
        budgetInput.placeholder = "Please input a budget"
        newExpense.classList.remove('active')
        console.log(newExpense)
    } else {
        budgetAmount.innerText = budget;
        balanceAmount.innerText = budget;
        localStorage.setItem('budget', budget)
        newExpense.classList.add('active')
        budgetInput.value = "";
    }
    // if (!localStorage.getItem('budget')) {
    //     console.log(Number(JSON.parse(window.localStorage.getItem('budget')) ))
    //     $window.localStorage.setItem('budget', Number(JSON.parse(window.localStorage.getItem('budget'))))
    //     console.log(typeof(budgetAmount))
    // }
}
revert.addEventListener("click", function(){
    const found = localStorage.getItem("budget");
    const num = Number(found)
    const remade = JSON.parse(num)
    budgetAmount.innerText= remade
    balanceAmount.innerText = remade
})
addBudget.addEventListener("submit", (e) => {
    e.preventDefault();
    getBudgetAmount(budgetInput.value)
})
// // funtion that grabs the description and grabs the cost
// // eventListener on the add expense button that will create a new div for each and append it to the listContainer
// expenseString.addEventListener('input', (e) => {
//     const expString = expenseString.value = e.target.value;
//     console.log(expString);
// });
// expenseNumber.addEventListener('input', (e) => {
//     const expNumber = expenseNumber.value = e.target.value;
//     console.log(expNumber);
// })
const expenseString = document.querySelector('#expense-string');
const expenseNumber = document.querySelector('#expense-number');
const expEntry = document.getElementById('exp-entry');
const expContainer = document.getElementById('expenseListContainer')
let id = 0;
let expenses = []
function createNewExpense(name, number) {
    if (!name.length || !number.length) {
        expenseString.placeholder = "input can not be empty";
        expenseNumber.placeholder = "input can not be empty";
    } else {
        const userExp = {
            id: id,
            name: name,
            cost: Number(number)
        };
        expenses.push(userExp);
        expDisplay(expenses);
        id++;
        expenseString.value = "";
        expenseNumber.value = "";
    }
}
expEntry.addEventListener('click', (e) => {
    e.preventDefault();
    if(budgetAmount.innerText == 0) {
        expenseString.value = "";
        expenseNumber.value = "";
        expenseString.placeholder = "Please input a budget first";
        expenseNumber.placeholder = "Please input a budget first";
    } else createNewExpense(expenseString.value, expenseNumber.value)
    // console.log(expenseNumber.value)
})
function expDisplay(expenses) {
    values.innerHTML = null;
    for (i = 0; i < expenses.length; i++) {
        values.innerHTML = values.innerHTML + `
            <div class="values" id="${expenses[i].id}">
                <p>
                    <span>Expense: ${expenses[i].name}</span> <span> Cost: $${expenses[i].cost}</span>
                </p>
            </div>
       `
    }
    calculateExpenses();
}
const expenseInput = document.getElementById('expense-number')
const expenseName = document.getElementById('expense-string')
function calculateExpenses() {
    let totalExp = 0
    for (let i = 0; i < expenses.length; i++) {
        totalExp = expenses[i].cost + totalExp;
    }
    console.log(totalExp)
    expenseAmount.innerText = totalExp;
    console.log(expenseInput.innerText)
    updateBalance()
}
function updateBalance() {
  balanceAmount.innerText =
    parseInt(budgetAmount.innerText) - parseInt(expenseAmount.innerText);
}