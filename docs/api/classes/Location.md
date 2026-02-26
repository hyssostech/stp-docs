# Class: Location

Location properties

## Constructors

### Constructor

> **new Location**(): `Location`

#### Returns

`Location`

## Properties

### altitude

> **altitude**: `number` \| `undefined`

Altitude

***

### candidatePoids

> **candidatePoids**: `string`[] \| `undefined`

Symbols intersected by "coords", expressed as unique STP identifiers

***

### centroid

> **centroid**: [`LatLon`](LatLon.md) \| `undefined`

Symbol centroid

***

### coords

> **coords**: [`LatLon`](LatLon.md)[] \| `undefined`

Latitude and longitude coordinates for the symbol
These follow the anchor points Draw Rules definitions both in terms of the number of points as well as their order,
as documented e.g. in Appendix H of the MIL-STD-2525D Joint Military Symbology standard

***

### fsTYPE

> **fsTYPE**: `"point"` \| `"line"` \| `"area"` \| `"multipoint"` \| `undefined`

General type of location

***

### radius

> **radius**: `number` \| `undefined`

Radius of the area around the symbol

***

### shape

> **shape**: `"point"` \| `"line"` \| `"area"` \| `"multipoint"` \| `"straightline"` \| `"arrowthin"` \| `"arrowfat"` \| `"hook"` \| `"ubend"` \| `"ubendthreepoints"` \| `"vee"` \| `"opencircle"` \| `undefined`

Gesture type (see "STP Military Symbol Gestures" documentation for details - available from Hyssos Tech upon request)

***

### width

> **width**: `number` \| `undefined`

Width
