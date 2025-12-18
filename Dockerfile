FROM node:18-alpine

WORKDIR /app

# Install only production dependencies (build is done locally)
COPY package*.json ./
RUN npm install --production

# Copy app files including the pre-built React 'build' folder
COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
