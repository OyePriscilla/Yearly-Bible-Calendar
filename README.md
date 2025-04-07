# Yearly Bible Calendar

## Overview

The **Yearly Bible Calendar** is a web application designed to help users read the Bible systematically throughout the year. It provides daily readings from both the **Old Testament** and **New Testament**, with an easy-to-navigate interface and features such as tracking reading progress, bookmarking verses, and switching between different Bible versions (e.g., English and Yoruba).

The app uses React, TypeScript, Vite, and Tailwind CSS for a smooth and responsive user experience. It also integrates with the **API.Bible** to pull Bible data and readings.

---

## Features

- **Daily Bible Readings**: Display a daily portion from the **Old Testament**, **New Testament**, or **Both**, helping users read through the Bible in a year.
- **Light and Dark Mode**: Easily toggle between light and dark modes for a more personalized reading experience.
- **Bible Versions**: Choose between the **English** and **Yoruba** versions of the Bible.
- **Bookmarking**: Save your favorite Bible verses for quick access later.
- **Calendar Integration**: View and track Bible readings on a calendar.
- **Progress Tracking**: Mark completed readings and track your progress throughout the year.

---

## Technology Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS
- **API**: API.Bible (for fetching Bible data)
- **Hosting**: Vercel (for free deployment)

---

## Setup and Installation

### 1. **Clone the Repository**

Start by cloning the project to your local machine:

```bash
git clone https://github.com/OyePriscilla/Yearly-Bible-Calendar.git

2. Install Dependencies
Navigate to the project directory and install the necessary dependencies:

cd Yearly-Bible-Calendar
npm install
3. Configure API Key
The project uses API.Bible to fetch Bible data. To configure the API key, follow these steps:

Sign up at API.Bible and get your API key.

Create a .env file in the root of the project and add the following:


Edit
VITE_BIBLE_API_KEY=your_api_key_here
4. Run the Application Locally
To run the application locally, use the following command:



npm run dev
The app should now be running on http://localhost:3000.

Features Breakdown
1. Home Page
The home page allows users to choose between Yoruba or English Bible versions. It also provides an option to view the Bible Calendar.

2. Bible Calendar
This page allows users to view and interact with the Bible readings for the year. Users can select between Old Testament, New Testament, or Both and track their daily readings.

3. Bible Page
On the Bible page, users can choose a Book and Chapter from the selected Bible version. Each chapter displays the verses, and users can read and bookmark them.

4. Bookmarking Verses
Users can bookmark their favorite Bible verses to access later. Bookmarked verses are saved in local storage for future sessions.

5. Light and Dark Mode
The app supports both Light Mode and Dark Mode, which can be toggled by the user for a better reading experience.

Contribution
Contributions are welcome! If you would like to contribute to the project, feel free to fork the repository, make changes, and submit a pull request. Please follow the steps below to contribute:

Fork the repository.

Create a new branch (git checkout -b feature-name).

Make your changes.

Commit your changes (git commit -m 'Add new feature').

Push your changes to your forked repository (git push origin feature-name).

Submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
The Yearly Bible Calendar was inspired by the work of Henry Groves, the creator of the original Yearly Bible Calendar.

Thanks to API.Bible for providing an easy-to-use Bible API for fetching data.

Contact
For any questions or inquiries, feel free to reach out to:

Author: OyePriscilla

Email: oyebadepriscilla22@gmail.com

GitHub: https://github.com/OyePriscilla

Thank you for using the Yearly Bible Calendar app! We hope it enriches your Bible reading journey.

### Final Notes:
Once the file is created and saved in the project folder as `README.md`, it will be available to anyone who views the project on GitHub or any other repository hosting platform.
