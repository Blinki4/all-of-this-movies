import React, {FC} from 'react';
import CustomButton, {ButtonVariant} from "../components/ui/CustomButton";

const LoginPage: FC = () => {
    return (
        <section className='section login'>
            <h2 className='login__title'>Войти в свою учетную запись</h2>
            <p>Чтобы пользоваться полным функционалом All Of This Movies, необходимо войти в свою учётную запись. Если у
                вас нет учётной записи, её регистрация является бесплатной и простой.
                <a className={'login__link'} href="">
                    &nbsp;Нажмите здесь
                </a>,
                чтобы начать.</p>

            <form className='login__form' action="">
                <fieldset className='login__fieldset'>
                    <label className='login__label' htmlFor="login">
                        <span>Имя пользователя</span>
                        <input id='login' type="text"/>
                    </label>
                    <label className='login__label' htmlFor="password">
                        <span>Пароль</span>
                        <input id='password' type="text"/>
                    </label>
                </fieldset>

                <div className="login__buttons">
                    <CustomButton height={'36px'} variant={ButtonVariant.primary}>Войти</CustomButton>
                    <CustomButton height={'36px'} variant={ButtonVariant.alternate}>Регистрация</CustomButton>
                </div>

            </form>

        </section>
    );
};

export default LoginPage;