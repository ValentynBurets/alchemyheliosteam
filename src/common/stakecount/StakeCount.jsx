import React, { useEffect, useState } from "react";
import StakeCountWrapper from "./StakeCount.style";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Tooltip from "../tooltip";

import { STAKE_MAX_VALUES, DEFAULT_MAX_BUTTON_VALUE, ERROR_MESSAGES } from "./constants";

const StakeCount = ({
    title,
    max,
    min,
    active,
    tooltip,
    onChangeHandler,
    type,
    checksuccess
}) => {
    const [inputValue, setInputValue] = useState(0);
    const [inputType, setInputType] = useState(type);
    const [checkSuccess, setCheckSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setCheckSuccess(true);
    }, [checksuccess]);

    useEffect(() => {
        if (checkSuccess) setInputValue(0);
    }, [checkSuccess]);

    useEffect(() => {
        setInputType(type);
    }, [type]);

    const handleKeyDown = (e) => {
        setCheckSuccess(false);
        if (e.keyCode === 8 || e.key === "BackSpace") setInputValue('');
    };

    const handleInputChange = (e) => {
        setCheckSuccess(false);
        const value = e.target.value;

        if (inputType !== "stakePower" && (value.includes('.') || value.includes(' '))) {
            setInputValue("1");
            setErrorMessage(ERROR_MESSAGES.invalidDotOrSpace);
            return;
        } else {
            setErrorMessage('');
        }

        let maxValue = STAKE_MAX_VALUES[inputType] || parseFloat(max);

        if (value > maxValue) setInputValue(maxValue);
        else if (value < min) setInputValue(min);
        else setInputValue(value);
    };

    const maxButtonClicked = () => {
        setCheckSuccess(false);
        setInputValue(DEFAULT_MAX_BUTTON_VALUE);
    };

    useEffect(() => {
        onChangeHandler && onChangeHandler(type, inputValue);
    }, [inputValue, type]);

    return (
        <StakeCountWrapper>
            <div className="miner-container">
                <div className="tooltip_header_text">
                    <h3>{title}</h3>
                    <Tooltip text={tooltip}>
                        <AiOutlineQuestionCircle />
                    </Tooltip>
                </div>
                <input
                    type="number"
                    className="count_input"
                    min={min}
                    max={max}
                    step="1"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                {active == 1 && (
                    <button className="max_button" onClick={maxButtonClicked}>
                        MAX
                    </button>
                )}
            </div>
            {errorMessage && <div className='error_message'><p>{errorMessage}</p></div>}
        </StakeCountWrapper>
    );
};

export default StakeCount;