import { Container } from "@components/container/container";
import { FileInput, type FileInputProps } from "@components/form/file-input";

import type { BinaryFile } from "@features/file/types/binary-file";

export interface AvatarUploadInputProps extends Omit<FileInputProps, "onChange"> {
    previewUrl?: string;
    onChange?: (file: BinaryFile | null) => void;
}

export function AvatarUploadInput({
    previewUrl,
    style,
    onChange,
    ...props
}: AvatarUploadInputProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files
            ? e.target.files[0]
            : null;
        if (onChange) {
            onChange(file);
        }
    }

    return (
        <Container
            style={{
                position: "relative",
                width: "100px",
                height: "100px",
                border: "1px solid #d9d9d9",
                borderRadius: "50%",
                overflow: "hidden",
                backgroundColor: "#fafafa",
                backgroundImage: previewUrl ? `url(${previewUrl})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <FileInput
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    cursor: "pointer",
                    ...style,
                }}
                onChange={handleChange}
                {...props}
            />
        </Container>
    );
}