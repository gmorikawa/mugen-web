export class NoSessionError extends Error {
    constructor() {
        super("No active session found");
        this.name = "NoSessionError";
    }
}