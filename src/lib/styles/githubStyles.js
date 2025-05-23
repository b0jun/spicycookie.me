import { css } from 'styled-components';

const githubStyles = css`
  /* markdown global body */
  #markdown {
    font-size: 16px;
    line-height: 1.6;
    font-family: 'RIDIBatang', 'Noto Serif KR', serif;
  }
  a {
    color: ${props => props.theme.palette.aFont};
    text-decoration: none;
  }
  a.absent {
    color: #cc0000;
  }

  a.anchor {
    display: block;
    padding-left: 30px;
    margin-left: -30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'RIDIBatang', arial, sans-serif;
    margin: 30px 0 20px;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    cursor: text;
    position: relative;
    line-height: 2;
  }

  h2:first-child,
  h1:first-child,
  h1:first-child + h2,
  h3:first-child,
  h4:first-child,
  h5:first-child,
  h6:first-child {
    margin-top: 0;
    padding-top: 0;
  }
  h1:hover a.anchor,
  h2:hover a.anchor,
  h3:hover a.anchor,
  h4:hover a.anchor,
  h5:hover a.anchor,
  h6:hover a.anchor {
    text-decoration: none;
  }

  h1 tt,
  h1 code {
    font-size: inherit;
  }

  h2 tt,
  h2 code {
    font-size: inherit;
  }

  h3 tt,
  h3 code {
    font-size: inherit;
  }

  h4 tt,
  h4 code {
    font-size: inherit;
  }

  h5 tt,
  h5 code {
    font-size: inherit;
  }

  h6 tt,
  h6 code {
    font-size: inherit;
  }

  h1 {
    margin-top: 3rem;
    font-size: 28px;
    color: black;
  }

  h2 {
    font-size: 24px;
    border-bottom: 1px solid #cccccc;
    color: black;
  }

  h3 {
    font-size: 20px;
  }

  h4 {
    font-size: 16px;
  }

  h5 {
    font-size: 14px;
  }

  h6 {
    color: #777777;
    font-size: 14px;
  }

  p,
  ul,
  ol,
  dl,
  li,
  table {
    margin: 20px 0;
    line-height: 1.7;
  }

  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    h1 {
      font-size: 25px;
      color: black;
    }

    h2 {
      font-size: 22px;
      border-bottom: 1px solid #cccccc;
      color: black;
    }

    h3 {
      font-size: 19px;
    }

    h4 {
      font-size: 15px;
    }

    h5 {
      font-size: 13px;
    }

    h6 {
      color: #777777;
      font-size: 12px;
    }
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    h1 {
      font-size: 23px;
      color: black;
    }

    h2 {
      font-size: 20px;
      border-bottom: 1px solid #cccccc;
      color: black;
    }

    h3 {
      font-size: 17px;
    }

    h4 {
      font-size: 14px;
    }

    h5 {
      font-size: 12px;
    }

    h6 {
      color: #777777;
      font-size: 12px;
    }
    p,
    blockquote,
    ul,
    ol,
    dl,
    li,
    table,
    pre {
      font-size: 14px;
    }
  }

  hr {
    display: block;
    border: 0;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #eee;
    margin: 1em 0;
    padding: 0;
  }

  body > h2:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  body > h1:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  body > h1:first-child + h2 {
    margin-top: 0;
    padding-top: 0;
  }

  body > h3:first-child,
  body > h4:first-child,
  body > h5:first-child,
  body > h6:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  a:first-child h1,
  a:first-child h2,
  a:first-child h3,
  a:first-child h4,
  a:first-child h5,
  a:first-child h6 {
    margin-top: 0;
    padding-top: 0;
  }

  h1 p,
  h2 p,
  h3 p,
  h4 p,
  h5 p,
  h6 p {
    margin-top: 0;
  }

  li p.first {
    display: inline-block;
  }

  ul,
  ol {
    padding-left: 30px;
  }

  ul :first-child,
  ol :first-child {
    margin-top: 0;
  }

  ul :last-child,
  ol :last-child {
    margin-bottom: 0;
  }

  dl {
    padding: 0;
  }

  dl dt {
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    padding: 0;
    margin: 15px 0 5px;
  }

  dl dt:first-child {
    padding: 0;
  }

  dl dt > :first-child {
    margin-top: 0;
  }

  dl dt > :last-child {
    margin-bottom: 0;
  }

  dl dd {
    margin: 0 0 15px;
    padding: 0 15px;
  }

  dl dd > :first-child {
    margin-top: 0;
  }

  dl dd > :last-child {
    margin-bottom: 0;
  }

  blockquote {
    border-left: 4px solid ${props => props.theme.palette.blockquoteBorder};
    padding: 2px 15px;
    color: #282c35;
    background: ${props => props.theme.palette.blockquoteBack};
    border-radius: 0px;
    margin: 15px 0;
    line-height: 1.7;
  }
  blockquote p {
    font-family: 'RIDIBatang', 'Noto Serif KR', arial, sans-serif;
  }

  blockquote > :first-child {
    margin-top: 0;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  table {
    padding: 0;
  }
  table tr {
    border-top: 1px solid #cccccc;
    background-color: white;
    margin: 0;
    padding: 0;
  }

  table tr:nth-child(2n) {
    background-color: #f8f8f8;
  }

  table tr th {
    font-weight: bold;
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  table tr td {
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  table tr th :first-child,
  table tr td :first-child {
    margin-top: 0;
  }

  table tr th :last-child,
  table tr td :last-child {
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
  }

  span.frame {
    display: block;
    overflow: hidden;
  }

  span.frame > span {
    border: 1px solid #dddddd;
    display: block;
    float: left;
    overflow: hidden;
    margin: 13px 0 0;
    padding: 7px;
    width: auto;
  }

  span.frame span img {
    display: block;
    float: left;
  }

  span.frame span span {
    clear: both;
    color: #333333;
    display: block;
    padding: 5px 0 0;
  }

  span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-center > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: center;
  }

  span.align-center span img {
    margin: 0 auto;
    text-align: center;
  }

  span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-right > span {
    display: block;
    overflow: hidden;
    margin: 13px 0 0;
    text-align: right;
  }

  span.align-right span img {
    margin: 0;
    text-align: right;
  }

  span.float-left {
    display: block;
    margin-right: 13px;
    overflow: hidden;
    float: left;
  }

  span.float-left span {
    margin: 13px 0 0;
  }

  span.float-right {
    display: block;
    margin-left: 13px;
    overflow: hidden;
    float: right;
  }

  span.float-right > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: right;
  }

  code,
  tt {
    font-family: 'InfinitySans-RegularA1';
    margin: 0 2px;
    padding: 1px 8px;
    white-space: nowrap;
    background-color: ${props => props.theme.palette.postAccentBack};
    border-radius: 5px;
    color: ${props => props.theme.palette.postAccentFont};
  }

  pre code {
    font-family: 'InfinitySans-RegularA1';
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 0;
    padding: 0;
    white-space: pre;
    border: none;
    background: transparent;
    color: #ffffdd;
  }

  .highlight pre {
    border: 1px solid #cccccc;
    font-size: 13px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;
  }

  pre {
    background-color: #263238;
    font-size: 13px;
    line-height: 19px;
    overflow: auto;
    padding: 0 10px;
    border-radius: 10px;
    margin: 15px 0;
  }

  pre code,
  pre tt {
    background-color: transparent;
    border: none;
  }
  /* Ref: https://docs.deckdeckgo.com/components/code/ */
  deckgo-highlight-code {
    --deckgo-highlight-code-font-family: 'Ubuntu Mono', 'RIDIBatang', sans-serif;
    --deckgo-highlight-code-token-selector: #f67280;
    --deckgo-highlight-code-font-size: 1rem;
    --deckgo-highlight-code-white-space: pre;
    line-height: 1.5;
    margin-bottom: 3rem;
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      --deckgo-highlight-code-font-size: 0.9rem;
    }
  }
`;
export default githubStyles;
