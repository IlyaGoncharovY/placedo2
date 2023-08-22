import {useState} from "react";

/**
 * custom hook for FieldTime
 * @param value
 * @param onChange
 */
export const useFieldTime = (value: string | null, onChange: ((time: string) => void) | undefined) => {

    const [inputValue, setInputValue] = useState<string>(value || '--:--')
    const [hh, setHH] = useState<string>('00')
    const [mm, setMM] = useState<string>('00')

    const formatValue = (hours: string, minutes: string) => {
        return `${hours}:${minutes}`
    }

    const updateTime = (hours: string, minutes: string) => {
        setInputValue(formatValue(hours, minutes))
        if (onChange) {
            onChange(formatValue(hours, minutes))
        }
    }

    const handleBlur = (blurValue: string) => {
        if (blurValue === '') {
            setInputValue('--:--')
        } else if (blurValue === '--:--' || blurValue === formatValue('00', '00')) {
            setInputValue(formatValue('00', '00'))
        } else {
            const regex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
            const matches = blurValue.match(regex)
            if (matches) {
                const newHH = matches[1]
                const newMM = matches[2]
                setHH(newHH)
                setMM(newMM)
                updateTime(newHH, newMM)
            }
        }
    }

    const onFocusHandler = () => {
        if (inputValue === '--:--') {
            setInputValue('')
        }
    }

    const updateHour = (offset: number) => {
        let newHH = (parseInt(hh, 10) + offset) % 24;
        if (newHH < 0) {
            newHH = 23;
        }
        setHH(newHH.toString().padStart(2, '0'));
        updateTime(newHH.toString().padStart(2, '0'), mm);
    }

    const incrementHour = () => {
        updateHour(1)
    }

    const decrementHour = () => {
        updateHour(-1)
    }

    return {
        inputValue,
        setInputValue,
        handleBlur,
        incrementHour,
        decrementHour,
        onFocusHandler
    }
}