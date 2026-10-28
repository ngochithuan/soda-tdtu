import { Link } from 'react-router-dom';

import './Page.css';

const features = [
  {
    title: 'Conduct',
    to: '/conduct',
    description:
      'Tổng hợp bài đăng về hoạt động và điểm rèn luyện từ fanpage của các khoa, Đoàn - Hội TDTU, mới nhất ở trên cùng.',
  },
  {
    title: 'GPA Calc',
    to: '/gpa-calc',
    description: 'Tính điểm trung bình học kỳ và tích lũy nhanh chóng.',
  },
];

function Home() {
  return (
    <div className="page">
      <h1 className="page-title">Chào mừng đến với Soda</h1>
      <p className="page-lead">
        Soda là nơi gom những thông tin sinh viên TDTU hay cần vào một chỗ, để bạn không phải lướt qua
        hàng chục fanpage mới tìm được một thông báo điểm rèn luyện.
      </p>

      <div className="feature-grid">
        {features.map((feature) => (
          <Link key={feature.to} className="feature-card" to={feature.to}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
