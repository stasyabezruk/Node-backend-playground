# Node Backend Playground

A simple Express 5 + TypeScript + Prisma API with PostgreSQL.

## Quick Start

```bash
# Install dependencies
npm install

# Start PostgreSQL
docker-compose up -d

# Create .env file
echo DATABASE_URL="postgresql://app:app@localhost:5432/node_app" > .env

# Run migrations
npx prisma migrate dev

# Start server
npm run dev
```

Server runs at `http://localhost:3000`

## API Endpoints

| Method | Endpoint  | Description                                             |
| ------ | --------- | ------------------------------------------------------- |
| GET    | `/health` | Health check                                            |
| GET    | `/hello`  | Hello message                                           |
| GET    | `/users`  | List all users                                          |
| POST   | `/users`  | Create user (body: `{ "email": "...", "name": "..." }`) |

## Scripts

- `npm run dev` - Development server
- `npm run build` - Build for production
- `npm start` - Run production build
