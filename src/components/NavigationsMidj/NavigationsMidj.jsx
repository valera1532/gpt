
import React, { useState } from 'react';

const NavigationsMidj = ({ activeItems, setActiveItems }) => {
    // const [activeItems, setActiveItems] = useState([false, true, false, false]);

    const handleItemClick = (index) => {
        const newActiveItems = activeItems.map((item, i) => (i === index ? !item : false));
        setActiveItems(newActiveItems);
    };

    return (
        <div>
            <div className="chatgpt">
                <header className="header chatgpt_begin_header">
                    <ul>
                        <li className={activeItems[0] ? 'active' : ''} onClick={() => handleItemClick(0)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                <path d="M7.05417 20.1897L10.9729 13.1543L3.25 12.2376L14.5938 1.81055H15.9458L12.0271 8.84596L19.75 9.76263L8.40625 20.1897H7.05417Z" fill="#19C37D" />
                            </svg>
                            ГПТ-3,5
                        </li>
                        <li className={activeItems[1] ? 'active' : ''} onClick={() => handleItemClick(1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                <path d="M1.41602 11.6868V10.3118H6.73268V11.6868H1.41602ZM7.62643 8.08893L5.7931 6.2556L6.7556 5.2931L8.58893 7.12643L7.62643 8.08893ZM10.8118 6.23268V0.916016H12.1868V6.23268H10.8118ZM15.3723 8.08893L14.4098 7.12643L16.2431 5.2931L17.2056 6.2556L15.3723 8.08893ZM16.266 11.6868V10.3118H21.5827V11.6868H16.266ZM11.4993 13.3368C10.85 13.3368 10.2981 13.1096 9.84362 12.6551C9.38911 12.2006 9.16185 11.6487 9.16185 10.9993C9.16185 10.35 9.38911 9.79813 9.84362 9.34362C10.2981 8.88911 10.85 8.66185 11.4993 8.66185C12.1487 8.66185 12.7006 8.88911 13.1551 9.34362C13.6096 9.79813 13.8368 10.35 13.8368 10.9993C13.8368 11.6487 13.6096 12.2006 13.1551 12.6551C12.7006 13.1096 12.1487 13.3368 11.4993 13.3368ZM16.3577 16.8202L14.4098 14.8723L15.3723 13.9098L17.3202 15.8577L16.3577 16.8202ZM6.64102 16.8202L5.67852 15.8577L7.62643 13.9098L8.58893 14.8723L6.64102 16.8202ZM10.8118 21.0827V15.766H12.1868V21.0827H10.8118Z" fill="#6C7275" />
                            </svg>
                            Midjourney
                        </li>
                    </ul>
                    <p>
                        ЧатGPT
                        <span>плюс</span>
                    </p>
                </header>
            </div>
        </div>
    );
};

export default NavigationsMidj;