# Class: StpTaskOrgRelationship

Task Org (ORBAT) relationships

## Constructors

### Constructor

> **new StpTaskOrgRelationship**(): `StpTaskOrgRelationship`

#### Returns

`StpTaskOrgRelationship`

## Properties

### child

> **child**: `string` \| `undefined`

Child Task Org Unit unique id

***

### extensions?

> `optional` **extensions**: `Record`\<`string`, `unknown`\>

Open-ended client-defined extension properties.
Roundtripped through STP feature structures.

***

### fsTYPE

> **fsTYPE**: `"task_org_relationship"` \| `undefined`

Type of this item

***

### isMTOE

> **isMTOE**: `boolean` \| `undefined`

Whether this is part of a MTOE (Modificaiton Table of Organization and Equipment)

***

### parent

> **parent**: `string` \| `undefined`

Parent Task Org Unit unique id

***

### parentTO

> **parentTO**: `string` \| `undefined`

Unique Id of the StpTaskOrg this element belongs to

***

### poid

> **poid**: `string` \| `undefined`

Unique id

***

### relationship

> **relationship**: [`CommandRelationship`](../enumerations/CommandRelationship.md) \| `undefined`

Type of relationship between child and parent
