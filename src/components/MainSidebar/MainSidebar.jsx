/** @jsxImportSource @emotion/react */
import * as S from "./style";
import Header from "./Header/Header";
import List from "./List/List";
import { useState } from "react";

function MainSidebar(props) {
    const [ isShow, setIsShow ] = useState(false);

    const handleMenuToggleClick = () => {
        setIsShow(!isShow);
    }

    return (
        <div css={S.SLayout(isShow)}>
            <Header menuToggleOnClick={handleMenuToggleClick}/>
            {isShow && (
                <>
                    <List title={"TASKS"}/>
                    <List title={"LISTS"}/>
                </>
            )}
        </div>
    );
}

export default MainSidebar;