import { css } from "@emotion/react";

// 모든 페이지들이 들고있는 css 설정
export const GSCommon = css`
    * {
        box-sizing: border-box;
        color: #333;
    }

    *::-webkit-scrollbar {
        border: none;
        width: 5px;
    }
    
    *::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #dbdbdb;
    }

    html {
        background-color: #bbd2bd;
    }
`;