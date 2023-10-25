const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('VITE_SUPABASE_URL', 'VITE_SUPABASE_ANON_KEY');

const allTasks = async (req, res) => {
  try {
    const { data, error } = await supabase.from('tasks').select('*');

    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al obtener las tareas' });
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = { allTasks };



