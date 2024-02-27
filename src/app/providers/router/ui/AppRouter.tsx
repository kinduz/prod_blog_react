import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom'
import {routeConfig} from "../lib/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<span>loading</span>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                        <Route
                        element={
                            <div className="page-wrapper">
                                {element}
                            </div>
                        }
                        key={path}
                        path={path}
                        />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;