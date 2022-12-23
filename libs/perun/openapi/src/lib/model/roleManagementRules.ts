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


export interface RoleManagementRules { 
    roleName: string;
    primaryObject: string | null;
    privilegedRolesToManage: Array<{ [key: string]: string; }>;
    privilegedRolesToRead: Array<{ [key: string]: string; }>;
    entitiesToManage: { [key: string]: string; };
    assignedObjects: { [key: string]: string; };
    assignableToAttributes: boolean;
    displayName: string;
}

