import {configure, setAddon} from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';
// 스토리북에 전체 스타일을 적용하기 위해 스타일 시트를 임포트한다.
// import '../src/sass/materialize.scss';
import '../src/doit-ui/app.css'

function loadStories() {
    const context = require.context('../src/stories',true,/Story\.jsx$/);
    context.keys().forEach(srcFile => {
        interopRequireDefault(context(srcFile));
    });
}

setAddon(JSXAddon);
configure(loadStories, module);