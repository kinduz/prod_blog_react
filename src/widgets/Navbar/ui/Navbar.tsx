import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
 const {t} = useTranslation("about");
    return (
        <div className={classNames(cls.navbar, {}, [])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/'}>{t('Главная страница')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};
