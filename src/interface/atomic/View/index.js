/* --- Global Dependencies ---*/
import idx from "idx";
import React from "react";
import { View as ViewNative } from "react-native";
import styled from "styled-components";

const View = styled(ViewNative)`
  ${props => idx(props, _=>_.width) ? "width: " + idx(props, _=>_.width) : null};
`;

/* --- React Component ---*/
export default props => <View {...props} />;
