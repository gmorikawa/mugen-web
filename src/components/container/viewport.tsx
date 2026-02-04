import type { ContainerProps } from "@components/container/container";

export interface ViewportProps
    extends ContainerProps { }

export function Viewport(props: ViewportProps) {
    return (
        <div
            style={{
                height: "100vh",
                width: "100%",
            }}
            {...props}
        />
    );
}