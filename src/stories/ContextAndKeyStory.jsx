import React from "react";
import {storiesOf} from "@storybook/react";
import HomePageWithTwoProvider from "../06/HomePageWithTwoProvider";

storiesOf('HomePageComponent2',module)
    .addWithJSX('이중 Provider 예제', () => <HomePageWithTwoProvider />)