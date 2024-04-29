# Use the Node.js 20 image based on Debian Buster as the base image
FROM node:20

# Create a directory named "app" in the Docker container
RUN mkdir /app

# Copy the package.json file to the "app" directory
COPY package.json /app/

# Set the "app" directory as the working directory
WORKDIR /app

# Set the "app" directory as the working directory
COPY . ./

ENV NEXT_PUBLIC_APP_URL=http://f4services.live

RUN npm install

# Install specific image viewer dependency. Got errors related to its usage.
RUN npm install react-simple-image-viewer
RUN npm run build

# Expose port 80
EXPOSE 8080
CMD ["npm", "run","start"]