import React from "react";
import {Text} from "react-native";

import {EDate} from "./src/RNCore/sugar/date";
import {Col1} from "./src/RNCore/components/markup/markup";
import {FieldTime} from "./src/RNCore/components/fields/FieldTime";

export default function App() {
    return (
        <Col1 class={'m-5'}>
            <Text>Привет! Ниже должно быть по больше примеров использования готового компонента. </Text>
            <Text>Разной ширины, с разным фоном и цветом шрифта</Text>
            <FieldTime
                class={`mt-2 bg-primary`}
                value={null}
                onChange={(time) => console.log(`first input changed: ${time}`)}
                useButtons={true}
            />
            <FieldTime
                class={`mt-2 bg-event_fail`}
                value={new EDate().isoDate()}
                onChange={(time) => console.log(`second input changed: ${time}`)}
                useButtons={true}
            />
            <FieldTime
                class={`w-42 mt-2 bg-success text-white font-bold`}
                value={null}
                onChange={(time) => console.log(`third input changed: ${time}`)}
                useButtons={true}
            />
            <FieldTime
                class={'w-52 mt-2 bg-alphaBlack text-warning text-2xl font-semibold'}
                value={null}
                onChange={(time) => console.log(`fourth input changed: ${time}`)}
                useButtons={true}
            />
            <FieldTime
                class={'w-62 mt-2 bg-event_presale italic'}
                value={null}
                onChange={(time) => console.log(`fifth input changed: ${time}`)}
                useButtons={false}
            />
        </Col1>
    );
}
