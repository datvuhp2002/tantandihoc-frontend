import React from 'react'
import styles from "./Popper.module.scss"
export default function Wrapper({
    children,
  }: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className={(`${styles.wrapper}`)}>{children}</div>;
}
