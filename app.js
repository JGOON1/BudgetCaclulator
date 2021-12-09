const budgetAmount = document.getElementById("budget-amount");
const expenseAmount = document.getElementById("expense-amount");
const balanceAmount = document.getElementById("balance-amount");



const revert = document.getElementById("revert")


const addBudget = document.getElementById("add-budget");
const budgetInput = document.getElementById("budget-number");




function getBudgetAmount(budget) {
    if (!budget) {
        budgetInput.placeholder = "Please input a budget"
    } else {
        budgetAmount.innerText = budget;
        balanceAmount.innerText = budget;
        localStorage.setItem('budget', budget)
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
    console.log(remade)
    console.log(typeof(remade))
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
        console.log(userExp.cost)
        console.log(typeof(userExp.cost))
        console.log(userExp)
        expenses.push(userExp);
        expDisplay(expenses);
        id++;
        expenseString.value = "";
        expenseNumber.value = "";
    }
}

expEntry.addEventListener('click', (e) => {
    e.preventDefault();
    createNewExpense(expenseString.value, expenseNumber.value)
    // console.log(expenseString, expenseNumber)
    // console.log(expenseNumber.value)
})




function expDisplay(expenses) {
    values.innerHTML = null;
    for (i = 0; i < expenses.length; i++) {
        values.innerHTML = values.innerHTML + `
            <div class="values" id="${expenses[i].id}">
                <p>
                    <span>${expenses[i].name}</span> <span> $${expenses[i].cost}</span>
                </p>
            </div>
       ` 
       console.log(values)
       expenseAmount.innerHTML = expenses[i].cost
    }
    console.log(expenses)
    calculateExpenses();
}

const expenseInput = document.getElementById('expense-number')
const expenseName = document.getElementById('expense-string')


function calculateExpenses() {
    let totalExp = 0
    for (let i = 0; i < expenses.length; i++) {
        totalExp = expenses[i].number + totalExp;
        
    }
    expenseInput.innerText = totalExp;
    updateBalance()
}


function updateBalance() {
  balanceAmount.innerText =
    parseInt(budgetAmount.innerText) - parseInt(expenseAmount.innerText);
}














// function sumArray() {
//     for (let i = 0; i < expenses.length; i++) {
//         sum += expenses[i]
//       }
//    return sum 
// }
// //   document.write( "javascript- Sum of the array value is :- " + sum ); 
// //we want remainig budgte to be budget minus the sum of the expenses array



// // expense.addEventListener('input', (event) => {
// //     expense.value = event.target.value
// //     console.log(expense.value)
// // })

// // expense.forEach(cost => {
// //     cost.addEventListener('input', (e) => {
// //         expense.value = e.target.value
// //     })
// // })

// //sets budget amount
// budgetAmount.addEventListener('input', (event) => {
//     budgetAmount.value = event.target.value;
//     console.log(budgetAmount.value)
// })

// newField.addEventListener('click', (event) => {
//     event.preventDefault();
//     index = 0 

//     const newExpense = document.createElement('div')
//     newExpense.classList.add('expenseList')
//     const newExpenseHTML = `<input type="string" name="description" class="description" 
//      placeholder="Expense name"><input type="number" name="expense" class="expense${index}" min="0" placeholder="Expense Cost"> 
//    </br>`   
//     index++
//     expenses.push(expense.value)
//     console.log(expenses)

//     newExpense.innerHTML = newExpenseHTML
//     budgetForm.appendChild(newExpense)
    
// })


// // newField.addEventListener('click', (event) => {
// //     event.preventDefault();
// //     const budgetDisplayHTML = `Remaining Budget: ${net}`
// //     budgetDisplay.innerHTML = budgetDisplayHTML

// // })


// calculate.addEventListener('click', (event) => {
//     event.preventDefault();

//     sumArray()
//     const budgetDisplayHTML = `Remaining Budget: ${net}`
//     budgetDisplay.innerHTML = budgetDisplayHTML

// })

// modal popup