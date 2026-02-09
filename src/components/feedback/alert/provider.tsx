import { notification } from "antd";
import type { NotificationInstance } from "antd/es/notification/interface";
import { createContext } from "react";

export const AlertContext = createContext<NotificationInstance>(notification);

export interface AlertProviderProps extends React.PropsWithChildren { }

export function AlertProvider({ children }: AlertProviderProps) {
    const [api, contextHolder] = notification.useNotification();

    return (
        <AlertContext.Provider value={api}>
            {contextHolder}
            {children}
        </AlertContext.Provider>
    );
}
