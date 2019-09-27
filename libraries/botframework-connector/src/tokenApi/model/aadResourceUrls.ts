/**
 * Microsoft Bot Token API - V3.1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: token
 * Contact: botframework@microsoft.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export interface AadResourceUrls{
    resourceUrls?: Array<string>;
}

export class AadResourceUrls {
    /**
     * Resource Url
     */
    resourceUrls?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "resourceUrls",
            "baseName": "resourceUrls",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return AadResourceUrls.attributeTypeMap;
    }
}

