import { Button, type ButtonProps } from "./button";

export interface SubmitButtonProps
    extends Omit<ButtonProps, "htmlType"> { }

export function SubmitButton(props: SubmitButtonProps) {
    return <Button htmlType="submit" type="primary" {...props} />;
}
