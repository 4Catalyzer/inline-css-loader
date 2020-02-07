import styled from "astroturf";
import _FancyBox from "./multiple-components-FancyBox.css";
import _FancyHeader from "./multiple-components-FancyHeader.css";
const SIZE = 75;
// prettier-ignore
const FancyBox = /*#__PURE__*/styled('div', null, {
  displayName: "FancyBox",
  styles: _FancyBox,
  attrs: null,
  vars: []
});
const FancyHeader = /*#__PURE__*/ styled("h2", null, {
  displayName: "FancyHeader",
  styles: _FancyHeader,
  attrs: null,
  vars: []
});