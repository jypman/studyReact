import React, {PureComponent} from 'react';
import InlineList from "../../../toyUI/InlineList";
import Button from "../../../toyUI/Button";
import Text from "../../../toyUI/Text";
import Input from "../../../toyUI/Input";
import Form from "../../../toyUI/Form";
import Select, {Option} from "../../../toyUI/Select";
import {withRouter} from "react-router-dom";

class TransactionSearchFilter extends PureComponent {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(params){
        const {history} = this.props;
        const cleanedParams = Object.entries(params)
            .filter(([key,value]) => value !== "")
            .reduce((obj,[key,value]) => ({...obj,[key]:value}), {});
        const querystring = Object.entries(cleanedParams)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');
        history.push(`/?${querystring}`)
    }
    render() {
        const {initValues} = this.props;
        return (
            <Form onSubmit={this.handleSubmit} initValues={initValues}>
                <Form.Consumer>
                    {({onChange, values}) => (
                        <InlineList spacingBetween={2} verticalAlign="bottom">
                            <Text xlarge bold>
                                검색
                            </Text>
                            <Select
                                name="code"
                                label="코인 코드"
                                onChange={onChange}
                                value={values['code']}
                            >
                                <Option label="선택해주세요" value=""/>
                                <Option label="비트코인(BTX)" value="BTX"/>
                                <Option label="이더리움(ETH)" value="ETH"/>
                                <Option label="두잇코인(DOIT)" value="DOIT"/>
                            </Select>
                            <Input
                                name="currentPrice_gte"
                                label="최소 거래가"
                                onChange={onChange}
                                value={values['currentPrice_gte']}
                            />
                            <Input
                                name="currentPrice_lte"
                                label="최대 거래가"
                                onChange={onChange}
                                value={values['currentPrice_lte']}
                            />
                            <Button type="submit" primary>
                                검색
                            </Button>
                        </InlineList>
                    )}
                </Form.Consumer>
            </Form>
        );
    }
}

export default withRouter(TransactionSearchFilter);