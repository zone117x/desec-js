**[desec](README.md)**

[Globals](README.md)

## Index

### Classes

* [ApiError](classes/apierror.md)
* [DesecAPI](classes/desecapi.md)
* [DomainNameAlreadyExistsError](classes/domainnamealreadyexistserror.md)
* [DomainUnavailableError](classes/domainunavailableerror.md)
* [EmailAlreadyRegisteredError](classes/emailalreadyregisterederror.md)

### Type aliases

* [AccountInfoResult](README.md#accountinforesult)
* [CreateDomainResult](README.md#createdomainresult)
* [CreateRecordSetOptions](README.md#createrecordsetoptions)
* [DeleteRecordSetOptions](README.md#deleterecordsetoptions)
* [DomainInfoResult](README.md#domaininforesult)
* [DomainResourceRecord](README.md#domainresourcerecord)
* [ListDomainsResult](README.md#listdomainsresult)
* [LoginResult](README.md#loginresult)
* [RegisterResult](README.md#registerresult)
* [UpdateRecordSetOptions](README.md#updaterecordsetoptions)

### Variables

* [API_ENDPOINT](README.md#const-api_endpoint)
* [DEFAULT_ROOT_DOMAIN](README.md#const-default_root_domain)
* [USER_AGENT](README.md#const-user_agent)
* [fetch](README.md#const-fetch)

## Type aliases

###  AccountInfoResult

Ƭ **AccountInfoResult**: *object*

*Defined in [index.ts:382](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L382)*

#### Type declaration:

* **email**: *string*

* **limit_domains**: *number*

* **locked**: *boolean*

___

###  CreateDomainResult

Ƭ **CreateDomainResult**: *object*

*Defined in [index.ts:407](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L407)*

#### Type declaration:

* **created**: *string*

* **keys**: *any[]*

* **minimum_ttl**: *number*

* **name**: *string*

___

###  CreateRecordSetOptions

Ƭ **CreateRecordSetOptions**: *`Pick<DomainResourceRecord, "type" | "records" | "ttl">` & `Partial<Pick<DomainResourceRecord, "subname">>`*

*Defined in [index.ts:487](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L487)*

___

###  DeleteRecordSetOptions

Ƭ **DeleteRecordSetOptions**: *`Pick<DomainResourceRecord, "type">` & `Partial<Pick<DomainResourceRecord, "subname">>`*

*Defined in [index.ts:495](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L495)*

___

###  DomainInfoResult

Ƭ **DomainInfoResult**: *object*

*Defined in [index.ts:499](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L499)*

#### Type declaration:

* **created**: *string*

* **keys**: *any[]*

* **minimum_ttl**: *number*

* **name**: *string*

* **published**: *string*

___

###  DomainResourceRecord

Ƭ **DomainResourceRecord**: *object*

*Defined in [index.ts:439](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L439)*

#### Type declaration:

* **domain**: *string*

* **name**: *string*

* **records**: *string[]*

* **subname**: *string*

* **ttl**: *number*

* **type**: *string*

___

###  ListDomainsResult

Ƭ **ListDomainsResult**: *`Array<DomainInfoResult>`*

*Defined in [index.ts:538](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L538)*

___

###  LoginResult

Ƭ **LoginResult**: *object*

*Defined in [index.ts:403](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L403)*

#### Type declaration:

* **auth_token**: *string*

___

###  RegisterResult

Ƭ **RegisterResult**: *object*

*Defined in [index.ts:399](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L399)*

#### Type declaration:

* **email**: *string*

___

###  UpdateRecordSetOptions

Ƭ **UpdateRecordSetOptions**: *`Pick<DomainResourceRecord, "type">` & `Partial<Pick<DomainResourceRecord, "records" | "ttl" | "subname">>`*

*Defined in [index.ts:491](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L491)*

## Variables

### `Const` API_ENDPOINT

• **API_ENDPOINT**: *"https://desec.io/api/v1"* = "https://desec.io/api/v1"

*Defined in [index.ts:3](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L3)*

___

### `Const` DEFAULT_ROOT_DOMAIN

• **DEFAULT_ROOT_DOMAIN**: *"dedyn.io"* = "dedyn.io"

*Defined in [index.ts:5](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L5)*

___

### `Const` USER_AGENT

• **USER_AGENT**: *"blockstack-gaia-desec"* = "blockstack-gaia-desec"

*Defined in [index.ts:4](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L4)*

___

### `Const` fetch

• **fetch**: *`FetchType`*

*Defined in [index.ts:380](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L380)*