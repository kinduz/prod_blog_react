import React, {Suspense} from 'react';
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {useTheme} from "shared/lib/Theme";
import {Sidebar} from "widgets/Sidebar";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme} = useTheme()
    return (
       <Suspense fallback={""}>
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className="content-page">
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
       </Suspense>
    );
};

export default App;