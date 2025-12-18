# CI/CD Pipeline for React Application

This project demonstrates an end-to-end CI/CD pipeline for a React application using GitHub Actions, Docker, and AWS EC2.

The main goal of this project is to understand how automated builds and deployments work in a real-world DevOps workflow.

---

## Project Overview

The application is a simple React-based blog interface.  
Every push to the main branch triggers a CI/CD pipeline that:

- Installs dependencies
- Builds the React application
- Creates a Docker image
- Deploys the application to an EC2 instance using a self-hosted GitHub Actions runner

---

## Tech Stack

- React
- Docker
- GitHub Actions
- AWS EC2
- Self-hosted GitHub Actions Runner
- Node.js

---

## CI/CD Workflow

1. Developer pushes code to the `main` branch
2. GitHub Actions pipeline is triggered
3. React app is built using `npm run build`
4. Docker image is created
5. Existing container is stopped and removed
6. New container is deployed automatically

---

## Key Learnings

- How CI/CD pipelines work end to end
- Importance of build steps in production deployments
- How Docker simplifies application deployment
- How AWS security groups affect application accessibility
- How to debug real deployment issues instead of relying on assumptions
- Managing self-hosted GitHub Actions runners

---

## Challenges Faced

- Application running but not accessible due to missing security group rules
- Build failure caused by missing React build step
- GitHub Actions jobs waiting due to inactive self-hosted runner

These issues helped strengthen my understanding of real-world DevOps troubleshooting.

---

## Future Improvements

- Add Nginx as a reverse proxy
- Deploy on port 80 with a domain name
- Add HTTPS using SSL certificates
- Push Docker images to a container registry

---

## Note

The AWS EC2 instance used for deployment was removed after completing the learning objectives for this project.

---

## Author

K. Ayesha  
B.Tech Computer Science  
Aspiring DevOps / Cloud Engineer
