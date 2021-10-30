const CLIENT_ID = "331844839189-btk5imvfr1ju0d9q0bpadr4f72sf28cp.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "http://localhost:3000/account/oauth2callback";
// change later

const {google} = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

const scopes = [
  "https://www.googleapis.com/auth/classroom.courses.readonly", 
  "https://www.googleapis.com/auth/calendar"
]

const url = oauth2Client.generateAuthUrl({
  access_type: "offline",
  scope: scopes
});

exports.url = url;
exports.client = oauth2Client;

const API_KEY = "AIzaSyAFpYhbwQ5Jp4jDZdvOC1RMssndgqJQbbE";


const classroom = google.classroom({
  version: "v1",
  auth: API_KEY
});

const params = {
  "courseStates": "ACTIVE",
	"studentId": "me"
};

// classroom.courses.list(params, (err, data) => {
//   if (err) console.error(err);
//   console.log(data);
// })
