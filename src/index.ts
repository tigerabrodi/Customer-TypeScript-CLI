// - [x] Create a new project
// - [ ] Display menu with options
// - [ ] List customer names and emails
// - [ ] Display customer details -> User inputs customer id, then display "Customer ID: details"
// - [ ] Total amount spent by each customer: "customer ID: Show total amount"
// - [ ] Most recent purchase for each customer: "Input customer ID: Show most recent purchase name"

import dataJSON from './data.json'

import { select } from '@inquirer/prompts'
import { listCustomers } from './listCustomers'

export type PurchaseHistory = {
  item: string
  amount: number
  purchaseDate: string
}

export type Customer = {
  id: string
  name: string
  email: string
  registrationDate: string
  purchaseHistory: Array<PurchaseHistory>
}

const customers = dataJSON as Array<Customer>

async function displayMenu() {
  const answer = await select({
    message: 'Select a package manager',
    choices: [
      {
        name: 'list',
        value: 'list',
        description: 'List customer names and emails',
      },
      {
        name: 'details',
        value: 'details',
        description: 'Display customer details',
      },
      {
        name: 'total',
        value: 'total',
        description: 'Total amount spent by each customer',
      },
      {
        name: 'recent',
        value: 'recent',
        description: 'Most recent purchase for each customer',
      },
    ],
  })

  return answer
}

function handleAnswer(answer: string) {
  switch (answer) {
    case 'list':
      listCustomers(customers)
      break
    // case 'details':
    //   displayCustomerDetails()
    //   break
    // case 'total':
    //   totalAmountSpent()
    //   break
    // case 'recent':
    //   mostRecentPurchase()
    //   break
    default:
      break
  }
}

async function main() {
  const answer = await displayMenu()
  handleAnswer(answer)
}

main()
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
