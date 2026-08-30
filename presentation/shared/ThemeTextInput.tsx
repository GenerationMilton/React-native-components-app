import { View, Text, TextInput, TextInputProps } from 'react-native'
import React from 'react'

interface Props extends TextInputProps {
    className?: string;
}

const ThemeTextInput = ({ className, ...rest }: Props) => {
    return (
        <TextInput
            className='py-4 px-2 text-black dark:text-white'
            placeholderTextColor='grey'
            {...rest}
        />
    )
}

export default ThemeTextInput