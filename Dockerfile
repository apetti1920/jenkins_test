FROM node:14

# Create app directory
WORKDIR /app

# Bundle app source
COPY . .

# Install app dependencies
RUN npm install

# Set the start command on contianer start
CMD npm run start