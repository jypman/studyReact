import React from "react";
import {storiesOf} from "@storybook/react";
import InlineList from "../doit-ui/InlineList";
import {css} from "../doit-ui/withStyles";

// 함수형 컴포넌트로 전달되는 인자의 자료형이 문자열이 아닌 경우 {}로 감싼다.
function RedBox({children}) {
    return (
        <div
            {...css({backgroundColor : 'red', padding : 30, height : Math.random() * 100})}
        >
            {children}
        </div>
    )
}

storiesOf('Doit-UI/inlineList',module)
    .addWithJSX('기본 설정', () => (
        <InlineList>
            <RedBox>1</RedBox>
            <RedBox>2</RedBox>
            <RedBox>3</RedBox>
        </InlineList>
    ))
    .addWithJSX('align="center"', () => (
        <InlineList align="center">
            <RedBox>1</RedBox>
            <RedBox>2</RedBox>
            <RedBox>3</RedBox>
        </InlineList>
    ))
    .addWithJSX('align="right"', () => (
        <InlineList align="right">
            <RedBox>1</RedBox>
            <RedBox>2</RedBox>
            <RedBox>3</RedBox>
        </InlineList>
    ))
    .addWithJSX('verticalAlign="top"', () => (
        <InlineList verticalAlign="top">
            <RedBox>1</RedBox>
            <RedBox>2</RedBox>
            <RedBox>3</RedBox>
        </InlineList>
    ))
    .addWithJSX('verticalAlign="bottom"', () => (
        <InlineList verticalAlign="bottom">
            <RedBox>1</RedBox>
            <RedBox>2</RedBox>
            <RedBox>3</RedBox>
        </InlineList>
    ))