const { supabase } = require('@supabase/supabase-js');

const allTasks = async (req, res) => {
  try {
    const { data: tasks, error } = await supabase.from('tasks').select('*');

    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al obtener las tareas' });
    }

    res.status(200).json({ tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = { allTasks };



