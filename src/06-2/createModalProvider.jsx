// ModalProvider 생성 함수
import React, {PureComponent} from "react";
import Modal from "./Modal";
import {Provider} from "./ModalContext";

export default function createModalProvider(ContentMap = {}) {
    return class ModalProvider extends PureComponent{
        constructor(props) {
            super(props);
            this.state = { showModal : false }
            this.handleClose = this.handleClose.bind(this);
            this.handleOpen = this.handleOpen.bind(this);
        }
        handleClose (){
            this.setState( {showModal : false} );
        }
        handleOpen (contentId, modalProps){
            this.contentId = contentId;
            this.modalProps = modalProps;
            this.setState( {showModal : true} );
        }
        render() {
            const {children} = this.props;
            const {showModal} = this.state;
            const ModalContent = ContentMap[this.contentId];
            return(
                <Provider
                    // value 프로퍼티로 showModal의 값을 변경하기 위한 콜백함수(컨텍스트 데이터)를 소비자에게 전달했다.
                    value={{
                        openModal : this.handleOpen,
                        closeModal : this.handleClose
                    }}
                >
                    {children}
                    {showModal && ModalContent && (
                        <Modal>
                            <ModalContent {...this.modalProps}/>
                        </Modal>
                    )}
                </Provider>
            )
        }
    }
};