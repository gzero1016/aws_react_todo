/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from "./style";
import { HiMenu, HiSearch } from "react-icons/hi";

function Header({ menuToggleOnClick }) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <h1 css={S.STitle}>Menu</h1>
                <button css={S.SToggleButton} onClick={menuToggleOnClick}><HiMenu /></button>
            </div>
            <div css={S.SSearchBox}>
                <HiSearch css={S.SSearchIcon}/>
                <input css={S.SSearchInput} type="search"/>
            </div>
        </div>
    );
}

export default Header;