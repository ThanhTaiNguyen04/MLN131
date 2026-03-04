import React, { useState, useEffect } from 'react';

function Learn() {
  const [activeSection, setActiveSection] = useState(0);
  const [completedSections, setCompletedSections] = useState([]);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('mln131-progress');
    if (saved) {
      setCompletedSections(JSON.parse(saved));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    if (completedSections.length > 0) {
      localStorage.setItem('mln131-progress', JSON.stringify(completedSections));
      
      // Check if all sections completed
      if (completedSections.length === 4 && !showCompletionModal) {
        setTimeout(() => setShowCompletionModal(true), 500);
      }
    }
  }, [completedSections]);

  const markAsCompleted = (sectionId) => {
    if (!completedSections.includes(sectionId)) {
      setCompletedSections([...completedSections, sectionId]);
    }
  };

  const resetProgress = () => {
    setCompletedSections([]);
    localStorage.removeItem('mln131-progress');
    setShowCompletionModal(false);
  };

  const sections = [
    {
      id: 1,
      title: 'I. ĐẶC ĐIỂM QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI Ở VIỆT NAM',
      content: `
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-lg">
          <p class="text-lg text-gray-700 leading-relaxed">
            Quá trình quá độ lên chủ nghĩa xã hội ở Việt Nam mang đặc điểm <strong>đặc thù</strong>,
            xuất phát từ điểm khởi đầu thấp kém và diễn ra trong bối cảnh thời đại đầy biến động.
          </p>
        </div>

        <!-- Section 1: Điểm xuất phát -->
        <div class="mb-10">
          <div class="relative bg-white border-l-8 border-blue-600 shadow-xl rounded-lg p-6 mb-6 hover:shadow-2xl transition-all">
            <h4 class="text-2xl font-bold text-blue-800 mb-4">
              1. Điểm xuất phát: thấp, phức tạp và nhiều hệ lụy lịch sử
            </h4>
          </div>

          <!-- Hình ảnh minh họa -->
          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div class="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1555883005-5f3c51aca2d3?w=800&q=80" 
                alt="Nông nghiệp truyền thống Việt Nam"
                class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p class="text-white font-semibold">Nền nông nghiệp lạc hậu - điểm xuất phát</p>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80" 
                alt="Khắc phục hậu quả chiến tranh"
                class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p class="text-white font-semibold">Khắc phục hậu quả chiến tranh</p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h5 class="text-xl font-bold text-blue-700 mb-4">
                a. Xuất phát từ xã hội thuộc địa, nửa phong kiến
              </h5>
              <div class="space-y-3 text-gray-700">
                <p class="leading-relaxed">
                  Việt Nam bước vào thời kỳ quá độ từ một nền kinh tế mang đặc trưng <strong>nông nghiệp lạc hậu</strong>,
                  sản xuất nhỏ là chủ yếu; lực lượng sản xuất còn thấp kém, cơ sở vật chất — kỹ thuật nghèo nàn;
                  giai cấp công nhân còn non yếu, tư sản dân tộc chưa phát triển đủ mạnh.
                </p>
                <div class="bg-blue-50 p-4 rounded-lg mt-4">
                  <p class="font-semibold text-blue-800">Hệ quả:</p>
                  <p class="text-gray-700 mt-2">
                    Điều này khiến thời kỳ quá độ tất yếu phải <strong>kéo dài</strong>, vì Việt Nam không có 
                    <em>bệ phóng công nghiệp tư bản</em> như các nước phương Tây từng trải qua.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white border-2 border-red-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h5 class="text-xl font-bold text-red-700 mb-4">
                b. Hậu quả nặng nề của chiến tranh
              </h5>
              <div class="space-y-3 text-gray-700">
                <p class="leading-relaxed">
                  Hàng chục năm chiến tranh liên tiếp đã để lại những hệ lụy sâu sắc:
                </p>
                <ul class="space-y-2 ml-6">
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2 mt-1">•</span>
                    <span>Hạ tầng kinh tế bị <strong>tàn phá</strong></span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2 mt-1">•</span>
                    <span>Nguồn nhân lực <strong>tổn thất lớn</strong></span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2 mt-1">•</span>
                    <span>Môi trường xã hội chịu nhiều <strong>biến động</strong></span>
                  </li>
                </ul>
                <div class="bg-red-50 p-4 rounded-lg mt-4">
                  <p class="leading-relaxed">
                    Vì vậy, nhiệm vụ của thời kỳ quá độ không chỉ là xây dựng mà còn phải đồng thời 
                    <strong>khôi phục và hàn gắn</strong> những tổn thất do chiến tranh để lại.
                  </p>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg mt-4 border-l-4 border-gray-400">
                  <p class="text-sm italic text-gray-600 mb-2">
                    <strong>Tư liệu điện ảnh:</strong> Bộ phim <em>Mưa đỏ</em> là một trong những tác phẩm tái hiện 
                    chân thực sự tàn khốc của chiến tranh, cho thấy mức độ tàn phá mà Việt Nam phải gánh chịu.
                  </p>
                  <p class="text-sm text-gray-600">
                    <strong>Tư liệu tham khảo:</strong> Bảo tàng Chứng tích Chiến tranh (baotangchungtichchientranh.vn), 
                    Bảo tàng Lịch sử Quân sự Việt Nam (baotanglichsuquansu.vn).
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white border-2 border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h5 class="text-xl font-bold text-purple-700 mb-4">
                c. Tàn dư thực dân — phong kiến và sự chống phá từ bên ngoài
              </h5>
              <div class="space-y-3 text-gray-700">
                <p class="leading-relaxed">
                  Tư duy sản xuất nhỏ và tâm lý tiểu nông vẫn còn tồn tại dai dẳng trong xã hội. 
                  Những tàn dư về văn hóa, phương thức quản lý và thói quen xã hội cũ chưa thể xóa bỏ ngay. 
                  Bên cạnh đó, các thế lực thù địch không ngừng tìm cách can thiệp, gây bất ổn.
                </p>
                <div class="bg-purple-50 p-4 rounded-lg mt-4">
                  <p class="font-semibold text-purple-800 mb-2">Thực tế:</p>
                  <p class="text-gray-700">
                    Quá trình quá độ ở Việt Nam mang tính vừa <strong>xây dựng</strong>, vừa 
                    <strong>đấu tranh bảo vệ</strong> thành quả cách mạng.
                  </p>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg mt-4 border-l-4 border-gray-400">
                  <p class="text-sm text-gray-600 mb-2">
                    <strong>Tư liệu văn học:</strong> <em>Tắt đèn</em> (Ngô Tất Tố) — phê phán sưu cao thuế nặng; 
                    <em>Chí Phèo</em> (Nam Cao) — khắc họa sự tha hóa con người trong xã hội nửa phong kiến; 
                    <em>Số phận con người</em> (Nam Cao) — phản ánh thất bại của người trí thức trước tàn dư phong kiến.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 2: Bối cảnh thời đại -->
        <div class="mb-10">
          <div class="relative bg-white border-l-8 border-green-600 shadow-xl rounded-lg p-6 mb-6 hover:shadow-2xl transition-all">
            <h4 class="text-2xl font-bold text-green-800 mb-4">
              2. Bối cảnh thời đại: thuận lợi và khó khăn đan xen
            </h4>
          </div>

          <!-- Hình ảnh minh họa bối cảnh -->
          <div class="grid md:grid-cols-3 gap-4 mb-6">
            <div class="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" 
                alt="Toàn cầu hóa"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/80 to-transparent p-3">
                <p class="text-white font-semibold text-sm">Toàn cầu hóa</p>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=800&q=80" 
                alt="Cách mạng 4.0"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/80 to-transparent p-3">
                <p class="text-white font-semibold text-sm">Cách mạng 4.0</p>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
                alt="Hội nhập quốc tế"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/80 to-transparent p-3">
                <p class="text-white font-semibold text-sm">Hội nhập quốc tế</p>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <div class="bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-300 rounded-xl p-6 shadow-lg">
              <h5 class="text-xl font-bold text-green-800 mb-4">
                a. Những thuận lợi cơ bản
              </h5>
              <div class="space-y-4 text-gray-700">
                <p class="leading-relaxed">
                  Cuộc cách mạng khoa học — công nghệ hiện đại mở ra cơ hội <strong>rút ngắn</strong> quá trình công nghiệp hóa. 
                  Toàn cầu hóa giúp mở rộng thị trường, thu hút vốn và tiếp cận tri thức nhân loại. 
                  Hợp tác quốc tế đa phương tạo điều kiện thuận lợi để Việt Nam hội nhập sâu rộng.
                </p>
                <div class="bg-white p-4 rounded-lg">
                  <p class="font-semibold text-green-700 mb-2">Chiến lược "đi tắt đón đầu":</p>
                  <p class="text-sm text-gray-600 mb-3">
                    Không lặp lại con đường phát triển tuần tự kéo dài của các nước phương Tây.
                  </p>
                  <ul class="space-y-2 ml-4 text-sm">
                    <li class="flex items-start">
                      <span class="text-green-600 font-bold mr-2">►</span>
                      <span><strong>Viễn thông:</strong> Chuyển thẳng sang mạng di động 4G/5G (Viettel)</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-600 font-bold mr-2">►</span>
                      <span><strong>Công nghiệp:</strong> Thu hút Samsung, Intel vào chuỗi cung ứng toàn cầu</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-600 font-bold mr-2">►</span>
                      <span><strong>Thanh toán:</strong> Bước thẳng vào ví điện tử, QR code</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-600 font-bold mr-2">►</span>
                      <span><strong>Hội nhập:</strong> WTO (2007), CPTPP, EVFTA</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300 rounded-xl p-6 shadow-lg">
              <h5 class="text-xl font-bold text-orange-800 mb-4">
                b. Những khó khăn và thách thức
              </h5>
              <div class="space-y-4 text-gray-700">
                <p class="leading-relaxed">
                  Bên cạnh những thuận lợi, bối cảnh thời đại cũng đặt ra nhiều thách thức không nhỏ:
                </p>
                <ul class="space-y-3 ml-4">
                  <li class="flex items-start">
                    <span class="text-orange-600 font-bold mr-2 mt-1">•</span>
                    <span><strong>Cạnh tranh quốc tế:</strong> Doanh nghiệp phải đối đầu tập đoàn đa quốc gia; 
                    nông sản bị áp tiêu chuẩn khắt khe; kiện chống bán phá giá (thép, thủy sản, gỗ)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-orange-600 font-bold mr-2 mt-1">•</span>
                    <span><strong>Địa chính trị:</strong> Tranh chấp Biển Đông, áp lực từ cạnh tranh cường quốc</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-orange-600 font-bold mr-2 mt-1">•</span>
                    <span><strong>An ninh phi truyền thống:</strong> Thông tin sai lệch trên mạng xã hội, 
                    biến động chuỗi cung ứng, giá năng lượng (COVID-19, xung đột Nga-Ukraine)</span>
                  </li>
                </ul>
                <div class="bg-orange-50 p-4 rounded-lg mt-4 border-l-4 border-orange-500">
                  <p class="font-semibold text-orange-800">Bài học:</p>
                  <p class="text-gray-700 mt-2">
                    Thực tế thế giới cho thấy xu thế phát triển <strong>không tuyến tính</strong>: 
                    không có một con đường duy nhất, tất yếu cho tất cả các quốc gia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    
    {
      id: 2,
      title: 'II. NHẬN THỨC CỦA ĐẢNG VỀ CON ĐƯỜNG "BỎ QUA CHẾ ĐỘ TƯ BẢN CHỦ NGHĨA"',
      content: `
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 mb-8 rounded-lg">
          <p class="text-lg text-gray-700 leading-relaxed">
            "Bỏ qua" chế độ tư bản chủ nghĩa không phải là lựa chọn cảm tính, mà xuất phát từ 
            <strong>quy luật vận động tất yếu</strong> của cách mạng Việt Nam.
          </p>
        </div>

        <div class="space-y-6">
          <div class="bg-white border-2 border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-purple-700 mb-4">
              1. Đây là con đường cách mạng tất yếu khách quan
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                "Bỏ qua" chế độ tư bản chủ nghĩa không phải là lựa chọn cảm tính, mà xuất phát từ 
                quy luật vận động tất yếu của cách mạng Việt Nam. Việt Nam giành độc lập dưới sự lãnh đạo 
                của <strong>giai cấp công nhân</strong> thông qua Đảng Cộng sản — không phải giai cấp tư sản.
              </p>
              <div class="bg-purple-50 p-4 rounded-lg">
                <p class="font-semibold text-purple-800 mb-2">Lịch sử khẳng định:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">▪</span>
                    <span>Từ khi thành lập năm <strong>1930</strong>, Đảng xác định: hoàn thành cách mạng dân tộc dân chủ để tiến lên chủ nghĩa xã hội</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">▪</span>
                    <span>Hồ Chí Minh khẳng định: <em>"Độc lập dân tộc phải gắn liền với chủ nghĩa xã hội"</em></span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">▪</span>
                    <span>Giai cấp tư sản dân tộc trước 1945 còn <strong>yếu ớt</strong>, lệ thuộc thực dân Pháp</span>
                  </li>
                </ul>
              </div>
              <p class="text-sm italic text-gray-600 mt-4">
                Cương lĩnh 1991 và Cương lĩnh 2011 đều khẳng định con đường này.
              </p>
            </div>
          </div>

          <div class="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-blue-700 mb-4">
              2. Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất tư bản chủ nghĩa
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Nội dung cốt lõi của "bỏ qua" không phải là xóa bỏ hoàn toàn các yếu tố kinh tế thị trường, 
                mà là <strong>không để quan hệ sản xuất tư bản chủ nghĩa trở thành nền tảng chi phối toàn xã hội</strong>.
              </p>
              <div class="bg-blue-50 p-4 rounded-lg">
                <p class="font-semibold text-blue-800 mb-3">Hiến pháp 2013 quy định:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">✓</span>
                    <span><strong>Điều 53:</strong> Đất đai thuộc sở hữu toàn dân do Nhà nước đại diện quản lý</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">✓</span>
                    <span><strong>Điều 51:</strong> Kinh tế nhà nước giữ vai trò chủ đạo trong nền kinh tế nhiều thành phần</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">✓</span>
                    <span><strong>Điều 4:</strong> Nhà nước pháp quyền XHCN do nhân dân, vì nhân dân, đặt dưới sự lãnh đạo của Đảng</span>
                  </li>
                </ul>
              </div>
              <p class="text-sm text-gray-600 mt-4">
                Trong thực tế, các lĩnh vực then chốt như <strong>quốc phòng, an ninh, năng lượng và tài chính</strong> 
                vẫn do Nhà nước kiểm soát.
              </p>
            </div>
          </div>

          <div class="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-green-700 mb-4">
              3. Tiếp thu và kế thừa thành tựu của chủ nghĩa tư bản
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Nếu chỉ "bỏ qua" mà không "kế thừa", xã hội sẽ tự cô lập khỏi dòng chảy tiến bộ của nhân loại. 
                Vì vậy, Đảng xác định rõ: <strong>tiếp thu khoa học — công nghệ hiện đại, học hỏi phương thức quản lý 
                tiên tiến và tận dụng thành tựu của toàn cầu hóa</strong>.
              </p>
              <div class="grid md:grid-cols-2 gap-4 mt-4">
                <div class="bg-green-50 p-4 rounded-lg">
                  <p class="font-semibold text-green-800 mb-2">Tiếp thu công nghệ:</p>
                  <ul class="space-y-1 text-sm ml-4">
                    <li class="flex items-start">
                      <span class="text-green-600 mr-2">•</span>
                      <span>Thu hút Samsung Electronics và Intel</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-600 mr-2">•</span>
                      <span>Chuyển đổi số quốc gia</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-600 mr-2">•</span>
                      <span>Phát triển hạ tầng 5G</span>
                    </li>
                  </ul>
                </div>
                <div class="bg-green-50 p-4 rounded-lg">
                  <p class="font-semibold text-green-800 mb-2">Học hỏi quản lý:</p>
                  <ul class="space-y-1 text-sm ml-4">
                    <li class="flex items-start">
                      <span class="text-green-600 mr-2">•</span>
                      <span>Công ty cổ phần</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-600 mr-2">•</span>
                      <span>Thị trường chứng khoán</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-600 mr-2">•</span>
                      <span>Cải cách hành chính minh bạch</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="bg-green-100 p-4 rounded-lg mt-4 border-l-4 border-green-600">
                <p class="font-semibold text-green-900">Nguyên tắc:</p>
                <p class="text-gray-800 mt-2">
                  Cơ chế thị trường được sử dụng như một <strong>công cụ</strong>, 
                  không để nó quyết định bản chất chế độ.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-orange-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-orange-700 mb-4">
              4. Là sự biến đổi toàn diện, lâu dài và phức tạp
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Quá độ lên chủ nghĩa xã hội không diễn ra trong một sớm một chiều. 
                Từ năm <strong>1975</strong> đến nay, Việt Nam vẫn trong thời kỳ quá độ và 
                chưa tuyên bố hoàn thành xây dựng chủ nghĩa xã hội.
              </p>
              <div class="bg-orange-50 p-4 rounded-lg">
                <p class="font-semibold text-orange-800 mb-3">Sự biến đổi diễn ra trên tất cả các lĩnh vực:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-orange-600 font-bold mr-2">►</span>
                    <span><strong>Kinh tế:</strong> Từ kế hoạch hóa tập trung → Kinh tế thị trường định hướng XHCN (Đổi mới 1986)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-orange-600 font-bold mr-2">►</span>
                    <span><strong>Chính trị:</strong> Xây dựng Nhà nước pháp quyền XHCN</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-orange-600 font-bold mr-2">►</span>
                    <span><strong>Văn hóa - Xã hội:</strong> Mở rộng giáo dục và phổ cập y tế</span>
                  </li>
                </ul>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg mt-4 border-l-4 border-yellow-500">
                <p class="font-semibold text-yellow-900 mb-2">Đặc điểm thời kỳ quá độ:</p>
                <p class="text-gray-800">
                  Nhiều hình thức sở hữu và nhiều thành phần kinh tế cùng tồn tại. 
                  Quan hệ thuê mướn lao động và chênh lệch thu nhập vẫn còn, song Nhà nước điều tiết 
                  thông qua chính sách an sinh xã hội nhằm hướng tới công bằng. 
                  <strong>Cái mới chưa hoàn toàn thay thế cái cũ</strong> — xã hội vận động trong trạng thái đan xen.
                </p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    
    {
      id: 3,
      title: 'III. NHỮNG ĐẶC TRƯNG BẢN CHẤT CỦA CHỦ NGHĨA XÃ HỘI Ở VIỆT NAM',
      content: `
        <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 mb-8 rounded-lg">
          <p class="text-lg text-gray-700 leading-relaxed">
            Trải qua quá trình đổi mới, nhận thức của Đảng về chủ nghĩa xã hội ngày càng sáng tỏ. 
            Từ <strong>6 đặc trưng</strong> trong Cương lĩnh năm 1991, đến Cương lĩnh bổ sung, phát triển năm 2011, 
            Đảng đã hoàn thiện mô hình chủ nghĩa xã hội ở Việt Nam với <strong>8 đặc trưng cơ bản</strong>.
          </p>
        </div>

        <div class="space-y-6">
          <div class="bg-white border-2 border-red-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-red-700 mb-4">
              1. Dân giàu, nước mạnh, dân chủ, công bằng, văn minh
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Đây là <strong>mục tiêu tổng quát</strong> — sự kết tinh giữa mục tiêu kinh tế, chính trị và giá trị nhân văn của chế độ.
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-red-50 p-4 rounded-lg">
                  <p class="font-semibold text-red-800 mb-2">Dân giàu + Nước mạnh:</p>
                  <ul class="space-y-1 text-sm ml-4">
                    <li class="flex items-start">
                      <span class="text-red-600 mr-2">•</span>
                      <span>Từ nhóm nước nghèo → thu nhập trung bình</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-red-600 mr-2">•</span>
                      <span>Tỷ lệ hộ nghèo giảm mạnh</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-red-600 mr-2">•</span>
                      <span>Vị thế quốc tế nâng cao</span>
                    </li>
                  </ul>
                </div>
                <div class="bg-red-50 p-4 rounded-lg">
                  <p class="font-semibold text-red-800 mb-2">Dân chủ + Công bằng + Văn minh:</p>
                  <ul class="space-y-1 text-sm ml-4">
                    <li class="flex items-start">
                      <span class="text-red-600 mr-2">•</span>
                      <span>Bầu cử định kỳ, góp ý dự thảo luật</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-red-600 mr-2">•</span>
                      <span>Thuế lũy tiến, hỗ trợ vùng sâu vùng xa</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-red-600 mr-2">•</span>
                      <span>Cam kết phát thải ròng về 0 năm 2050</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-blue-700 mb-4">
              2. Do nhân dân làm chủ
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Bản chất của chủ nghĩa xã hội là xóa bỏ áp bức bóc lột và trao quyền làm chủ thực sự cho nhân dân lao động. 
                Hiến pháp 2013 khẳng định quyền lực nhà nước thuộc về nhân dân, thực hiện thông qua cả <strong>dân chủ trực tiếp</strong> 
                lẫn <strong>dân chủ đại diện</strong> (Điều 6).
              </p>
              <div class="bg-blue-50 p-4 rounded-lg">
                <p class="font-semibold text-blue-800 mb-3">Cơ chế giám sát quyền lực:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">1.</span>
                    <span><strong>Quốc hội:</strong> Chất vấn Thủ tướng và Bộ trưởng tại kỳ họp</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">2.</span>
                    <span><strong>Thanh tra nhân dân:</strong> Hoạt động tại xã, phường, đơn vị sự nghiệp</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">3.</span>
                    <span><strong>Tiếp công dân:</strong> Giải quyết khiếu nại, tố cáo</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">4.</span>
                    <span><strong>Mặt trận Tổ quốc:</strong> Phản biện xã hội đối với dự thảo chính sách</span>
                  </li>
                </ul>
              </div>
              <p class="text-sm italic text-gray-600 mt-4">
                Nguyên tắc: <strong>"Dân biết, dân bàn, dân làm, dân kiểm tra"</strong>
              </p>
            </div>
          </div>

          <div class="bg-white border-2 border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-purple-700 mb-4">
              3. Nền kinh tế phát triển cao, lực lượng sản xuất hiện đại, quan hệ sản xuất phù hợp
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Chủ nghĩa xã hội không phải là <em>"chia đều cái nghèo"</em> mà phải tạo ra <strong>của cải dồi dào</strong> 
                trên nền tảng lực lượng sản xuất hiện đại.
              </p>
              <div class="bg-purple-50 p-4 rounded-lg">
                <p class="font-semibold text-purple-800 mb-3">Thực tiễn sau Đổi mới:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">►</span>
                    <span>Cơ cấu kinh tế chuyển dịch: Nông nghiệp → Công nghiệp và Dịch vụ</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">►</span>
                    <span>Điện thoại và linh kiện điện tử: nhóm xuất khẩu hàng đầu</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">►</span>
                    <span>Chuyển đổi số quốc gia, hạ tầng 5G, kinh tế số</span>
                  </li>
                </ul>
              </div>
              <div class="bg-purple-100 p-4 rounded-lg mt-4 border-l-4 border-purple-600">
                <p class="font-semibold text-purple-900">Bài học Đổi mới:</p>
                <p class="text-gray-800 mt-2">
                  Khi cơ chế bao cấp bị xóa bỏ và kinh tế tư nhân được thừa nhận, <strong>lực lượng sản xuất được giải phóng</strong> 
                  — chứng minh tính tất yếu của mô hình kinh tế thị trường định hướng xã hội chủ nghĩa.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-orange-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-orange-700 mb-4">
              4. Nền văn hóa tiên tiến, đậm đà bản sắc dân tộc
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Văn hóa là nền tảng tinh thần của xã hội. <strong>"Tiên tiến"</strong> là tiếp nhận những giá trị phổ quát của nhân loại, 
                còn <strong>"đậm đà bản sắc dân tộc"</strong> là giữ gìn truyền thống trong quá trình hiện đại hóa.
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-orange-50 p-4 rounded-lg">
                  <p class="font-semibold text-orange-800 mb-2">Di sản UNESCO:</p>
                  <ul class="space-y-1 text-sm ml-4">
                    <li class="flex items-start">
                      <span class="text-orange-600 mr-2">•</span>
                      <span>Nhã nhạc cung đình Huế</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-orange-600 mr-2">•</span>
                      <span>Dân ca quan họ Bắc Ninh</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-orange-600 mr-2">•</span>
                      <span>Tín ngưỡng thờ cúng Hùng Vương</span>
                    </li>
                  </ul>
                </div>
                <div class="bg-orange-50 p-4 rounded-lg">
                  <p class="font-semibold text-orange-800 mb-2">Bảo tồn bản sắc:</p>
                  <ul class="space-y-1 text-sm ml-4">
                    <li class="flex items-start">
                      <span class="text-orange-600 mr-2">•</span>
                      <span>Tiếng Việt là ngôn ngữ thống nhất</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-orange-600 mr-2">•</span>
                      <span>Tết Nguyên đán và lễ hội truyền thống</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-orange-600 mr-2">•</span>
                      <span>Phát triển công nghiệp văn hóa</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p class="text-sm italic text-gray-600 mt-4">
                Nền văn hóa Việt Nam phát triển như <em>cây tre</em>: rễ bám sâu vào đất truyền thống, thân vươn cao trong dòng chảy toàn cầu.
              </p>
            </div>
          </div>

          <div class="bg-white border-2 border-teal-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-teal-700 mb-4">
              5. Con người có cuộc sống ấm no, tự do, hạnh phúc, phát triển toàn diện
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Con người vừa là <strong>mục tiêu</strong> vừa là <strong>động lực</strong> của chủ nghĩa xã hội.
              </p>
              <div class="bg-teal-50 p-4 rounded-lg">
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-teal-600 font-bold mr-2">✓</span>
                    <span><strong>Ấm no:</strong> Bảo hiểm y tế toàn dân, chương trình giảm nghèo bền vững</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-teal-600 font-bold mr-2">✓</span>
                    <span><strong>Tự do:</strong> Quyền tín ngưỡng, kinh doanh, học tập, sáng tạo (Hiến pháp 2013)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-teal-600 font-bold mr-2">✓</span>
                    <span><strong>Hạnh phúc:</strong> An toàn, gắn kết cộng đồng, đời sống tinh thần phong phú</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-teal-600 font-bold mr-2">✓</span>
                    <span><strong>Phát triển toàn diện:</strong> Phổ cập giáo dục, mạng lưới y tế, nâng cao tuổi thọ</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-indigo-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-indigo-700 mb-4">
              6. Các dân tộc bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Việt Nam là cộng đồng của <strong>54 dân tộc anh em</strong>. 
                Hiến pháp 2013 khẳng định các dân tộc bình đẳng về quyền và nghĩa vụ, 
                nghiêm cấm mọi hành vi kỳ thị và chia rẽ dân tộc.
              </p>
              <div class="bg-indigo-50 p-4 rounded-lg">
                <p class="font-semibold text-indigo-800 mb-3">Nguyên tắc "giúp nhau cùng phát triển":</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-indigo-600 font-bold mr-2">•</span>
                    <span>Chương trình mục tiêu quốc gia phát triển vùng đồng bào dân tộc thiểu số</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-indigo-600 font-bold mr-2">•</span>
                    <span>Đầu tư hạ tầng vùng sâu vùng xa</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-indigo-600 font-bold mr-2">•</span>
                    <span>Chính sách học bổng cho học sinh dân tộc thiểu số</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-indigo-600 font-bold mr-2">•</span>
                    <span>Bảo tồn tiếng nói, chữ viết và di sản văn hóa các dân tộc</span>
                  </li>
                </ul>
              </div>
              <p class="text-sm italic text-gray-600 mt-4">
                Đa dạng văn hóa là <strong>tài sản quốc gia</strong>, không phải trở ngại phát triển.
              </p>
            </div>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-red-700 mb-4">
              7. Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân, do Đảng Cộng sản lãnh đạo
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Nhà nước pháp quyền xã hội chủ nghĩa là trụ cột tổ chức quyền lực: 
                quyền lực không đứng trên pháp luật mà được <strong>đặt vào khuôn khổ pháp luật</strong> 
                và chịu sự giám sát của nhân dân.
              </p>
              <div class="bg-red-50 p-4 rounded-lg">
                <p class="font-semibold text-red-800 mb-3">Đặc điểm:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">1.</span>
                    <span>Hiến pháp 2013 dành một chương riêng quy định <strong>quyền con người và quyền công dân</strong></span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">2.</span>
                    <span>Việt Nam tham gia nhiều công ước quốc tế về quyền con người (LHQ)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">3.</span>
                    <span>Quyền lực bắt nguồn từ <strong>bầu cử</strong>; nhân dân giám sát pháp luật</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">4.</span>
                    <span>Sự lãnh đạo của Đảng định hướng xây dựng pháp luật theo mục tiêu XHCN</span>
                  </li>
                </ul>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg mt-4 border-l-4 border-red-500">
                <p class="font-semibold text-red-900">Điểm khác biệt:</p>
                <p class="text-gray-800 mt-2">
                  Sự lãnh đạo của Đảng Cộng sản không thay thế pháp luật mà định hướng xây dựng pháp luật 
                  theo mục tiêu xã hội chủ nghĩa — điểm khác biệt căn bản so với mô hình nhà nước pháp quyền tư sản.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-blue-700 mb-4">
              8. Quan hệ hữu nghị và hợp tác với các nước trên thế giới
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Chủ nghĩa xã hội Việt Nam không khép kín. Đường lối đối ngoại nhất quán là 
                <strong>độc lập, tự chủ, hòa bình, hữu nghị và hợp tác cùng có lợi</strong>.
              </p>
              <div class="bg-blue-50 p-4 rounded-lg">
                <p class="font-semibold text-blue-800 mb-3">Thực tiễn hội nhập:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">►</span>
                    <span>Thành viên tích cực của <strong>Liên Hợp Quốc</strong></span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">►</span>
                    <span>Ủy viên không thường trực <strong>Hội đồng Bảo an</strong></span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">►</span>
                    <span>Tham gia lực lượng <strong>gìn giữ hòa bình quốc tế</strong></span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">►</span>
                    <span>ASEAN, WTO, APEC, CPTPP, EVFTA</span>
                  </li>
                </ul>
              </div>
              <div class="bg-blue-100 p-4 rounded-lg mt-4 border-l-4 border-blue-600">
                <p class="font-semibold text-blue-900">Nguyên tắc:</p>
                <p class="text-gray-800 mt-2">
                  Hội nhập quốc tế là đòn bẩy để thu hút vốn đầu tư, tiếp thu khoa học — công nghệ và nâng cao vị thế quốc gia, 
                  song Việt Nam kiên định <strong>không lệ thuộc</strong> vào bất kỳ cường quốc nào.
                </p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    
    {
      id: 4,
      title: 'IV. CÁC PHƯƠNG HƯỚNG XÂY DỰNG CHỦ NGHĨA XÃ HỘI Ở VIỆT NAM HIỆN NAY',
      content: `
        <div class="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-6 mb-8 rounded-lg">
          <p class="text-lg text-gray-700 leading-relaxed">
            Nếu <strong>tám đặc trưng</strong> xác định bản chất và hình ảnh của xã hội xã hội chủ nghĩa Việt Nam, 
            thì <strong>tám phương hướng</strong> chỉ ra con đường hiện thực hóa mô hình đó. 
            Chúng gắn kết như <em>mục tiêu và phương tiện, lý tưởng và hành động</em>.
          </p>
        </div>

        <div class="space-y-6">
          <div class="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-green-700 mb-4">
              1. Đẩy mạnh công nghiệp hóa, hiện đại hóa gắn với kinh tế tri thức và bảo vệ môi trường
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Đây là điều kiện vật chất quyết định để xây dựng chủ nghĩa xã hội. 
                Từ sau Đổi mới, cơ cấu kinh tế chuyển dịch mạnh từ nông nghiệp sang công nghiệp và dịch vụ giá trị cao; 
                Việt Nam tham gia chuỗi cung ứng toàn cầu và hình thành các khu công nghệ cao.
              </p>
              <div class="bg-green-50 p-4 rounded-lg">
                <p class="font-semibold text-green-800 mb-3">Công nghiệp hóa gắn với kinh tế tri thức:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-green-600 font-bold mr-2">•</span>
                    <span>Chuyển đổi số quốc gia</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-600 font-bold mr-2">•</span>
                    <span>Phát triển thương mại điện tử</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-600 font-bold mr-2">•</span>
                    <span>Khuyến khích khởi nghiệp đổi mới sáng tạo</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-600 font-bold mr-2">•</span>
                    <span>Viettel đầu tư nghiên cứu thiết bị 5G</span>
                  </li>
                </ul>
              </div>
              <div class="bg-green-100 p-4 rounded-lg mt-4 border-l-4 border-green-600">
                <p class="font-semibold text-green-900">Cam kết môi trường:</p>
                <p class="text-gray-800 mt-2">
                  Phát triển không thể đánh đổi môi trường: Việt Nam cam kết tại <strong>COP26</strong> 
                  đạt mức <strong>phát thải ròng bằng 0 vào năm 2050</strong>, đồng thời thúc đẩy năng lượng tái tạo 
                  theo định hướng tăng trưởng xanh và bền vững.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-blue-700 mb-4">
              2. Phát triển kinh tế thị trường định hướng xã hội chủ nghĩa
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Việt Nam vận dụng cơ chế thị trường nhưng đặt dưới sự <strong>quản lý của Nhà nước</strong> 
                và <strong>định hướng xã hội chủ nghĩa</strong>. 
                Thị trường tạo năng lượng cạnh tranh; Nhà nước điều tiết thông qua pháp luật, chính sách tài khóa 
                và tiền tệ để bảo đảm an sinh và định hướng phát triển dài hạn.
              </p>
              <div class="bg-blue-50 p-4 rounded-lg">
                <p class="font-semibold text-blue-800 mb-3">Kinh tế nhà nước giữ vai trò chủ đạo:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">►</span>
                    <span>Nắm giữ các lĩnh vực then chốt: năng lượng, tài chính, hạ tầng</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">►</span>
                    <span>PetroVietnam (dầu khí quốc gia)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-2">►</span>
                    <span>EVN (điện lực Việt Nam)</span>
                  </li>
                </ul>
              </div>
              <div class="bg-blue-100 p-4 rounded-lg mt-4 border-l-4 border-blue-600">
                <p class="font-semibold text-blue-900 mb-2">Định hướng xã hội chủ nghĩa:</p>
                <p class="text-gray-800">
                  Tăng trưởng gắn với <strong>tiến bộ và công bằng xã hội</strong>: 
                  thị trường tạo ra của cải, Nhà nước định hướng phân phối thông qua chính sách thuế và phúc lợi 
                  để hạn chế bất bình đẳng cực đoan.
                </p>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg mt-4 border-2 border-yellow-300">
                <p class="font-semibold text-yellow-900 mb-2">Phân biệt với kinh tế hỗn hợp tư bản:</p>
                <p class="text-gray-800 text-sm mb-3">
                  Điểm khác biệt căn bản so với kinh tế hỗn hợp ở các nước tư bản (như mô hình Bắc Âu hay kinh tế xã hội thị trường của Đức):
                </p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-yellow-700 font-bold mr-2">1.</span>
                    <span><strong>Về sở hữu:</strong> Đất đai và tài nguyên chiến lược thuộc sở hữu toàn dân, không thể tư nhân hóa</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-yellow-700 font-bold mr-2">2.</span>
                    <span><strong>Về quyền lực:</strong> Nhà nước trực tiếp tham gia sản xuất và phân bổ nguồn lực (kinh tế nhà nước chủ đạo)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-yellow-700 font-bold mr-2">3.</span>
                    <span><strong>Về mục tiêu:</strong> Không dừng lại ở phúc lợi xã hội, mà hướng tới xóa bỏ dần quan hệ bóc lột</span>
                  </li>
                </ul>
                <p class="text-gray-700 text-sm mt-3 italic">
                  → Thị trường là <strong>công cụ</strong>, không quyết định bản chất chế độ.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-purple-700 mb-4">
              3. Xây dựng văn hóa, con người và nâng cao đời sống nhân dân
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Phương hướng này đặt <strong>con người vào trung tâm</strong> của phát triển. 
                Kinh tế là nền móng, nhưng văn hóa và con người mới là linh hồn.
              </p>
              <div class="bg-purple-50 p-4 rounded-lg">
                <p class="font-semibold text-purple-800 mb-3">Các văn kiện Đại hội Đảng khẳng định:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">•</span>
                    <span>Phát triển kinh tế đi đôi với <strong>tiến bộ và công bằng xã hội</strong> ngay trong từng bước</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">•</span>
                    <span><strong>Giáo dục</strong> là quốc sách hàng đầu</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">•</span>
                    <span><strong>Khoa học — công nghệ</strong> là động lực phát triển</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">•</span>
                    <span><strong>Bảo hiểm y tế</strong> bao phủ phần lớn dân số</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-600 font-bold mr-2">•</span>
                    <span>Bảo tồn di sản, phát triển công nghiệp văn hóa</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-red-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-red-700 mb-4">
              4. Bảo đảm quốc phòng và an ninh
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Giữ vững độc lập, chủ quyền là <strong>điều kiện tiên quyết</strong> cho mọi kế hoạch phát triển. 
                Việt Nam xây dựng <strong>thế trận quốc phòng toàn dân</strong> gắn với thế trận an ninh nhân dân, 
                kết hợp phát triển kinh tế với củng cố quốc phòng.
              </p>
              <div class="bg-red-50 p-4 rounded-lg">
                <p class="font-semibold text-red-800 mb-3">An ninh toàn diện:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">▪</span>
                    <span>An ninh mạng</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">▪</span>
                    <span>An ninh kinh tế</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">▪</span>
                    <span>An ninh năng lượng</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">▪</span>
                    <span>Ứng phó thiên tai, dịch bệnh (COVID-19)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">▪</span>
                    <span>Tham gia lực lượng gìn giữ hòa bình Liên Hợp Quốc</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-teal-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-teal-700 mb-4">
              5. Thực hiện đường lối đối ngoại độc lập, tự chủ, hòa bình, hợp tác và phát triển
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Việt Nam chủ trương hội nhập bằng bàn tay mở nhưng đứng vững trên lợi ích dân tộc. 
                Nguyên tắc nhất quán là <strong>không liên minh quân sự</strong> để chống nước khác, 
                không phụ thuộc vào bất kỳ cường quốc nào và đặt <strong>lợi ích quốc gia — dân tộc</strong> lên hàng đầu.
              </p>
              <div class="bg-teal-50 p-4 rounded-lg">
                <p class="font-semibold text-teal-800 mb-3">Chiến lược đa phương hóa, đa dạng hóa:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-teal-600 font-bold mr-2">►</span>
                    <span>Liên Hợp Quốc, ASEAN, WTO, APEC</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-teal-600 font-bold mr-2">►</span>
                    <span>CPTPP, EVFTA</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-teal-600 font-bold mr-2">►</span>
                    <span>Giảm rủi ro phụ thuộc vào một thị trường duy nhất</span>
                  </li>
                </ul>
              </div>
              <div class="bg-teal-100 p-4 rounded-lg mt-4 border-l-4 border-teal-600">
                <p class="font-semibold text-teal-900">Hội nhập là động lực:</p>
                <p class="text-gray-800 mt-2">
                  Đối ngoại không chỉ là nghi thức ngoại giao mà là <strong>động lực phát triển</strong> 
                  và công cụ củng cố an ninh quốc gia.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-orange-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-orange-700 mb-4">
              6. Xây dựng nền dân chủ xã hội chủ nghĩa và đại đoàn kết toàn dân
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Dân chủ trong chủ nghĩa xã hội Việt Nam là cơ chế để nhân dân <strong>tham gia, giám sát và hưởng lợi</strong> 
                từ quá trình phát triển — không chỉ là quyền bầu cử định kỳ.
              </p>
              <div class="bg-orange-50 p-4 rounded-lg">
                <p class="font-semibold text-orange-800 mb-3">Hiến pháp 2013 khẳng định:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-orange-600 font-bold mr-2">•</span>
                    <span>Tất cả quyền lực nhà nước thuộc về nhân dân</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-orange-600 font-bold mr-2">•</span>
                    <span>Nguyên tắc <strong>"dân biết, dân bàn, dân làm, dân kiểm tra"</strong></span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-orange-600 font-bold mr-2">•</span>
                    <span>Dân chủ không tách rời kỷ cương pháp luật</span>
                  </li>
                </ul>
              </div>
              <div class="bg-orange-100 p-4 rounded-lg mt-4 border-l-4 border-orange-600">
                <p class="font-semibold text-orange-900">Đại đoàn kết toàn dân:</p>
                <p class="text-gray-800 mt-2">
                  Không chỉ là tình cảm mà là <strong>chiến lược phát triển lâu dài</strong>. 
                  Trong bối cảnh toàn cầu biến động, sự đồng thuận xã hội chính là nguồn lực chính trị quý giá nhất.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-indigo-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-indigo-700 mb-4">
              7. Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Nhà nước pháp quyền xã hội chủ nghĩa bảo đảm quyền lực được thực thi trong <strong>khuôn khổ pháp luật</strong>, 
                minh bạch và có kiểm soát.
              </p>
              <div class="bg-indigo-50 p-4 rounded-lg">
                <p class="font-semibold text-indigo-800 mb-3">Các biện pháp cụ thể:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-indigo-600 font-bold mr-2">✓</span>
                    <span>Hệ thống pháp luật được xây dựng và sửa đổi liên tục</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-indigo-600 font-bold mr-2">✓</span>
                    <span>Cải cách hành chính, tinh gọn bộ máy</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-indigo-600 font-bold mr-2">✓</span>
                    <span>Chuyển đổi số quốc gia → Chính phủ số, giảm thủ tục rườm rà</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-indigo-600 font-bold mr-2">✓</span>
                    <span>Phân công, phối hợp và kiểm soát giữa lập pháp, hành pháp, tư pháp</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-indigo-600 font-bold mr-2">✓</span>
                    <span>Đẩy mạnh phòng chống tham nhũng</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-red-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h4 class="text-xl font-bold text-red-700 mb-4">
              8. Xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh
            </h4>
            <div class="space-y-4 text-gray-700">
              <p class="leading-relaxed">
                Đảng Cộng sản Việt Nam là <strong>lực lượng lãnh đạo Nhà nước và xã hội</strong> theo Hiến pháp 2013. 
                Vai trò đó đòi hỏi Đảng phải kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội, 
                đề ra đường lối phát triển phù hợp thực tiễn và giữ vững bản chất cách mạng và khoa học.
              </p>
              <div class="bg-red-50 p-4 rounded-lg">
                <p class="font-semibold text-red-800 mb-3">Sức chiến đấu của Đảng:</p>
                <ul class="space-y-2 ml-4 text-sm">
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">•</span>
                    <span>Kiên quyết đấu tranh chống <strong>tham nhũng, tiêu cực</strong></span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">•</span>
                    <span>Kiểm soát quyền lực trong công tác cán bộ</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-600 font-bold mr-2">•</span>
                    <span>Tự chỉnh đốn — một Đảng mạnh là Đảng biết tự sửa mình</span>
                  </li>
                </ul>
              </div>
              <div class="bg-red-100 p-4 rounded-lg mt-4 border-l-4 border-red-600">
                <p class="font-semibold text-red-900">Nguyên tắc lãnh đạo:</p>
                <p class="text-gray-800 mt-2">
                  Đảng lãnh đạo nhưng phải <strong>dựa vào dân, lắng nghe dân và chịu sự giám sát của dân</strong>; 
                  khi lợi ích nhân dân là mục tiêu và dân chủ được phát huy, chính sách mới bén rễ vào thực tiễn.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Mục tiêu Đại hội XIII -->
        <div class="mt-10">
          <div class="relative bg-white border-l-8 border-purple-600 shadow-xl rounded-lg p-6 mb-6 hover:shadow-2xl transition-all">
            <h4 class="text-2xl font-bold text-purple-800 mb-4">
              Cập nhật mục tiêu tại Đại hội XIII (2021)
            </h4>
          </div>

          <div class="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-6 shadow-lg mb-6">
            <h5 class="text-xl font-bold text-purple-800 mb-4">Các mục tiêu chiến lược đến năm 2045:</h5>
            <div class="space-y-4">
              <div class="bg-white p-4 rounded-lg">
                <p class="font-semibold text-purple-700 mb-2">Đến năm 2025:</p>
                <p class="text-gray-700 text-sm">
                  Nước đang phát triển có <strong>công nghiệp theo hướng hiện đại</strong>, vượt mức thu nhập trung bình thấp
                </p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <p class="font-semibold text-purple-700 mb-2">Đến năm 2030:</p>
                <p class="text-gray-700 text-sm">
                  Nước có <strong>công nghiệp hiện đại</strong>, thu nhập trung bình cao
                </p>
              </div>
              <div class="bg-white p-4 rounded-lg">
                <p class="font-semibold text-purple-700 mb-2">Đến năm 2045:</p>
                <p class="text-gray-700 text-sm">
                  Trở thành <strong>nước phát triển, thu nhập cao</strong>
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg">
            <h5 class="text-xl font-bold text-blue-800 mb-4">
              12 định hướng phát triển đất nước giai đoạn 2021 — 2030
            </h5>
            <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">1.</span>
                  <span>Đổi mới mạnh mẽ tư duy</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">2.</span>
                  <span>Hoàn thiện đồng bộ thể chế kinh tế thị trường định hướng XHCN</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">3.</span>
                  <span>Tạo đột phá trong giáo dục, đào tạo và khoa học công nghệ</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">4.</span>
                  <span>Phát triển con người toàn diện và văn hóa</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">5.</span>
                  <span>Thích ứng với biến đổi khí hậu và phát triển kinh tế xanh, kinh tế tuần hoàn</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">6.</span>
                  <span>Bảo vệ vững chắc Tổ quốc</span>
                </li>
              </ul>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">7.</span>
                  <span>Hội nhập quốc tế sâu rộng</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">8.</span>
                  <span>Phát huy dân chủ xã hội chủ nghĩa</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">9.</span>
                  <span>Xây dựng Nhà nước pháp quyền</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">10.</span>
                  <span>Xây dựng Đảng trong sạch vững mạnh</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">11.</span>
                  <span>Tiếp tục nắm vững 10 mối quan hệ lớn của Đảng</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 font-bold mr-2 mt-1">12.</span>
                  <span>Xây dựng hệ thống chính trị trong sạch, vững mạnh toàn diện</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-6 bg-gradient-to-r from-gray-50 to-blue-50 border-2 border-gray-300 rounded-xl p-6">
            <h5 class="text-lg font-bold text-gray-900 mb-4">Tài liệu tham khảo thêm</h5>
            <div class="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-gray-500 mr-2">•</span>
                  <span>Bảo tàng Lịch sử Việt Nam: <a href="https://baotanglichsu.vn" class="text-blue-600 hover:underline">baotanglichsu.vn</a></span>
                </li>
                <li class="flex items-start">
                  <span class="text-gray-500 mr-2">•</span>
                  <span>Bảo tàng Lịch sử TP.HCM: <a href="https://baotanglichsutphcm.com.vn" class="text-blue-600 hover:underline">baotanglichsutphcm.com.vn</a></span>
                </li>
              </ul>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-gray-500 mr-2">•</span>
                  <span>Bảo tàng Chứng tích Chiến tranh: <a href="https://baotangchungtichchientranh.vn" class="text-blue-600 hover:underline">baotangchungtichchientranh.vn</a></span>
                </li>
                <li class="flex items-start">
                  <span class="text-gray-500 mr-2">•</span>
                  <span>Bảo tàng Lịch sử Quân sự: <a href="https://baotanglichsuquansu.vn" class="text-blue-600 hover:underline">baotanglichsuquansu.vn</a></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      `
    }
  ];

  return (
    <>
      {/* Completion Modal */}
      {showCompletionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl p-10 max-w-md mx-4 shadow-2xl transform animate-scaleIn">
            <div className="text-center">
              <div className="text-6xl mb-4 animate-bounce">🎉</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Xuất sắc!
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Bạn đã hoàn thành <strong className="text-blue-600">toàn bộ bài học</strong>!
              </p>
              <div className="flex justify-center gap-2 text-4xl mb-6">
                <span className="animate-bounce" style={{animationDelay: '0s'}}>⭐</span>
                <span className="animate-bounce" style={{animationDelay: '0.1s'}}>⭐</span>
                <span className="animate-bounce" style={{animationDelay: '0.2s'}}>⭐</span>
                <span className="animate-bounce" style={{animationDelay: '0.3s'}}>⭐</span>
              </div>
              <p className="text-gray-600 mb-6">
                Bạn đã thu thập đủ <strong>4/4 sao</strong>!<br/>
                Hãy thử sức với <strong>Quiz Game</strong> để kiểm tra kiến thức nhé!
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowCompletionModal(false)}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                >
                  Đóng
                </button>
                <button
                  onClick={() => window.location.href = '/quiz'}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all"
                >
                  Làm Quiz →
                </button>
              </div>
              <button
                onClick={resetProgress}
                className="mt-4 text-sm text-gray-500 hover:text-red-600 transition-colors"
              >
                Reset tiến độ
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Quá Độ Lên Chủ Nghĩa Xã Hội Ở Việt Nam
            </h1>
            <p className="text-xl text-gray-600">
              Tài liệu tham khảo môn Chủ nghĩa Mác – Lênin (MLN131)
            </p>
          </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold mb-6 text-blue-600">Nội Dung</h2>
              
              <nav className="space-y-3">
                {sections.map((section, index) => {
                  const isCompleted = completedSections.includes(section.id);
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(index)}
                      className={`w-full text-left px-6 py-4 rounded-lg font-semibold text-sm transition-all duration-300 relative ${
                        activeSection === index
                          ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex-1">{section.title}</span>
                        {isCompleted && (
                          <span className="ml-2 text-2xl animate-bounce">⭐</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </nav>
              
              <div className="mt-8">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-600">
                    Tiến Độ
                  </p>
                  <p className="text-sm font-bold text-blue-600">
                    {completedSections.length}/4 ⭐
                  </p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(completedSections.length / sections.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-10 animate-slide-up">
              <h2 className="text-4xl font-bold text-blue-600 mb-8">
                {sections[activeSection].title}
              </h2>
              
              <div 
                className="prose prose-lg max-w-none learn-page"
                dangerouslySetInnerHTML={{ __html: sections[activeSection].content }}
              />

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
                
                {!completedSections.includes(sections[activeSection].id) ? (
                  <button
                    onClick={() => markAsCompleted(sections[activeSection].id)}
                    className="px-8 py-4 rounded-lg font-bold text-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 shadow-lg transition-all duration-300"
                  >
                    ✓ Hoàn thành
                  </button>
                ) : (
                  <div className="px-8 py-4 rounded-lg font-bold text-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg flex items-center gap-2">
                    <span className="animate-bounce">⭐</span>
                    <span>Đã hoàn thành</span>
                  </div>
                )}
                
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
    </>
  );
}

export default Learn;
