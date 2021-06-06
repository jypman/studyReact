import React from "react";
import {storiesOf} from "@storybook/react";
import Modal from '../06-2/Modal';
import Button from "../04/Button";
import Text from '../04/Text';
import ButtonWithModal from "../06-2/ButtonWithModal";
import ModalProvider,{Consumer} from "../06-2/ModalProvider";

import ModalProviderWithKey,{
    CONFIRM_DELETE_MODAL,
    CREATE_MEMBER_MODAL
} from "../06-2/ModalProviderWithKey";
import {Consumer as ModalConsumer} from '../06-2/ModalContext'

storiesOf('modal', module)
    .addWithJSX('기본 설정', () => (
        <Modal>
            <div>
                <Text>
                    정말로 삭제하시겠습니까?
                </Text>
            </div>
            <Button primary>예</Button>
            <Button>닫기</Button>
        </Modal>
    ))
    .addWithJSX('ButtonWihModal', () => <ButtonWithModal />)
    .addWithJSX('ModalProvider',() => (
        <ModalProvider>
            <div>
                <Text>다음 버튼을 눌러 모달을 실행합니다.</Text>
                <Consumer>
                    {({openModal}) => <Button onPress={ () => openModal()}>삭제</Button>}
                </Consumer>
            </div>
        </ModalProvider>
    ))
    .addWithJSX('ModalProviderWithKey', () => (
        // 공급자를 생성하는 컴포넌트
        <ModalProviderWithKey>
            <div>
                <Text>다음 버튼을 눌러 모달을 실행합니다.</Text>
                <ModalConsumer>
                    { ({openModal}) => (
                        <Button
                            onPress={() => openModal(CONFIRM_DELETE_MODAL, {name : '상품1'})}
                        >
                            모달 열기
                        </Button>
                    )}
                </ModalConsumer>
                <ModalConsumer>
                    {({openModal}) => (
                        <Button onPress={() => openModal(CREATE_MEMBER_MODAL)}>회원가입</Button>
                    )}
                </ModalConsumer>
            </div>
        </ModalProviderWithKey>
    ))