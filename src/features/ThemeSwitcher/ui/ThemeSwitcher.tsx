import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {MdOutlineDarkMode, MdOutlineLightMode} from "react-icons/md";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {Theme, useTheme} from "shared/lib/Theme";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <Button variant={ThemeButton.CLEAR} onClick={toggleTheme} className={classNames(cls.themeSwitcher, {}, [className])}>
            {theme === Theme.LIGHT  ? <MdOutlineDarkMode/> : <MdOutlineLightMode/>}
        </Button>
    );
};

