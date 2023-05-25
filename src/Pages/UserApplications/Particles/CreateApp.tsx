import  { useState } from 'react';
import './createApp.css';

export default function CreateApp() {

  return (
    <div className="flex flex-col w-full bg-white rounded gazprom-shadow h-73">
      <div className="w-full flex justify-center rounded-t-lg gazprom-head">
        Создание заявок
      </div>
        <div className="mt-1 mb-1 ml-4">
          <div className="flex mb-2">
            <button className="btn btn-blue">Создать</button>
            <span className="ml-2">Заявка о заключении договора ТП</span>
          </div>
          <div className="flex mb-2">
            <button className="btn btn-blue">Создать</button>
            <span className="ml-2">Заявка на изменение годового объема</span>
          </div>
          <div className="flex mb-2">
            <button className="btn btn-blue">Создать</button>
            <span className="ml-2">Заявка на вызов метролога</span>
          </div>
          <div className="flex mb-2">
            <button className="btn btn-blue">Создать</button>
            <span className="ml-2">Другая тема</span>
          </div>
        </div>
    </div>
  );
}