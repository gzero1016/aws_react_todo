/** @jsxImportSource @emotion/react */
import * as S from "./style";
import React from 'react';
import { FaChevronRight } from "react-icons/fa";
import { isRightSubSidebarState } from "../../../store/sidebarStore";
import { useRecoilState } from "recoil";

function TaskList({ target, setTarget }) {
    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);

    const handleOpenClick = (e) => {
        if(target === e.target) {
            setIsRightSubSidebar(false);
            setTarget(null);
        }else if (target === null) {
            setIsRightSubSidebar(true);
            setTarget(e.target);
        }else {
            setTarget(e.target);
        }
    }

    const handleCheckBoxClick = (e) => {
        // 버블링 방지 (상위에서 발생된 onClick 이벤트를 막아주는것)
        e.stopPropagation();
    }

    return (
        <ul css={S.SLayout}>
            <li css={S.SListBox} onClick={handleOpenClick}>
                <div css={S.SListContent}>
                    <input css={S.SCheckBox} type="checkbox" onClick={handleCheckBoxClick}/>
                    <span>Research content ideas</span>
                </div>
                <FaChevronRight />
            </li>

        </ul>
    );
}

export default TaskList;