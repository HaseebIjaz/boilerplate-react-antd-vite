import { Button } from "antd";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const PublicButton = ({ children }: Props) => {
  return <Button>{children}</Button>;
};

export { PublicButton };
