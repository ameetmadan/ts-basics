# Introduction to TypeScript

This repository contains example code for an "Introduction to TypeScript" presentation. Each file demonstrates different TypeScript concepts, from basic to more advanced features.

## Files Overview

### `basicTypes.ts`
Demonstrates TypeScript's basic type annotations for primitive types and arrays:
- Basic types: `string`, `number`, `boolean`, `Date`
- Array types: `string[]`, `number[]`, `boolean[]`
- Variable declarations with type annotations

### `unionTypes.ts`
Shows how to use union types in TypeScript:
- String literal unions (`OrderStatus`)
- Numeric literal unions (`OrderLevel`)
- Combining union types (`OrderStatusAndLevel`)
- Using union types in object type definitions
- Example object creation with defined types

### `calculateOrderTotal.js` vs `calculateOrderTotalTyped.ts`
A comparison between JavaScript and TypeScript versions of the same function:

**JavaScript version (`calculateOrderTotal.js`)**:
- No type checking
- Accepts any values as arguments
- Contains logic errors that TypeScript would catch
- Shows potential runtime issues when used incorrectly

**TypeScript version (`calculateOrderTotalTyped.ts`)**:
- Defines an `Item` type with proper structure
- Function parameters are typed
- Shows how TypeScript catches type errors at compile time
- Includes comments explaining potential issues TypeScript helps solve

### `profile.ts`
Demonstrates interface definitions and how to extend them:
- Export of interfaces for use in other files (`User`, `Address`)
- Interface extension (`Profile` extends `User`)
- Optional properties (with `?` notation)
- Example of object creation with an interface type

### `orderFunctions.ts`
Shows utility types and function parameter typing:
- `Omit<>` utility type to create a new type by removing properties
- `Pick<>` utility type to create a new type by selecting specific properties
- `Partial<>` utility type to make all properties optional
- Functions with complex parameter types

### `cart.ts`
Demonstrates the difference between interfaces and types, along with class definitions:
- Interface vs Type definition comparison
- Complex interface with nested types
- Class definition with typed methods
- Method signatures with parameter and return types

### `productCatalog.ts`
Shows advanced type features:
- Interface inheritance (`ElectronicsProduct` and `ClothingProduct` extend `BaseProduct`)
- Union types for product categorization
- Discriminated unions using a common property (`category`)
- Type narrowing in functions based on discriminant
- Exhaustive type checking with `never` type
- Literal types in arrays
- `Record<>` type for key-value collections

### `api.ts`
Demonstrates generics in TypeScript:
- Generic interfaces (`ApiResponse<T>`)
- Generic functions (`apiCall<T>()`)
- Type parameters in interfaces and functions
- Practical use cases for generics in API responses
- Async/await with typed promises
- Type assertions (`as` keyword)

## Key TypeScript Concepts Covered

1. **Basic Types**: string, number, boolean, arrays, Date
2. **Interfaces & Types**: Object shape definitions, differences, and use cases
3. **Union Types**: Combining types with the `|` operator
4. **Literal Types**: Specific string and number values as types
5. **Function Types**: Parameter and return type annotations
6. **Classes**: Methods, properties, and TypeScript integration
7. **Generics**: Type parameters for reusable components
8. **Utility Types**: Built-in type transformations (Omit, Pick, Partial)
9. **Type Narrowing**: Using conditionals to refine types
10. **Discriminated Unions**: Using a common property to distinguish types
11. **Optional Properties**: Making properties optional with `?`
12. **Type Exports/Imports**: Sharing types across files

## Getting Started

This project is meant for educational purposes to demonstrate TypeScript features.

1. Install TypeScript (if not already installed):
   ```
   npm install -g typescript
   ```

2. Compile TypeScript files:
   ```
   tsc filename.ts
   ```

3. Explore each file to understand different TypeScript concepts.

## Learning Path

For beginners, it's recommended to explore the files in this order:
1. `basicTypes.ts`
2. `unionTypes.ts`
3. `calculateOrderTotal.js` and `calculateOrderTotalTyped.ts` (comparison)
4. `profile.ts`
5. `cart.ts`
6. `orderFunctions.ts`
7. `productCatalog.ts`
8. `api.ts`

Each file builds on concepts from previous files, gradually introducing more advanced TypeScript features.
