import type { AvatarProps as AntAvatarProps } from "antd";
import { Avatar as AntAvatar } from "antd";

export interface AvatarProps extends AntAvatarProps { }

export function Avatar(props: AvatarProps) {
    return <AntAvatar {...props} />;
}