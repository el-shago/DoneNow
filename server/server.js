import express from "express";
import dotenv from "dotenv"; // Asegúrate de ajustar la ruta adecuada al archivo .env de Vite
import { supabase } from "./supabaseClient.js";

dotenv.config();

const app = express();

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

const createTask = app.post("/create/task", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("tasks")
      .insert([{ title: "task_title", description: "task_desctiption", due_date : "task_due_date" }])
      .select();

    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Error at creating the task" });
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

// Ahora puedes usar apiKey en tu lógica del servidor
// Ejemplo:
