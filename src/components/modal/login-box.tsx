import './style.css';
import React, { useState } from 'react';
import axios from 'axios'; // Импорт Axios

function H2Text({ valueText }: { valueText: string }) {
    return <h2>{valueText}</h2>;
}

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
    });
    const [submitted, setSubmitted] = useState(false); // Добавили состояние для отслеживания успешной отправки

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8080/api/submit-form', formData);
            setSubmitted(true); // Устанавливаем состояние успешной отправки
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <>
            {submitted ? <H2Text valueText={"Ожидайте звонка, наш специалист с вами свяжется"} /> :
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <label>Имя</label>
                    </div>
                    <div className="user-box">
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                        <label>Номер</label>
                    </div>
                    <button type="submit">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        ОТПРАВИТЬ
                    </button>
                    {submitted ? null : <p>Попробуйте еще раз</p>}
                </form>
            }
        </>
    );
}
export function LoginBox() {
    return (
        <>
            <div className='login-box'>
                {/* <H2Text valueText={"Мы с вами свяжемся"} /> */}
                <Form />
            </div>
        </>
    );
}