# study_master
Introduction

This is a React and Flask app that uses AI APIs to summarize YouTube videos, PDFs, and PPTs. The app is designed to be easy to use and can be deployed on Vercel or other hosting platforms.
Usage

To use the app, simply input a YouTube video URL, PDF file, or PPT file and click the "Summarize" button. The app will use AI APIs to generate a summary of the input file and display it to you.
Dependencies

The app requires Node.js, Python, and the following libraries:
React
Flask
requests
beautifulsoup4

Installation

To install the app, follow these steps:
Clone the repository using git clone https://github.com/your-username/your-repo-name.git
Install dependencies using npm install
Create a new file called ai-api-credentials.json and add your AI API credentials (see below for more information)
Run the app using npm start

Configuration

The app uses environment variables to configure the AI APIs. Create a new file called .env in the root directory and add the following variables:
AI_API_KEY: Your AI API key
AI_API_SECRET: Your AI API secret
AI_API_ENDPOINT: The endpoint for the AI API

AI APIs

The app uses AI APIs to generate summaries. You will need to set up your own AI API credentials to use this app. See the ai-api-credentials.json file for more information.
Troubleshooting

If you encounter any issues with the app, try the following:
Check the console for error messages
Make sure you have the necessary dependencies installed
Verify that your AI API credentials are correct

Contributing

Contributions are welcome! Please open a pull request if you have any suggestions or fixes for the app.

