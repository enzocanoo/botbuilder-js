/**
 * Microsoft Bot Connector API - v3.0
 * The Bot Connector REST API allows your bot to send and receive messages to channels configured in the  [Bot Framework Developer Portal](https://dev.botframework.com). The Connector service uses industry-standard REST  and JSON over HTTPS.    Client libraries for this REST API are available. See below for a list.    Many bots will use both the Bot Connector REST API and the associated [Bot State REST API](/en-us/restapi/state). The  Bot State REST API allows a bot to store and retrieve state associated with users and conversations.    Authentication for both the Bot Connector and Bot State REST APIs is accomplished with JWT Bearer tokens, and is  described in detail in the [Connector Authentication](/en-us/restapi/authentication) document.    # Client Libraries for the Bot Connector REST API    * [Bot Builder for C#](/en-us/csharp/builder/sdkreference/)  * [Bot Builder for Node.js](/en-us/node/builder/overview/)  * Generate your own from the [Connector API Swagger file](https://raw.githubusercontent.com/Microsoft/BotBuilder/master/CSharp/Library/Microsoft.Bot.Connector.Shared/Swagger/ConnectorAPI.json)    © 2016 Microsoft
 *
 * The version of the OpenAPI document: v3
 * Contact: botframework@microsoft.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { AttachmentInfo } from './model/attachmentInfo';
import { ErrorResponse } from './model/errorResponse';
import * as Models from "./model";
import { ObjectSerializer, Authentication, VoidAuth } from './model/models';

let defaultBasePath = 'https://api.botframework.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AttachmentsApiApiKeys {
}

export class AttachmentsApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;
    protected credentials: Models.SimpleCredential;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(CustomCredentials: Models.SimpleCredential)
    constructor(CustomCredentials: Models.SimpleCredential, basePath?: string){
        if(basePath)
         this.basePath = basePath;
         
        if(CustomCredentials){
            this.credentials = new Models.SimpleCredential(CustomCredentials.appId, CustomCredentials.appPassword);
        }        
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: AttachmentsApiApiKeys, value: string) {
        (this.authentications as any)[AttachmentsApiApiKeys[key]].apiKey = value;
    }

    /**
     * Get the named view as binary content
     * @summary GetAttachment
     * @param attachmentId attachment id
     * @param viewId View id from attachmentInfo
     */
    public async attachmentsGetAttachment (attachmentId: string, viewId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
        const localVarPath = this.basePath + '/v3/attachments/{attachmentId}/views/{viewId}'
            .replace('{' + 'attachmentId' + '}', encodeURIComponent(String(attachmentId)))
            .replace('{' + 'viewId' + '}', encodeURIComponent(String(viewId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'attachmentId' is not null or undefined
        if (attachmentId === null || attachmentId === undefined) {
            throw new Error('Required parameter attachmentId was null or undefined when calling attachmentsGetAttachment.');
        }

        // verify required parameter 'viewId' is not null or undefined
        if (viewId === null || viewId === undefined) {
            throw new Error('Required parameter viewId was null or undefined when calling attachmentsGetAttachment.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: Buffer;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Buffer");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }

    
    /**
     * Get AttachmentInfo structure describing the attachment views
     * @summary GetAttachmentInfo
     * @param attachmentId attachment id
     */
    public async attachmentsGetAttachmentInfo (attachmentId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AttachmentInfo;  }> {
        const localVarPath = this.basePath + '/v3/attachments/{attachmentId}'
            .replace('{' + 'attachmentId' + '}', encodeURIComponent(String(attachmentId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'attachmentId' is not null or undefined
        if (attachmentId === null || attachmentId === undefined) {
            throw new Error('Required parameter attachmentId was null or undefined when calling attachmentsGetAttachmentInfo.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.IncomingMessage; body: AttachmentInfo;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "AttachmentInfo");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
