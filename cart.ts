// example to try out

interface CartInterface {
    product: Product;
    quantity: number;
    addedAt: Date;
}

type CartType = {
    product: Product;
    quantity: number;
    addedAt: Date;
}

interface ShoppingCart {
    id: string;
    userId: number;
    items: CartItem[];
    createdAt: Date;
    updatedAt: Date;
}

// Students implement these functions:
class CartService {
    addItem(cart: ShoppingCart, product: Product, quantity: number): ShoppingCart {
        // TODO: Implement
    }

    removeItem(cart: ShoppingCart, productId: string): ShoppingCart {
        // TODO: Implement
    }

    updateQuantity(cart: ShoppingCart, productId: string, quantity: number): ShoppingCart {
        // TODO: Implement
    }

    calculateTotal(cart: ShoppingCart): number {
        // TODO: Implement
    }

    clearCart(cart: ShoppingCart): ShoppingCart {
        // TODO: Implement
    }
}