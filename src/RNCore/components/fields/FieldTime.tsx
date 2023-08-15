import React from "react";
import {FontAwesome} from '@expo/vector-icons';
import {TextInput, TouchableOpacity} from "react-native";

import tw from "../../libs/tailwind";
import {Row1, RowCenter} from "../markup/markup";
import {useFieldTime} from "../../../common/customHook/useFieldTime";


interface ITimeField {
    class?: string // tailwind classes
    value: string | null // Если не задано отображаем --:--
    onChange?: (time: string) => void // событие должно вызываться при снятии фокуса с компонента.
    useButtons?: boolean // если true - отображаем кнопки "<" слева и справа ">" + или - 1 час соответственно
}

export function FieldTime(props: ITimeField) {

    const {
        inputValue,
        setInputValue,
        handleBlur,
        incrementHour,
        decrementHour,
        onFocusHandler
    } = useFieldTime(props.value, props.onChange)

    return (
        <RowCenter>
            {props.useButtons ? (
                <Row1>
                    <TouchableOpacity onPress={decrementHour}>
                        <FontAwesome name="minus" size={20} style={tw`p-2`}/>
                    </TouchableOpacity>
                    <TextInput
                        style={tw`${props.class || ''}`}
                        value={inputValue}
                        onChangeText={(text) => setInputValue(text)}
                        onBlur={() => handleBlur(inputValue)}
                        keyboardType="numeric"
                        onFocus={onFocusHandler}
                    />
                    <TouchableOpacity onPress={incrementHour}>
                        <FontAwesome name="plus" size={20} style={tw`p-2`}/>
                    </TouchableOpacity>
                </Row1>
            ) : (
                <TextInput
                    style={tw`${props.class || ''}`}
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                    onBlur={() => handleBlur(inputValue)}
                    keyboardType="numeric"
                    onFocus={onFocusHandler}
                />
            )}
        </RowCenter>
    );
}

