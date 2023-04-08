# First stage: Install dependencies and add code
#==================================================================================================
FROM node:19-buster-slim as builder

# Set working directory
WORKDIR /home/node/

# Install node dependencies
COPY ./config/package.json .
RUN npm install && npm cache clean --force

# Copy the other configurations and HTML templates
COPY ./config  .
COPY ./template  .

# Second stage: Build image for development environment
#==================================================================================================
FROM builder as development

# Copy all the code into the src folder
COPY ./code/src ./src

# Launch application server in development mode
CMD ["npm", "run", "dev"]
