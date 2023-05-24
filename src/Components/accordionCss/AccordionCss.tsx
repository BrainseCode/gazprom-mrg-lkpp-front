import React from 'react';
import './gasConsumingEquipment.css';

function GasConsumingEquipment() {
  let elem = [
    { id: 1, text: 'Точка подключения Лежневская 144', idStr: '1' },
    { id: 2, text: 'Точка подключения Фридриха Энгельса 213', idStr: '2' },
];
  return (
    <div className="flex flex-col w-full bg-white rounded gazprom-shadow h-73">
      <div className="w-full flex justify-center rounded-t-lg gazprom-head">
        Установленное газопотребляющее оборудование
      </div>
      <div className="ml-4 mr-4">
        <div className="mt-1 mb-5">
          <div className="acor-container">
            {elem.map(el => (
              <div>
                <input type="checkbox" name="chacor" id={`chacor${el.idStr}`} />
                <label htmlFor={`chacor${el.idStr}`}>{el.text}</label>
                <div className="acor-body">
                  <p>Описание вкладки</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GasConsumingEquipment;
