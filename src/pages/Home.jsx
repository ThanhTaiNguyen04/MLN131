import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const features = [
    {
      title: 'Nội Dung Chi Tiết',
      description: 'Tìm hiểu về nền kinh tế thị trường định hướng XHCN một cách đầy đủ và dễ hiểu',
    },
    {
      title: 'Trò Chơi Quiz',
      description: 'Kiểm tra kiến thức của bạn qua các câu hỏi tương tác thú vị',
    },
    {
      title: 'Trực Quan Hóa',
      description: 'Biểu đồ, hình ảnh minh họa giúp dễ dàng tiếp thu kiến thức',
    },
    {
      title: 'Học Tập Hiệu Quả',
      description: 'Phương pháp học tập hiện đại với giao diện thân thiện',
    }
  ];

  const stats = [
    { number: '8', label: 'Đặc Trưng CNXH' },
    { number: '8', label: 'Phương Hướng' },
    { number: '100+', label: 'Câu Hỏi Quiz' },
    { number: '∞', label: 'Kiến Thức' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section - Dramatic */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-blue-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-down">
            <div className="mb-8">
              <span className="inline-block bg-yellow-400 text-red-900 px-6 py-3 rounded-full font-bold text-lg mb-6">
                Việt Nam
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
              Nền Kinh Tế Thị Trường<br />
              <span className="text-yellow-300">Định Hướng Xã Hội Chủ Nghĩa</span>
            </h1>
            <p className="text-2xl sm:text-3xl mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Khám phá mô hình kinh tế độc đáo của Việt Nam<br />
              Học tập hiệu quả với công nghệ hiện đại
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/learn"
                className="bg-white text-red-600 px-12 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transform hover:scale-110 transition-all duration-300 shadow-2xl w-64 text-center"
              >
                Bắt Đầu Học
              </Link>
              <Link
                to="/quiz"
                className="bg-blue-600 text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 shadow-2xl w-64 text-center"
              >
                Chơi Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <div className="text-5xl font-black text-blue-600 mb-3">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-700">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Modern Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Đặc Điểm Nổi Bật
            </h2>
            <div className="w-24 h-2 bg-red-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border-t-4 border-blue-600"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8 text-gray-900">
                Tại Sao Nên Học?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-blue-50 p-6 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <p className="text-xl text-gray-700 pt-2">
                    Hiểu rõ về mô hình kinh tế độc đáo của Việt Nam
                  </p>
                </div>
                <div className="flex items-start space-x-4 bg-red-50 p-6 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <p className="text-xl text-gray-700 pt-2">
                    Nắm vững kiến thức cho các kỳ thi và học tập
                  </p>
                </div>
                <div className="flex items-start space-x-4 bg-blue-50 p-6 rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <p className="text-xl text-gray-700 pt-2">
                    Phát triển tư duy phản biện về kinh tế - xã hội
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-4xl font-black mb-6">
                Nội Dung Học Tập
              </h3>
              <ul className="space-y-4 text-xl">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span>8 Đặc trưng cơ bản của CNXH</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span>8 Phương hướng xây dựng</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span>Ý nghĩa bỏ qua TBCN</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span>Đặc điểm thời kỳ quá độ</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  <span>Mục tiêu phát triển đến 2045</span>
                </li>
              </ul>
              <Link
                to="/learn"
                className="mt-8 inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                Xem Chi Tiết
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Dramatic */}
      <section className="py-24 bg-gradient-to-r from-red-600 via-blue-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
            Sẵn Sàng Bắt Đầu?
          </h2>
          <p className="text-2xl text-white mb-12 max-w-3xl mx-auto">
            Hành trình khám phá kiến thức về nền kinh tế Việt Nam bắt đầu từ đây
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/learn"
              className="bg-white text-blue-600 px-12 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transform hover:scale-110 transition-all duration-300 shadow-2xl"
            >
              Học Ngay
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-4 border-white text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
            >
              Tìm Hiểu Thêm
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
