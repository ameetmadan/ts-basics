type OrderStatus = "pending" | "shipped" | "received" | "lost" | "sent";
type OrderLevel = 1 | 2 | 3 | 4 | 5;

type OrderStatusAndLevel = OrderStatus | OrderLevel;

type Item = {
    name: string;
    description: string;
    price: number;
    status: OrderStatus
}

let item1: Item = {
    name: "My first item",
    description: "This is my first item",
    price: 19.99,
    status: "sent"
}