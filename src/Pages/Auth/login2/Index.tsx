import React from 'react';
import './login.css';
import login from '../../../assets/images/login.png';
import { useLocation, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import classNames from 'classnames';

export default function Index() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from.pathname || '/';

  interface IFormInputs {
    login: string;
    password: string;
  }

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<IFormInputs>({
    mode: 'onBlur',
  });
  console.log(errors);
  const onSub = (data) => {
    alert(JSON.stringify(data));
  };
  console.log('isValid', isValid);
  const stylesInput = 'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md';
  const stylesInputError = 'focus:ring-red-500 focus:border-red-500';

  return (
    <div className="flex items-center justify-center h-screen gazprom-baground">
      <div className="w-96 h-[450px] bg-white text-black shadow-lg shadow-white-500/40 rounded">
        <div className="flex flex-col justify-center items-center">
          <div className="mt-4">
            <img src={login} alt="" />
          </div>
          <form className="w-full pl-8 pr-8" onSubmit={handleSubmit(onSub)}>
            <div className="mt-4">
              <div className="flex flex-col justify-between mt-1">
                <label htmlFor="email" className="block text-sm text-left font-medium text-gray-700">
                  Введите логин
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    className={classNames(stylesInput, { 'focus:ring-red-500 focus:border-red-500': !isValid })}
                    placeholder="ИНН"
                    defaultValue=""
                    {...register('login', {
                      required: 'Поле не может быть пустым',
                      pattern: {
                        value: /[0-9]{10,10}/,
                        message: 'ИНН юр.лица только 10 цифр',
                      },
                    })}
                  />
                </div>
                <div className="error">{errors.login && <div>{errors.login.message || 'Ошибка'}</div>}</div>
              </div>
              <div className="flex flex-col justify-between mt-4">
                <label htmlFor="email" className="block text-sm text-left font-medium text-gray-700">
                  Введите пароль
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Пароль"
                    defaultValue=""
                    {...register('password', {
                      required: 'Поле не может быть пустым',
                      minLength: {
                        value: 5,
                        message: 'Не менее 5 символов',
                      },
                    })}
                  />
                </div>
                <div className="error">{errors.password && <div>{errors.password.message || 'Ошибка'}</div>}</div>
              </div>
            </div>
            <div className="mt-8 mb-2">
              <button className="btn btn-blue text-center gazprom-button w-[170px]">Войти</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
