import styled from "styled-components";

const StakeCountWrapper = styled.div`
    margin-bottom: 20px;

    .error_message {
        width: 100%;
        text-align: right;
        font-size: 12px;
        color: red;
        margin-top: 5px;
    }

    .miner-container {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;

        .tooltip_header_text {
            flex: 1.5;
            display: flex;
            align-items: center;
            font-size: 16px;
            h3 {
                margin-right: 5px;
            }
            .tooltip {
                display: flex;
                align-items: center;
            }
        }

        .count_input {
            width: 80px;
            height: 40px;
            padding: 0 10px;
            border: 2px solid #fff;
            border-radius: 20px;
            font-size: 16px;
            outline: none;
            background-color: #2c1b0a;
            color: #fff;
            text-align: center;

            &:focus {
                border-color: #FE9C01;
                box-shadow: 0 0 4px #FE9C01;
            }
        }

        .max_button {
            height: 40px;
            padding: 0 15px;
            background-color: #FE9C01;
            border: none;
            border-radius: 20px;
            font-weight: bold;
            color: #2c1b0a;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;

            &:hover {
                background-color: #ffb74d;
                transform: scale(1.05);
            }

            &:active {
                transform: scale(0.98);
            }

            &:disabled {
                background-color: #a56b3c;
                cursor: not-allowed;
            }
        }
    }
`;

export default StakeCountWrapper;