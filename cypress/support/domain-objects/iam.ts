import { Credentials } from "./credentials";
import { ValidationResult } from "./validation-result";

export class IAM {

    public checkCredentials(credentials: Credentials): ValidationResult {
        if (credentials.username.includes("richtig@horsti.de") && credentials.password === "richtig") {
            return { valid: true };
        } 
        return { valid: false, message: "Login attempt failed!" }
    }
}