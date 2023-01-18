<h3> BrainFlix </h3>

BrainFlix is a fullstack app for a fictional mock video streaming platform. 
<hr/>

<h5>General Functionalities</h5>

An REST API service was built to manage the videos data. It had the following end-points:
GET /videos that responds with an array of videos;
GET /videos/:id that responds with an object containing the details of the video with an id of :id;
POST /videos that will add a new video to the video list with a unique id generated for each video added;
A JSON file was used for data persistence (writing to it, and reading from it)

<h5>Tech Stack</h5>
HTML, SASS, JavaScript, React, React Router, Node, Express, API's , Postman and Axios, Upload.io
<hr/>
Installation:
1) To install and run the project you will need to clone or dowload the client and server parts;<br/>
2) Run nmp i to install all the required node modules for the app;<br/>
3) You can first start server part, the start client part.<br/>
<hr/>
Environment Variables
Frontend:
Add the following variables in .env file:
REACT_APP_API_URL=https://localhost:8080

Backend:
Add the following variables in .env file:
PORT = 8080

