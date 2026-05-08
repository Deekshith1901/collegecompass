const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

async function updateIITBombayImage() {
  const { data, error } = await supabase
    .from('colleges')
    .update({
      image_url: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    })
    .eq('id', 2);

  if (error) {
    console.error('Error updating IIT Bombay image:', error);
  } else {
    console.log('Successfully updated IIT Bombay image URL');
  }
}

updateIITBombayImage();