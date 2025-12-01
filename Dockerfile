
# pull official base image
#FROM react-admin-base:dev
FROM hub.yottab.io/library/node:18-alpine as base
# set working directory
RUN apk add --no-cache libc6-compat
WORKDIR /app


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
#COPY . .
COPY package.json ./
COPY src src
COPY public public
COPY postcss.config.mjs ./
COPY next.config.mjs ./
COPY tsconfig.json ./

RUN npm i


RUN npm run build-develop
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
