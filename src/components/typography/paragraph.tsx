import { Typography } from "antd";

export interface ParagraphProps extends React.PropsWithChildren { }

export function Paragraph({ children }: ParagraphProps) {
    return (
        <Typography.Paragraph>
            {children}
        </Typography.Paragraph>
    );
}
