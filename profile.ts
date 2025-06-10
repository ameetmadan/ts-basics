export interface User {
    id: number;
    email: string;
    username: string;
    isEmailVerified: boolean;
    createdAt: Date;
    updatedAt?: Date;
    lastLogin?: Date; // Optional - might be null for new users
    address: Address;
}

export interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    isDefault: boolean;
}

interface Profile extends User {
    firstName: string;
    lastName: string;
    phoneNumber?: string;
}

const newUser: Profile = {
    id: 1,
    email: "example@example.com",
    // other properties from User
    firstName: "Sarah",
    lastName: "Kim",
    phoneNumber: "123-456-7890",
    username: "",
    isEmailVerified: false,
    createdAt: undefined,
    address: undefined
}