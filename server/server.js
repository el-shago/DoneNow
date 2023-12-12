import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { supabase } from "./supabaseClient.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//Get tasks
const getTasks = app.get("/", async (req, res) => {
  try {
    const { data: tasks, error } = await supabase.from("tasks").select("*");

    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Error at returning task list" });
    }

    res.status(200).json({ tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

//Create tasks
const createTask = app.post("/create/task", async (req, res) => {
    const body = req.body;
    console.log(req.body);
  try {
    const { tasks, error } = await supabase
      .from("tasks")
      .insert([{ userid: body.userid, title: body.title, description: body.description, due_date : new Date(body.due_date) }])
      .select();
      

    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Error at creating the task" });
    }

    res.status(200).json({ tasks });
  } catch (error) {
    console.error("Error at creating task", error);
    res.status(500).json({ error: "Server error" });
  }
});

//Delete tasks
const deleteTask = app.delete("/delete/task/:id", async (req, res) => {
  try{
    const { tasks, error } = await supabase .from("tasks").delete().match({ task_id: req.params.id });
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Error at deleting the task" });
    }
    res.status(200).json({ tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});



const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
