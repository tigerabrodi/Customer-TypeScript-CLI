import { Customer } from '.'

const BREAKPOINT = '\n'

export function listCustomers(customers: Array<Customer>) {
  console.log(
    customers
      .map((customer) => `${customer.name} - ${customer.email}`)
      .join(BREAKPOINT)
  )
}
