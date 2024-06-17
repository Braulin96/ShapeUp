// routes/Router.jsx
import { cloneElement } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { LOGIN, REGISTER } from './paths';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Router = () => {
  const elements = useRoutes([
    { path: LOGIN, element: <Login /> },
    { path: REGISTER, element: <Register /> }
  ]);
  
  const location = useLocation();

  if (!elements) return null;

  return (
    <AnimatePresence>
      {cloneElement(elements, { key: location.pathname })}
    </AnimatePresence>
  );
};

export default Router;
