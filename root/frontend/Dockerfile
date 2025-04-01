# Stage 1: Build your React frontend
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source files and build
COPY . .
RUN npm run build

# Stage 2: Serve your static frontend files using Nginx
FROM nginx:alpine

# Copy the built React files from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the frontend port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
