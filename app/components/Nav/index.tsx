'use client'
import React from 'react'
import { useState, useEffect } from "react";
import LogoApp from "../../../public/images/LogoApp.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass, faSpinner} from '@fortawesome/free-solid-svg-icons';
import  Button  from "../layout/Button";
import Image from "../layout/Image";
import Link from 'next/link';
import styles from './Nav.module.scss'
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../Popper';
import SearchItems from '../SearchItems';
const Nav = () => {
    const [searchResult, setSearchResult] = useState<String[] | undefined>()
    useEffect(() => {
        setTimeout(() => {
            setSearchResult(['1','2','3'])
        })
    },[searchResult])
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
           <Tippy
            interactive = {true}
            
            visible = {searchResult !== undefined && searchResult.length > 0 ? true : false}
            render={attrs => (
                <div className={(`${styles.SearchResult}`)} tabIndex={-1} {...attrs}>
                     <PopperWrapper>
                         <div className={(`${styles.SearchHeader}`)}>
                            <FontAwesomeIcon className={(`${styles.SearchIconMagnifyingGlass} ${styles.SearchIcon}`)} icon={faMagnifyingGlass}></FontAwesomeIcon>
                            <FontAwesomeIcon className={(`${styles.SearchIconLoading} ${styles.SearchIcon}`)} icon={faSpinner}></FontAwesomeIcon>
                            <span>Kết quả</span>
                         </div>
                         <div className={(`${styles.SearchHeading}`)}>
                            <h5>Bài viết</h5>
                            <a className={(`${styles.SearchSeeMore}`)} >Xem thêm</a>
                         </div>
                         <SearchItems></SearchItems>
                     </PopperWrapper>
                </div>
            )}
           >
                <div className={(`${styles.body} container d-flex justify-content-center align-items-center`)}>
                    <div className={(`${styles.SearchWrapper} row d-flex justify-content-start align-items-center`)}>
                        <div  className={`${styles.SearchIcon} col-1`}><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                        <input className={`${styles.SearchInput} col`} type="text" placeholder='Tìm kiếm khóa học, bài viết, ...' />
                        <div className={(`${styles.clear} col-1`)}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>
                </div>
           </Tippy>
            <div className={(`${styles.actions} d-flex justify-content-end align-items-center`)}>
                <Button login>Đăng nhập</Button>
                <Button register>Đăng ký</Button>
            </div>
        </nav>
    );
}

export default Nav