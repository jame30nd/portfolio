# Personal Portfolio — Next.js + React

เว็บแนะนำตัวสไตล์ Linear (พื้นหลังขาว, สีหลัก `#37b6ff`) มีเอฟเฟกต์ landing slide ลงมา
และมีปุ่มดาวน์โหลด Resume (TH/EN) + ดู Portfolio

## รันโปรเจกต์

```bash
npm install
npm run dev
```

เปิด http://localhost:3000

Build สำหรับ production:

```bash
npm run build
npm start
```

## รองรับ 2 ภาษา (TH / EN)

เว็บมีปุ่มสลับ **TH / EN** มุมขวาบน — จำภาษาที่เลือกไว้ใน `localStorage`
และปรับ `<html lang>` ให้อัตโนมัติ

## แก้ข้อมูลส่วนตัว

แก้ที่ไฟล์เดียว: [`lib/data.ts`](lib/data.ts)

- `profile` — ชื่อ, ชื่อเล่น, อีเมล, เบอร์โทร, ลิงก์โซเชียล (ใช้ร่วมทั้งสองภาษา)
- `resumes` — ชื่อไฟล์ Resume + โปรไฟล์
- `projectMeta` — สี + ลิงก์ของแต่ละผลงาน (เรียงลำดับตรงกับ projects)
- `dict.th` / `dict.en` — เนื้อหาทั้งหมดของแต่ละภาษา (hero, about, education,
  skills, experience, projects, contact) **แก้ทั้งสองภาษาให้เนื้อหาตรงกัน**

## ไฟล์ Resume (ใส่ของจริงไว้แล้ว)

ไฟล์อยู่ในโฟลเดอร์ `public/` — อัปเดตทับได้เลยถ้ามีเวอร์ชันใหม่ (ใช้ชื่อเดิม):

- `public/resume-th.pdf` — เรซูเม่ภาษาไทย (~1.3 MB)
- `public/resume-en.pdf` — เรซูเม่ภาษาอังกฤษ (~1.3 MB)
- `public/profile-jamebond.pdf` — โปรไฟล์ฉบับเต็ม (~73 MB ⚠️ ควรบีบอัดก่อน deploy)

## Deploy

Deploy ง่ายสุดด้วย [Vercel](https://vercel.com): push ขึ้น GitHub แล้ว import repo

## โครงสร้าง

```
app/
  layout.tsx      # metadata + ฟอนต์ Inter
  page.tsx        # ประกอบทุก section
  globals.css     # ตัวแปรสี + สไตล์รวม
components/
  Nav.tsx         # เมนูบนสุด (sticky + blur)
  Hero.tsx        # หน้าแรก + เอฟเฟกต์ slide ลงมา
  About.tsx       # เกี่ยวกับฉัน + สถิติ
  Skills.tsx      # tech stack
  Projects.tsx    # portfolio
  Contact.tsx     # ปุ่มดาวน์โหลด Resume + ดู Portfolio
  Reveal.tsx      # เอฟเฟกต์ค่อย ๆ ปรากฏตอน scroll
lib/data.ts       # << แก้ข้อมูลทั้งหมดที่นี่
public/           # ไฟล์ resume PDF
```
