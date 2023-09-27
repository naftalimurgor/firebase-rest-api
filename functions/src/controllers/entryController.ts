import {Response} from "express";
import {db} from "../config/firebase";

type EntryType = {
  title: string,
  text: string,
  coverImageUrl: string
}

type Request = {
  body: EntryType,
  params: { entryId: string }
}

const addEntry = async (req: Request, res: Response) => {
  const {title, text} = req.body;
  try {
    // creates a new firebase docuement called entries
    const entry = db.collection("entries").doc();
    const entryObj = {
      id: entry.id,
      title,
      text,
    };
    // update the document with some fields
    entry.set(entryObj);
    res.send({message: "success!", entry: entryObj}).status(200);
  } catch (error) {
    res.status(500).json("Error when saving the document");
  }
};


const getAllEntries = async(req: Request, res: Response) => {
  try {
    const allEntries = await db.collection("entries").get();
    return res.status(200).json(allEntries.docs);
  } catch (error) {
    return res.status(500).json("Fatal error occured retrieving entries");
  }
}


export {addEntry, getAllEntries};
