import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
    return (
        <div className="Nav">
            <link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet"></link>
            <nav className="main-nav">
                <ul className="parent">
                    <li className="home">
                        <a href="#">
                            <i className="ri-home-2-fill"></i>
                        </a>
                    </li>

                    <li className="thoisu">
                        <a href="#">Thời sự</a>
                        <ul className="sub">
                            <li>
                                <a>Chính trị</a>
                            </li>
                            <li>
                                <a>Dân sinh</a>
                            </li>
                            <li>
                                <a>Lao động - Việc làm</a>
                            </li>
                            <li>
                                <a>Giao thông</a>
                            </li>
                            <li>
                                <a>Mekong</a>
                            </li>
                            <li>
                                <a>Quỹ Hy vọng</a>
                            </li>
                        </ul>
                    </li>

                    <li className="gocnhin">
                        <a href="#">Góc nhìn</a>
                        <ul className="sub">
                            <li>
                                <a>Bình luận nhiều</a>
                            </li>
                            <li>
                                <a>Covid 19</a>
                            </li>
                            <li>
                                <a>Chính trị & chính sách</a>
                            </li>
                            <li>
                                <a>Y tế & sức khỏe</a>
                            </li>
                            <li>
                                <a>Kinh doanh & quản trị</a>
                            </li>
                            <li>
                                <a>Giáo dục & tri thức</a>
                            </li>
                            <li>
                                <a>Môi trường</a>
                            </li>
                            <li>
                                <a>Văn hóa & lối sống</a>
                            </li>
                            <li>
                                <a>Tác giả</a>
                            </li>
                        </ul>
                    </li>

                    <li className="thegioi">
                        <a href="#">Thế giới</a>
                        <ul className="sub">
                            <li>
                                <a>Tư liệu</a>
                            </li>
                            <li>
                                <a>Phân tích</a>
                            </li>
                            <li>
                                <a>Người Việt 5 châu</a>
                            </li>
                            <li>
                                <a>Cuộc sống đó đây</a>
                            </li>
                            <li>
                                <a>Quân sự</a>
                            </li>
                        </ul>
                    </li>

                    <li className="video">
                        <a href="#">Video</a>
                        <ul className="sub">
                            <li>
                                <a>Thời sự</a>
                            </li>
                            <li>
                                <a>Nhịp sống</a>
                            </li>
                            <li>
                                <a>Ẩm thực</a>
                            </li>
                            <li>
                                <a>Tôi kể</a>
                            </li>
                            <li>
                                <a>Chuyện núi rừng</a>
                            </li>
                            <li>
                                <a>Pháp luật</a>
                            </li>
                            <li>
                                <a>Giải trí</a>
                            </li>
                            <li>
                                <a>Thể thao</a>
                            </li>
                            <li>
                                <a>Sức khoẻ</a>
                            </li>
                        </ul>
                    </li>

                    <li className="kinhdoanh">
                        <a href="#">Kinh doanh</a>
                        <ul className="sub">
                            <li>
                                <a>Quốc tế</a>
                            </li>
                            <li>
                                <a>Doanh nghiệp</a>
                            </li>
                            <li>
                                <a>Chứng khoán</a>
                            </li>
                            <li>
                                <a>Bất động sản</a>
                            </li>
                            <li>
                                <a>Bảo hiểm</a>
                            </li>
                            <li>
                                <a>Hàng hóa</a>
                            </li>
                        </ul>
                    </li>

                    <li className="khoahoc">
                        <a href="#">Khoa học</a>
                        <ul className="sub">
                            <li>
                                <a>Khoa học trong nước</a>
                            </li>
                            <li>
                                <a>Tin tức</a>
                            </li>
                            <li>
                                <a>Phát minh</a>
                            </li>
                            <li>
                                <a>Ứng dụng</a>
                            </li>
                            <li>
                                <a>Thế giới tự nhiên</a>
                            </li>
                            <li>
                                <a>Thường thức</a>
                            </li>
                            <li>
                                <a>Sáng kiến Khoa học</a>
                            </li>
                        </ul>
                    </li>

                    <li className="giaitri">
                        <a href="#">Giải trí</a>
                        <ul className="sub">
                            <li>
                                <a>Giới sao</a>
                            </li>
                            <li>
                                <a>Video</a>
                            </li>
                            <li>
                                <a>Phim</a>
                            </li>
                            <li>
                                <a>Nhạc</a>
                            </li>
                            <li>
                                <a>Thời trang</a>
                            </li>
                            <li>
                                <a>Làm đẹp</a>
                            </li>
                            <li>
                                <a>Sách</a>
                            </li>
                            <li>
                                <a>Sân khấu - Mỹ thuật</a>
                            </li>
                        </ul>
                    </li>

                    <li className="thethao">
                        <a href="#">Thể thao</a>
                        <ul className="sub">
                            <li>
                                <a>Bóng đá</a>
                            </li>
                            <li>
                                <a>Tennis</a>
                            </li>
                            <li>
                                <a>VM 2022</a>
                            </li>
                            <li>
                                <a>Fun Run</a>
                            </li>
                            <li>
                                <a>Bundesliga</a>
                            </li>
                            <li>
                                <a>Các môn khác</a>
                            </li>
                            <li>
                                <a>Hậu trường</a>
                            </li>
                            <li>
                                <a>Tường thuật</a>
                            </li>
                        </ul>
                    </li>

                    <li className="phapluat">
                        <a href="#">Pháp luật</a>
                        <ul className="sub">
                            <li>
                                <a>Hồ sơ phá án</a>
                            </li>
                            <li>
                                <a>Tư vấn</a>
                            </li>
                        </ul>
                    </li>

                    <li className="giaoduc">
                        <a href="#">Giáo dục</a>
                        <ul className="sub">
                            <li>
                                <a>Tin tức</a>
                            </li>
                            <li>
                                <a>Tuyển sinh</a>
                            </li>
                            <li>
                                <a>Du học</a>
                            </li>
                            <li>
                                <a>Học tiếng Anh</a>
                            </li>
                            <li>
                                <a>Giáo dục 4.0</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
