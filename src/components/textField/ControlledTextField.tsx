import React from 'react';
import {Controller} from 'react-hook-form';
import {TextField} from './TextField';

type ControlledTextFieldProps = {
    control: any; // Тип для контроля форм из React Hook Form
    name: string;
    errorMessage?: string;
    placeholder?: string;
    type?: string;
    variant?: string;
    rows?: number;
}

export const ControlledTextField = ({
                                        control,
                                        name,
                                        errorMessage,
                                        placeholder,
                                        type,
                                        variant,
                                        rows,
                                    }: ControlledTextFieldProps) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({field}) => (
                <TextField
                    {...field}
                    variant={variant}
                    type={type}
                    placeholder={placeholder}
                    error={errorMessage}
                    rows={rows}
                />
            )}
        />
    );
};
