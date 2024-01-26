import React from 'react';
import './styles/index.scss'
import Counter from "./Components/Counter";
import {useTheme} from "./theme/useTheme";
import ThemeSwitcher from "./Components/UI/ThemeSwitcher/ThemeSwitcher";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const {theme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <ThemeSwitcher/>
            <Counter/>
        </div>
    );
};

export default App;