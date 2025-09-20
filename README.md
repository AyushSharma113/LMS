## 📚 Learning Management System (LMS)

A full-featured Learning Management System (LMS) built with the **MERN stack**. This platform allows instructors to create and manage courses, while students can enroll, track progress, and access learning materials.

---

### 🚀 Features

#### 👨‍🏫 Instructor

* Create, update, and delete courses
* Upload videos, PDFs, and other resources
* Manage student enrollments
* Track course analytics

#### 👨‍🎓 Student

* Browse and search available courses
* Enroll in courses
* Watch video lectures and read materials
* Track course progress and completion

#### 🔐 Authentication & Authorization

* User registration and login
* Role-based access (Admin, Instructor, Student)
* JWT-based authentication

#### 📦 Tech Stack

| Frontend            | Backend    | Database | Other Tools               |
| ------------------- | ---------- | -------- | ------------------------- |
| React.js            | Node.js    | MongoDB  | Cloudinary (media upload) |
| Redux / Context API | Express.js | Mongoose | Multer (file handling)    |
| React Router        | JWT Auth   |          | Bcrypt (password hashing) |

---

### 🧰 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/mern-lms.git
cd mern-lms
```

2. **Install server dependencies**

```bash
cd server
npm install
```

3. **Install client dependencies**

```bash
cd ../client
npm install
```

4. **Environment Variables**

Create a `.env` file in both `/server` and `/client` directories and add the following:

#### Server `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

#### Client `.env`

```env
REACT_APP_API_URL=http://localhost:5000/api
```

5. **Run the app**

```bash
# Start server
cd server
npm run dev

# Start client
cd ../client
npm start
```

---

### 📁 Project Structure

```
/client         # React frontend
/server         # Express backend
  └── models    # Mongoose models
  └── routes    # API routes
  └── controllers
  └── middleware
```

---

### 🔒 Security & Best Practices

* Passwords hashed using bcrypt
* JWT-based authentication
* Input validation and error handling
* Environment-based configuration

---

### 🛠️ TODOs / Future Improvements

* ✅ Course quizzes and assessments
* ⏳ Certificate generation
* ⏳ Admin dashboard for analytics
* ⏳ Real-time chat or discussion forum

---

### 🤝 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/featureName`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/featureName`)
5. Open a Pull Request

---

### 📄 License

This project is licensed under the MIT License.

---

### 📬 Contact

Feel free to reach out:

* GitHub: [AyushSharma113](https://github.com/AyushSharma113)
* Email: [sharmaayushkumar15@gmail.com](mailto:sharmaayushkumar15@gmail.com)

---


