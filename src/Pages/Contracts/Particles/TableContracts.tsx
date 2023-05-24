import React from 'react';
import './tableContracts.css';

function TableContracts() {
  let prof = [
    {id:1, number:1, type:"Д6", status:"Активный", debt: "10 440.00 руб."},
    {id:2, number:1, type:"Д6", status:"Активный", debt: "10 440.00 руб."},
    {id:3, number:1, type:"Д6", status:"Активный", debt: "10 440.00 руб."},
    {id:4, number:1, type:"Д6", status:"Активный", debt: "10 440.00 руб."},
    {id:5, number:1, type:"Д6", status:"Активный", debt: "10 440.00 руб."},
    {id:6, number:1, type:"Д6", status:"Активный", debt: "10 440.00 руб."}
  ];
  return (
    <div className='flex flex-col w-full bg-white rounded gazprom-shadow h-73'>
        <div className='w-full flex justify-center rounded-t-lg gazprom-head'>Договоры</div>
        <div className='ml-4 mr-4'>
          <div className='mt-1 mb-5'>
          <div className="scroll-table">
          <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xg font-bold"
                  >
                    Номер
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-center text-xg font-bold"
                  >
                    Тип
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-center text-xg font-bold"
                  >
                    Статус
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-center text-xg font-bold"
                  >
                    Задолженность
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-right text-xg font-bold"
                  >
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {prof.map((person) => (
                  <tr key={person.id}>
                    <td className="px-6 whitespace-nowrap text-left text-sm font-medium text-gray-900">{person.number}</td>
                    <td className="px-6 whitespace-nowrap text-center text-sm text-gray-500">{person.type}</td>
                    <td className="px-6 whitespace-nowrap text-center text-sm text-gray-500">{person.status}</td>
                    <td className="px-6 whitespace-nowrap text-center text-sm text-gray-500">{person.debt}</td>
                    <td className="px-6 whitespace-nowrap text-right text-sm font-medium">
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

export default TableContracts;