import React, { useState, useEffect } from 'react';

function Quiz() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [streak, setStreak] = useState(0);

  const questions = [
    {
      question: 'Việt Nam bắt đầu xây dựng chủ nghĩa xã hội từ giai đoạn phát triển nào?',
      options: ['Phong kiến lạc hậu', 'Tư bản chủ nghĩa', 'Công nghiệp hóa', 'Hậu công nghiệp'],
      correct: 0,
      explanation: 'Việt Nam chuyển từ xã hội phong kiến lạc hậu, kém phát triển sang xây dựng chủ nghĩa xã hội, bỏ qua giai đoạn tư bản chủ nghĩa.'
    },
    {
      question: 'Đại hội Đảng nào đã khởi xướng công cuộc Đổi Mới năm 1986?',
      options: ['Đại hội V', 'Đại hội VI', 'Đại hội VII', 'Đại hội VIII'],
      correct: 1,
      explanation: 'Đại hội Đảng lần thứ VI (1986) đã khởi xướng công cuộc Đổi Mới, xác lập nền kinh tế thị trường định hướng XHCN.'
    },
    {
      question: 'Theo bối cảnh thời đại, sự kiện nào tạo áp lực tư tưởng lớn đối với Việt Nam?',
      options: [
        'Chiến tranh lạnh kết thúc',
        'Liên Xô và các nước XHCN Đông Âu tan rã (1989-1991)',
        'Khủng hoảng tài chính châu Á 1997',
        'Gia nhập WTO'
      ],
      correct: 1,
      explanation: 'Sự suy tàn của CNXH hiện thực khi Liên Xô và các nước XHCN Đông Âu tan rã (1989-1991) tạo áp lực tư tưởng lớn.'
    },
    {
      question: '"Bỏ qua chế độ tư bản chủ nghĩa" có nghĩa là gì?',
      options: [
        'Từ chối mọi thành tựu của thời kỳ tư bản',
        'Bỏ qua chế độ chính trị và kinh tế tư bản, nhưng tiếp thu có chọn lọc thành tựu khoa học công nghệ',
        'Cấm hoàn toàn kinh tế tư nhân',
        'Không học hỏi từ các nước phát triển'
      ],
      correct: 1,
      explanation: 'Bỏ qua chế độ chính trị và kinh tế tư bản thuần túy, nhưng tiếp thu có chọn lọc thành tựu khoa học công nghệ và kinh nghiệm quản lý.'
    },
    {
      question: 'Có bao nhiêu đặc trưng cơ bản của chủ nghĩa xã hội ở Việt Nam theo Cương lĩnh 2011?',
      options: ['5 đặc trưng', '6 đặc trưng', '8 đặc trưng', '10 đặc trưng'],
      correct: 2,
      explanation: 'Theo Cương lĩnh (bổ sung, phát triển năm 2011), có 8 đặc trưng cơ bản của CNXH ở Việt Nam.'
    },
    {
      question: 'Đặc trưng đầu tiên của CNXH Việt Nam là gì?',
      options: [
        'Nhân dân làm chủ',
        'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh',
        'Kinh tế phát triển cao',
        'Đảng lãnh đạo'
      ],
      correct: 1,
      explanation: 'Đặc trưng đầu tiên là "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh" - mục tiêu tổng quát kết tinh giữa mục tiêu kinh tế, chính trị và giá trị nhân văn.'
    },
    {
      question: 'Thành phần kinh tế nào giữ vai trò chủ đạo trong nền kinh tế thị trường định hướng XHCN?',
      options: [
        'Kinh tế tư nhân',
        'Kinh tế FDI',
        'Kinh tế nhà nước',
        'Kinh tế cá thể'
      ],
      correct: 2,
      explanation: 'Kinh tế nhà nước giữ vai trò chủ đạo, nắm giữ các ngành then chốt như quốc phòng, an ninh, năng lượng, hạ tầng, tài chính, ngân hàng.'
    },
    {
      question: 'Có bao nhiêu phương hướng xây dựng CNXH ở Việt Nam?',
      options: ['6 phương hướng', '7 phương hướng', '8 phương hướng', '9 phương hướng'],
      correct: 2,
      explanation: '8 phương hướng xây dựng CNXH trả lời câu hỏi "Làm thế nào để xây dựng CNXH?", bổ trợ cho 8 đặc trưng.'
    },
    {
      question: 'Theo lộ trình phát triển, Việt Nam phấn đấu trở thành nước phát triển vào năm nào?',
      options: ['Năm 2025', 'Năm 2030', 'Năm 2035', 'Năm 2045'],
      correct: 3,
      explanation: 'Theo Đại hội XIII (2021), đến năm 2045 (kỷ niệm 100 năm thành lập nước), Việt Nam trở thành nước phát triển, thu nhập cao.'
    },
    {
      question: 'Nguyên tắc nào là nhân tố quyết định mọi thắng lợi trong xây dựng CNXH ở Việt Nam?',
      options: [
        'Kinh tế thị trường tự do',
        'Sự lãnh đạo của Đảng Cộng sản Việt Nam',
        'Vốn đầu tư nước ngoài',
        'Công nghệ hiện đại'
      ],
      correct: 1,
      explanation: 'Đảng Cộng sản Việt Nam là lực lượng lãnh đạo nhà nước và xã hội, nguyên tắc lãnh đạo của Đảng là nhân tố quyết định mọi thắng lợi.'
    }
  ];

  // Timer countdown
  useEffect(() => {
    if (gameStarted && !showResult && !quizCompleted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResult) {
      handleAnswer(null);
    }
  }, [timeLeft, gameStarted, showResult, quizCompleted]);

  const startQuiz = () => {
    setGameStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizCompleted(false);
    setTimeLeft(30);
    setStreak(0);
  };

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      const timeBonus = Math.floor(timeLeft / 3);
      const streakBonus = streak * 5;
      const totalPoints = 10 + timeBonus + streakBonus;
      setScore(score + totalPoints);
      setStreak(streak + 1);
    } else {
      setStreak(0);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(30);
    } else {
      setQuizCompleted(true);
    }
  };

  const getScoreMessage = () => {
    const percentage = (score / (questions.length * 10)) * 100;
    if (percentage >= 90) return { emoji: '🏆', text: 'Xuất Sắc!', color: 'text-yellow-500' };
    if (percentage >= 70) return { emoji: '🌟', text: 'Giỏi Lắm!', color: 'text-green-500' };
    if (percentage >= 50) return { emoji: '👍', text: 'Khá Tốt!', color: 'text-blue-500' };
    return { emoji: '💪', text: 'Cố Gắng Thêm!', color: 'text-orange-500' };
  };

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 py-12 px-4 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-slide-up">
            <div className="text-8xl mb-6 animate-bounce-slow">🎮</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Trò Chơi Quiz Siêu Hấp Dẫn!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Kiểm tra kiến thức của bạn về Nền Kinh Tế Thị Trường Định Hướng XHCN
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="text-4xl mb-2">📝</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{questions.length}</div>
                <div className="text-gray-700 font-semibold">Câu Hỏi</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <div className="text-4xl mb-2">⏱️</div>
                <div className="text-3xl font-bold text-green-600 mb-2">30s</div>
                <div className="text-gray-700 font-semibold">Mỗi Câu</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <div className="text-4xl mb-2">🏆</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-gray-700 font-semibold">Điểm/Câu</div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 text-left">
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <span className="text-2xl mr-2">💡</span>
                Luật Chơi:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Mỗi câu hỏi có 4 đáp án, chọn 1 đáp án đúng</li>
                <li>✓ Bạn có 30 giây để trả lời mỗi câu</li>
                <li>✓ Càng trả lời nhanh, điểm thưởng càng cao</li>
                <li>✓ Trả lời đúng liên tiếp để nhận điểm streak bonus</li>
                <li>✓ Xem giải thích sau mỗi câu để học thêm</li>
              </ul>
            </div>

            <button
              onClick={startQuiz}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-12 py-5 rounded-full text-2xl font-bold hover:from-green-600 hover:to-blue-600 transform hover:scale-110 transition-all duration-300 shadow-2xl animate-pulse-slow"
            >
              Bắt Đầu Chơi 🚀
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const scoreData = getScoreMessage();
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 py-12 px-4 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center animate-slide-up">
            <div className="text-9xl mb-6 animate-bounce-slow">{scoreData.emoji}</div>
            <h2 className={`text-5xl font-bold mb-4 ${scoreData.color}`}>
              {scoreData.text}
            </h2>
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Hoàn Thành Quiz!
            </h3>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mb-8">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                {score} điểm
              </div>
              <div className="text-xl text-gray-700">
                Tổng điểm của bạn
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="text-4xl mb-2">✅</div>
                <div className="text-2xl font-bold text-blue-600">
                  {questions.filter((_, i) => i <= currentQuestion).length} / {questions.length}
                </div>
                <div className="text-gray-700">Câu Đã Trả Lời</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <div className="text-4xl mb-2">🔥</div>
                <div className="text-2xl font-bold text-green-600">
                  {streak > 0 ? `${streak} liên tiếp!` : 'Không có'}
                </div>
                <div className="text-gray-700">Streak Cao Nhất</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={startQuiz}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Chơi Lại 🔄
              </button>
              <button
                onClick={() => setGameStarted(false)}
                className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:from-gray-600 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Quay Lại 🏠
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 py-8 px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Header Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <div className="text-sm text-gray-600 mb-1">Câu hỏi</div>
            <div className="text-2xl font-bold text-blue-600">
              {currentQuestion + 1}/{questions.length}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <div className="text-sm text-gray-600 mb-1">Điểm</div>
            <div className="text-2xl font-bold text-green-600">{score}</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 text-center">
            <div className="text-sm text-gray-600 mb-1">Thời gian</div>
            <div className={`text-2xl font-bold ${timeLeft <= 10 ? 'text-red-600 animate-pulse' : 'text-orange-600'}`}>
              {timeLeft}s
            </div>
          </div>
        </div>

        {/* Streak Indicator */}
        {streak > 0 && (
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-xl p-3 mb-6 text-center animate-slide-down">
            <div className="font-bold text-lg">
              🔥 Streak: {streak} câu liên tiếp! (+{streak * 5} điểm bonus)
            </div>
          </div>
        )}

        {/* Progress Bar */}
        <div className="bg-white rounded-full h-3 mb-6 overflow-hidden shadow-lg">
          <div
            className="bg-gradient-to-r from-green-500 to-blue-500 h-full transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-slide-up">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-relaxed">
            {question.question}
          </h2>

          {/* Answer Options */}
          <div className="space-y-4 mb-8">
            {question.options.map((option, index) => {
              let buttonClass = "w-full text-left p-5 rounded-xl font-semibold text-lg transition-all duration-300 border-2 ";
              
              if (showResult) {
                if (index === question.correct) {
                  buttonClass += "bg-green-100 border-green-500 text-green-800";
                } else if (index === selectedAnswer) {
                  buttonClass += "bg-red-100 border-red-500 text-red-800";
                } else {
                  buttonClass += "bg-gray-100 border-gray-300 text-gray-600";
                }
              } else {
                buttonClass += "bg-white border-gray-300 hover:border-blue-500 hover:bg-blue-50 transform hover:scale-105 cursor-pointer";
              }

              return (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswer(index)}
                  disabled={showResult}
                  className={buttonClass}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-4 bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                    {showResult && index === question.correct && <span className="ml-auto text-3xl">✓</span>}
                    {showResult && index === selectedAnswer && index !== question.correct && <span className="ml-auto text-3xl">✗</span>}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showResult && (
            <div className="animate-slide-down">
              <div className={`rounded-xl p-6 mb-6 ${
                selectedAnswer === question.correct 
                  ? 'bg-green-50 border-l-4 border-green-500' 
                  : 'bg-blue-50 border-l-4 border-blue-500'
              }`}>
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="text-2xl mr-2">💡</span>
                  Giải Thích:
                </h3>
                <p className="text-gray-700">{question.explanation}</p>
              </div>

              <button
                onClick={nextQuestion}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl text-xl font-bold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {currentQuestion < questions.length - 1 ? 'Câu Tiếp Theo →' : 'Xem Kết Quả 🏆'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
