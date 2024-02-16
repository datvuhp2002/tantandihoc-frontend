import React from 'react'
import Link from 'next/link'
import styles from "./searchItems.module.scss"
const SearchItems = () => {
  return (
    <Link href="/" className={(`${styles.wrapper}`)}>
        <img className={(`${styles.thumbnail}`)} src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png" alt="" />
        <span>Kết quả</span>
    </Link>
  )
}

export default SearchItems