<h2> 🚀 TypeScript + Vite + PostgreSQL Template </h2><br/>
Welcome to the TypeScript + Vite + PostgreSQL template! This minimal setup is designed to help you kickstart your project with TypeScript and Vite for frontend development, paired with PostgreSQL for robust data management.

<h3> 🌟 Introduction </h3><br/>
This template combines the power of TypeScript, Vite, and PostgreSQL to create dynamic and efficient web applications.

- **TypeScript** is a superset of JavaScript that adds static typing, making your code more robust and easier to maintain.
- **Vite** is a modern build tool that provides fast development and optimized production builds, leveraging native ES modules.
- **PostgreSQL** is a powerful, open-source relational database system known for its reliability and performance.

For more details, check out the official documentation:
- [Vite Documentation](https://vitejs.dev/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

<h3> ⚙️ Project Features </h3><br/>
- **TypeScript Support**: Enjoy the benefits of static typing for better development experience and fewer runtime errors.
- **Fast Development with Vite**: Experience lightning-fast hot module replacement (HMR) and optimized builds.
- **PostgreSQL Integration**: Easily connect and interact with a PostgreSQL database for your application's data needs.

<h3> 💡 Built by Customer Centric Tech Company </h3><br/>
This template is crafted with care by Customer Centric Tech Company, dedicated to delivering innovative solutions tailored to meet client needs.

---

## 📦 How to Install and Run the Project

### Prerequisites
Make sure these are installed first:
- **Node.js** (version 20 or later)
- **PostgreSQL** database
- **Git**

### Clone and Set Up Steps
1. **Clone the repository** (create a new directory and clone into it):
   ```bash
   mkdir portfolio-site
   cd portfolio-site
   git init
   git remote add origin [repository-url]
   git pull origin main
Install dependencies:
npm install

Set up your database:
Create a .env file with your PostgreSQL connection details:
DATABASE_URL=postgresql://[username]:[password]@[host]:[port]/[database_name]
like this:
DATABASE_URL=postgresql://postgre:jack1107@localhost:5432/portfolio_db

Initialize the database:
npm install pg @types/pg dotenv drizzle-orm drizzle-kit

Create the Database in PostgreSQL:
CREATE DATABASE portfolio_db; (This is example, use your own db)

npm run db:push

Start the development server:
npm run dev
The application will start at http://localhost:5000.
```

With this template, you're well-equipped to build powerful applications using TypeScript, Vite, and PostgreSQL. Happy coding! 🎉