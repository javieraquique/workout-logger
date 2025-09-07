# Workout Logger PWA

## Overview
The Workout Logger PWA is a Progressive Web Application designed to help users log their workout performances. It interacts with a Google Spreadsheet to fetch and save workout data, providing a seamless experience for tracking fitness progress.

## Features
- User-friendly interface for logging workout data.
- Ability to view past workout logs.
- Offline capabilities through service workers.
- Responsive design using Tailwind CSS.

## Project Structure
```
workout-logger-pwa
├── public
│   ├── index.html          # Main HTML entry point
│   ├── manifest.json       # PWA metadata
│   └── service-worker.js    # Service worker for offline capabilities
├── src
│   ├── App.js              # Main React component
│   ├── api
│   │   └── googleSheets.js  # Functions to interact with Google Sheets API
│   ├── components
│   │   ├── DayButtons.js    # Component for day selection buttons
│   │   ├── ExerciseForm.js   # Component for entering exercise data
│   │   ├── LogTable.js       # Component for displaying workout logs
│   │   └── MessageBox.js     # Component for displaying messages to users
│   ├── styles
│   │   └── tailwind.css      # Tailwind CSS styles
│   └── utils
│       └── helpers.js        # Utility functions
├── package.json              # npm configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
└── README.md                 # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd workout-logger-pwa
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your Google Sheets API credentials and update the `src/api/googleSheets.js` file accordingly.

4. Start the development server:
   ```
   npm start
   ```

## Usage
- Open the application in your browser.
- Use the buttons to select a workout day and log your performance.
- View your past workout logs in the log section.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.