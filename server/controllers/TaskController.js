const { createClient } = require('@supabase/supabase-js');
const { supabase } = require('@supabase/supabase-js');

const allTasks = async (req, res) => {
  try {
    const { data, error } = await supabase.from('tasks').select('*')
    .then(() => if (error) throw error) else;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = { allTasks };



