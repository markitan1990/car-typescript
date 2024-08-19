import React from 'react';
import s from './textField.module.scss'
import clsx from "clsx";

export type TextFieldProps = {
    variant?: string;
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    error?: string;
    name?: string;
    rows?: number;
    [key: string]: any;
}

export const TextField = ({
                              variant,
                              placeholder,
                              type = 'text',
                              value,
                              onChange,
                              error,
                              name,
                              rows,
                              ...rest
                          }: TextFieldProps) => {
    const CommonProps = {
        placeholder,
        value,
        onChange,
        name,
        ...rest
    };

    const classNames = clsx(s.input, variant && s[variant], error && s.input_error)

    return (
        <div className={s.textField}>
            {variant === 'textarea' ? (
                <textarea
                    className={classNames}
                    rows={rows || 4}
                    {...CommonProps}
                />
            ) : (
                <input
                    className={classNames}
                    type={type}
                    {...CommonProps}
                />
            )}
            {error && <span className={s.error}>{error}</span>}
        </div>
    );
};
