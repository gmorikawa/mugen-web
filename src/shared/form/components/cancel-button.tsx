import { Button, type ButtonProps } from "@components/button/button";

export interface CancelButtonProps extends ButtonProps { }

export function CancelButton(props: CancelButtonProps) {
    return (
        <Button
            color="default"
            variant="outlined"
            {...props}
        >
            Cancel
        </Button>
    );
}
