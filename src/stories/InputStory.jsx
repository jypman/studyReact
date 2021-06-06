import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions'

import Input from '../03/Input';

// 하나의 컴포넌트에 다양한 기능이나 디자인들을 추가할 수 있다.
storiesOf('Input', module)
    .addWithJSX('기본 설정', () => <Input name="name" />)
    .addWithJSX('label 예제', () => <Input name="name" label="이름" />)
    .addWithJSX('onChange 예제', () => <Input name="name" onChange={action('onChange 이벤트 발생')} />)