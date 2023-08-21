import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    padding: 15px 20px;
    width: 100%;
    background-color: transparent;
    cursor: pointer;
`;

export const SIcon = css`
    margin-right: 20px;
    /* 하위에 모든 것을 바꿔라 */
    & * {
        color: #aaa;
    }
    `;

export const SName = css`
    font-weight: 600;
    color: #aaa;
`;