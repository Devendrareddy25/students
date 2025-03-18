# Use Node.js as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Fix permission issues
RUN chmod -R 777 node_modules/.bin

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000 for frontend
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
