/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 3.27.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MembersOrderColumn } from './membersOrderColumn';
import { VoMemberStatuses } from './voMemberStatuses';
import { SortingOrder } from './sortingOrder';
import { MemberGroupStatus } from './memberGroupStatus';


export interface MembersPageQuery { 
    pageSize: number;
    offset: number;
    order: SortingOrder;
    sortColumn: MembersOrderColumn;
    searchString?: string;
    statuses?: Array<VoMemberStatuses>;
    groupId?: number;
    groupStatuses?: Array<MemberGroupStatus>;
}

