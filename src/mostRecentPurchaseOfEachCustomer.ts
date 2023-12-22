import type { Customer } from '.'

import { format } from 'date-fns' // Import the date formatting library

export function mostRecentPurchaseOfEachCustomer(customers: Array<Customer>) {
  const mostRecentPurchases = customers.map((customer) => {
    const mostRecentPurchase = customer.purchaseHistory.reduce(
      (mostRecent, purchase) => {
        return purchase.purchaseDate > mostRecent.purchaseDate
          ? purchase
          : mostRecent
      }
    )
    return {
      name: customer.name,
      mostRecentPurchase,
    }
  })

  mostRecentPurchases.forEach((customer) => {
    const { name, mostRecentPurchase } = customer
    const formattedDate = format(
      new Date(mostRecentPurchase.purchaseDate),
      'yyyy-MM-dd HH:mm:ss'
    ) // Format the purchase date

    console.log(
      `${name} - ${mostRecentPurchase.item} - ${mostRecentPurchase.amount}$ - ${formattedDate}`
    )
  })
}
