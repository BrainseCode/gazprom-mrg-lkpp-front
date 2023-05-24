import React from 'react';
import './calorieArchive.css';

export default function CalorieArchive() {
  let complexes = [
    {id: 1, date:"1 июня", calorie:"8 000",  pasport: "№746647"},
    {id: 2, date:"1 июня", calorie:"8 000",  pasport: "№746647"},
    {id: 3, date:"1 июня", calorie:"8 000",  pasport: "№746647"},
    {id: 4, date:"1 июня", calorie:"8 000",  pasport: "№746647"},
    {id: 5, date:"1 июня", calorie:"8 000",  pasport: "№746647"},
  ];
  return (
    <div className='flex flex-col w-full bg-white rounded gazprom-shadow'>
        <div className='w-full flex justify-center rounded-t-lg gazprom-head'>Архив калорийности</div>
        <div className='ml-4 mr-4'>
          <div className='mt-1 mb-5'>
          <table className="min-w-full divide-y divide-gray-200 table-fixed">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-1 text-left text-xg font-bold"
                  >
                    Дата
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1 text-center text-xg font-bold"
                  >
                    Калорийность
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1 text-center text-xg font-bold"
                  >
                    Паспорт качества
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1 text-right text-xg font-bold"
                  >
                    
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {complexes.map((complexe) => (
                  <tr key={complexe.id}>
                    <td className="px-6 text-left whitespace-nowrap text-sm font-medium text-gray-900">{complexe.date}</td>
                    <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">{complexe.calorie}</td>
                    <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">{complexe.pasport}</td>
                    <td className="px-6 text-right whitespace-nowrap text-sm text-gray-500">
                      <button className="btn btn-blue mb-1">Скачать</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>                    
          </div>
        </div>
    </div>
  );
}