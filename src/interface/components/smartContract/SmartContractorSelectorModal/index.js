/* --- Global Modules ---*/
import React from "react";

/* --- Local Modules --- */
import ERC20FunctionsModal from "interface/components/ERC20/ERC20FunctionsModal"

export default props => {
  switch (props.specification) {
    case "ERC20":
        return <ERC20FunctionsModal {...props}/>;
    default:
    return null;
  }
}