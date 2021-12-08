const newField = document.querySelector("#another");
const expenseLst = document.querySelector('.expenseList')
const budgetForm = document.getElementById('budgetForm');
const budgetAmount = document.querySelector('#budgetAmount');
const budgetDisplay = document.querySelector('#budgetDisplay');
const expense = document.querySelector('.expense');
const calculate = document.getElementById('done')


//initialize budget
let budget = 0;
console.log(budget)
//initialize expenses array
let expenses = []
let sum = 0

//initialize leftover budget
let net = (budget - sum)


function sumArray() {
    for (let i = 0; i < expenses.length; i++) {
        sum += expenses[i]
      }
   return sum 
}
//   document.write( "javascript- Sum of the array value is :- " + sum ); 
//we want remainig budgte to be budget minus the sum of the expenses array



// expense.addEventListener('input', (event) => {
//     expense.value = event.target.value
//     console.log(expense.value)
// })

// expense.forEach(cost => {
//     cost.addEventListener('input', (e) => {
//         expense.value = e.target.value
//     })
// })

//sets budget amount
budgetAmount.addEventListener('input', (event) => {
    budgetAmount.value = event.target.value;
    console.log(budgetAmount.value)
})

newField.addEventListener('click', (event) => {
    event.preventDefault();
    index = 0 

    const newExpense = document.createElement('div')
    newExpense.classList.add('expenseList')
    const newExpenseHTML = `<input type="string" name="description" class="description" 
     placeholder="Expense name"><input type="number" name="expense" class="expense${index}" min="0" placeholder="Expense Cost"> 
   </br>`   
    index++
    expenses.push(expense.value)
    console.log(expenses)

    newExpense.innerHTML = newExpenseHTML
    budgetForm.appendChild(newExpense)
    
})


// newField.addEventListener('click', (event) => {
//     event.preventDefault();
//     const budgetDisplayHTML = `Remaining Budget: ${net}`
//     budgetDisplay.innerHTML = budgetDisplayHTML

// })


calculate.addEventListener('click', (event) => {
    event.preventDefault();

    sumArray()
    const budgetDisplayHTML = `Remaining Budget: ${net}`
    budgetDisplay.innerHTML = budgetDisplayHTML

})