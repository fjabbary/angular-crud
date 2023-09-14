export interface User {
    firstName: string,
    lastName: string,
    email: string,
    age?: number,
    address?: {
        street: string,
        city: string,
        state: string
    },
    isActive?: boolean,
    hide?: boolean
}