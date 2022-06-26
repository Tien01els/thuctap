import "./Footer.css";

function Footer() {
    return (
        <div className="Footer">
            <div className="footer-category">
                <div className="footer-category-main">
                    <h3>Trang chủ</h3>
                    <h3>Video</h3>
                    <h3>Ảnh</h3>
                    <h3>Infographics</h3>
                    <div></div>
                    <h3>Mới nhất</h3>
                    <h3>Xem nhiều</h3>
                    <h3>Tin nóng</h3>
                </div>
                <div className="footer-category-sub">
                    <span>Thời sự</span>
                    <span>Góc nhìn</span>
                    <span>Thế giới</span>
                    <span>Kinh doanh</span>
                    <span>Giải trí</span>
                </div>
                <div className="footer-category-sub">
                    <span>Thể thao</span>
                    <span>Pháp luật</span>
                    <span>Giáo dục</span>
                    <span>Sức khỏe</span>
                    <span>Đời sống</span>
                    <span>Du lịch</span>
                </div>
                <div className="footer-category-sub">
                    <span>Khoa học</span>
                    <span>Số hóa</span>
                    <span>Xe</span>
                    <span>Ý kiến</span>
                    <span>Tâm sự</span>
                    <span>Hài</span>
                </div>
                <div className="footer-category-sub">
                    <span>Rao vặt</span>
                    <span>Startup</span>
                    <span>Vhome</span>
                    <span>eBox</span>
                    <span>eWork</span>
                </div>
                <div className="footer-category-info">
                    <p>Tải ứng dụng</p>
                    <div className="btn-group">
                        <button className="btn-footer">
                            <i className="ri-google-play-fill"></i>
                            Google play
                        </button>
                        <button className="btn-footer">
                            <i className="ri-app-store-fill"></i>
                            App store
                        </button>
                    </div>
                    <p>Liên hệ</p>
                    <div className="p-group">
                        <p className="p-info">
                            <i className="ri-mail-fill"></i>
                            <b>Mail: </b>
                            <span>19110297@student.hcmute.edu.vn</span>
                        </p>
                        <p className="p-info">
                            <i className="ri-building-fill"></i>
                            <b>Toà soạn: </b>
                            <span>Sư phạm kỹ thuật</span>
                        </p>
                        <p className="p-info">
                            <i className="ri-phone-fill"></i>
                            <b>Đường dây nóng: </b>
                            <span>0914002708</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
