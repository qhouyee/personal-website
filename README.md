# 1. Introduction
This git repository contains the code for my personal website at: ... It is currently under construction. 

# 2. Code Builds
The project can be built either locally or on the Docker platform.

## 2.1 Local builds
For local builds, install the pre-requisite node dependencies in the `<root>` directory through a CLI:
```
npm install
```
Deploy the website using one of the following scripts:
- `npm run dev`: For development
- `npm run preview`: For previewing production builds locally
- `npm run build`: For deployment

## 2.2 Docker builds
The project can also be built on the Docker platform, and several configurations have been set up for different environments. 

### 2.2.1 Development
In the development environment, hot reloading is enabled, and any changes to the code base will be reflected immediately on the website. To start the server, navigate to the `<root>` directory and run the following code in a CLI:
```
docker-compose up -d
```
If successfully run, the website will be available at `http://localhost:3000/`

### 2.2.2 Production
With Docker running, navigate to the `<root>` directory and run the following code in a CLI:
```
docker compose -f "./docker-compose.prod.yml" up -d --build 
```
