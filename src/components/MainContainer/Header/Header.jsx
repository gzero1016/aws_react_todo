/** @jsxImportSource @emotion/react */
import * as S from "./style";
import React from 'react';

function Header({ title, count }) {
    return (
        <div css={S.SLayout}>
            <h1 css={S.STitle}>{ title }</h1>
            <div css={S.SCountBOx}>{ count }</div>
        </div>
    );
}

export default Header;