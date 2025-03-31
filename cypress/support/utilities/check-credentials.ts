import { Credentials } from "../domain-objects/credentials"

export interface ValidationResult {
    valid: boolean,
    message?: string
}

export function checkCredentials(credentials: Credentials): ValidationResult {
    if (credentials.username === "richtig@horsti.de" && credentials.password === "richtig") {
        return { valid: true };
    } 
    return { valid: false, message: "Login attempt failed" }
}