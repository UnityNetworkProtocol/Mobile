/* --- Global Dependencies ---*/
import idx from "idx";
import React from "react";
import styled from "styled-components";
import { Text as TextNative } from "native-base";

const Text = styled(TextNative)`
  ${props => idx(props, _=>_.color) ? "color: " + idx(props, _=>_.color) : null};
  font-size:${props => idx(props, _=>_.fontSize) || 12};
  ${props => idx(props, _=>_.width) ? "width: " + idx(props, _=>_.width) : null};
`;

/* --- React Component ---*/
export default props => <Text {...props} />;
