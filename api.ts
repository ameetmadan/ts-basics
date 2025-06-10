// <T> is a generic type
import {User} from "./profile";

interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
    errors?: string[];
}

// Now we can use this for any API response
type UserResponse = ApiResponse<User>;
type OrdersResponse = ApiResponse<Order[]>;
type ProductResponse = ApiResponse<Products>;

// Generic function for API calls
async function apiCall<T>(url: string): Promise<ApiResponse<T>> {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return {
            success: true,
            data
        };
    } catch (error) {
        return {
            success: false,
            data: {} as T,
            errors: [error.message]
        };
    }
}

// Usage
const userResult = await apiCall<User>('/api/users/123');
const ordersResult = await apiCall<Order[]>('/api/orders');

interface Product<T> {
    id: string
    category: T;
}