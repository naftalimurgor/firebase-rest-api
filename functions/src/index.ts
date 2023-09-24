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
setGlobalOptions({maxInstances: 10});

import * as express from "express";
import {Request, Response} from "express";
import * as functions from "firebase-functions";
// Start writing functions
// https://firebase.google.com/docs/functions/typescript

const app = express();

app.get("*", (req: Request, res: Response) => {
  res.send("Hey there!").status(200);
});

// creates a function called app on the firebase functions console accessible as /app
exports.app = functions.https.onRequest(app);

