import type { Customer } from '.'

import { BREAKPOINT } from './constants'

export function listCustomers(customers: Array<Customer>) {
  console.log(
    customers
      .map((customer) => `${customer.name} - ${customer.email}`)
      .join(BREAKPOINT)
  )
}
