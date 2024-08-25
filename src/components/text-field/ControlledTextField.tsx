import React from 'react';
import {Controller} from 'react-hook-form';
import {TextField} from "./index";

interface ControlledTextFieldProps {
    control: any;
    name: string;
    errorMessage?: string;
    placeholder?: string;
    type?: string;
    variant?: string;
    rows?: number;
}

export function ControlledTextField ({
                                        control,
                                        name,
                                        errorMessage,
                                        placeholder,
                                        type,
                                        variant,
                                        rows,
                                    }: Readonly<ControlledTextFieldProps>) {
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
}
