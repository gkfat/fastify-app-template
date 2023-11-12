# fastify-app-template

## How to run

1. packages
```md
pnpm install
```

2. local develop
```md
pnpm run dev
```

3. run eslint
```md
pnpm run lint
```

4. build dist
```md
pnpm run build
```

5. run production
```md
pnpm run start
```

## Features
- Infra
  - [x] typescript
  - [x] eslint
  - [x] env config
  - [x] logger
  - [ ] docker
  - [ ] graceful shutdown
- DB
  - [ ] DB connection
  - [ ] DB orm
  - [ ] migration
- Api
  - [x] init app
  - [x] cors
  - [x] routes / controller / service
  - [x] schema validation
  - [ ] error handler
- Authentication
  - [ ] jwt
  - [ ] middleware