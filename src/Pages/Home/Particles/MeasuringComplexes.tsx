import React from 'react';
import './measuringComplexes.css';

export default function MeasuringComplexes() {
  let complexes = [
    {id: 1, adress:1, device:"Д6", contract:"Активный", volume: "10 440.00 руб.", plan: "2323"},
    {id: 2, adress:1, device:"Д6", contract:"Активный", volume: "10 440.00 руб.", plan: "2323"},
    {id: 3, adress:1, device:"Д6", contract:"Активный", volume: "10 440.00 руб.", plan: "2323"},
    {id: 4, adress:1, device:"Д6", contract:"Активный", volume: "10 440.00 руб.", plan: "2323"},
    {id: 5, adress:1, device:"Д6", contract:"Активный", volume: "10 440.00 руб.", plan: "2323"},
    {id: 6, adress:1, device:"Д6", contract:"Активный", volume: "10 440.00 руб.", plan: "2323"}
  ];
  return (
    <div className='flex flex-col w-full bg-white rounded gazprom-shadow h-73'>
        <div className='w-full flex justify-center rounded-t-lg gazprom-head'>Измерительные комплексы</div>
        <div className='ml-4 mr-4'>
          <div className='mt-1 mb-5'>
          <div className="scroll-table">
          <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-1 text-left text-xg font-bold"
                  >
                    Адрес
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1 text-center text-xg font-bold"
                  >
                    Прибор учета
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1 text-center text-xg font-bold"
                  >
                    Договор
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1 text-center text-xg font-bold"
                  >
                    Объём
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1 text-center text-xg font-bold"
                  >
                    План
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1 text-right text-xg font-bold"
                  >
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {complexes.map((complexe) => (
                  <tr key={complexe.id}>
                    <td className="px-6 text-left whitespace-nowrap text-sm font-medium text-gray-900">{complexe.adress}</td>
                    <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">{complexe.device}</td>
                    <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">{complexe.contract}</td>
                    <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">{complexe.volume}</td>
                    <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">{complexe.plan}</td>
                    <td className="px-6 text-right whitespace-nowrap text-sm font-medium">
                      <button className="btn btn-blue mt-2 mb-2 gazprom-button">Подробнее</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>                       
          </div>
        </div>
    </div>
  );
}