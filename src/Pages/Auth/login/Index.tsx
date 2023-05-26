import React from 'react';
import './login.css';
import login from '../../../assets/images/login.png';

import { useLocation, useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from.pathname || '/';
  const auch = (event) => {
    event.preventDefault();
    alert(event.currentTarget[0].value+' '+event.currentTarget[1].value);
  }

  return (
    <div className="flex items-center justify-center h-screen gazprom-baground">
      <div className="w-96 h-96 bg-white text-black shadow-lg shadow-white-500/40 rounded">
        <div className="flex flex-col justify-center items-center">
          <div>
            <img src={login} alt="" />
          </div>
          <form onSubmit={auch}>
            <div className="mt-4">
              <div className="flex flex-col justify-between mt-1">
                <label htmlFor="email" className="block text-sm text-left font-medium text-gray-700">
                  Введите логин
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="agent"
                    id="agent"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="ИНН"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between mt-4">
                <label htmlFor="email" className="block text-sm text-left font-medium text-gray-700">
                  Введите пароль
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    name="face"
                    id="face"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Пароль"
                    defaultValue=""
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 mb-2">
              <button className="btn btn-blue text-center gazprom-button w-[170px]">Войти</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
