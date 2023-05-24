import React from 'react';
import './userSettings.css';

export default function UserSettings() {
  return (
    <div className='flex flex-col w-full bg-white rounded gazprom-shadow'>
        <div className='w-full flex justify-center rounded-t-lg gazprom-head'>Настройки личного кабинета</div>
        <div className='ml-4 mr-4'>
          <div className='flex flex-col justify-between mt-1'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Отображаемое имя
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="lkName"
                id="lkName"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder=""
              />
            </div>
          </div>
          <div className='flex flex-col justify-between mt-1'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Пароль
            </label>
            <div className="mt-1">
            <input
              type="text"
              name="lkPass"
              id="lkPass"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder=""
            />
            </div>
          </div>
          <div className='flex flex-col justify-between mt-1'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Повторите пароль
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="lkPass2"
                id="lkPass2"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder=""
              />
            </div>
          </div>
          <button className="btn btn-blue mt-2 mb-2 gazprom-button">Сохранить</button>
        </div>
    </div>
  );
}