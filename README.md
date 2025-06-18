# 🗺️ Roadmap Zion Church - Community Web App

## 🔧 Infrastructure

### Local Environment (Dev)
- [ ] Config Docker Compose with:
  - [ ] PostgreSQL
  - [ ] Redis
  - [ ] Backend NestJS
  - [ ] Frontend Next.js
- [ ] Create `.env`
- [ ] Scripts for `dev:start`, `dev:db`, `dev:seed`

### Production Environment
- [ ] Choose provider (Railway, Vercel, Fly.io, Render ou VPS)
- [ ] Config CI/CD (GitHub Actions or Vercel Deploy)
- [ ] Create database PostgreSQL
- [ ] Install and config Redis
- [ ] Generate domains + HTTPS w/ SSL
- [ ] Monitoring e logging (e.g.: Logtail, Axiom, etc.)

---

## 🧠 Backend — NestJS + Prisma + WebSocket

### Initial Setup
- [ ] Create NestJS project
- [ ] Install Prisma + config `schema.prisma`
- [ ] Create module `AuthModule` with BetterAuth (https://github.com/BetterTyped/better-auth)
- [ ] Config Prisma Adapter for Auth
- [ ] Enable login w/ Google (OAuth)
- [ ] Create module `PostModule` and `CommentModule`

### Features
- [ ] Route: `POST /auth/login`
- [ ] Route: `GET /posts` (cache w/ Redis)
- [ ] Route: `POST /posts`
- [ ] Route: `POST /posts/:id/comments`
- [ ] WebSocket Gateway for:
  - [ ] `new_post` issued in creation
  - [ ] `new_comment` issued in comment

### Security
- [ ] Authentication Middleware via JWT
- [ ] Guards for protect private routes

---

## 🎨 Frontend — Next.js + Tailwind + Better Auth

### Setup
- [ ] Create Next.js project
- [ ] Install Tailwind CSS
- [ ] Install `better-auth/react`
- [ ] Config Better Auth w/ Google Provider
- [ ] Config protected route w/ Session Context

### Pages
- [ ] `/login` — Login w/ Google
- [ ] `/feed` — Feed w/ posts in real time
- [ ] `/post/[id]` — Individual page with comments

### Componentes
- [ ] `<PostList />` — List of posts
- [ ] `<PostForm />` — Create new post
- [ ] `<CommentList />` — List comments
- [ ] `<CommentForm />` — Comments
- [ ] `<Header />` — With user name and logout button

### WebSocket
- [ ] Conect to backend WebSocket
- [ ] Automatically update feed w/ new posts
- [ ] Automatically comments in real time

### Global state
- [ ] Create Context API for session control and socket
- [ ] Improve UX w/ loaders and notifications

---

## 🧪 Quality and Tests

- [ ] Linter + Prettier configured
- [ ] Git hooks com Husky
- [ ] Unit tests w/ Jest
- [ ] Integration tests w/ Supertest in NestJS

---

## 📦 Deploy and documentation

- [ ] Frontend Deploy (Vercel)
- [ ] Backend deploy (Railway, Fly.io ou VPS)
- [ ] CDN configured for statics images
- [ ] README with:
  - [ ] Local Setup
  - [ ] Env variables
  - [ ] How run tests
  - [ ] Authentication flow

---

## 🔥 Power Up
- [ ] Backend NestJS com WebSocket
- [ ] Better Auth + Prisma Adapter w/ login Google
- [ ] Redis for cache of feed
- [ ] Update in real time (WebSocket)
