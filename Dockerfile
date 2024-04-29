 # Use the Node.js 16 image based on Debian Buster as the base image
FROM node:16-buster

# Create a directory named "app" in the Docker container
RUN mkdir /app

# Copy the package.json file to the "app" directory
COPY package.json /app/

# Set the "app" directory as the working directory
WORKDIR /app

# Set the "app" directory as the working directory
COPY . ./

ENV NEXT_PUBLIC_APP_URL=https://www.mydomain.com

RUN npm install
RUN npm run build
EXPOSE 80  # Expose port 80
CMD ["npm", "run","start"]