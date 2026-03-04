# Nền Kinh Tế Thị Trường Định Hướng XHCN ở Việt Nam

Website học tập tương tác hiện đại với React + Tailwind CSS

## 🚀 Website đang chạy tại: http://localhost:5173/

## ✨ Tính năng

- **Trang chủ**: Giới thiệu tổng quan về website
- **Bài học**: Nội dung chi tiết về nền kinh tế (sẵn sàng để thêm nội dung của bạn)
- **Trò chơi Quiz**: Quiz tương tác siêu hấp dẫn với:
  - Đếm ngược thời gian (30s/câu)
  - Điểm thưởng dựa trên tốc độ
  - Streak bonus khi trả lời đúng liên tiếp
  - Giải thích chi tiết sau mỗi câu
  - Hiệu ứng animation mượt mà
- **Giới thiệu**: Thông tin về website và công nghệ

## 🎨 Thiết kế

- Responsive: Hoạt động tốt trên mọi thiết bị (mobile, tablet, desktop)
- Hiện đại: Màu sắc đỏ-vàng lấy cảm hứng từ cờ Việt Nam
- Animation: Nhiều hiệu ứng chuyển động mượt mà
- UX/UI: Giao diện trực quan, dễ sử dụng

## 📝 Cách thêm nội dung bài học

Mở file `src/pages/Learn.jsx` và chỉnh sửa mảng `sections`:

\`\`\`javascript
const sections = [
  {
    id: 1,
    title: 'Tiêu đề phần',
    icon: '📌',
    content: \`
      <h3 class="text-2xl font-bold mb-4">Tiêu đề</h3>
      <p class="mb-4">Nội dung của bạn ở đây...</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
        <p class="font-semibold">💡 Điểm nổi bật:</p>
        <ul class="list-disc ml-6 mt-2">
          <li>Điểm 1</li>
          <li>Điểm 2</li>
        </ul>
      </div>
    \`
  },
  // Thêm nhiều phần khác...
];
\`\`\`

## 🎮 Cách thêm câu hỏi Quiz

Mở file `src/pages/Quiz.jsx` và chỉnh sửa mảng `questions`:

\`\`\`javascript
const questions = [
  {
    question: 'Câu hỏi của bạn?',
    options: ['Đáp án A', 'Đáp án B', 'Đáp án C', 'Đáp án D'],
    correct: 1, // Index của đáp án đúng (0-3)
    explanation: 'Giải thích tại sao đáp án này đúng'
  },
  // Thêm nhiều câu hỏi khác...
];
\`\`\`

## 🛠️ Công nghệ sử dụng

- **React 18**: Thư viện UI hiện đại
- **React Router**: Điều hướng giữa các trang
- **Tailwind CSS**: Framework CSS utility-first
- **Vite**: Build tool cực nhanh
- **Lucide React**: Thư viện icon (đã cài sẵn nếu cần)

## 📦 Cấu trúc thư mục

\`\`\`
vietnam-economy/
├── src/
│   ├── pages/
│   │   ├── Home.jsx        # Trang chủ
│   │   ├── Learn.jsx       # Trang bài học
│   │   ├── Quiz.jsx        # Trang quiz
│   │   └── About.jsx       # Trang giới thiệu
│   ├── App.jsx             # Component chính với routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Tailwind CSS
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
\`\`\`

## 🎯 Các bước tiếp theo

1. ✅ Nền tảng website đã sẵn sàng
2. 📄 Thêm nội dung bài học từ Google Doc vào file `Learn.jsx`
3. ❓ Thêm câu hỏi quiz vào file `Quiz.jsx`
4. 🎨 Tùy chỉnh màu sắc, icon theo ý muốn
5. 🚀 Build và deploy khi hoàn thành

## 💻 Lệnh hữu ích

\`\`\`bash
# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview bản build
npm run preview
\`\`\`

## 🎨 Tùy chỉnh màu sắc

Mở `tailwind.config.js` để thay đổi theme, màu sắc, animation...

## ✏️ Sửa lỗi thường gặp

Nếu `npm run dev` không chạy, dùng:
\`\`\`bash
npx vite
\`\`\`

---

**Chúc bạn tạo website thành công! 🎉**
