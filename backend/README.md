# CollegeCompass Backend

Production-ready Express + TypeScript API with Supabase PostgreSQL integration.

## Setup

1. Copy `.env.example` to `.env`
2. Fill `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`
3. Install deps and run

```bash
npm install
npm run dev
```

## API Base URL

`http://localhost:5000/api`

## Endpoints

- `GET /health`
- `GET /colleges`
- `GET /colleges/:id`
- `POST /saved-colleges` (requires `Authorization: Bearer <supabase_access_token>`)
- `GET /saved-colleges` (requires `Authorization: Bearer <supabase_access_token>`)
- `POST /comparisons` (requires `Authorization: Bearer <supabase_access_token>`)
- `GET /comparisons` (requires `Authorization: Bearer <supabase_access_token>`)

## Query params: GET /colleges

- `page`, `limit`
- `search`
- `city`, `state`
- `minFees`, `maxFees`
- `minRating`
- `course`
- `sortBy`: `ranking|rating|fees_min|fees_max|placements_avg|name`
- `sortOrder`: `asc|desc`

## Notes

- Saved endpoints validate Supabase access tokens and resolve the user from JWT.
