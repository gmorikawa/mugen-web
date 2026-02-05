import type { ButtonProps as AntdButtonProps } from "antd";
import { Button as AntdButton } from "antd";

export interface ButtonProps extends AntdButtonProps { }

export function Button(props: ButtonProps) {
    return <AntdButton {...props} />;
}