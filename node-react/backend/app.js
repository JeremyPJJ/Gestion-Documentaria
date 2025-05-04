require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Servir archivos estáticos (por ejemplo PDF o Word)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ruta principal para probar conexión
app.get('/', (req, res) => {
  res.send('API de Gestión Documentaria funcionando.');
});

// Rutas
const documentRoutes = require('./routes/documents');
app.use('/api/documents', documentRoutes);

// Conexión a MongoDB y arranque del servidor
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Conectado a MongoDB');
  app.listen(PORT, () =>
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
  );
})
.catch(err => console.error('❌ Error al conectar a MongoDB:', err));

