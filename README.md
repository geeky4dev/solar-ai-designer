# ☀️ Solar AI Designer 🌱
A full-stack web app that helps users design rooftop solar panel systems using AI-powered backend services.

---

## 🚀 Features

- 💬 **Chat Interface:** Ask solar-related questions to an AI assistant (powered by Llama3 via Groq API).  
- 🏠 **Solar Design Assistant:** Input location, roof area, and consumption to get an optimized solar system design.  
- 📱 **Responsive UI:** Built with React & Bootstrap for clean, mobile-friendly interfaces.  
- ⚙️ **Robust Backend:** Flask API serving AI requests and design calculations.

---

## 🛠️ Tech Stack

| Frontend     | Backend        | AI Integration       | Communication   |
|--------------|----------------|----------------------|-----------------|
| React (Vite) | Flask (Python) | Llama3 via Groq API  | REST API        |
| Bootstrap    |                |                      |                 |

		

---

## 📥 Getting Started
### 🔧 Prerequisites
- Node.js (v16+)  
- Python 3.8+  
- pip for Python packages  

### 🛠️ Installation

1. Clone the repo:
   ```
   git clone https://github.com/yourusername/solar-ai-designer.git
   cd solar-ai-designer

Backend setup:  
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py

Frontend setup:  
cd ../frontend
npm install
npm run dev
Open your browser at:
👉 http://localhost:3000

🎯 Usage:  
🏡 Use the Solar Design Assistant form to generate solar system recommendations based on your location, area, and energy consumption.  
🤖 Chat with the AI assistant for solar tips and info.  



🔌 API Endpoints
Endpoint	Method	Description
/ai/chat	POST	Send chat messages to AI assistant
/ai/design	POST	Generate solar design recommendations

📁 Folder Structure  
solar-ai-designer/  
├── frontend/   # React frontend application  
│   ├── public/  
│   └── src/  
│   │    ├── components/  
│   │    │   ├── Chat.jsx  
│   │    │   └── ChatBox.jsx  
│   │    │   └── DesignForm.jsx  
│   │    │   └── SolarDesignForm.jsx  
│   │    ├── App.jsx  
│   │    └── main.jsx  
├── backend/    # Flask backend code and AI integration  
│   ├── app.py  
│   ├── .env  
│   └── requirements.txt  
└── README.md  

🌟 Future Improvements:  
🔐 Add user authentication and save design history  
📚 Enhance AI with more solar-specific data  
🐳 Dockerize and deploy on cloud platforms   

📄 License  
MIT License — use freely, with attribution. Contributions welcome!  
Made by geeky4dev with ☀️ and ❤️ for solar energy enthusiasts!  
