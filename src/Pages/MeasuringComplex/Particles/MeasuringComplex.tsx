import React from 'react';
import './measuringComplex.css';

export default function MeasuringComplex() {
  let complexes = [
    {id: 1, address:"Улица Ленина 43", device:"8232",  contract: "№746647", volume: "565.00", plan: "565.00"},
    {id: 2, address:"Улица Пушкина 43", device:"8020",  contract: "№746647", volume: "565.00", plan: "565.00"},
    {id: 3, address:"Улица Достоевского 43", device:"7200",  contract: "№746647", volume: "565.00", plan: "565.00"}
  ];
  return (
    <div className='flex flex-col w-full bg-white rounded gazprom-shadow'>
        <div className='w-full flex justify-center rounded-t-lg gazprom-head'>Измерительные комплексы</div>
        <div className='ml-4 mr-4'>
          <div className='mt-1 mb-5'>
          <table className="min-w-full divide-y divide-gray-200 table-fixed">
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
                    Прибор учёта
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
                    Объем м3
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1 text-right text-xg font-bold"
                  >
                    План
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {complexes.map((complexe) => (
                  <tr key={complexe.id}>
                    <td className="px-6 pt-4 pb-4 text-left whitespace-nowrap text-sm font-medium text-gray-900">{complexe.address}</td>
                    <td className="px-6 pt-4 pb-4 text-center whitespace-nowrap text-sm text-gray-500">{complexe.device}</td>
                    <td className="px-6 pt-4 pb-4 text-center whitespace-nowrap text-sm text-gray-500">{complexe.contract}</td>
                    <td className="px-6 pt-4 pb-4 text-center whitespace-nowrap text-sm text-gray-500">{complexe.volume}</td>
                    <td className="px-6 pt-4 pb-4 text-right whitespace-nowrap text-sm text-gray-500">{complexe.plan}</td>
                  </tr>
                ))}
              </tbody>
            </table>                    
          </div>
        </div>
    </div>
  );
}