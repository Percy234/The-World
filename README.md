# The World 🌍

A web application dedicated to sharing knowledge about wildlife and promoting environmental sustainability. This platform provides information about various animal species and their habitats, helping users learn more about our planet's biodiversity.

## 📋 Project Overview

The World is a full-stack web application that features:
- **Species Information**: Browse and learn about different animal species
- **Educational Content**: Green knowledge for a sustainable Earth
- **Interactive UI**: Modern, responsive design with smooth animations
- **REST API**: Backend API for managing animal data

## 🛠️ Tech Stack

### Frontend (FE)
- **Framework**: React 19
- **Build Tool**: Vite 7
- **UI Library**: Chakra UI
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **HTTP Client**: Axios
- **Styling**: Emotion (CSS-in-JS)

### Backend (BE)
- **Runtime**: Node.js
- **Framework**: Express 5
- **Database**: MongoDB with Mongoose
- **File Upload**: Multer
- **CORS**: Enabled for cross-origin requests
- **Environment**: dotenv for configuration

## 📁 Project Structure

```
The-World/
├── FE/                 # Frontend application
│   ├── src/
│   │   ├── pages/      # Page components (Home, Species)
│   │   ├── component/  # Reusable components
│   │   ├── assets/     # Static assets
│   │   ├── css/        # Stylesheets
│   │   ├── data/       # Static data files
│   │   ├── App.jsx     # Main app component
│   │   └── main.jsx    # Entry point
│   ├── public/         # Public assets
│   └── package.json
│
├── BE/                 # Backend application
│   ├── src/
│   │   ├── config/     # Database configuration
│   │   ├── controllers/# Route controllers
│   │   ├── models/     # Mongoose models
│   │   ├── routers/    # API routes
│   │   └── server.js   # Server entry point
│   └── package.json
│
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/Percy234/The-World.git
cd The-World
```

#### 2. Setup Backend
```bash
cd BE
npm install
```

Create a `.env` file in the `BE` directory:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/the-world
```

Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:3000`

#### 3. Setup Frontend
```bash
cd ../FE
npm install
```

Start the development server:
```bash
npm run dev
```

The frontend will typically run on `http://localhost:5173`

## 📡 API Endpoints

### Animals
- `GET /animals/all` - Get all animals
- `POST /animals/create` - Create a new animal

#### Create Animal Example
```json
{
  "name": "Tiger",
  "category": "Mammal",
  "type": ["Carnivore", "Endangered"]
}
```

## 🎨 Features

### Current Features
- **Home Page**: Hero section with environmental message
- **Species Page**: Information about different animal species
- **Responsive Design**: Works on desktop and mobile devices
- **Animal Content Display**: Browse through animal information
- **Share Functionality**: Share content with others

### Planned Features
- Hot/trending content view
- Search and filter animals
- Detailed species information pages
- User authentication
- Animal conservation status tracking

## 🧪 Development

### Frontend Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend Commands
```bash
npm run dev      # Start development server with nodemon
```

## 🌱 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- Project maintained by Percy234

## 🙏 Acknowledgments

- Built with React and Vite for optimal performance
- UI components powered by Chakra UI
- Database management with MongoDB and Mongoose

---

**Green knowledge for a sustainable Earth** 🌿
