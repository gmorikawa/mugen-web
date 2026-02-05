import type { RadioProps as AntRadioProps } from "antd";
import { Radio as AntRadio } from "antd";

export interface RadioOptions<EnumType> {
    key: EnumType;
    label: string;
}

export interface RadioInputProps<EnumType>
    extends Omit<AntRadioProps, "options" | "value"> {
    value?: EnumType;
    options?: RadioOptions<EnumType>[];
}

export function RadioInput<EnumType>({
    value,
    options,
    ...props
}: RadioInputProps<EnumType>) {
    return (
        <AntRadio.Group
            value={value}
            options={options?.map((option) => ({
                label: option.label,
                value: option.key,
            }))}
            {...props}
        />
    );
}