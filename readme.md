# autorecord
## Generate lab records with a single click


### Table of Contents
- [Installation](#installation)
- [Run](#run)
- [Contribute](#contribute)
- [Additional Directories](#additional-directories)

### Installation (only once)

To install autorecord, follow these steps:

1. Install Docker on your machine. You can download Docker from the official website: [https://www.docker.com/get-started](https://www.docker.com/get-started).

2. Open a terminal or command prompt and run the following command to create a volume for autorecord app data:
```
docker volume create autorecord-appdata
```

3. Run the following commands to pull the backend and frontend images:
```
docker pull krishnachandranu/autorecord-backend
```
```
docker pull krishnachandranu/autorecord-frontend
```

### Run

To run autorecord, follow these steps:

1. Open a terminal or command prompt and run the backend container with the following command:
```
docker run -v autorecord-appdata:/.appdata -p 5000:5000 krishnachandranu/autorecord-backend
```

2. Open __another__ terminal or command prompt and run the frontend container with the following command:
```
docker run -p 3000:3000 krishnachandranu/autorecord-frontend
```

3. After the containers are running, open your web browser and go to [http://localhost:3000](http://localhost:3000).

### Contribute
To contribute, follow these steps:

1. Install Docker on your machine. You can download Docker from the official website: [https://www.docker.com/get-started](https://www.docker.com/get-started).

2. Install Python with pip. You can download Python from the official website: [https://www.python.org/downloads](https://www.python.org/downloads). Make sure to select the option to install pip during the installation process.

3. Install Git on your machine. You can download Git from the official website: [https://git-scm.com/downloads](https://git-scm.com/downloads).

4. Install npm (Node Package Manager) on your machine. You can download Node.js, which includes npm, from the official website: [https://nodejs.org/en/download](https://nodejs.org/en/download).

5. Once Docker, Python with pip, Git, and npm are installed, open a terminal or command prompt and navigate to the project directory.

6. Run the following command to build and start the Docker containers:
```
docker compose up --build
```
if it doesn't work, run:
```
docker-compose up --build
```

7. After the containers are built and running, open your web browser and go to [http://localhost:3000](http://localhost:3000).

### Additional Directories

The project includes the following additional directories:

- `/backend` for backend
- `/webui` for Next.js frontend
- `/backend/api` has the APIs built using Flask  
- `/backend/api/readme.md` has the API documentation
- `/backend/template` has the base LaTeX template  

