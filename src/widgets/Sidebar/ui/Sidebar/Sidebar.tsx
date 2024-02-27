import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import {ThemeSwitcher} from "features/ThemeSwitcher";
import LangSwitcher from "features/LangSwitcher/ui/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const onToggle = () => {
        setIsCollapsed(prev => !prev);
    }

    return (
        <div
            className={classNames(cls.sidebar, {[cls.collapsed]: isCollapsed}, [])}
        >
            <div>dsadsa</div>
            <div className={cls.switchers}>
                <div onClick={onToggle} className={cls.collapsedIcon}>
                    <TbLayoutSidebarLeftCollapse/>
                </div>
                <div>
                    <ThemeSwitcher/>
                    <LangSwitcher/>
                </div>
            </div>

        </div>
    );
};

