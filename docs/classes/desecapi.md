**[desec](../README.md)**

[Globals](../README.md) › [DesecAPI](desecapi.md)

# Class: DesecAPI

## Hierarchy

* **DesecAPI**

## Index

### Constructors

* [constructor](desecapi.md#constructor)

### Properties

* [authToken](desecapi.md#optional-authtoken)
* [fetchFn](desecapi.md#protected-fetchfn)

### Methods

* [checkBadResponse](desecapi.md#protected-checkbadresponse)
* [createDomain](desecapi.md#createdomain)
* [createDomainRecordSet](desecapi.md#createdomainrecordset)
* [deleteDomainRecordSet](desecapi.md#deletedomainrecordset)
* [getAccountInfo](desecapi.md#getaccountinfo)
* [getAuthToken](desecapi.md#private-getauthtoken)
* [getDefaultFetchOpts](desecapi.md#protected-getdefaultfetchopts)
* [getDomainInfo](desecapi.md#getdomaininfo)
* [getDomainRecordSets](desecapi.md#getdomainrecordsets)
* [getFullDomainName](desecapi.md#protected-getfulldomainname)
* [listDomains](desecapi.md#listdomains)
* [login](desecapi.md#login)
* [logout](desecapi.md#logout)
* [register](desecapi.md#register)
* [updateDomainRecordSet](desecapi.md#updatedomainrecordset)

## Constructors

###  constructor

\+ **new DesecAPI**(`opts?`: undefined | object): *[DesecAPI](desecapi.md)*

*Defined in [index.ts:10](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`opts?` | undefined \| object |

**Returns:** *[DesecAPI](desecapi.md)*

## Properties

### `Optional` authToken

• **authToken**? : *undefined | string*

*Defined in [index.ts:10](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L10)*

___

### `Protected` fetchFn

• **fetchFn**: *`FetchType`*

*Defined in [index.ts:9](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L9)*

## Methods

### `Protected` checkBadResponse

▸ **checkBadResponse**(`response`: `Response`): *`Promise<ApiError | false>`*

*Defined in [index.ts:329](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L329)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | `Response` |

**Returns:** *`Promise<ApiError | false>`*

___

###  createDomain

▸ **createDomain**(`opts`: object): *`Promise<CreateDomainResult>`*

*Defined in [index.ts:117](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L117)*

**Parameters:**

▪ **opts**: *object*

Name | Type |
------ | ------ |
`name` | string |
`useDefaultRoot?` | undefined \| false \| true |

**Returns:** *`Promise<CreateDomainResult>`*

___

###  createDomainRecordSet

▸ **createDomainRecordSet**(`opts`: object): *`Promise<DomainResourceRecord | DomainResourceRecord[]>`*

*Defined in [index.ts:209](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L209)*

**Parameters:**

▪ **opts**: *object*

Name | Type |
------ | ------ |
`name` | string |
`recordSet` | [CreateRecordSetOptions](../README.md#createrecordsetoptions) \| [CreateRecordSetOptions](../README.md#createrecordsetoptions)[] |
`useDefaultRoot?` | undefined \| false \| true |

**Returns:** *`Promise<DomainResourceRecord | DomainResourceRecord[]>`*

___

###  deleteDomainRecordSet

▸ **deleteDomainRecordSet**(`opts`: object): *`Promise<void>`*

*Defined in [index.ts:264](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L264)*

**Parameters:**

▪ **opts**: *object*

Name | Type |
------ | ------ |
`name` | string |
`recordSet` | [DeleteRecordSetOptions](../README.md#deleterecordsetoptions) \| [DeleteRecordSetOptions](../README.md#deleterecordsetoptions)[] |
`useDefaultRoot?` | undefined \| false \| true |

**Returns:** *`Promise<void>`*

___

###  getAccountInfo

▸ **getAccountInfo**(): *`Promise<AccountInfoResult>`*

*Defined in [index.ts:34](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L34)*

**Returns:** *`Promise<AccountInfoResult>`*

___

### `Private` getAuthToken

▸ **getAuthToken**(): *string*

*Defined in [index.ts:25](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L25)*

**Returns:** *string*

___

### `Protected` getDefaultFetchOpts

▸ **getDefaultFetchOpts**(`opts`: object): *`RequestInit`*

*Defined in [index.ts:299](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L299)*

**Parameters:**

▪ **opts**: *object*

Name | Type |
------ | ------ |
`authToken?` | undefined \| string |
`body?` | undefined \| string |
`contentType?` | `ValidContentType` |
`headers?` | undefined \| object |
`method` | `HttpMethod` |

**Returns:** *`RequestInit`*

___

###  getDomainInfo

▸ **getDomainInfo**(`opts`: object): *`Promise<DomainInfoResult>`*

*Defined in [index.ts:167](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L167)*

**Parameters:**

▪ **opts**: *object*

Name | Type |
------ | ------ |
`name` | string |
`useDefaultRoot?` | undefined \| false \| true |

**Returns:** *`Promise<DomainInfoResult>`*

___

###  getDomainRecordSets

▸ **getDomainRecordSets**(`opts`: object): *`Promise<DomainResourceRecord[]>`*

*Defined in [index.ts:186](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L186)*

**Parameters:**

▪ **opts**: *object*

Name | Type |
------ | ------ |
`filterType?` | undefined \| string |
`name` | string |
`useDefaultRoot?` | undefined \| false \| true |

**Returns:** *`Promise<DomainResourceRecord[]>`*

___

### `Protected` getFullDomainName

▸ **getFullDomainName**(`name`: string, `useDefaultRoot`: boolean): *string*

*Defined in [index.ts:342](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L342)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | - |
`useDefaultRoot` | boolean | true |

**Returns:** *string*

___

###  listDomains

▸ **listDomains**(): *`Promise<ListDomainsResult>`*

*Defined in [index.ts:152](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L152)*

**Returns:** *`Promise<ListDomainsResult>`*

___

###  login

▸ **login**(`opts`: object): *`Promise<LoginResult>`*

*Defined in [index.ts:78](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L78)*

**Parameters:**

▪ **opts**: *object*

Name | Type |
------ | ------ |
`email` | string |
`password` | string |

**Returns:** *`Promise<LoginResult>`*

___

###  logout

▸ **logout**(): *`Promise<void>`*

*Defined in [index.ts:103](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L103)*

Invalidate an auth token

**Returns:** *`Promise<void>`*

___

###  register

▸ **register**(`opts`: object): *`Promise<RegisterResult>`*

*Defined in [index.ts:49](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L49)*

**Parameters:**

▪ **opts**: *object*

Name | Type |
------ | ------ |
`email` | string |
`password` | string |

**Returns:** *`Promise<RegisterResult>`*

___

###  updateDomainRecordSet

▸ **updateDomainRecordSet**(`opts`: object): *`Promise<DomainResourceRecord[]>`*

*Defined in [index.ts:231](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L231)*

**Parameters:**

▪ **opts**: *object*

Name | Type |
------ | ------ |
`name` | string |
`recordSet` | [UpdateRecordSetOptions](../README.md#updaterecordsetoptions) \| [UpdateRecordSetOptions](../README.md#updaterecordsetoptions)[] |
`useDefaultRoot?` | undefined \| false \| true |

**Returns:** *`Promise<DomainResourceRecord[]>`*