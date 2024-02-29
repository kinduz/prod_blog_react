import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { TbLayoutSidebarLeftCollapse } from 'react-icons/tb';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import LangSwitcher from 'features/LangSwitcher/ui/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const onToggle = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [])}
        >
            <div>dsadsa</div>
            <div className={cls.switchers}>
                <button type="button" onClick={onToggle} className={cls.collapsedIcon}>
                    <TbLayoutSidebarLeftCollapse />
                </button>
                <div>
                    <ThemeSwitcher />
                    <LangSwitcher />
                </div>
            </div>

        </div>
    );
}
