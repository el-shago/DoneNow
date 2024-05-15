import bcrypt from "bcrypt";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { supabase } from "./supabaseClient.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//Get tasks
const getTasks = app.get("/:userid", async (req, res) => {
  try {
    const { data: tasks, error } = await supabase
      .from("tasks")
      .select("*")
      .where("user_id", "eq", req.params.userid)
      .orderby("due_date", { ascending: true });

      console.log(userid);

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
      .insert([
        {
          userid: body.userid,
          title: body.title,
          description: body.description,
          due_date: new Date(body.due_date),
        },
      ])
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
  try {
    const { tasks, error } = await supabase
      .from("tasks")
      .delete()
      .match({ task_id: req.params.id });
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

// get user by id
const getUserById = app.get("/user/:id", async (req, res) => {
  try {
    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", req.params.id);

    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Error at returning user" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

//Register Users
const registerUser = app.post("/register/user", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const { data: newUser, error } = await supabase
      .from("users")
      .insert([{ username, email, password: hashedPassword }])
      .select("*");

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Login Users
const loginUser = app.post("/login/user", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Busca al usuario en la base de datos
    const { data: users, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email);

    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Server error" });
    }

    // Verifica si se encontró un usuario con el correo electrónico dado
    if (users.length === 0) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    // Verifica la contraseña (en un escenario real, deberías usar funciones hash como bcrypt)
    const user = users[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    // Autenticación exitosa
    return res.status(200).json({ message: "Inicio de sesión exitoso", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
