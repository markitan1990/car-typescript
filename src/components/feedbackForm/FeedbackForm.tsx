import s from './feedbackForm.module.scss';
import React, {useRef, useState} from 'react';
import axios from 'axios';
import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '../button';
import {ControlledTextField} from '../textField/ControlledTextField';
import {Icon} from '../icon';

type Props = {
    isOpen: boolean;
    handleContentClick?: (e: React.MouseEvent) => void;
    closeFormModal: () => void;
};

export type FormValues = z.infer<typeof loginSchema>;

const loginSchema = z.object({
    name: z.string().min(3).max(30),
    email: z.string().email(),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
    message: z.string().min(10).max(500),
});

export const FeedbackForm = ({isOpen, handleContentClick, closeFormModal}: Props) => {
    const [submitted, setSubmitted] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    const {
        control,
        formState: {errors},
        handleSubmit,
        reset,
    } = useForm<FormValues>({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
        },
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: any) => {
        console.log(data);
        setSubmitted(true);
        reset();
        try {
            await axios.post('/api/submit-form', data);
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        } finally {
            setSubmitted(true);
        }
    };

    const closeModal = () => {
        closeFormModal();
        reset();
        setSubmitted(false);
    };

    return (
        <div
            className={`${s.login_box} ${isOpen ? s.active : ''} ${submitted ? s.submitted : ''}`}
            onClick={handleContentClick}
        >
            {submitted ? (
                <div className={s.message_box}>
                    <Icon iconId={'ok'} height={'71'} width={'71'} viewBox={'0 0 80 80'}/>
                    <div className={s.message}>
                        <h1>Спасибо за обращение!</h1>
                        <span>Ваша заявка принята, мы вскоре с вами свяжемся</span>
                        <Button value={'Закрыть'} onClick={closeModal} variant={'primary2'}/>
                    </div>
                </div>
            ) : (
                <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.cross} onClick={closeModal}></div>
                    <div className={s.user_box}>
                        <h1 className={s.title_form}>Мы с вами свяжемся</h1>
                        <ControlledTextField
                            control={control}
                            errorMessage={errors.name?.message}
                            placeholder={'Ваше имя'}
                            name={'name'}
                            type={'text'}
                        />
                        <ControlledTextField
                            control={control}
                            errorMessage={errors.email?.message}
                            placeholder={'Email'}
                            name={'email'}
                            type={'email'}
                        />
                        <ControlledTextField
                            control={control}
                            errorMessage={errors.phone?.message}
                            placeholder={'Ваш номер'}
                            name={'phone'}
                            type={'tel'}
                        />
                        <ControlledTextField
                            control={control}
                            name={'message'}
                            placeholder={'Напишите сообщение...'}
                            errorMessage={errors.message?.message}
                            variant={'textarea'}
                        />
                        <Button value={'Отправить сообщение'} type="submit" variant={'primary2'}/>
                    </div>
                </form>
            )}
        </div>
    );
};
