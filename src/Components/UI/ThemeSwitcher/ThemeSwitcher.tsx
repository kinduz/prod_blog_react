import React from 'react';
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import {useTheme} from "../../../theme/useTheme";
import styles from "./ThemeSwitcher.module.scss"
const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={styles.switcher} onClick={toggleTheme}>
            {theme !== 'dark' ? <CiDark/> : <CiLight/>}
        </div>
    );
};

export default ThemeSwitcher;