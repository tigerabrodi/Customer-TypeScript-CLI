import type { Customer } from '.'

import { input } from '@inquirer/prompts'

import { BREAKPOINT } from './constants'

export async function displayCustomerDetails(customers: Array<Customer>) {
  while (true) {
    const answer = await input({ message: 'Enter your customer ID' })

    const customer = customers.find((customer) => customer.id === answer)

    if (!customer) {
      console.log('Customer not found')
      continue
    } else {
      // Display the customer details
      console.log(`Name: ${customer.name}`)
      console.log(`Email: ${customer.email}`)
      console.log(`Registration Date: ${customer.registrationDate}`)
      console.log('Purchase History:')
      console.log(
        customer.purchaseHistory
          .map((purchase) => {
            return `Item: ${purchase.item} - Amount: ${purchase.amount} - Date: ${purchase.purchaseDate}`
          })
          .join(BREAKPOINT)
      )

      // Exit the loop after displaying details
      break
    }
  }
}
