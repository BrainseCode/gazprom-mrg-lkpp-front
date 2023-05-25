import React from 'react';
import './tableProfile.css';
import { Link } from 'react-router-dom';

export default function TableProfile() {
  return (
    <div className='flex flex-col w-full bg-white rounded gazprom-shadow h-73'>
        <div className='w-full flex justify-center rounded-t-lg gazprom-head'>Профиль</div>
        <div className='ml-4 mr-4'>
          <div className='flex flex-col justify-between mt-1'>
            <label htmlFor="email" className="block text-sm text-left font-medium text-gray-700">
              Наименование контрагента
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="agent"
                id="agent"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder=""
              />
            </div>
          </div>
          <div className='flex flex-col justify-between mt-1'>
            <label htmlFor="email" className="block text-sm text-left font-medium text-gray-700">
              Контактное лицо
            </label>
            <div className="mt-1">
            <input
              type="text"
              name="face"
              id="face"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder=""
            />
            </div>
          </div>
          <div className='flex flex-col justify-between mt-1'>
            <label htmlFor="email" className="block text-sm text-left font-medium text-gray-700">
              Телефон
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder=""
              />
            </div>
          </div>
          <div className='flex flex-col justify-between mt-1'>
            <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">
              Эл. почта
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="email"
                id="email"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder=""
              />
            </div>
          </div>
          <div className='flex'>
            <Link to="/userProfile">
                <button className="btn btn-blue mt-2 mb-2 text-left gazprom-button">Переход в профиль</button>
            </Link>
          </div>
        </div>
    </div>
  );
}