import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Heading from "../../../toyUI/Heading";
import Button from "../../../toyUI/Button";
import Card from "../../../toyUI/Card";
import InlineList from "../../../toyUI/InlineList";
import Text from "../../../toyUI/Text";

import {Consumer as Modal} from "../../../toyUI/Modal/context";
import {TRADE_COIN_MODAL} from "../../constants/modals";

class CoinDashlet extends PureComponent {
    render() {
        const {name, priceLabel} = this.props;
        return (
            <Modal>
                {({openModal}) => (
                    <Card vertical={4} horizontal={4}>
                        <Heading level={4}>
                            {name}
                            <Text>{priceLabel}</Text>
                        </Heading>
                        <InlineList spacingBetween={1}>
                            <Button
                                primary
                                small
                                onPress={() => openModal(TRADE_COIN_MODAL, {type : 'buy', name, price : priceLabel})}
                            >
                                매도
                            </Button>
                            <Button
                                small
                                onPress={() => openModal(TRADE_COIN_MODAL, {type : 'sell', name, price : priceLabel})}
                            >
                                매수
                            </Button>
                        </InlineList>
                    </Card>
                )}
            </Modal>
        );
    }
}

CoinDashlet.propTypes = {
    name : PropTypes.string,
    priceLabel : PropTypes.string
};

export default CoinDashlet;