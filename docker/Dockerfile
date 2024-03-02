FROM node:lts-alpine3.18 AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:lts-alpine3.18 AS build
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

# Production image, copy all the files and run next
FROM node:alpine3.18 AS app
WORKDIR /app
ENV NODE_ENV=production
ARG API_URL
ARG API_KEY
ENV API_URL=$API_URL
ENV API_KEY=$API_KEY
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
COPY --from=build /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/next.config.js .
USER nextjs
EXPOSE 80
HEALTHCHECK --interval=12s --timeout=12s --start-period=30s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost/api/status || exit 1
CMD ["yarn", "start", "-p", "80"]
