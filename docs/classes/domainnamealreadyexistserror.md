**[desec](../README.md)**

[Globals](../README.md) › [DomainNameAlreadyExistsError](domainnamealreadyexistserror.md)

# Class: DomainNameAlreadyExistsError

## Hierarchy

  * [ApiError](apierror.md)

  * **DomainNameAlreadyExistsError**

## Index

### Constructors

* [constructor](domainnamealreadyexistserror.md#constructor)

### Properties

* [httpStatus](domainnamealreadyexistserror.md#httpstatus)
* [httpStatusText](domainnamealreadyexistserror.md#httpstatustext)
* [message](domainnamealreadyexistserror.md#message)
* [name](domainnamealreadyexistserror.md#name)
* [responseJson](domainnamealreadyexistserror.md#optional-responsejson)
* [responseText](domainnamealreadyexistserror.md#optional-responsetext)
* [stack](domainnamealreadyexistserror.md#optional-stack)

## Constructors

###  constructor

\+ **new DomainNameAlreadyExistsError**(`error`: [ApiError](apierror.md)): *[DomainNameAlreadyExistsError](domainnamealreadyexistserror.md)*

*Overrides [ApiError](apierror.md).[constructor](apierror.md#constructor)*

*Defined in [index.ts:571](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L571)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | [ApiError](apierror.md) |

**Returns:** *[DomainNameAlreadyExistsError](domainnamealreadyexistserror.md)*

## Properties

###  httpStatus

• **httpStatus**: *number*

*Inherited from [ApiError](apierror.md).[httpStatus](apierror.md#httpstatus)*

*Defined in [index.ts:541](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L541)*

___

###  httpStatusText

• **httpStatusText**: *string*

*Inherited from [ApiError](apierror.md).[httpStatusText](apierror.md#httpstatustext)*

*Defined in [index.ts:542](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L542)*

___

###  message

• **message**: *string*

*Inherited from void*

Defined in /Users/matt/Projects/desec-js/node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from void*

Defined in /Users/matt/Projects/desec-js/node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` responseJson

• **responseJson**? : *any*

*Inherited from [ApiError](apierror.md).[responseJson](apierror.md#optional-responsejson)*

*Defined in [index.ts:544](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L544)*

___

### `Optional` responseText

• **responseText**? : *undefined | string*

*Inherited from [ApiError](apierror.md).[responseText](apierror.md#optional-responsetext)*

*Defined in [index.ts:543](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L543)*

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from void*

*Overrides void*

Defined in /Users/matt/Projects/desec-js/node_modules/typescript/lib/lib.es5.d.ts:975