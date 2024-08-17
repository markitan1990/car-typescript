import s from './feedbackForm.module.scss';
import React, {useState} from 'react';
import axios from 'axios';

type Props = {
    isOpen: boolean;
}

export const FeedbackForm = ({isOpen}: Props) => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await axios.post('https://drive-hub.online/api/submit-form', formData);
            setSubmitted(true);
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    };

    return (
            <div className={`${s.login_box} ${isOpen ? s.active : ''}`}>
                {submitted ?
                    <h2>Ожидайте звонка, наш специалист с вами свяжется</h2>
                    :
                    <form onSubmit={handleSubmit}>
                        <div className={s.user_box}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label>Имя</label>
                        </div>
                        <div className={s.user_box}>
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
            </div>
    );
}