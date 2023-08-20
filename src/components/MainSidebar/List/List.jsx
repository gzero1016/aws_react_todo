/** @jsxImportSource @emotion/react */
import React from 'react';
import { HiCalendar } from "react-icons/hi";
import * as S from "./style";

function List({ title }) {
    return (
        <div css={S.SLayout}>
            <h2 css={S.STitle}>{ title }</h2>
            <ul css={S.SListContainer}>
                <li css={S.SListBox(true)}>
                    <HiCalendar />
                    <span css={S.SListName(true)}>Calendar</span>
                    <div css={S.SCount(true)}>12</div>
                </li>
                <li css={S.SListBox(false)}>
                    <HiCalendar />
                    <span css={S.SListName(false)}>Calendar</span>
                    <div css={S.SCount(false)}>1</div>
                </li>
            </ul>
        </div>
    );
}

export default List;