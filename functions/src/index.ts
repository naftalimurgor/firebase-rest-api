/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// https://stackoverflow.com/questions/76434349/firebase-cloud-functions-v2-error-when-deploying
import {setGlobalOptions} from "firebase-functions/v2/options";
import {onRequest} from "firebase-functions/v1/https";
setGlobalOptions({maxInstances: 10});

import * as express from "express";
import cors = require("cors");

import {Request, Response} from "express";
import {addEntry, getAllEntries, updateEntry} from "./controllers/entryController";
// Start writing functions
// https://firebase.google.com/docs/functions/typescript

const app = express();

// enable consuming of JSON in the request body:
app.use(express.json());

// enable cors:
// const corsConfig = {
//   origin: '', // state origin to only accept requests from
//   optionsSuccess: 200
// }

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hey there!").status(200);
});

app.post("/add-entries", addEntry);
app.get("/entries", getAllEntries);
app.post("/update/:entryId", updateEntry);
// creates a function called app on the firebase
// functions console accessible as /app
exports.app = onRequest(app);
// TODO: CRUD with postman(test one point only, use as refference)
