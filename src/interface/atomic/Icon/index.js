/* --- Global Dependencies ---*/
import idx from "idx";
import React from "react";
import styled from "styled-components";
import { Icon as IconNative } from "native-base";

/* --- Styled Component ---*/
const Icon = styled(IconNative)`
  color:${props => idx(props, _=>_.color) || "transparent"};
`;

/* --- React Component ---*/
export default props => <Icon {...props} />;
