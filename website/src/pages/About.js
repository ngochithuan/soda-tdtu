import './Page.css';

function About() {
  return (
    <div className="page">
      <h1 className="page-title">Về Sodat</h1>

      <section className="page-section">
        <h2>Sodat là gì?</h2>
        <p>
          Sodat là một dự án cá nhân dành cho sinh viên TDTU. Thông báo về hoạt động và điểm rèn luyện 
          thường nằm rải rác trên fanpage của từng khoa và Đoàn - Hội, rất dễ bị
          trôi mất. Soda tổng hợp chúng lại một nơi để bạn theo dõi dễ hơn.
        </p>
      </section>

      <section className="page-section">
        <h2>Dữ liệu lấy từ đâu?</h2>
        <p>
          Bài đăng trong mục Conduct được thu thập định kỳ từ các fanpage công khai trên Facebook. Mỗi bài
          đều có liên kết <strong>Xem trên Facebook</strong> để bạn đọc bản gốc, xem hình ảnh và bình luận.
        </p>
      </section>

      <section className="page-section">
        <h2>Lưu ý</h2>
        <p>
          Soda không phải trang chính thức của TDTU. Nội dung sẽ không được cập nhật theo thời gian thực do chính sách của Facebook. Hãy luôn kiểm tra
          lại bài đăng gốc hoặc Cổng thông tin sinh viên.
        </p>
      </section>
    </div>
  );
}

export default About;
