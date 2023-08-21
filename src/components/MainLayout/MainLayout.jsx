/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
import * as S from "./style";
import MainSidebar from "../MainSidebar/MainSidebar";
import RightSubSidebar from "../RightSubSidebar/RightSubSidebar";

function MainLayout({ children }) {
    return (
        <div css={S.SLayout}>
            <MainSidebar />
            {children}
            <RightSubSidebar />
        </div>
    );
}

export default MainLayout;