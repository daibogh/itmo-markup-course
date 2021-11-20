import React from "react";
import block from "bem-cn-lite";
import './Footer.scss'
const b = block(`Footer${process.env.REACT_APP_LAYOUT_MODE === 'grid' ? 'Grid': 'Flex'}`);

export const Footer:React.FC = () => {
    return <footer className={b('Container')}>
        <div className={b('Copyright')}>© 2020 Supersite, Powered by News API</div>
        <div className={b('Links')}>
            <div>Главная</div>
            <div>Яндекс.Практикум</div>
            <i className="fab fa-github"/>
            <i className="fab fa-facebook-square"/>
        </div>
    </footer>
}