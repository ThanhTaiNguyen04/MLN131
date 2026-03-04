# Deploy to Vercel - Hướng dẫn

## Bước 1: Tạo GitHub Repository

1. Truy cập: https://github.com/new
2. Repository name: `vietnam-economy`
3. Chọn **Public**
4. **KHÔNG** tick "Add a README file"
5. Click **Create repository**

## Bước 2: Push Code lên GitHub

Sau khi tạo repo, chạy các lệnh sau (thay YOUR_USERNAME bằng username GitHub của bạn):

```bash
cd "d:\MLN131\vietnam-economy"
git remote add origin https://github.com/YOUR_USERNAME/vietnam-economy.git
git branch -M main
git push -u origin main
```

## Bước 3: Deploy lên Vercel

### Cách 1: Import từ GitHub (Khuyên dùng)

1. Truy cập: https://vercel.com/new
2. Click **"Import Git Repository"**
3. Chọn repository `vietnam-economy`
4. Vercel tự động detect Vite project
5. Framework Preset: **Vite**
6. Build Command: `npm run build`
7. Output Directory: `dist`
8. Click **Deploy**

### Cách 2: Vercel CLI

```bash
npm install -g vercel
cd "d:\MLN131\vietnam-economy"
vercel
```

## Bước 4: Cấu hình Build Settings (nếu cần)

Vercel thường tự động detect, nhưng nếu cần config thủ công:

- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Link hữu ích

- Vercel Dashboard: https://vercel.com/dashboard
- Vercel Docs for Vite: https://vercel.com/docs/frameworks/vite

## Features đã implement

✅ 4 sections với Roman numerals (I-IV)
✅ Gamification system (localStorage persistence)
✅ Star tracking và completion modal
✅ 27 images (24 local + 3 Unsplash)
✅ Responsive design với Tailwind CSS
✅ Custom animations

## Troubleshooting

**Nếu images không hiển thị trên Vercel:**
- Check folder `public/pics/` có trong git không
- Chạy: `git status` để xem tracked files

**Nếu build fail:**
- Check Node version (cần >=18)
- Run `npm install` trước khi deploy
