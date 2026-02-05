import { Typography } from "antd";

export interface ParagraphProps extends React.PropsWithChildren {
    style?: React.CSSProperties;
}

export function Paragraph({ children, style }: ParagraphProps) {
    return (
        <Typography.Paragraph
            style={{
                margin: 0,
                ...style,
            }}
        >
            {children}
        </Typography.Paragraph>
    );
}
