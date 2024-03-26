import React, { useState } from 'react';
import axios from 'axios';
import "./calc.css"

const Calculator: React.FC = () => {
    const [formData, setFormData] = useState({
        year: '1',
        price: '',
        engine: '0',
        face: '0',
        volume: '',
        fuel: '0',
        discount: true,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement; // Утверждение типа для доступа к 'checked'
        const { name, value, type, checked } = target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData((prevData) => ({ ...prevData, [name]: newValue }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8080/api/calc-fee', formData);
            console.log('Данные успешно отправлены!');
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
    };

    return (
        <div className="uk-card">
            <div className='calc-uk-card'>
                <h2 className="uk-text-center">Калькулятор на 2024 год</h2>
                <form className="uk-form-stacked" onSubmit={handleSubmit}>
                    <label className="uk-form-label" htmlFor="year">
                        Возраст авто
                    </label>
                    <select className="uk-select" name="year" value={formData.year} onChange={handleChange}>
                        <option value="0">менее 3-х лет</option>
                        <option value="1">от 3-х до 5 лет</option>
                        <option value="2">более 5 лет</option>
                        <option value="3">более 7 лет</option>
                    </select>

                    <label className="uk-form-label" htmlFor="price">
                        Стоимость авто
                    </label>
                    <input
                        placeholder="в евро"
                        className="uk-input"
                        type="number"
                        min="1"
                        name="price"
                        id="price"
                        required
                        value={formData.price}
                        onChange={handleChange}
                    />

                    <div className="uk-form-label">Тип двигателя</div>

                    <label>
                        <input
                            className="uk-radio"
                            type="radio"
                            name="engine"
                            value="0"
                            checked={formData.engine === '0'}
                            onChange={handleChange}
                        />
                        Топливо
                    </label>
                    <label>
                        <input
                            className="uk-radio"
                            type="radio"
                            name="engine"
                            value="1"
                            checked={formData.engine === '1'}
                            onChange={handleChange}
                        />
                        Электро
                    </label>

                    <div className="uk-form-label uk-margin-remove-bottom">Авто растамаживает</div>
                    <label>
                        <input
                            className="uk-radio"
                            type="radio"
                            name="face"
                            value="0"
                            checked={formData.face === '0'}
                            onChange={handleChange}
                        />
                        Физ.лицо
                    </label>
                    <br />
                    <label>
                        <input
                            className="uk-radio"
                            type="radio"
                            name="face"
                            value="1"
                            checked={formData.face === '1'}
                            onChange={handleChange}
                        />
                        Юр.лицо
                    </label>
                    <div className="uk-form-label uk-margin-remove-bottom">Объем, см³</div>

                    <input
                        className="uk-input uk-form-small"
                        type="number"
                        min="1"
                        name="volume"
                        placeholder="напр. 2000"
                        onChange={handleChange}
                    />

                    <div className="uk-form-label uk-margin-remove-bottom">Вид топлива</div>

                    <label>
                        <input
                            className="uk-radio"
                            type="radio"
                            name="fuel"
                            value="0"
                            checked={formData.fuel === '0'}
                            onChange={handleChange}
                        />
                        Бензин
                    </label>
                    <br />
                    <label>
                        <input
                            className="uk-radio"
                            type="radio"
                            name="fuel"
                            value="1"
                            checked={formData.fuel === '1'}
                            onChange={handleChange}
                        />
                        Дизель
                    </label>

                    <div className="uk-margin uk-text-center">
                        <label>
                            <input
                                id="calc_discount"
                                className="uk-checkbox"
                                name="discount"
                                type="checkbox"
                                checked={formData.discount}
                                onChange={handleChange}
                            />
                            Таможенная льгота 50% (Указ №140)
                        </label>

                        <div className="uk-text-center">
                            <a href="#scroll_calc_rezult" uk-scroll="">
                                <input
                                    id="calc_btn"
                                    title="Рассчитать таможенную пошлину на авто"
                                    className="uk-button"
                                    value="Рассчитать"
                                    type="submit"
                                />
                            </a>
                        </div>
                    </div>
                </form>
            </div>
            <div className='calc-result'></div>
        </div>
    );
};

export default Calculator;
