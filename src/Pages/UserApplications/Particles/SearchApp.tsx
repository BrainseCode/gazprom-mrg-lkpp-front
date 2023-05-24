import  { useState } from 'react';
import './searchApp.css';

export default function SearchApp() {

  let app = [
    {id: 1, document: "12323", date: "01.06.2023", status:"Активный", action: ""},
    {id: 2, document: "121312", date: "04.06.2023", status:"Активный", action: ""},
    {id: 3, document: "123123", date: "06.06.2023", status:"Активный", action: ""},
  ];

  const date = new Date();
  const futureDate = date.getDate() - 1;
  date.setDate(futureDate);
  const defaultValue = date.toLocaleDateString('en-CA');

  const queryArh = () => {
    console.log('Запрос архива с бэка');
    alert('Запрос архива с бэка');
  };

  const mmArh = () => {
    queryArh();
  };

  const nnArh = () => {
    const date = new Date();
    const futureDate = date.getDate() - 7;
    date.setDate(futureDate);
    const val = date.toLocaleDateString('en-CA');

    queryArh();
  };

  const ddArh = () => {
    const date = new Date();
    const futureDate = date.getDate() - 1;
    date.setDate(futureDate);
    const val = date.toLocaleDateString('en-CA');

    queryArh();
  };

  return (
    <div className="flex flex-col w-full bg-white rounded gazprom-shadow h-73">
      <div className="w-full flex justify-center rounded-t-lg gazprom-head">
        Обращения
      </div>
      <div className="ml-4 mr-4">
        <div className="mt-1 mb-5">
          <div className="flex justify-start">
            <div>
              <input
                type="date"
                name="date1"
                id="date1"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                defaultValue={defaultValue}
              />
            </div>
            <div className="ml-2">
              <input
                type="date"
                name="date2"
                id="date2"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                defaultValue={defaultValue}
              />
            </div>
            <div className="ml-2">
              <button className="btn btn-blue gazprom-button" onClick={ddArh}>
                День
              </button>
            </div>
            <div className="ml-2">
              <button className="btn btn-blue gazprom-button" onClick={nnArh}>
                Неделя
              </button>
            </div>
            <div className="ml-2">
              <button className="btn btn-blue gazprom-button" onClick={mmArh}>
                Месяц
              </button>
            </div>
          </div>
        </div>
        <div className="mt-1 mb-5">
        <div className="scroll-table">
          <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-1 text-left text-xg font-bold"
                  >
                    Документ
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1 text-center text-xg font-bold"
                  >
                    Дата
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1 text-center text-xg font-bold"
                  >
                    Статус
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
                {app.map((app) => (
                  <tr key={app.id}>
                    <td className="px-6 text-left whitespace-nowrap text-sm font-medium text-gray-900">{app.document}</td>
                    <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">{app.date}</td>
                    <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">{app.status}</td>
                    <td className="px-6 text-right whitespace-nowrap text-sm font-medium">
                      <button className="btn btn-blue mb-1">Подробнее</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-2">
                <div className="mr-2">
                </div>
                <div>
                    <button className="btn btn-blue mr-4">Создать обращение</button>
                </div>
            </div>                   
        </div>
      </div>
    </div>
  );
}