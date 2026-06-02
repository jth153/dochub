# PDF Drive Sample

วางไฟล์ PDF ลงในโฟลเดอร์ `pdfs` ภายในโฟลเดอร์โปรเจคนี้ แล้วรันเซิร์ฟเวอร์เพื่อดูหน้าเว็บที่คล้าย Google Drive สำหรับไฟล์ PDF

คำสั่งเพื่อเริ่ม (Windows PowerShell / CMD):

```bash
npm install
npm start
```

เปิดเบราว์เซอร์ที่: http://localhost:3000/index.html

โครงสร้างไฟล์:

- `index.html` — หน้าเว็บ frontend
- `server.js` — backend เล็กๆ เพื่อคืนรายการไฟล์และให้บริการไฟล์ PDF
- `pdfs/` — ใส่ไฟล์ PDF ที่ต้องการให้แสดง
