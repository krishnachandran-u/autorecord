# autorecord
## Generate beautiful lab records with a single click!

## Table of Contents
  - [Generate lab records with a single click](#generate-lab-records-with-a-single-click)
  - [One-Time Setup for Autorecord](#one-time-setup-for-autorecord)
  - [Running Autorecord](#running-autorecord)
  - [Get Your Lab Report as PDF](#get-your-lab-report-as-pdf)
  - [Contribute](#contribute)
  - [Additional Directories](#additional-directories)
  - [Credits](#credits)

## One-Time Setup for autorecord

**Ready to use Autorecord? Here's a quick setup:**

1. **Install Docker:** Head to the official website (https://docs.docker.com/guides/getting-started/) and download Docker for your system.
2. **Create App Data Volume:** Open your terminal and run this command to create a storage area for autorecord's data:
```
docker volume create autorecord-appdata
```
3. **Pull Docker Images:** Run the following commands to pull the backend and frontend images:
```
docker pull krishnachandranu/autorecord-backend
```
```
docker pull krishnachandranu/autorecord-frontend
```
**Tip:** These commands might take a while depending on your internet speed.

## Running autorecord

**Ready to start making records? Here's how to launch autorecord:**

1. **Open a terminal:** Open your terminal or command prompt.
2. **Run Backend:** In the terminal, run this command to start the backend of autorecord:
```
docker run -v autorecord-appdata:/.appdata -p 5000:5000 krishnachandranu/autorecord-backend
```
2. **Run Frontend:** Open **another** terminal or command prompt. In the terminal, run this command to start the frontend of autorecord:
```
docker run -p 3000:3000 krishnachandranu/autorecord-frontend
```
**Important:** Make sure to run these commands in separate terminals to ensure both parts of autorecord function correctly.

3. **All set!:** After the containers are running, open your web browser and go to [http://localhost:3000](http://localhost:3000).

## Get Your Lab Report as PDF

**Ready to download your lab report? Here's how:**

1. **Save your work:** Make sure all your edits are complete, then click `Save` in autorecord.
2. **Download your files:** Click `Get ZIP` to create a compressed file containing everything for your report. 
3. **Upload to Overleaf:**  If you don't have an [Overleaf (Click Here)](https://www.overleaf.com/) account, create one for free! Then, click `New Project` and choose `Upload` to select the downloaded ZIP file.
4. **Get your PDF:** Overleaf will automatically set up your project. Finally, click the `Download PDF` button `(looks like a download icon)` on the top of the rendered PDF to save your lab report as a PDF!

## Contribute
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

## Additional Directories

The project includes the following additional directories:

- `/backend` for backend
- `/webui` for Next.js frontend
- `/backend/api` has the APIs built using Flask  
- `/backend/api/readme.md` has the API documentation
- `/backend/template` has the base LaTeX template  

## Credits

Special thanks to the following individuals for their direct and/or indirect contributions:

- [Don Jose Mathew](https://github.com/donjosemathew)
- [Jiya Rose Joshy](https://github.com/jiyarosejoshy)
- [Meenakshy Sudhir](https://github.com/meenakshysudhir)
- [Riya Sabu](https://github.com/riya461)
- [Mohamed Irfan AM](https://github.com/MohamedIrfanAM)
- [Nimmi M Giji](https://github.com/Nimmi-Giji)
- [Aravind Suresh Thakidayil](https://github.com/AravindSureshThakidayil)
- [Alex Sabu](https://github.com/AlexSabu)
- Joshua T Joy
- [Pranav Jayachandran](https://github.com/PranavJayachandran)
- [Ajay Krishna K V](https://github.com/AJAYK-01)
- [Arjun A I](https://github.com/Arjun-A-I)
- Vishnu Shaji