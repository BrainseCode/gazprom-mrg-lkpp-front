import React from 'react';
import './petition.css';


export default function UpdateApplications() {

  const tabs = [
    { name: 'О заключении договора ТП', href: '#', current: true },
    { name: 'Изменение годового объема', href: '#', current: false },
    { name: 'Вызов метролога', href: '#', current: false },
    { name: 'Прочее', href: '#', current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  
  return (
    <div className='flex flex-col w-full bg-white rounded gazprom-shadow h-73'>
        <div className='w-full flex justify-center rounded-t-lg gazprom-head'>Обработка заявок</div>
        <div className='ml-4 mr-4'>
          <div className='mt-1 mb-5'>
          <div>
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>
              {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
              <select
                id="tabs"
                name="tabs"
                className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                defaultValue={tabs[0].name}
              >
                {tabs.map((tab) => (
                  <option key={tab.name}>{tab.name}</option> 
                ))}
              </select>
            </div>
            <div className="hidden sm:block">
              <nav className="flex space-x-4" aria-label="Tabs">
                {tabs.map((tab) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    className={classNames(
                      tab.current ? 'bg-gray-100 text-gray-700' : 'text-gray-500 hover:text-gray-700',
                      'px-3 py-2 font-medium text-sm rounded-md'
                    )}
                    aria-current={tab.current ? 'page' : undefined}
                  >
                    {tab.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}