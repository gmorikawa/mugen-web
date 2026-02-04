export interface ContainerProps
    extends React.HTMLAttributes<HTMLDivElement> { }

export function Container(props: ContainerProps) {
    return <div {...props} />;
}
