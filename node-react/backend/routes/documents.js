const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Document = require('../models/Document');

// === CONFIGURACIÓN MULTER ===
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const allowedTypes = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

const fileFilter = (req, file, cb) => {
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Solo se permiten archivos PDF y DOCX.'));
  }
};

const upload = multer({ storage, fileFilter });

// === SUBIR DOCUMENTO ===
router.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No se subió ningún archivo válido. Solo se permiten PDF y DOCX.' });
    }

    const { title, description } = req.body;
    const uploadedFilePath = req.file.path;
    const fileExt = path.extname(req.file.originalname).toLowerCase();

    // No se realiza conversión de DOCX a PDF, simplemente guardamos el archivo tal como está
    const fileURL = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

    const newDoc = new Document({
      title,
      description,
      filename: req.file.filename,
      filePath: uploadedFilePath,
      fileURL
    });

    await newDoc.save();
    return res.status(201).json({ message: 'Documento subido correctamente', fileURL });
  } catch (err) {
    console.error('Error al subir documento:', err.message);
    res.status(500).json({ message: 'Error interno al subir documento', error: err.message });
  }
});

// === LISTAR DOCUMENTOS ===
router.get('/', async (req, res) => {
  try {
    const docs = await Document.find().sort({ uploadedAt: -1 });
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener documentos', error: err.message });
  }
});

// === DESCARGAR DOCUMENTO ===
router.get('/download/:filename', (req, res) => {
  const filePath = path.join(__dirname, '..', 'uploads', req.params.filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: 'Archivo no encontrado' });
  }

  res.download(filePath, req.params.filename, (err) => {
    if (err) {
      console.error('Error al descargar archivo:', err.message);
      res.status(500).json({ message: 'Error al descargar archivo' });
    }
  });
});

module.exports = router;



