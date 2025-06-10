import { User } from './profile';

function createUser(data: Omit<User, "id" | "createdAt">): User {
    return {
        ...data,
        id: Math.floor(Math.random() * 1000), // Simulating ID generation
        createdAt: new Date(), // Setting the current date as createdAt
    }
}


function updateUser(data: Omit<User, "id" | "updatedAt">): User {
    return {
        ...data,
        id: Math.floor(Math.random() * 1000), // Simulating ID generation
        updatedAt: new Date(), // Setting the current date as createdAt
    }
}

type ReducedUser = Pick<User, "id" | "email">

type PartialUser = Partial<User>;