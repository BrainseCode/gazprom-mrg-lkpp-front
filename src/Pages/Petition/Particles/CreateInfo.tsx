import  { useState } from 'react';
import './createInfo.css';

export default function CreateInfo() {

  return (
    <div className="flex flex-col w-full bg-white rounded gazprom-shadow h-73">
      <div className="w-full flex justify-center rounded-t-lg gazprom-head">
        Создание уведомлений
      </div>
        <div className="mt-1 mb-1 ml-4">
          <div className="flex mb-2 items-center">
            <button className="btn btn-blue">Создать</button>
            <span className="ml-2">Оповещение для пользователя</span>
          </div>
          <div className="flex mb-2 items-center">
            <button className="btn btn-blue">Создать</button>
            <span className="ml-2">Уведомление о прекращении поставки газа (работы ГТО и/или ГРО)</span>
          </div>
        </div>
    </div>
  );
}