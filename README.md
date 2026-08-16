# College Compass

A full-stack web application for exploring, comparing, and bookmarking colleges. Provides comprehensive college data, rankings, and personalized comparisons.

## Features

- 🎓 Browse and search colleges
- 📊 View detailed college information and statistics
- 🔀 Compare multiple colleges side-by-side
- 🔖 Save colleges to your dashboard
- 📈 Rankings by various metrics
- 🔐 User authentication with Supabase
- 📝 Articles and educational content
- 🧮 Exam score predictor

## Live App

🔗 **[Visit College Compass](https://collegecompass-seven.vercel.app/)**

## Tech Stack

### Frontend
- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Auth:** Supabase
- **API Client:** Supabase JS SDK

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** Supabase (PostgreSQL)
- **API:** RESTful

## Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd collegecompass
```

2. Install dependencies:
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

3. Set up environment variables:
   - Frontend: Create `.env.local` in `frontend/`
   - Backend: Create `.env` in `backend/`

```env
# Frontend (.env.local)
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-key>

# Backend (.env)
SUPABASE_URL=<your-supabase-url>
SUPABASE_KEY=<your-supabase-key>
PORT=5000
```

## Running the Project

### Development

```bash
# Frontend (from frontend/ directory)
npm run dev

# Backend (from backend/ directory)
npm run dev
```

Frontend: http://localhost:3000  
Backend: http://localhost:5000

### Production Build

```bash
# Frontend
npm run build
npm start

# Backend
npm run build
npm start
```

## Project Structure

```
collegecompass/
├── .gitignore
├── .vscode/
├── backend/               # Express.js API
│   ├── src/
│   ├── sql/
│   ├── package.json
│   ├── tsconfig.json
│   ├── README.md
│   └── update-image.js
├── frontend/              # Next.js application
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.mjs
│   ├── README.md
│   └── tailwind.config.ts
├── colleges.csv           # College data
├── LICENSE
└── README.md
```

## API Endpoints

### Colleges
- `GET /api/colleges` - List all colleges
- `GET /api/colleges/:id` - Get college details
- `POST /api/colleges` - Create college (admin)

### Comparisons
- `GET /api/comparisons` - Get user comparisons
- `POST /api/comparisons` - Create comparison

### Saved Colleges
- `GET /api/saved-colleges` - Get saved colleges
- `POST /api/saved-colleges` - Save a college
- `DELETE /api/saved-colleges/:id` - Remove saved college

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add your feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Open a Pull Request

## License

MIT License

## Support

For issues and questions, please open an issue in the repository.
