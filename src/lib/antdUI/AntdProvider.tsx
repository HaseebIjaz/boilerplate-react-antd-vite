import React from "react";
import { ConfigProvider, ThemeConfig, theme } from "antd";

type Props = {
  children: React.ReactNode;
};

const themeValues = {
  fontFamily: "Open Sans",
  colorPrimary: "#2255a6",

  primaryTextColor: "#374957",
  secondaryTextColor: "#274764",
  linkTextColor: "green",
};

const themeConfig: ThemeConfig = {
  token: {
    fontFamily: themeValues.fontFamily,
    colorPrimary: themeValues.colorPrimary,
    colorText: themeValues.primaryTextColor,
  },
  algorithm: theme.defaultAlgorithm,
};

const AntdProvider = ({ children }: Props) => {
  return (
    <ConfigProvider prefixCls="ant" iconPrefixCls="anticon" theme={themeConfig}>
      {children}
    </ConfigProvider>
  );
};

export { AntdProvider };
