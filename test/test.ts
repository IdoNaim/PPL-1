function calculateRevenueByCategory(transactions: Transaction[]): Record<string, number> {
    const revenueByCategory: Record<string, number> = {};
    for (const transaction of transactions) {
    // Apply 10% discount if quantity > 5
    let total = transaction.price * transaction.quantity;
    if (transaction.quantity > 5) {
    total *= 0.9; // 10% discount
    }
    // Filter out transactions with total < 50
    if (total >= 50) {
    if (!revenueByCategory[transaction.category]) {
    revenueByCategory[transaction.category] = 0;
    }
    revenueByCategory[transaction.category] += total;
    }
    }
    return revenueByCategory;
    }

// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript
import * as R from "ramda";

type Transaction = {
category: string;
price: number;
quantity: number;
}
const calculateRevenueByCategoryFP: (transactions : Transaction[]) => Record<string, number> = 
(transactions: Transaction[]) =>
    R.reduce( 
        (acc:Record<string, number>, t: Transaction) => ({
            ...acc,
            [t.category]: (acc[t.category] || 0) + t.price * t.quantity
        }),
        {}, 
        R.filter(fiftyOrMore, R.map(discount, transactions)) ,) 

const discount:(t:Transaction) => Transaction = (t:Transaction) => 
t.quantity >5 ? {category : t.category, price : t.price * 0.9, quantity : t.quantity } : t

const fiftyOrMore : (t:Transaction) => boolean = (t:Transaction) => t.price * t.quantity >= 50 ? true : false


const transactions :Transaction[] = [
    {category: "electronics", price: 20, quantity:6},
    {category: "clothes", price: 25, quantity:3}

];
console.log(calculateRevenueByCategoryFP(transactions));
console.log('\n');
console.log(calculateRevenueByCategory(transactions));










// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.