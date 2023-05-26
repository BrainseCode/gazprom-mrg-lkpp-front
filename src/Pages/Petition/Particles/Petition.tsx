import React from 'react';
import './petition.css';
import { Fragment } from 'react';
import { Tab } from '@headlessui/react';

export default function UpdateApplications() {
  const tabs = [
    {
      name: 'Заявки о заключении договора ТП',
      features: [
        {
          name: 'Adaptive and modular',
          description:
            'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg',
          imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
        },
      ],
    },
    {
      name: 'Заявки на изменение годового объема',
      features: [
        {
          name: 'Natural wood options',
          description:
            'Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material, or match similar woods for a calm and cohesive look. Every base is hand sanded and finished.',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg',
          imageAlt: 'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
        },
      ],
    },
    {
      name: 'Заявки на вызов метролога',
      features: [
        {
          name: 'Helpful around the home',
          description:
            "Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more. We can't wait to see how you'll use it!",
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg',
          imageAlt: 'Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.',
        },
      ],
    },
    {
      name: 'Заявки на изменение данных',
      features: [
        {
          name: "Everything you'll need",
          description:
            'The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items. Expand your set with the drink coaster and headphone stand add-ons.',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg',
          imageAlt: 'Walnut organizer system on black leather desk mat on top of white desk.',
        },
      ],
    },
    {
      name: 'Прочие заявки',
      features: [
        {
          name: "Everything you'll need",
          description:
            'The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items. Expand your set with the drink coaster and headphone stand add-ons.',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg',
          imageAlt: 'Walnut organizer system on black leather desk mat on top of white desk.',
        },
      ],
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="flex flex-col w-full bg-white rounded gazprom-shadow h-73">
      <div className="w-full flex justify-center rounded-t-lg gazprom-head">Обработка заявок</div>
      <div className="ml-4 mr-4">
        <div className="mt-1 mb-5">
          <div className="bg-white">
            <section aria-labelledby="features-heading">
              <Tab.Group as="div" className="mt-4">
                <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                  <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                    <Tab.List className="-mb-px flex space-x-10">
                      {tabs.map((tab) => (
                        <Tab
                          key={tab.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? 'border-indigo-500 text-indigo-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                              'whitespace-nowrap border-b-2 py-6 text-sm font-medium',
                            )
                          }
                        >
                          {tab.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                </div>
                <Tab.Panels as={Fragment}>
                  {tabs.map((tab) => (
                    <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                      {tab.features.map((feature) => (
                        <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                          <div className="mt-6 lg:col-span-5 lg:mt-0">
                            <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                            <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                          </div>
                          <div className="lg:col-span-7">
                            <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 sm:aspect-w-5 sm:aspect-h-2">
                              <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
