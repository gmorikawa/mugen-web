import { useContext } from "react";
import { AlertContext } from "./provider";

export type AlertType = "success" | "error" | "warning" | "info";

export interface AlertController {
    showMessage(message: string, type: AlertType): void;

    showSuccessMessage(message: string): void;
    showErrorMessage(error: Error): void;
}

export interface AlertConfiguration {
    showInConsole?: boolean;
}

export function useAlert(
    configuration?: AlertConfiguration
): AlertController {
    const context = useContext(AlertContext);

    function showMessage(message: string, type: AlertType): void {
        context[type]({
            description: message
        });
    }

    const showSuccessMessage = (message: string): void => {
        showMessage(message, "success");
    };

    const showErrorMessage = (error: Error): void => {
        showMessage(error?.message, "error");

        if (configuration?.showInConsole) {
            console.error(error);
        }
    };

    return {
        showMessage,
        showSuccessMessage,
        showErrorMessage,
    };
}
