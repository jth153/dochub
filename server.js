const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PDF_DIR = path.join(__dirname, 'pdfs');

app.use(cors());

// ให้บริการไฟล์ static ทั้งหมดในโฟลเดอร์โปรเจกต์
app.use(express.static(__dirname));

// หน้าแรก
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API รายชื่อไฟล์ PDF
app.get('/api/files', async (req, res) => {
  try {
    await fs.access(PDF_DIR);
  } catch (err) {
    return res.json([]);
  }

  try {
    const names = await fs.readdir(PDF_DIR);
    const files = [];

    for (const name of names) {
      const full = path.join(PDF_DIR, name);
      const stat = await fs.stat(full);

      if (
        stat.isFile() &&
        path.extname(name).toLowerCase() === '.pdf'
      ) {
        files.push({
          name,
          size: stat.size,
          mtime: stat.mtime
        });
      }
    }

    files.sort((a, b) => b.mtime - a.mtime);

    res.json(files);
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

// ให้บริการไฟล์ PDF
app.use('/pdfs', express.static(PDF_DIR, {
  index: false
}));

// สำหรับ Vercel
module.exports = app;
