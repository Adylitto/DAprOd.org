# Project: DAprOd.org

## Project Overview

DAprOd.org is a decentralized crowdfunding platform built on the Ethereum blockchain. It allows users to create fundraising campaigns, and other users to donate to these campaigns. The project consists of two main parts:

*   **Client:** A React-based front-end application that provides the user interface for interacting with the platform. It uses the `thirdweb` SDK to communicate with the Ethereum blockchain.
*   **Web3:** A Hardhat project containing the Solidity smart contract that governs the crowdfunding logic.

## Building and Running

### Client (React App)

*   **Install Dependencies:**
    ```bash
    cd client
    npm install
    ```
*   **Run Development Server:**
    ```bash
    npm run dev
    ```
*   **Build for Production:**
    ```bash
    npm run build
    ```
*   **Deploy to thirdweb:**
    ```bash
    npm run deploy
    ```

### Web3 (Smart Contracts)

*   **Install Dependencies:**
    ```bash
    cd web3
    npm install
    ```
*   **Build Contracts:**
    ```bash
    npm run build
    ```
*   **Deploy Contracts:**
    ```bash
    npm run deploy
    ```

## Development Conventions

*   The client-side application is built with React and Vite.
*   Styling is done using Tailwind CSS.
*   The smart contracts are written in Solidity and developed using the Hardhat framework.
*   The `thirdweb` SDK is used for both front-end and smart contract interactions, simplifying development and deployment.
*   The client application uses React Router for navigation.
*   The smart contract defines a `Campaign` struct and the main contract is `CrowdFunding`.
