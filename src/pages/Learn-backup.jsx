import React, { useState } from 'react';

function Learn() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      id: 1,
      title: 'Điểm Xuất Phát',
      content: `
        <h3 class="text-2xl font-bold mb-6 text-red-600">Điểm Xuất Phát: Thấp, Phức Tạp và Nhiều Hệ Lụy Lịch Sử</h3>
        
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-orange-500 p-6 mb-6 rounded-lg">
          <p class="text-lg text-gray-700 leading-relaxed">
            Việt Nam bước vào thời kỳ quá độ từ một <strong>nền kinh tế thuộc địa, nửa phong kiến</strong> với 
            những đặc điểm mang tính quyết định đến toàn bộ quá trình xây dựng chủ nghĩa xã hội.
          </p>
        </div>

        <div class="space-y-6">
          <div class="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-blue-700 mb-4">
              1. Xuất Phát Từ Xã Hội Thuộc Địa, Nửa Phong Kiến
            </h4>
            <div class="space-y-3 text-gray-700">
              <p>Việt Nam bước vào thời kỳ quá độ từ:</p>
              <ul class="space-y-2 ml-6">
                <li>Nền kinh tế mang đặc trưng <strong>nông nghiệp lạc hậu</strong>, sản xuất nhỏ là chủ yếu</li>
                <li><strong>Lực lượng sản xuất còn thấp kém</strong>, cơ sở vật chất — kỹ thuật nghèo nàn</li>
                <li>Giai cấp công nhân còn <strong>non yếu</strong>, tư sản dân tộc chưa phát triển đủ mạnh</li>
              </ul>
              <div class="bg-blue-50 p-4 rounded-lg mt-4">
                <p class="font-semibold text-blue-800">Hệ quả:</p>
                <p class="text-gray-700 mt-2">
                  Thời kỳ quá độ tất yếu phải <strong>kéo dài</strong>, vì Việt Nam không có 
                  <em>"bệ phóng công nghiệp tư bản"</em> như các nước phương Tây từng trải qua.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-purple-700 mb-4">
              2. Nhiều Hệ Lụy Từ Chiến Tranh
            </h4>
            <div class="space-y-3 text-gray-700">
              <p>Sau 30 năm chiến tranh liên miên (1945-1975):</p>
              <ul class="space-y-2 ml-6">
                <li>Cơ sở hạ tầng bị <strong>tàn phá nặng nề</strong></li>
                <li>Nguồn nhân lực <strong>tổn thất lớn</strong></li>
                <li>Kinh tế đình trệ, đời sống nhân dân <strong>khó khăn</strong></li>
              </ul>
            </div>
          </div>

          <div class="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-green-700 mb-4">
              3. Ý Nghĩa Lịch Sử
            </h4>
            <div class="space-y-3 text-gray-700">
              <p>Điểm xuất phát này có ý nghĩa quan trọng:</p>
              <ul class="space-y-2 ml-6">
                <li>Quyết định <strong>con đường đi</strong> của Việt Nam</li>
                <li>Đòi hỏi <strong>thời gian lâu dài</strong> để xây dựng CNXH</li>
                <li>Cần <strong>sự sáng tạo</strong> trong vận dụng lý luận Mác - Lênin vào thực tiễn Việt Nam</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-5 mt-6">
          <p class="font-bold text-yellow-900 mb-2">Kết Luận:</p>
          <p class="text-gray-800 leading-relaxed">
            Xuất phát điểm thấp, phức tạp nhưng đây chính là thực tế khách quan mà Việt Nam phải đối mặt. 
            Đây cũng chính là nền tảng để xác định con đường <em>"bỏ qua chế độ tư bản chủ nghĩa"</em> 
            đi thẳng lên chủ nghĩa xã hội.
          </p>
        </div>
      `
    },
    
    {
      id: 2,
      title: 'Bối Cảnh Thời Đại',
      content: `
        <h3 class="text-2xl font-bold mb-6 text-red-600">Bối Cảnh Thời Đại: Thuận Lợi và Khó Khăn Đan Xen</h3>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h4 class="text-xl font-bold text-green-700 mb-4">Thuận Lợi</h4>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Hòa bình thế giới, ổn định khu vực</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Cách mạng khoa học công nghệ phát triển mạnh mẽ</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Toàn cầu hóa, hợp tác quốc tế mở rộng</span>
              </li>
            </ul>
          </div>

          <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h4 class="text-xl font-bold text-red-700 mb-4">Thách Thức</h4>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Sự suy tàn của chủ nghĩa xã hội hiện thực</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Ch các thế lực thù địch</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Cạnh tranh gay gắt trong kinh tế toàn cầu</span>
              </li>
            </ul>
          </div>
        </div>

<div class="mt-6 bg-blue-50 p-6 rounded-lg">
          <h4 class="text-lg font-bold text-blue-800 mb-3">Cơ Hội Lớn: Cách Mạng Công Nghiệp 4.0</h4>
          <p class="text-gray-700 mb-4">
            Việt Nam có thể tận dụng các thành tựu của cách mạng công nghiệp 4.0 để:
          </p>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded-lg shadow">
              <p class="font-semibold text-blue-700 mb-2">Chuyển đổi số</p>
              <p class="text-sm text-gray-600">Áp dụng AI, Big Data, IOT vào sản xuất và quản lý</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <p class="font-semibold text-blue-700 mb-2">Rút ngắn khoảng cách</p>
              <p class="text-sm text-gray-600">Không cần trải qua toàn bộ công nghiệp hóa truyền thống</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <p class="font-semibold text-blue-700 mb-2">Hội nhập sâu</p>
              <p class="text-sm text-gray-600">Tham gia chuỗi giá trị toàn cầu, FDI chất lượng cao</p>
            </div>
          </div>
        </div>
      `
    },
    
    {
      id: 3,
      title: 'Ý Nghĩa "Bỏ Qua TBCN"',
      content: `
        <h3 class="text-2xl font-bold mb-6 text-red-600">Ý Nghĩa Của Việc "Bỏ Qua Chế Độ Tư Bản Chủ Nghĩa"</h3>

        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mb-6 border-l-4 border-blue-500">
          <p class="text-lg text-gray-700 leading-relaxed">
            <strong>Bỏ qua chế độ tư bản chủ nghĩa</strong> không có nghĩa là bỏ qua những thành tựu, 
            kinh nghiệm quý báu mà nhân loại đã tạo ra trong giai đoạn phát triển tư bản chủ nghĩa.
          </p>
        </div>

        <div class="space-y-6">
          <div class="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-md">
            <h4 class="text-xl font-bold text-green-700 mb-3">1. Bỏ Qua Chế Độ Chính Trị</h4>
            <p class="text-gray-700 mb-3">
              Không thiết lập chế độ <strong>độc tài giai cấp tư sản</strong>, mà xây dựng ngay 
              <strong>nhà nước pháp quyền xã hội chủ nghĩa</strong>.
            </p>
            <div class="bg-green-50 p-4 rounded-lg">
              <p class="font-semibold text-green-800 mb-2">Đặc điểm:</p>
              <ul class="space-y-1 ml-4">
                <li>Quyền lực thuộc về nhân dân</li>
                <li>Đảng Cộng sản lãnh đạo</li>
                <li>Dân chủ xã hội chủ nghĩa, không phải dân chủ tư sản</li>
              </ul>
            </div>
          </div>

          <div class="bg-white border-l-4 border-blue-500 p-6 rounded-r-lg shadow-md">
            <h4 class="text-xl font-bold text-blue-700 mb-3">2. Bỏ Qua Chế Độ Kinh Tế</h4>
            <p class="text-gray-700 mb-3">
              Không phát triển nền <strong>kế hoạch hóa tập trung bao cấp</strong>, 
              mà xây dựng <strong>nền kinh tế thị trường định hướng xã hội chủ nghĩa</strong>.
            </p>
            <div class="bg-blue-50 p-4 rounded-lg">
              <p class="font-semibold text-blue-800 mb-2">Nguyên tắc:</p>
              <ul class="space-y-1 ml-4">
                <li>Nhiều thành phần kinh tế cùng tồn tại và phát triển</li>
                <li>Kinh tế nhà nước giữ vai trò chủ đạo</li>
                <li>Thị trường là công cụ, không quyết định bản chất</li>
              </ul>
            </div>
          </div>

          <div class="bg-white border-l-4 border-purple-500 p-6 rounded-r-lg shadow-md">
            <h4 class="text-xl font-bold text-purple-700 mb-3">3. Tiếp Thu Thành Tựu</h4>
            <p class="text-gray-700 mb-3">
              Việt Nam <strong>học hỏi và vận dụng sáng tạo</strong> những thành tựu của nhân loại:
            </p>
            <div class="grid md:grid-cols-2 gap-3">
              <div class="bg-purple-50 p-3 rounded">
                <p class="font-semibold text-purple-800">Khoa học công nghệ</p>
                <p class="text-sm text-gray-600 mt-1">Công nghệ thông tin, tự động hóa, AI</p>
              </div>
              <div class="bg-purple-50 p-3 rounded">
                <p class="font-semibold text-purple-800">Quản trị kinh doanh</p>
                <p class="text-sm text-gray-600 mt-1">Mô hình công ty, thị trường chứng khoán</p>
              </div>
              <div class="bg-purple-50 p-3 rounded">
                <p class="font-semibold text-purple-800">Pháp luật hiện đại</p>
                <p class="text-sm text-gray-600 mt-1">Luật doanh nghiệp, sở hữu trí tuệ</p>
              </div>
              <div class="bg-purple-50 p-3 rounded">
                <p class="font-semibold text-purple-800">Hợi nhập quốc tế</p>
                <p class="text-sm text-gray-600 mt-1">WTO, CPTPP, EVFTA</p>
              </div>
            </div>
          </div>

          <div class="bg-white border-l-4 border-amber-500 p-6 rounded-r-lg shadow-md">
            <h4 class="text-xl font-bold text-amber-700 mb-3">4. Bản Chất Khác Biệt</h4>
            <div class="bg-amber-50 p-4 rounded-lg">
              <p class="text-gray-800 leading-relaxed">
                <strong>Điểm khác biệt căn bản:</strong> Cơ chế thị trường được sử dụng như một 
                <strong>công cụ</strong>, không quyết định <strong>bản chất chế độ</strong>. 
                Nhà nước và Đảng vẫn giữ vai trò lãnh đạo, định hướng phát triển theo mục tiêu xã hội chủ nghĩa.
              </p>
            </div>
          </div>
        </div>
      `
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
            Học Tập & Khám Phá
          </h1>
          <p className="text-xl text-gray-600">
            Tìm hiểu về con đường đi lên Chủ Nghĩa Xã Hội của Việt Nam
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold mb-6 text-blue-600">Nội Dung</h2>
              
              <nav className="space-y-3">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(index)}
                    className={`w-full text-left px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                      activeSection === index
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                    }`}
                  >
                    {index + 1}. {section.title}
                  </button>
                ))}
              </nav>
              
              {/* Progress Bar */}
              <div className="mt-8">
                <p className="text-sm text-gray-600 mb-2">
                  Tiến Độ: {activeSection + 1}/{sections.length}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${((activeSection + 1) / sections.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-10 animate-slide-up">
              <h2 className="text-4xl font-bold text-blue-600 mb-8">
                {sections[activeSection].title}
              </h2>
              
              <div 
                className="prose prose-lg max-w-none learn-page"
                dangerouslySetInnerHTML={{ __html: sections[activeSection].content }}
              />

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-10 pt-8 border-t-2 border-gray-200">
                <button
                  onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
                  disabled={activeSection === 0}
                  className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                    activeSection === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 shadow-lg'
                  }`}
                >
                  ← Trước
                </button>
                <button
                  onClick={() => setActiveSection(Math.min(sections.length - 1, activeSection + 1))}
                  disabled={activeSection === sections.length - 1}
                  className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                    activeSection === sections.length - 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 shadow-lg'
                  }`}
                >
                  Sau →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
