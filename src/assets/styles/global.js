import {injectGlobal} from 'styled-components';
import materialIconsWoff from 'material-design-icons/iconfont/MaterialIcons-Regular.woff';
import materialIconsWoff2 from 'material-design-icons/iconfont/MaterialIcons-Regular.woff2'
import materialIconsTtf from 'material-design-icons/iconfont/MaterialIcons-Regular.ttf'

console.log(materialIconsWoff)

injectGlobal`

  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: local('Material Icons'),
      local('MaterialIcons-Regular'),
      url(${materialIconsWoff2}) format('woff2'),
      url(${materialIconsWoff}) format('woff'),
      url(${materialIconsTtf}) format('truetype');
      
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    box-sizing: border-box;
    outline: none;
  }

  html {
    font-size: 100%;
  }

  body {
    margin: 0;
    padding: 10px;
    font-family: sans-serif;
    font-size: 1rem;
    background: black;
    user-select: none;
  }

`
