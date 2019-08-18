**[desec](../README.md)**

[Globals](../README.md) › [ApiError](apierror.md)

# Class: ApiError

## Hierarchy

* `Error`

  * **ApiError**

  * [EmailAlreadyRegisteredError](emailalreadyregisterederror.md)

  * [DomainNameAlreadyExistsError](domainnamealreadyexistserror.md)

  * [DomainUnavailableError](domainunavailableerror.md)

## Index

### Constructors

* [constructor](apierror.md#constructor)

### Properties

* [httpStatus](apierror.md#httpstatus)
* [httpStatusText](apierror.md#httpstatustext)
* [message](apierror.md#message)
* [name](apierror.md#name)
* [responseJson](apierror.md#optional-responsejson)
* [responseText](apierror.md#optional-responsetext)
* [stack](apierror.md#optional-stack)
* [Error](apierror.md#static-error)

## Constructors

###  constructor

\+ **new ApiError**(`httpStatus`: number, `httpStatusText`: string, `responseText?`: undefined | string): *[ApiError](apierror.md)*

*Defined in [index.ts:544](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L544)*

**Parameters:**

Name | Type |
------ | ------ |
`httpStatus` | number |
`httpStatusText` | string |
`responseText?` | undefined \| string |

**Returns:** *[ApiError](apierror.md)*

## Properties

###  httpStatus

• **httpStatus**: *number*

*Defined in [index.ts:541](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L541)*

___

###  httpStatusText

• **httpStatusText**: *string*

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

*Defined in [index.ts:544](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L544)*

___

### `Optional` responseText

• **responseText**? : *undefined | string*

*Defined in [index.ts:543](https://github.com/zone117x/desec-js/blob/master/src/index.ts#L543)*

___

### `Optional` stack

• **stack**? : *undefined | string*

*Inherited from void*

*Overrides void*

Defined in /Users/matt/Projects/desec-js/node_modules/typescript/lib/lib.es5.d.ts:975

___

### `Static` Error

▪ **Error**: *`ErrorConstructor`*

Defined in /Users/matt/Projects/desec-js/node_modules/typescript/lib/lib.es5.d.ts:984