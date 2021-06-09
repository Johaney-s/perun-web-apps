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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { PerunAppsConfig } from '../model/perunAppsConfig';
import { PerunException } from '../model/perunException';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class UtilsService {

    protected basePath = 'https://perun.cesnet.cz/krb/rpc';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    /**
     * Gets configuration of perun apps brandings and apps\&#39; domains
     * Returns object of type PerunAppsConfig
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAppsConfig(observe?: 'body', reportProgress?: boolean): Observable<PerunAppsConfig>;
    public getAppsConfig(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PerunAppsConfig>>;
    public getAppsConfig(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PerunAppsConfig>>;
    public getAppsConfig(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (BearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<PerunAppsConfig>(`${this.configuration.basePath}/json/utils/getAppsConfig`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets perun-web-gui.properties as Map&lt;String,String&gt;
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getGuiConfiguration(observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: string; }>;
    public getGuiConfiguration(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: string; }>>;
    public getGuiConfiguration(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: string; }>>;
    public getGuiConfiguration(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (BearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<{ [key: string]: string; }>(`${this.configuration.basePath}/json/utils/getGuiConfiguration`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets Perun runtime status
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPerunRPCVersion(observe?: 'body', reportProgress?: boolean): Observable<string>;
    public getPerunRPCVersion(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public getPerunRPCVersion(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public getPerunRPCVersion(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (BearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'text/plain'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<string>(`${this.configuration.basePath}/`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets Perun runtime statistics
     * Returns list of strings which looks like this \&quot;Timestamp: \&#39;2019-11-14 10:46:39.613\&#39;\&quot;, \&quot;USERS: \&#39;39927\&#39;\&quot;, \&quot;FACILITIES: \&#39;552\&#39;\&quot;, \&quot;DESTINATIONS: \&#39;2568\&#39;\&quot;, \&quot;VOS: \&#39;341\&#39;\&quot;, \&quot;RESOURCES: \&#39;2560\&#39;\&quot;, \&quot;GROUPS: \&#39;2300\&#39;\&quot;, \&quot;AUDITMESSAGES: \&#39;7333237\&#39;\&quot; 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPerunStatistics(observe?: 'body', reportProgress?: boolean): Observable<Array<string>>;
    public getPerunStatistics(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<string>>>;
    public getPerunStatistics(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<string>>>;
    public getPerunStatistics(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (BearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Array<string>>(`${this.configuration.basePath}/json/utils/getPerunStatistics`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets Perun runtime status
     * Returns list of strings which looks like this \&quot;Version of Perun: 3.8.6\&quot;, \&quot;Version of PerunDB: 3.1.55\&quot;, \&quot;Version of Servlet: Apache Tomcat/9.0.16 (Debian)\&quot;, \&quot;Version of DB-driver: PostgreSQL JDBC Driver-42.2.8\&quot;, \&quot;Version of DB: PostgreSQL-12.0 (Debian 12.0-2.pgdg100+1)\&quot;, \&quot;Version of Java platform: 11.0.5\&quot;, \&quot;AuditerConsumer: \&#39;127.0.0.1:6071\&#39; with last processed id&#x3D;\&#39;23463958\&#39;\&quot;, \&quot;AuditerConsumer: \&#39;ldapcConsumer\&#39; with last processed id&#x3D;\&#39;23463958\&#39;\&quot;, \&quot;AuditerConsumer: \&#39;notifications\&#39; with last processed id&#x3D;\&#39;23463952\&#39;\&quot;, \&quot;LastMessageId: 23463958\&quot;, \&quot;Timestamp: 2019-11-14 10:12:30.99\&quot; 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPerunStatus(observe?: 'body', reportProgress?: boolean): Observable<Array<string>>;
    public getPerunStatus(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<string>>>;
    public getPerunStatus(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<string>>>;
    public getPerunStatus(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (BearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Array<string>>(`${this.configuration.basePath}/json/utils/getPerunStatus`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets Perun system time in milliseconds since the epoch
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPerunSystemTimeInMillis(observe?: 'body', reportProgress?: boolean): Observable<number>;
    public getPerunSystemTimeInMillis(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<number>>;
    public getPerunSystemTimeInMillis(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<number>>;
    public getPerunSystemTimeInMillis(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (BearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<number>(`${this.configuration.basePath}/json/utils/getPerunSystemTimeInMillis`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
