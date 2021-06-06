import React from "react";
import {storiesOf} from "@storybook/react";
import BranchLoadingButton from '../05/branch';

storiesOf('Branch', module)
    .addWithJSX('기본 설정', () => (
        <BranchLoadingButton>안녕하새요.</BranchLoadingButton>
    ))
    .addWithJSX('is Loading 예제', () => (
        <BranchLoadingButton isLoading>안녕하세요.</BranchLoadingButton>
    ));