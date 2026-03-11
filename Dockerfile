FROM node:18

WORKDIR /app

# Copy package.json first (better caching)
COPY Backend/package*.json ./

RUN npm install

COPY Backend ./

EXPOSE 5000

CMD ["node", "index.js"]