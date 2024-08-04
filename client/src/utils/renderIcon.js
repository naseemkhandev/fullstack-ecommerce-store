import * as Icons from "lucide-react";
import React from "react";

const renderIcon = (iconName) => {
  const IconComponent = Icons[iconName];
  return IconComponent ? React.createElement(IconComponent) : null;
};

export default renderIcon;
