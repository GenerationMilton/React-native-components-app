import { View, Text, Switch, Pressable } from 'react-native'
import React from 'react'
import ThemedText from './ThemedText';

interface Props {
    text?: string;
    value: boolean;
    className?: string;

    onValueChange: (value: boolean) => void;
}

const ThemedSwitch = ({ text, value, className, onValueChange }: Props) => {
    return (<Pressable
        className={`flex flex-row items-center justify-between active:opacity-80 ${className}`}
    >
        {text && <ThemedText>{text}</ThemedText>}
        <Switch
            value={value}
            onValueChange={onValueChange}

        />

    </Pressable>)


};

export default ThemedSwitch