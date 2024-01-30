'use client'
import React from 'react'
import { useState, useEffect } from "react";
import LogoApp from "../../../public/images/LogoApp.png"
import { Navbar as NavbarWeb } from "react-bootstrap";
import  Button  from "../layout/Button";
import Image from "../layout/Image";
import Link from 'next/link';
import styles from './Nav.module.scss'
const Nav = () => {
    return (
        <nav className={(`${styles.wrapper}`)}>
            <div className={(`${styles.logo} d-flex align-items-center`)}>
                <Link href = "/">
                    <Image src = {`${LogoApp.src}`} logo alt = {'logo'}/>
                </Link>
                <h4 className={(styles.logoHeading)}>
                    Tantandihoc
                </h4>
            </div>
            <div className={(`${styles.body} d-flex justify-content-center align-items-center`)}>
                <div className={(`${styles.SearchWrapper} d-flex justify-content-start align-items-center`)}>
                    <div className={`${styles.SearchIcon}`}></div>
                    <input className={`${styles.SearchInput} `} type="text" placeholder='Tìm kiếm khóa học, bài viết, video, ...' />
                </div>
            </div>
            <div className={(`${styles.actions} d-flex justify-content-end align-items-center`)}>
                <Button login>Đăng nhập</Button>
                <Button register>Đăng ký</Button>
            </div>
        </nav>
    );
}

export default Nav