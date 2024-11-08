## tcs-lseg-chatbot-ui-assessment

Build an UI for chatbot that enables user to select any of the Stock Exchanges and display trading stocks with its price. 

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- **Dynamic Chat Interface**: Chatbot that displays stock exchange data interactively.
- **Data Fetching and Display**: Fetches and displays stock exchange information and stock prices based on user selection.
- **TypeScript Support**: Full TypeScript support for static typing and type safety.
- **Modular Components**: Organized into reusable components like `ChatBot`, `HomeMenu`, `StockMenu`, and `StockPrice`.

## Project Structure
```
ui/ 
├── public/ 
│ ├── index.html 
│ └── ... 
├── src/ 
│ ├── components/ 
│ │ ├── ChatBot.tsx  
│ │ ├── HomeMenu.tsx  
│ │ ├── StockMenu.tsx  
│ │ ├── StockPrice.tsx 
│ ├── data/ 
│ │ └── chatbot-stockdata.json  
│ ├── types/ 
│ │ └── index.ts  
│ ├── utils/ 
│ │ └── index.ts  
│ ├── App.css  
│ ├── App.tsx 
│ ├── index.tsx  
│ └── index.css 
├── tsconfig.json  
├── package.json  
└── ...
```

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed. You can check if they are installed by running:

```bash
node -v
npm -v```

### Installation

1. Clone the repository:
```git clone https://github.com/your-username/my-chatbot-app.git ui```

2. Navigate to the Project directory: 
```cd ui```

3. Install the dependencies:
```npm install```

4. Running the Application
```npm start```

5. Building for Production
```npm run build```

### Available Scripts

- ```npm start```: Runs the app in development mode.
- ```npm run build```: Builds the app for production.
- ```npm test```: Runs the test suite (if tests are configured).
- ```npm run eject```: Ejects the app from react-scripts (use with caution).

### Technologies Used

- React: Frontend library for building user interfaces.
- TypeScript: Superset of JavaScript for static typing.
- CSS: Styling for the chatbot and application layout.
- React Scripts: Scripts and configuration used by Create React App.
- ts-node: Allows running TypeScript files directly (used in development).


### Explanation

- **Project Setup**: The `README.md` explains how to set up and run the project locally.
- **File Structure**: Describes how files are organized in the project.
- **Scripts**: Lists npm scripts for running and building the app.
- **Technology Stack**: Outlines the main technologies used.

This structure should provide clear guidance for users and contributors. You may need to adjust details like the GitHub URL, dependencies, or additional usage instructions as necessary.
