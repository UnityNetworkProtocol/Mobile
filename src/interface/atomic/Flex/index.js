/* --- Global Dependencies ---*/
import idx from "idx";
import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const Flex = styled(View)`
  align-items:${props => idx(props, _=>_.align) || "flex-start"};
  display: flex;
  flex-direction:${props => idx(props, _=>_.direction) || "row"};
  ${props => idx(props, _=>_.height) ? "height: " + idx(props, _=>_.height) : null};
  justify-content:${props => idx(props, _=>_.justify) || "flex-start"};
  ${props => idx(props, _=>_.width) ? "width: " + idx(props, _=>_.width) : null};
`;

/* --- React Component ---*/
export default props => <Flex {...props} />;
