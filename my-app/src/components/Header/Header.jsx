import React from "react";
import Logo from "../Logo/Logo";
import SearchBar from "./SearchBar";
import CartWidget from "../Cart/CartWidget";
import styles from '../../styles/Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Logo />
                <SearchBar />
                <CartWidget />
            </div>
        </header>
    )
}

export default Header;