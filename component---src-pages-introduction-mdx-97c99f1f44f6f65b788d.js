(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"awe+":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return b}));t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP"),t("q1tI");var r=t("7ljp"),o=t("soUV");var a,s={},i=(a="Brand",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),l={_frontmatter:s},c=o.a;function b(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(r.b)(c,Object.assign({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"Intro to astroturf"),Object(r.b)("p",null,Object(r.b)(i,{mdxType:"Brand"},"astroturf")," lets you write CSS in your JavaScript files without adding any runtime layer, and with your existing CSS processing pipeline."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Zero runtime CSS-in-JS.")," Get many of the same benefits as CSS-in-JS,\nbut without the loss of flexibility in requiring framework-specific CSS\nprocessing, and while keeping your CSS fully static with no runtime style parsing."),Object(r.b)("li",{parentName:"ul"},"Use your existing tools – ",Object(r.b)("strong",{parentName:"li"},"Sass, PostCSS, Less")," – but still write\nyour style definitions in your JavaScript files"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Whole component in the single file"),". Write CSS in a template literal,\nthen use it as if it were in a separate file")),Object(r.b)("h2",null,"Usage"),Object(r.b)("p",null,"A goal of ",Object(r.b)(i,{mdxType:"Brand"},"astroturf")," is to provide approachable,\nscoped, and managable CSS according to everyone's level of comfort. Pick the level of\nabstraction that is right for ",Object(r.b)("em",{parentName:"p"},"you"),"!"),Object(r.b)("h3",null,"Scoped StyleSheets"),Object(r.b)("p",null,"Leveraging the magic of ",Object(r.b)(i,{mdxType:"Brand"},"COMPILATION"),", astroturf lets you define styles\nfrom the comfort of your JavaScript (or TypeScript) files; Framework optional!"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import { stylesheet } from 'astroturf';\n\nconst height = 2;\n\nconst styles = stylesheet`\n  .btn {\n    appearance: none;\n    height: ${height}rem;\n    display: inline-block;\n    padding: .5rem 1rem;\n  }\n\n  .primary {\n    color: white:\n    border: 1px solid white;\n    background-color: taupe;\n\n    &:hover {\n      color: taupe:\n      border-color: taupe;\n      background-color: white;\n    }\n  }\n`;\n\nconst Button = ({ primary }) => {\n  const button = document.createElement('button');\n  button.classList.add(styles.btn, primary && styles.primary);\n  return button;\n};\n")),Object(r.b)("p",null,'Through our proprietary "Extraction Process" each stylesheet is\nturned into its own CSS file.'),Object(r.b)("p",null,"For those who like a more ",Object(r.b)(i,{mdxType:"Brand"},"MODULAR")," approach the ",Object(r.b)("inlineCode",{parentName:"p"},"css")," tag is ready and\nwaiting. The ",Object(r.b)("inlineCode",{parentName:"p"},"css")," tag creates single CSS classes:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { css } from 'astroturf';\n\nconst btn = css`\n  color: black;\n  border: 1px solid black;\n  background-color: white;\n`;\n\nexport default function Button({ children }) {\n  return <button className={btn}>{children}</button>;\n}\n")),Object(r.b)("p",null,"When processed, the ",Object(r.b)("inlineCode",{parentName:"p"},"css")," block will be extracted into a ",Object(r.b)("inlineCode",{parentName:"p"},".css")," file,\ntaking advantage of any and all of the other loaders configured to handle css."),Object(r.b)("h2",null,"React.JS™!"),Object(r.b)("p",null,"Embracing the component lifestyle? ",Object(r.b)(i,{mdxType:"Brand"},"astroturf")," has you covered with\nbuilt-in integration with ",Object(r.b)(i,{mdxType:"Brand"},"React.JS™"),". The versatile ",Object(r.b)("inlineCode",{parentName:"p"},"css")," tag helps\ntransform your plain ol' components into beautiful works of art."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react';\nimport { css } from 'astroturf';\n\nfunction Button({ children, ...props }) {\n  return (\n    <button\n      {...props}\n      css={css`\n        color: blue;\n        border: 1px solid blue;\n        padding: 0 1rem;\n      `}\n    >\n      {children}\n    </button>\n  );\n}\n")),Object(r.b)("p",null,"Additional ",Object(r.b)("inlineCode",{parentName:"p"},"className")," props are automically combined with the provided css\nwith no additional effort."),Object(r.b)("h2",null,"Dynamic Props and You"),Object(r.b)("p",null,'While not a "real" CSS-in-JS library ',Object(r.b)(i,{mdxType:"Brand"},"astroturf"),' still provides\na level of dynamic styling you\'ve come to expect from component styling. Individual\nCSS property values can be fully specified at runtime by transpiling interpolations\nto "CSS Custom Properties". Use dynamic interpolations anywhere CSS custom properties are\nallowed!'),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react';\nimport { css } from 'astroturf';\n\nfunction Button({ bgColor, children }) {\n  return (\n    <button\n      css={css`\n        color: black;\n        border: 1px solid black;\n        background-color: ${bgColor};\n      `}\n    >\n      {children}\n    </button>\n  );\n}\n")),Object(r.b)("h3",null,"Component Variants"),Object(r.b)("p",null,"In addition to individual property values, ",Object(r.b)(i,{mdxType:"Brand"},"astroturf"),' can also create\nlarger component "variants" by nesting ',Object(r.b)("inlineCode",{parentName:"p"},"css")," tags inside the root componnent definition."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react';\nimport { css } from 'astroturf';\n\nfunction Button({ variant = 'primary', children }) {\n  return (\n    <button\n      css={css`\n        border: 1px solid transparent;\n\n        ${variant === 'primary' &&\n        css`\n          color: blue;\n          border-color: blue;\n        `}\n      `}\n    >\n      {children}\n    </button>\n  );\n}\n")),Object(r.b)("p",null,"Each inner ",Object(r.b)("inlineCode",{parentName:"p"},"css")," interpolation compiles to seperate CSS Class Name, and is toggled\nat runtime when the inner expression returns true."),Object(r.b)("h3",null,"Cruise Control"),Object(r.b)("p",null,"For the discerning consumer who knows what they want, and don't have time to mess\naround, ",Object(r.b)(i,{mdxType:"Brand"},"astroturf")," has you covered with ",Object(r.b)(i,{mdxType:"Brand"},"Instant Components™"),"\nbrought to you by the ",Object(r.b)("inlineCode",{parentName:"p"},"styled")," helper."),Object(r.b)("p",null,"Create components with ease, effortlessly mapping class names to component props:"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react';\nimport { styled } from 'astroturf/react';\n\nconst Button = styled('button')`\n  border: 1px solid transparent;\n\n  &.disabled {\n    opacity: 0.6;\n  }\n\n  &.variant-primary {\n    color: blue;\n    border-color: blue;\n  }\n`;\n\n<Button variant=\"primary\" disabled />;\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"styled")," helper will infer component props from the nested classes you define.\nCreate boolean props with simple class names, and cover more complex cases using a ",Object(r.b)("inlineCode",{parentName:"p"},"-"),"\nto differentiate the name from value. ",Object(r.b)("inlineCode",{parentName:"p"},".color-red")," becomes ",Object(r.b)("inlineCode",{parentName:"p"},'color="red"'),"!"),Object(r.b)("p",null,"We recommend this pattern for simple cases, where you value less boilerplate over customizability."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-introduction-mdx-97c99f1f44f6f65b788d.js.map