import React, {PureComponent} from 'react';
import Text from "../../../toyUI/Text";
import Spacing from "../../../toyUI/Spacing";
import Input from "../../../toyUI/Input";
import Button from "../../../toyUI/Button";
import InlineList from "../../../toyUI/InlineList";
import Form from "../../../toyUI/Form";
import {Consumer as Modal} from "../../../toyUI/Modal/context"
import Api from "../../Api";

class TradeCoinPage01 extends PureComponent {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values, closeModal){
        const {name, code} = this.props;
        const formValues = {
            ...values,
            code,
            name
        };
        Api.post('/transactions', formValues)
            .then(() => closeModal());
    }
    render() {
        const {name, price, type} = this.props;
        const typeName = type === 'sell' ? '판매' : '구매';
        return (
            <Modal>
                {({closeModal}) => (
                    <Form
                        onSubmit={values => this.handleSubmit(values, closeModal)}
                        initValues={{currentPrice : price}}
                    >
                        <Form.Consumer>
                            {({onChange, values}) => (
                                <Spacing horizontal={4} vertical={8}>
                                    <Text xlarge bold>
                                        {name}
                                        {typeName}
                                    </Text>
                                    <Spacing bottom={2}>
                                        <Input
                                            name="currentPrice"
                                            label="금액"
                                            value={values['currentPrice']}
                                            onChange={onChange}
                                        />
                                    </Spacing>
                                    <Spacing bottom={2}>
                                        <Input
                                            name="amount"
                                            label="수량"
                                            value={values['amount']}
                                            onChange={onChange}
                                        />
                                    </Spacing>
                                    <InlineList spacingBetween={1}>
                                        <Button primary>{typeName}</Button>
                                        <Button onPress={closeModal}>취소</Button>
                                    </InlineList>
                                </Spacing>
                            )}
                        </Form.Consumer>
                    </Form>
                )}
            </Modal>
        );
    }
}

export default TradeCoinPage01;