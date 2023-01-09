# commits-story
A nest project to get info from your github repositories

# Instructions for setting up
This project has two parts:
1. The backend part (commits-story-backend), which is a NestJS project.
2. The frontend part (commits-story-frontend), wich is a ReactJS project using [Vite](https://vitejs.dev/)

The important part to configure here is the .env files, each one of the projects has its own .env file.
For the backend part, there are two env variables to set:
**GITHUB_TOKEN**, which is a personal github access token that can be created [Here](https://github.com/settings/tokens)
**GITHUB_USER**, Your github user name (mplata for me, for example)

once you have your .env file created in the root of commits-story-backend, open a terminal, go to that folder and start
with `npm run start`.

For the frontend part, there are two env variables to set:
**VITE_API_ENDPOINT**, Your backend base url, wich should be `http://localhost:3000` if you are running locally.
**VITE_INITIAL_REPO**, The default github project you want to see commits first (commits-story would be for my case), it MUST be a public repo owned by the GITHUB_USER
in the backend.