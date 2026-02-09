import { useContext, useEffect } from "react";
import { HeaderContext, type ApplicationAction } from "@shared/application/components/header-provider";

export function useApplicationHeader(
    appTitle: string,
    actions: ApplicationAction[]
): void {
    const applicationHeader = useContext(HeaderContext);

    useEffect(() => {
        applicationHeader
            .updateHeader(
                appTitle,
                actions
            );
    }, []);
}
