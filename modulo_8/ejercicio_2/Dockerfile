# Use an official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the Vite development server port
EXPOSE 5173

# Start Vite in dev mode and allow external access
CMD ["npm", "run", "dev", "--", "--host"]