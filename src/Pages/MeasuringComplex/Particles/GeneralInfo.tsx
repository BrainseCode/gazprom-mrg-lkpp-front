import React from 'react';
import './generalInfo.css';

export default function GeneralInfo() {
  let complexes = {
      meterName: 'Крутой счётчик',
      meterNumber: 'Т64',
      meterType: 'blank',
      meterDate: '22.09.2023',

      manometerName: 'Крутой Манометр',
      manometerNumber: 'ИЛ-76',
      manometerType: 'blank',
      manometerDate: '22.09.2023',

      thermometerName: 'Крутой Термометр',
      thermometerNumber: 'Т64',
      thermometerType: 'blank',
      thermometerDate: '22.09.2023',

      calculatorName: 'Крутой вычислитель',
      calculatorNumber: 'Т64y',
      calculatorType: 'blanku',
      calculatorDate: '22.09.2023',

      powerName: 'Крутой БП',
      powerNumber: 'Т64x',
      powerType: 'blank2',
      powerDate: '22.08.2023',
    };

  return (
    <div className="flex flex-col w-full bg-white rounded gazprom-shadow">
      <div className="w-full flex justify-center rounded-t-lg gazprom-head">
        Общая информация
      </div>
      <div className="ml-4 mr-4">
        <div className="mt-2 mb-2">
          <div className="flex justify-between flex-wrap">

            <div className='w-96 mt-2 mb-2 gazprom-shadow rounded-lg'>
              <div className='flex justify-center rounded gazprom-head mb-2'>Счётчик</div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Наименование
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.meterName}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Номер
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="number"
                    id="number"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.meterNumber}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Типоразмер
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="type"
                    id="type"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.meterType}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2 pb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Дата поверки
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="date"
                    id="date"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.meterDate}
                  />
                </div>
              </div>
            </div>

            <div className='w-96 mt-2 mb-2 gazprom-shadow rounded-lg'>
              <div className='flex justify-center rounded gazprom-head mb-2'>Манометр</div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Наименование
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.manometerName}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Номер
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="number"
                    id="number"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.manometerNumber}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Типоразмер
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="type"
                    id="type"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.manometerType}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2 pb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Дата поверки
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="date"
                    id="date"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.manometerDate}
                  />
                </div>
              </div>
            </div>

            <div className='w-96 mt-2 mb-2 gazprom-shadow rounded-lg'>
              <div className='flex justify-center rounded gazprom-head mb-2'>Термометр</div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Наименование
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.thermometerName}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Номер
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="number"
                    id="number"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.thermometerNumber}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Типоразмер
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="type"
                    id="type"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.thermometerType}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2 pb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Дата поверки
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="date"
                    id="date"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.thermometerDate}
                  />
                </div>
              </div>
            </div>

            <div className='w-96 mt-2 mb-2 gazprom-shadow rounded-lg'>
              <div className='flex justify-center rounded gazprom-head mb-2'>Вычислитель</div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Наименование
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.calculatorName}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Номер
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="number"
                    id="number"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.calculatorNumber}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Типоразмер
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="type"
                    id="type"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.calculatorType}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2 pb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Дата поверки
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="date"
                    id="date"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.calculatorDate}
                  />
                </div>
              </div>
            </div>

            <div className='w-96 mt-2 mb-2 gazprom-shadow rounded-lg'>
              <div className='flex justify-center rounded gazprom-head mb-2'>Блок питания</div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Наименование
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.powerName}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Номер
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="number"
                    id="number"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.powerNumber}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Типоразмер
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="type"
                    id="type"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.powerType}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between mt-1 pl-2 pr-2 pb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Дата поверки
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="date"
                    id="date"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={complexes.powerDate}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
