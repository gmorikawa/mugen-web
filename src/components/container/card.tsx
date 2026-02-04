import type { CardProps as AntCardProps } from "antd";
import { Card as AntCard } from "antd";

export interface CardProps extends AntCardProps { }

export function Card(props: CardProps) {
    return <AntCard {...props} />;
}