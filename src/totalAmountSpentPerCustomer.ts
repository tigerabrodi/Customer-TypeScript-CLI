import type { Customer } from '.'

export function totalAmountSpentPerCustomer(customers: Array<Customer>) {
  const totalAmountSpentPerCustomer = customers.map((customer) => {
    const totalAmountSpent = customer.purchaseHistory.reduce(
      (total, purchase) => {
        return total + purchase.amount
      },
      0
    )
    return {
      name: customer.name,
      totalAmountSpent,
    }
  })

  return totalAmountSpentPerCustomer.forEach((customer) =>
    console.log(`${customer.name} - ${customer.totalAmountSpent}`)
  )
}
