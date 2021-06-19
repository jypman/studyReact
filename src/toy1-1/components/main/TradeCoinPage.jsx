import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Text from "../../../toyUI/Text";
import Spacing from "../../../toyUI/Spacing";
import Input from "../../../toyUI/Input";
import Button from "../../../toyUI/Button";
import InlineList from "../../../toyUI/InlineList";
import Form from "../../../toyUI/Form";
import {Consumer as Modal} from "../../../toyUI/Modal/context"

class TradeCoinPage extends PureComponent {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values, closeModal){
        const {name, code, createTransaction} = this.props;
        const formValues = {
            ...values,
            code,
            name
        };
        createTransaction(formValues, closeModal)
    }
    render() {
        const {name, price, type, loading} = this.props;
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
                                        <Button primary disabled={loading}>
                                            {loading ? '거래 처리중' : typeName}
                                        </Button>
                                        <Button onPress={closeModal} disabled={loading}>
                                            취소
                                        </Button>
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

TradeCoinPage.propTypes = {
    createTransaction : PropTypes.func
};

export default TradeCoinPage;