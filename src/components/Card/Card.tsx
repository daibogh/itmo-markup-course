import React from "react";
import './Card.scss'
import block from "bem-cn-lite";
const b = block(`Card${process.env.REACT_APP_LAYOUT_MODE === 'grid' ? 'Grid': 'Flex'}`);
type Props =  {type: string, date: string, title: string, content: string, media: string, imgSrc: string}
export const Card:React.FC<Props> = ({type, date, title, media, imgSrc, content}) => {
    return <div className={b('Container')}>
        <div className={b('Type')} >{type}</div>
        <div className={b('Delete')} ><i className="far fa-trash-alt"></i></div>
        <img src={imgSrc} className={b('Image')}/>
        <div className={b('Info')}>
            <div className={b('Date')}>{date}</div>
            <div className={b('Title')}>{title}</div>
            <div className={b('Text')}>{content}</div>
            <div className={b('Media')}>{media}</div>
        </div>
    </div>
}