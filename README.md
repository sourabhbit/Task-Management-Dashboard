# Task-Management-Dashboard

Task management dashboard

- [NextJs](https://nextjs.org/) - Frontend Framework
- [Styled components](https://styled-components.com/) - CSS library
- [Redux](https://redux.js.org) - State Management

 <p>
  <img alt="NPM Version" src="https://img.shields.io/badge/npm-10.9.0-blue?style=plastic&logo=npm" />
  <img alt="Node Version" src="https://img.shields.io/badge/node@latest->=20.12.0-orange?style=plastic&logo=node.js" />
  <img alt="Next version" src="https://img.shields.io/badge/next-%5E15.0.2-blue?style=plastic&logo=nextdotjs" />
  <img alt="Styled components" src="https://img.shields.io/badge/styledcomponents->=6.1.13-blue?style=plastic&logo=styledcomponents" />
</p>





## Installation

1. Open the command prompt and clone this repository.

```bash
mkdir task-management
cd task-management
git clonegit@github.com:sourabhbit/Task-Management-Dashboard.git
```

2. Run `npm install` to install dependencies.

3. Execute `npm run dev` to run the project.

4. Execute `npm run build` for project build.

5. Execute `npm run test` for test coverage.

## For setup of Docker

1. Make sure you have Docker installed in your machine.
2. Create a docker file named `Dockerfile`. and paste these commands for multi-stage build. Why multistage? [Read this](https://kumarsourabh556.medium.com/ditching-the-docker-bloat-tactics-for-slimming-down-nextjs-reactjs-apps-image-size-1e14cdeff1a7)
 ```bash
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine as runner
WORKDIR /app
COPY --from=builder /app/package.json .
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

ENTRYPOINT [ "node", "server.js" ]

```
2. Execute this command `docker build --tag taskmanagement:latest -f Dockerfile .`
3. And you will find a docker image will be available in your Docker App.

## License

[MIT](https://choosealicense.com/licenses/mit/)
