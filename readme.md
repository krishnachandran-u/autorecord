# autorecord
## Generate lab records with a single click

### Installation

### Contribute
To contribute, follow these steps:

1. Install Docker on your machine. You can download Docker from the official website: [https://www.docker.com/get-started](https://www.docker.com/get-started).

2. Install Python with pip. You can download Python from the official website: [https://www.python.org/downloads](https://www.python.org/downloads). Make sure to select the option to install pip during the installation process.

3. Install Git on your machine. You can download Git from the official website: [https://git-scm.com/downloads](https://git-scm.com/downloads).

4. Install npm (Node Package Manager) on your machine. You can download Node.js, which includes npm, from the official website: [https://nodejs.org/en/download](https://nodejs.org/en/download).

5. Once Docker, Python with pip, Git, and npm are installed, open a terminal or command prompt and navigate to the project directory.

6. Run the following command to build and start the Docker containers:
```
docker-compose up --build
```
if it doesn't work run
```
docker compose up --build
```

7. After the containers are built and running, open your web browser and go to [http://localhost:3000](http://localhost:3000).

Additional directories in the project:

- `/backend` for backend
- `/webui` for Next.js frontend
- `/backend/api` has the APIs built using Flask  
- `/backend/api/readme.md` has the API documentation
- `/backend/template` has the base LaTeX template  




