import { useState } from 'react';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';

import './delivery.css';

const Delivery2 = () => {

    //팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    //팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true);
    }

    //팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false);
    }

    // const {address, action} = useContext(UserContext);

    return (
        <>
            <div className="search">
                <h3>배달 주소 검색</h3>
                <button type="button" onClick={openPostCode} className="regist">신규 등록</button>

                <div id='popupDom' className="popupDom">
                    {isPopupOpen && (
                        <PopupDom>
                            <PopupPostCode onClose={closePostCode} />
                        </PopupDom>
                    )}
                </div>
            </div>

            <div>
                <p>배달 가능 매장 : </p>
                <input type="text" className="address" placeholder="기본 주소" /><br />
                <input type="text" className="address" placeholder="상세 주소" />
            </div>

        </>
    )
}

export default Delivery2;