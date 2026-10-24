# Employee Management Dashboard

A responsive and modern React web application built with **Vite**, **React Router DOM**, and **Bootstrap 5** for a college MERN Stack assignment. The project demonstrates component architecture, client-side routing, external REST API consumption using React hooks (`useState`, `useEffect`), form handling with validation, and responsive UI design.

---

## 🚀 Technologies Used

- **React.js (v19)** — Functional components & hooks (`useState`, `useEffect`)
- **Vite** — Fast, modern frontend build tool and development server
- **JavaScript (ES6+)** — Application logic
- **React Router DOM (v7)** — Client-side routing and active link highlighting (`NavLink`, `Routes`, `Route`)
- **Bootstrap 5** — Responsive layout, grid system, table, and form components
- **Vanilla CSS** — Custom professional blue and white styling, typography, and card elevation
- **Fetch API** — Asynchronous data retrieval from an external REST API

---

## 📁 Project Structure

```text
assignment2/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Navbar.jsx        # Responsive navigation bar with active route highlighting
│   ├── pages/
│   │   ├── Dashboard.jsx     # Home page displaying employee table fetched from API
│   │   └── EmployeeForm.jsx  # Employee registration form with validation & reset
│   ├── App.jsx               # Application root, routing config, and layout
│   ├── main.jsx              # React DOM entry point with Bootstrap imports
│   └── index.css             # Custom styles and professional theme variables
├── index.html                # HTML entry template with Google Fonts (Inter)
├── package.json              # Project dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

---

## ✨ Features

### 1. Responsive Navigation Bar (`Navbar.jsx`)
- Present on all pages with clean branding ("Employee Portal").
- Navigation links:
  - **Employee Dashboard** &rarr; Navigates to `/`
  - **Employee Form** &rarr; Navigates to `/employee-form`
- Uses `NavLink` to automatically highlight the currently active page.
- Fully responsive with a mobile toggle button (hamburger menu) on small screens.

### 2. Home Page — Employee Dashboard (`Dashboard.jsx`)
- **API Integration**: Fetches real employee data from `https://jsonplaceholder.typicode.com/users` using the Fetch API inside a `useEffect` hook.
- **States**:
  - **Loading State**: Displays a clean spinner and message while fetching data.
  - **Error State**: Displays a styled error banner with a "Try Again" retry button if the request fails.
  - **Total Count**: Shows a badge with the total number of employees retrieved (`Total Employees: 10`).
- **Responsive Table**: Displays retrieved records in a Bootstrap table with **exactly three columns**:
  1. **ID**
  2. **Name**
  3. **Email**
- Clean hover effects, subtle borders, and `mailto:` email links.

### 3. Employee Form Page (`EmployeeForm.jsx`)
- Accessible at `/employee-form`.
- Heading: **"Add Employee"**.
- Contains four required fields with visible labels and placeholders:
  1. **Name** — Text input
  2. **Designation** — Text input
  3. **Location** — Text input
  4. **Salary** — Number input (must be a valid non-negative number)
- **Validation**:
  - Checks that none of the fields are empty or whitespace-only.
  - Ensures salary is non-negative (`salary >= 0`).
  - Displays inline field validation error feedback (`is-invalid`).
- **Submission & Reset**:
  - Displays a success alert: *"Employee form submitted successfully!"* upon valid submission.
  - Resets the form inputs automatically after successful submission.
  - Includes a dedicated **Reset** button that clears all inputs and messages.
  - No backend or database is required as per assignment guidelines.

---

## 🛠️ Installation & Setup

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Clone or Open the Project Directory
```bash
cd "c:\Users\Jeseentha James\OneDrive\Desktop\clg\MERN Stack\assignment2"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```text
http://localhost:5173/
```

### 4. Build for Production (Optional)
```bash
npm run build
```

### 5. Run Linter
```bash
npm run lint
```

---

## 🌐 External API Reference
The application retrieves employee data from:
- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Method**: `GET`
- **Response Format**: JSON array of user objects
