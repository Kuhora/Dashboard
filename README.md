# Noir Finance - Corporate Dashboard

![Screenshot_2](https://github.com/user-attachments/assets/bbaeb240-17f2-4fb8-bd44-a2a4ca65be04)


This project is a corporate dashboard for financial management, developed with Node.js/Express on the backend and React on the frontend. The application allows viewing account balances, recent transactions, and revenue charts over time.

## Key Features

- **Account Overview**: Visualization of balances in checking accounts and envelopes
- **Recent Transactions**: List of latest financial transactions
- **Revenue Analysis**: Interactive monthly revenue chart
- **Customizable Interface**: Different analysis periods (monthly, quarterly, annual)
- **Real-time Updates**: Display of last update timestamp

## Technologies Used

- **Backend**: Node.js, Express, TypeScript
- **Frontend**: React, TypeScript, CSS Modules
- **Tools**: Vite, npm, Git

## Prerequisites

Before starting, install:
- Node.js (v18 or higher)
- npm (v9 or higher)


## I still intend to finish it, but I’ve put the project on hold.

## Project Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/noir-finance.git
cd noir-finance


## JWT Authentication System with React  

This project demonstrates a frontend implementation of JWT (JSON Web Token) authentication with:  
- Secure token storage in `localStorage`  
- Automatic token injection in all requests via `fetchWithAuth`  
- Global state management using Context API  
- Redirect flow for invalid tokens (401)  

## How It Works  

### 1. **Token Storage**  
- On login, the token is saved to both `localStorage` and `AuthContext` state  
- Example:  
  ```ts
  localStorage.setItem('token', 'your-jwt-token-here');

