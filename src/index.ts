// - [x] Create a new project
// - [ ] Display menu with options
// - [ ] List customer names and emails
// - [ ] Display customer details -> Input customer ID -> Show details
// - [ ] Total amount spent by each customer -> Input customer ID -> Show total amount
// - [ ] Most recent purchase for each customer -> Input customer ID -> Show most recent purchase

import dataJSON from './data.json'

type PurchaseHistory = {
  item: string
  amount: number
  purchaseDate: string
}

type Customer = {
  id: string
  name: string
  email: string
  registrationDate: string
  purchaseHistory: Array<PurchaseHistory>
}

const customers = dataJSON as Array<Customer>

async function main() {
  console.log('Hello world!')
}

main()
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
