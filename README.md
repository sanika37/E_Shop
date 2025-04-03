# EShop Ecommerce Website  

## Overview  
**ShopEase Ecommerce Website** is a full-fledged e-commerce platform designed to provide a seamless online shopping experience. This project includes both the **backend (Spring Boot + MySQL + Postman)** and the **frontend (React)**, working together through RESTful APIs. It enables user authentication, product management, cart functionality, order processing, and secure transactions, all while ensuring scalability, security, and performance.  

---

## 🚀 Tech Stack   

### **Backend (Spring Boot)**  
- **Spring Boot** – Framework for building Java applications.  
- **Spring Security** – Handles authentication and role-based access control.  
- **Spring Data JPA** – Simplifies database interactions.  
- **MySQL** – Stores users, products, orders, and other data.  
- **JWT (JSON Web Token)** – For secure user authentication.  
- **Lombok** – Reduces boilerplate Java code.  
- **Spring Boot DevTools** – Enables live reload for development.  
- **Docker** – Containerization for easy deployment.  

### **Frontend (React)**  
- **React.js** – Dynamic and responsive UI development.  
- **Axios** – Handles HTTP requests to the backend.  
- **React Router** – Manages navigation in the application.  

### **Testing & Tools**  
- **Postman** – API testing.  
- **Docker & Docker Compose** – Containerized deployment.  

---

## API Endpoints  

### **Authentication**  
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/auth/register` | User registration |
| `POST` | `/api/auth/login` | User login (returns JWT) |

### **Products**  
| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET`  | `/api/products` | Get all products |
| `POST` | `/api/products` | Add a new product (Admin) |
| `PUT`  | `/api/products/{id}` | Update product details (Admin) |
| `DELETE` | `/api/products/{id}` | Delete a product (Admin) |

### **Cart & Orders**  
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/cart` | Add product to cart |
| `GET`  | `/api/cart` | View cart |
| `DELETE` | `/api/cart/{id}` | Remove item from cart |
| `POST` | `/api/orders` | Place an order |
| `GET`  | `/api/orders` | View user’s orders |

---

## Running the Application  

### **Option 1: Access via Web Interface**  
1. Start both **backend** and **frontend**.  
2. Open **`http://localhost:3000`** in your browser.  
3. Register/Login and start shopping.  

### **Option 2: API Testing via Postman**  
1. Use **Postman** to send API requests to `http://localhost:8080/api`.  
2. Perform operations (register, login, manage products, add to cart, place orders).  
3. Verify database updates in **MySQL**.  

---

## 📦 Deployment with Docker  

The project is **containerized using Docker** for easy deployment across environments.  

### **Docker Setup**  

#### **Backend (`Dockerfile`)**  
```dockerfile
FROM openjdk:11-jre-slim  
VOLUME /tmp  
COPY target/curewell-backend.jar app.jar  
ENTRYPOINT ["java","-jar","/app.jar"]
```  

#### **Frontend (`Dockerfile`)**  
```dockerfile
FROM node:14 AS build  
WORKDIR /app  
COPY package.json ./  
RUN npm install  
COPY . .  
RUN npm run build  

FROM nginx:alpine  
COPY --from=build /app/build /usr/share/nginx/html  
EXPOSE 80  
CMD ["nginx", "-g", "daemon off;"]
```  

### **Docker Compose (`docker-compose.yml`)**  
```yaml
version: '3.8'
services:
  backend:
    build:
      context: ./backend
    ports:
      - "8080:8080"
    environment:
      - SPRING_DATASOURCE_URL=jdbc:mysql://db:3306/curewell
      - SPRING_DATASOURCE_USERNAME=root
      - SPRING_DATASOURCE_PASSWORD=password
    depends_on:
      - db

  frontend:
    build:
      context: ./frontend
    ports:
      - "80:80"

  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: curewell
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
```

### **Running the Application**  
```bash
docker-compose up --build
```
- **Frontend** accessible at **http://localhost**  
- **Backend API** at **http://localhost:8080/api** 

---

## Conclusion  

The **ShopEase Ecommerce Website** is a scalable and secure online shopping platform integrating a **Spring Boot backend** with a **React frontend**. It supports user authentication, product management, cart functionality, and order processing. With containerized deployment using **Docker**, it ensures seamless scalability.  

Feel free to contribute or suggest improvements! 🚀