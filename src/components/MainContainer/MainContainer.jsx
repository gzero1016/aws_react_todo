/** @jsxImportSource @emotion/react */
import * as S from "./style";
import React, { useEffect } from 'react';
import { isSidebarShowState, isRightSubSidebarState } from "../../store/sidebarStore";
import { useRecoilState } from "recoil";

function MainContainer({ children }) {
    const [ isSidebarShow, setIsSidebarShow ] = useRecoilState(isSidebarShowState);
    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);
    
    useEffect(() => {
        return () => {
            setIsRightSubSidebar(false);
        }
    }, []);

    return (
        <div css={S.SContainer(isSidebarShow, isRightSubSidebar)}>
            { children }
        </div>
    );
}

export default MainContainer;