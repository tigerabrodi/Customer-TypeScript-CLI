import { select } from '@inquirer/prompts'

// in the real world, this would be an API call to get the data/customers
import dataJSON from './data.json'
import { displayCustomerDetails } from './displayCustomerDetails'
import { listCustomers } from './listCustomers'
import { mostRecentPurchaseOfEachCustomer } from './mostRecentPurchaseOfEachCustomer'
import { totalAmountSpentPerCustomer } from './totalAmountSpentPerCustomer'

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
    message: 'Select an option',
    choices: [
      {
        name: 'List customers',
        value: 'list',
        description: 'List customer names and emails',
      },
      {
        name: 'Detailed customer information',
        value: 'details',
        description: 'Display customer details',
      },
      {
        name: 'Total amount',
        value: 'total',
        description: 'Total amount spent by each customer',
      },
      {
        name: 'Recent purchase',
        value: 'recent',
        description: 'Most recent purchase for each customer',
      },
    ],
  })

  return answer
}

async function handleAnswer(answer: string) {
  switch (answer) {
    case 'list':
      listCustomers(customers)
      break
    case 'details':
      await displayCustomerDetails(customers)
      break
    case 'total':
      totalAmountSpentPerCustomer(customers)
      break
    case 'recent':
      mostRecentPurchaseOfEachCustomer(customers)
      break
    default:
      break
  }
}

async function main() {
  const answer = await displayMenu()
  await handleAnswer(answer)
}

main()
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
