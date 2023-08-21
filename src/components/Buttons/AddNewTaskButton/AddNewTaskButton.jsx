/** @jsxImportSource @emotion/react */
import * as S from "./style";
import React from 'react';
import { FaPlus } from "react-icons/fa";
import { isRightSubSidebarState } from "../../../store/sidebarStore";
import { useRecoilState } from "recoil";

function AddNewTaskButton(props) {
    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);

    const handleOpenClick = () => {
        setIsRightSubSidebar(!isRightSubSidebar);
    }

    return (
        <button css={S.SLayout} onClick={handleOpenClick}>
            <FaPlus css={S.SIcon} />
            <span css={S.SName}>Add New Task</span>
        </button>
    );
}

export default AddNewTaskButton;