import React from 'react';
import './actionСontract.css';
import { Link } from 'react-router-dom';
import contr from "../../../assets/images/contr.png"

export default function ActionOntract() {
  return (
    <div className='flex flex-col w-full bg-white rounded gazprom-shadow h-73'>
        <div className='w-full flex justify-center rounded-t-lg gazprom-head'>Действия по договору</div>
        <div className='ml-4 mr-4'>
          <div className='flex flex-col justify-between mt-1'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Дата регистрации
            </label>
            <div className="mt-1">
              <input
                type="date"
                name="regis"
                id="regis"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder=""
              />
            </div>
          </div>
          <div className='flex flex-col justify-between mt-1'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Дата начала договора
            </label>
            <div className="mt-1">
            <input
              type="date"
              name="start"
              id="start"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder=""
            />
            </div>
          </div>
          <div className='flex flex-col justify-between mt-1'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Дата завершения
            </label>
            <div className="mt-1">
              <input
                type="date"
                name="stop"
                id="stop"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder=""
              />
            </div>
          </div>
          <div className='flex flex-col justify-between mt-1'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
             Скан
            </label>
            <div className="mt-1">
              <img className='cursor-pointer' src={contr} alt="" />
            </div>
          </div>
        </div>
    </div>
  );
}