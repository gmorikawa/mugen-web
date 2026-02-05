import { Typography } from "antd";

export interface TitleProps extends React.PropsWithChildren {
    level?: 1 | 2 | 3 | 4 | 5;
    style?: React.CSSProperties;
}

export function Title({
    level,
    style,
    children,
}: TitleProps) {
    return (
        <Typography.Title
            level={level}
            style={{
                margin: 0,
                ...style,
            }}
        >
            {children}
        </Typography.Title>
    );
}
