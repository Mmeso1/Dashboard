# Simple Dashboard Web Application

This is a simple web application built to learn more about **routing** and **hooks** in **React.js**.

## Hooks Implemented

- `useState`
- `useContext`
- `useEffect`
- `useNavigate`

## User Roles

- **Admin**: Login with the username `'Admin'`
- **Editor**: Login with the username `'Editor'`
- **Viewer**: Login with any name of your choice.

## Features

- **Protected Routes**: Different pages are only accessible based on user roles.
- **Conditional Rendering**: Renders different content for Admin, Editor, and Viewer.
  - Admin: Admin controls
  - Editor: Content editor panel
  - Viewer: Read-only reports

## How To Use

1. **Login**:
   - Enter one of the following usernames based on your role:
     - `'Admin'` for Admin access
     - `'Editor'` for Editor access
     - Any other name for Viewer access
2. **Access Pages**:
   - **Dashboard**: Accessible to all roles, displays role-specific content.
   - **Profile**: Accessible only when logged in.
   - **Settings**: Accessible only to Admins.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>

   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install Dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```
