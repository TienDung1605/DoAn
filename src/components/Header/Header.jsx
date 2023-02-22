import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeValueSearch, search } from "../../store/search/search";
import "./Header.css"

const Header = () => {

    const isSearch = useSelector((state) => state.isSearch);
    const dispatch = useDispatch()

    const handleChangeInput = (e) => {
        dispatch(changeValueSearch(e.target.value))
    }

    const handleSearch = () => {
        dispatch(search())
    }

    return (
        <>
        <div className="nav-bar">
            <header className="navbar-header">
                <div className="l-navbar-header">
                    <p> RA MẮT SẢN PHẨM ĐẶC BIỆT KỈ NIỆM LEVENTS 3 TUỔI VÀ NHIỀU SẢN PHẨM MỚI KHÁC</p>
                </div>
                <div className="r-navbar-header">
                    <span>mua ngay!</span>
                </div>
            </header>

            <div className="nav-head-content">
                <div className="l-head-content"></div>
                <Link to="/">
                    <div className="logo">
                        <img width="98" height="30" 
                        src="https://levents.asia/wp-content/uploads/2021/10/logo.png" 
                        class="custom-logo" 
                        alt="Levents" 
                        onClick={() => dispatch(changeValueSearch(""))}/>
                    </div>
                </Link>

                <div className="r-head-content">
                    <div className="r-head-content-list">
                        <div className="head-list-notication">
                            <img src="https://levents.asia/template/assets/images/notification.png" alt="" />
                            <p>3</p>
                        </div>

                        <div className="head-list-f-product">
                            <a href="">Sản phẩm yêu thích</a>
                        </div>

                        <div className="head-list-search">
                            <img src="https://levents.asia/template/assets/images/svg/ic-ser.svg" alt="" />
                            <input type="text"
                            placeholder=""
                            onChange={(e) => handleChangeInput(e)}
                            value={isSearch.value} />
                        </div>

                        <div className="head-list-cart">
                            <Link to="/cart">
                                <img src="https://levents.asia/template/assets/images/svg/ic-cart.svg" alt="" />
                                <p>
                                0
                                </p>
                            </Link>
                        </div>

                        <div className="head-list-user">
                            <img src="https://levents.asia/template/assets/images/svg/ic-user.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="nav-head-category">
                <ul className="nav-list-category">
                    <li href=""><a href="">Về chúng tôi</a> </li>
                    <li href=""><a href="">Sản phẩm</a> </li>
                    <li href=""><a href="" style={{color: "#FF0000"}}>Giảm giá</a> </li>
                    <li href=""><a href="">Bộ sưu tập</a> </li>
                    <li href=""><a href="">Bộ phối</a> </li>
                    <li href=""><a href="">Bài viết</a> </li>
                    <li href=""><a href="">Liên hệ</a> </li>
                    <li href=""><a href="">Chăm sóc khách hàng</a> </li>
                    <li href=""><a href="">Tuyển dụng</a> </li>
                </ul>
            </div>
        </div>

        <main className="main">
            <div className="banner">
                <div className="banner-img">
                    <img src="https://levents.asia/wp-content/uploads/2023/01/website-1920x988-1.png" alt="" style={{width: "100%"}}/>
                </div>
            </div>

            <section className="sec">
                <div className="con">
                    <h2 className="sec-title">NHỮNG SẢN PHẨM THU/ĐÔNG 2022 NỔI BẬT CỦA LEVENTS</h2>
                    <div></div>
                </div>
            </section>
        </main>

        </>
    );
};

export default Header