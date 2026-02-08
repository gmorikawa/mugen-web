export interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export function FileInput({ ...props }: FileInputProps) {
    return (
        <input type="file" {...props} />
    );
}
