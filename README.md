# 🚀 Full-Stack Next.js 15 Project

This project is designed to **review and reinforce full-stack development concepts**. It follows a structured approach using **Next.js 15, React 18, GraphQL, Styled Components, Docker, and MongoDB**.

## 🎯 **Features**

- **User Authentication** (NextAuth).
- **Wishlist System**: Add/remove favorite locations.
- **GraphQL API**: Queries & mutations for data handling.
- **Styled Components** for modular styling.
- **Unit Testing** with Jest & React Testing Library.
- **Docker** for containerized deployment.

---

## 🛠 **Tech Stack**

| Technology | Description |
|------------|------------|
| **Next.js 15** | Latest Next.js version with Server Components & App Router. |
| **React 18** | Modern React version with concurrent rendering. |
| **GraphQL** | Efficient API querying with Apollo Server. |
| **Styled Components** | CSS-in-JS for dynamic styling. |
| **Jest & React Testing Library** | Snapshot and unit testing. |
| **Docker** | Containerized environment for easy deployment. |
| **MongoDB** | NoSQL database for storing locations & wishlist data. |
| **NextAuth** | Secure user authentication. |

---

## 🚀 **Installation & Setup**

### 📌 **1. Clone the Repository**
```bash
git clone https://github.com/your-username/project-name.git
cd project-name
```

### 📌 **2. Install Dependencies**
```bash
npm install
```

### 📌 **3. Configure Environment Variables**

Create a `.env.local` file in the root directory and add the required keys:
```env
# GraphQL API
NEXT_PUBLIC_GRAPHQL_ENDPOINT=http://localhost:3000/api/graphql

# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database

# Authentication (NextAuth)
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

# Docker Configuration
DOCKER_PORT=3000
```

### 📌 **4. Run the Application**

#### **With Next.js (Development Mode)**
```bash
npm run dev
```
App will be accessible at **http://localhost:3000**.

#### **With Docker**
1. **Build the Docker Image**  
   ```bash
   docker build -t my-project .
   ```
2. **Run the Container**  
   ```bash
   docker run -p 3000:3000 my-project
   ```

---

## ✅ **Running Tests**

Unit tests and snapshots are written using **Jest** and **React Testing Library**.  
Run tests with:
```bash
npm run test
```

---

## 🚀 **Deployment**

### **Deploying with Docker Compose**
1. **Create a `docker-compose.yml` file**
   ```yml
   version: '3.8'
   services:
     app:
       build: .
       ports:
         - "3000:3000"
       env_file:
         - .env.local
   ```
2. **Run the project**  
   ```bash
   docker-compose up -d
   ```

### **Deploying on Vercel**
To deploy on **Vercel**, simply run:
```bash
vercel
```

---

## 📂 **Project Structure**

```
/project-name
│── /components      # Reusable components
│── /pages          # Next.js pages (routes)
│── /graphql        # API (Schemas & Resolvers)
│── /styles         # Styled Components & Global styles
│── /tests          # Unit & snapshot tests
│── /docker         # Docker setup files
│── .env.local      # Environment variables
│── docker-compose.yml
│── package.json
│── README.md
```

---

## 🤝 **Contributing**

1. Fork the project 🍴  
2. Create a feature branch: `feature/my-feature`  
3. Make your changes and commit 📝  
4. Open a Pull Request ✅  

🚀 **Happy coding!**

