# 🎬 CinePlanet  

<div id="user-content-toc">
  <ul style="list-style: none;">
    <summary>
      <h2>Your ticket to a seamless Cinema Experience!</h2>
    </summary>
  </ul>
</div>

CinePlanet is a high-performance movie booking platform that ensures smooth and hassle free ticket reservations. With a robust **distributed architecture**, it efficiently handles multiple users booking tickets for the same show without conflicts. Built for speed, reliability, and a seamless user experience. 🚀  

Preview link - https://cine-planet.vercel.app/  

<br/>

## 🌟 Features  
✅ **Fast & Reliable Booking** – Handles concurrent reservations without conflicts.  
✅ **Real-Time Availability** – See live seat availability before booking.  
✅ **Intuitive UI** – Sleek & modern interface built with **Next.js**, **Radix UI** and **Tailwind CSS**.  
✅ **Robust Backend** – Robust bakcend services built with **Spring Boot**, **Express.js** and **PostgreSQL**.   
✅ **User Authentication** – Sign in to manage bookings and preferences.   
✅ **Theatre Management** – Add, update, and schedule movie shows seamlessly.  
✅ **Scalable Microservices Architecture** – Efficiently handles high traffic.   
✅ **Optimized Performance** – Backend services ensure minimal booking delays.   

<br/>

## 🏗 Architecture  
CinePlanet follows a **microservices-based architecture** for scalability and efficiency:  

### 🎭 **Theatre Service** 
- Manages theatre details, movie shows, and schedules.  
- Ensures real-time show updates and synchronization.  

### 🎟 **Booking Service**
- Handles actual **ticket booking** and **user data management**.  
- Ensures concurrency control to **prevent double bookings**.  

### 💻 **Web Application**
- Client-facing app for browsing movies, selecting seats, and booking tickets.  

### 🗄 **Database**
- Stores **movies, bookings, users, and transactions** securely.  

<br/>

## 🛠 Tech Stack  
**Frontend:**
- Next.js
- Radix UI
- Tailwind CSS  

**Backend Services:**   
  - Node.js
  - Express.js   
  - Spring Boot

**Database:**  
- PostgreSQL
- Prisma

**Deployment:**  
- Vercel (Frontend)

<br/>

## ⚡ Setup Instructions  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/Sahil2012/cineplanet.git
cd cineplanet
```

### 2️⃣ Install Dependencies
```bash
cd frontend/cineplanet
npm install  # For the Next.js frontend
```

### 3️⃣ Set Up Environment Variables
Create a .env file and add the required configurations:
```env
AUTH_SECRET="your-auth-secret"
AUTH_GOOGLE_ID="your-google-console-id"
AUTH_GOOGLE_SECRET="your-google-console-secret"
```

### 4️⃣ Start the Services
➤ Start Theatre Service (Node.js)
```bash
cd backend/theatre-service
npm install
npm start
```

➤ Start Booking Service (Spring Boot)
```bash
cd backend/bookingservice
./mvnw spring-boot:run
```

➤ Start the Frontend (Next.js)
```bash
cd frontend/cineplanet
npm run dev
```

🚀 Open localhost:3000 and start booking!

<br/>

## 🤝 Contributing
Want to enhance CinePlanet? Feel free to fork the repo, submit issues, or open a pull request!

<br/>

⭐ Love CinePlanet? Give this repo a star and spread the word! 🌟
