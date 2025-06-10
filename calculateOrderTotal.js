// JavaScript - What could go wrong?
function calculateOrderTotal(items, taxRate, discountCode) {
    console.log("working")
    const price = items * 3.0
    const tax = taxRate * price
    const discount = price - discountCode
    return price + tax - discount
}

calculateOrderTotal("string", "string 2", "string 3")