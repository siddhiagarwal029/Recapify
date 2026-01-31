# 🚀 Recapify – AI-Powered Meeting Summarization Backend

Recapify is a backend-focused application that transforms raw meeting transcripts into **concise summaries and actionable insights** using an AI-driven pipeline.

The project is designed with a **clean, modular architecture**, making it easy to extend with real AI models and frontend integrations.

---

## ✨ Features

- 📝 **Create Meetings** with raw transcripts  
- 📄 **Automatic AI Summarization** of meeting discussions  
- ✅ **Action Item Extraction** from transcripts  
- 🗂️ **Persistent Storage** using MongoDB  
- 🔁 **RESTful APIs** with clean CRUD operations  
- 🧠 **Modular AI Service Layer** (easy to swap with real LLMs)

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Local)**
- **Mongoose**
- **JavaScript (ES Modules)**

---

## 📂 Project Structure

server/
├── controllers/
│ └── meetingController.js
├── models/
│ └── Meeting.js
├── routes/
│ └── meetingRoutes.js
├── services/
│ └── aiService.js
├── config/
│ └── db.js
├── server.js
└── .env


### Architecture Highlights
- **Routes** handle API endpoints
- **Controllers** contain business logic
- **Models** define database schemas
- **Services** encapsulate AI logic

This separation ensures scalability and maintainability.

---

## 🗄️ Database Schema

### Meeting Model
```js
{
  title: String,
  transcript: String,
  summary: String,
  actionItems: [String],
  createdAt: Date,
  updatedAt: Date
}
🔗 API Endpoints
➕ Create a Meeting

POST /api/meetings

Request Body
{
  "title": "Project Sync",
  "transcript": "We discussed backend progress and planned AI integration."
}
Response
{
  "success": true,
  "data": {
    "title": "Project Sync",
    "summary": "...",
    "actionItems": ["Review discussion", "Plan implementation"]
  }
}
📄 Get All Meetings

GET /api/meetings

Returns all meetings sorted by latest first.

❌ Delete a Meeting

DELETE /api/meetings/:id

Deletes a meeting using its unique ID.

🤖 AI Integration

Recapify uses a service-based AI pipeline:
Controller → AI Service → Database
Current AI Logic

Rule-based summarization (offline & demo-safe)

Context-aware action item extraction

No external APIs or keys required

Why This Design?

Works without internet

Easy to demo

Easily replaceable with real LLMs (OpenAI, LLaMA, etc.)

▶️ Running the Project Locally
1️⃣ Clone the Repository
git clone https://github.com/siddhiagarwal029/Recapify.git
cd Recapify

2️⃣ Install Dependencies
cd server
npm install

3️⃣ Setup Environment Variables

Create a .env file inside server/:

MONGO_URI=mongodb://127.0.0.1:27017/recapify
PORT=5000

4️⃣ Start MongoDB

Ensure MongoDB is running locally:

mongod

5️⃣ Start the Server
node server.js


Server will run on:

http://localhost:5000

🧪 Testing APIs

APIs were tested using:

Postman

Thunder Client

🧠 Key Engineering Takeaways

Modular and scalable backend design

Clean REST API conventions

AI logic abstracted into a service layer

Production-inspired folder structure

🔮 Future Enhancements

🔐 User authentication

✏️ Update meeting API

🌐 Frontend integration

🤖 Real AI model integration

☁️ Cloud database deployment

👩‍💻 Author

Siddhi Agarwal
Backend Developer | AI Enthusiast

GitHub: @siddhiagarwal029