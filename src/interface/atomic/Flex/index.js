/* --- Global Dependencies ---*/
import idx from "idx";
import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const Flex = styled(View)`
  align-items:${props => idx(props, _=>_.align) || "flex-start"};
  display: flex;
  flex-direction:${props => idx(props, _=>_.direction) || "row"};
  justify-content:${props => idx(props, _=>_.justify) || "flex-start"};
  width: ${props => idx(props, _=>_.width) || "100%"};
`;

/* --- React Component ---*/
export default props => <Flex {...props} />;
