// TypeScript - What could go wrong?

type Item = {
    name: string;
    description: string;
    price: number;
}

function calculateOrderTotal(items: Item[], taxRate: number, discountCode: number) {
    console.log("working")
    // Is items an array? What's in it?
    // Is taxRate a number or percentage?
    // What if discountCode is undefined?
}

calculateOrderTotal([
    { name: "Item 1", description: "Description 1", price: 10 },
    { name: "Item 2", description: "Description 2", price: 20 }
], "taxRate", 3)