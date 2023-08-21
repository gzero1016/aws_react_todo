/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as S from "./style";
import React from 'react';
import { isRightSubSidebarState } from "../../store/sidebarStore";

function RightSubSidebar({ children }) {
    const [ isrightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);

    return (
        <div css={S.SLayout(isrightSubSidebar)}>
            { children }
        </div>
    );
}

export default RightSubSidebar;