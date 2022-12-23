/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 0.0.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * input for changePasswordForUser
 */
export interface InputChangePasswordForUser { 
    user: number;
    namespace: string;
    newPassword: string;
    oldPassword?: string;
    /**
     * True if the oldPassword has to be checked. When omitted it defaults to false.
     */
    checkOldPassword?: boolean;
}

