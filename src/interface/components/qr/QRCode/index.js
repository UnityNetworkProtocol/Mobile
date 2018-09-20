/* --- Global Dependencies ---*/
import React from "react";
import { Dimensions} from 'react-native';
import QRCode from 'react-native-qrcode';
const deviceWidth = Dimensions.get("window").width;

export default props =>
<QRCode
  value={props.value || "kames"}
  size={props.size || 250}
  bgColor={props.bgColor || "purple"}
  fgColor={props.fgColor || "white"}
/>;
