import React from "react";
import {storiesOf} from '@storybook/react'

import Button from "../04/Button";
import Text from "../04/Text";
import withLoading from '../05/withLoading';

const TextWithLoading = withLoading('로딩 중입니당.....!')(Text);
const ButtonWithLoading = withLoading(<Button disabled>로딩 중이라고...!</Button>)(Button);

storiesOf('WithLoading', module)
    .addWithJSX('isLoading 예제', () => (
        <div>
            <ButtonWithLoading isLoading>안녕하세요.</ButtonWithLoading>
            <TextWithLoading isLoading>안녕하세요.</TextWithLoading>
        </div>
    ));