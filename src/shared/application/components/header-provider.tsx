import { createContext, useState } from "react";

export interface ApplicationHeaderContext {
    appTitle: string;
    actions: ApplicationAction[];
    updateHeader: (title: string, actions: ApplicationAction[]) => void;
}

export interface ApplicationAction {
    label: string;
    action: () => void;
}

export const HeaderContext = createContext<ApplicationHeaderContext>({
    appTitle: "App Title",
    actions: [],
    updateHeader: () => { },
});

export interface HeaderProviderProps extends React.PropsWithChildren { }

export function HeaderProvider({ children }: HeaderProviderProps) {
    const [appTitle, setAppTitle] = useState<string>("App Title");
    const [actions, setActions] = useState<ApplicationAction[]>([]);

    const updateHeader = (title: string, actions: ApplicationAction[]) => {
        setAppTitle(title);
        setActions(actions);
    };

    return (
        <HeaderContext.Provider
            value={{ appTitle, actions, updateHeader }}
        >
            {children}
        </HeaderContext.Provider>
    );
}
