import React from "react";

import "./Header.css";

import { useTelegram } from "../../hooks/useTelegram";

import Button from "../Button/Button";

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={"header"}>
            <Button onClick={onClose}>Close</Button>
            <span className={"username"}>
                Hello, {user?.username}
            </span>
        </div>
    );
};

export default Header;
