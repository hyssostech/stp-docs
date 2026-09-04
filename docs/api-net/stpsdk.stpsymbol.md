# StpSymbol

Namespace: StpSDK

```csharp
public class StpSymbol : StpItem, IStpObject, System.ComponentModel.INotifyPropertyChanged
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [StpObject](./stpsdk.stpobject) -> [StpItem](./stpsdk.stpitem) -> [StpSymbol](./stpsdk.stpsymbol)<br>
Implements [IStpObject](./stpsdk.istpobject), [INotifyPropertyChanged](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged)

## Properties

### **Type**

```csharp
public override string Type { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Sidc**

2525D and 2525C identification codes for this symbol, as sent by the engine
 (the JSON-RPC `sidc` object).

```csharp
public Sidc Sidc { get; set; }
```

#### Property Value

[Sidc](./stpsdk.sidc)<br>

### **SymbolId**

2525C (legacy) identifier - a convenience accessor preserved for source compatibility
 with prior SDK versions. Not JSON-mapped; the wire `sidc` is [StpSymbol.Sidc](./stpsdk.stpsymbol#sidc).
 Setting it stores the value as the legacy code.

```csharp
public override string SymbolId { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **DeltaSIDC**

2525D identifier: Part A + Part B (+ Part C), or the full delta code.

```csharp
public string DeltaSIDC { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **CharlieSIDC**

2525C (legacy) identifier.

```csharp
public string CharlieSIDC { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **SymbolSet**

2525D symbol set (2-character code).

```csharp
public string SymbolSet { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **CodingScheme**

```csharp
public CodingScheme? CodingScheme { get; set; }
```

#### Property Value

[CodingScheme?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

### **Affiliation**

```csharp
public Affiliation? Affiliation { get; set; }
```

#### Property Value

[Affiliation?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

### **BattleDimension**

```csharp
public BattleDimension? BattleDimension { get; set; }
```

#### Property Value

[BattleDimension?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

### **Status**

```csharp
public Status? Status { get; set; }
```

#### Property Value

[Status?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

### **Modifier**

```csharp
public Modifier? Modifier { get; set; }
```

#### Property Value

[Modifier?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

### **Echelon**

```csharp
public Echelon? Echelon { get; set; }
```

#### Property Value

[Echelon?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

### **Mobility**

```csharp
public Mobility? Mobility { get; set; }
```

#### Property Value

[Mobility?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

### **CountryCode**

```csharp
public string CountryCode { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **OrderOfBattle**

```csharp
public OrderOfBattle? OrderOfBattle { get; set; }
```

#### Property Value

[OrderOfBattle?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

### **Branch**

```csharp
public Branch? Branch { get; set; }
```

#### Property Value

[Branch?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

### **Capability**

```csharp
public string Capability { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **GroundRole**

```csharp
public string GroundRole { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Role**

```csharp
public string Role { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Defense**

```csharp
public string Defense { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Weight**

```csharp
public string Weight { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Designator1**

```csharp
public string Designator1 { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Designator2**

```csharp
public string Designator2 { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Strength**

```csharp
public Strength Strength { get; set; }
```

#### Property Value

[Strength](./stpsdk.strength)<br>

### **Location**

```csharp
public Location Location { get; set; }
```

#### Property Value

[Location](./stpsdk.location)<br>

### **Info**

```csharp
public string Info { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Geometry**

```csharp
public string Geometry { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **TimeFrom**

```csharp
public string TimeFrom { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **TimeTo**

```csharp
public string TimeTo { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Altitude**

```csharp
public string Altitude { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **MinAlt**

```csharp
public string MinAlt { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **MaxAlt**

```csharp
public string MaxAlt { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **CompleteLanguage**

```csharp
public string CompleteLanguage { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **UnitParent**

```csharp
public string UnitParent { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **TaskOrgUnitPoid**

```csharp
public string TaskOrgUnitPoid { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **DisCode**

```csharp
public DISCode DisCode { get; set; }
```

#### Property Value

[DISCode](./stpsdk.discode)<br>

### **Federate**

```csharp
public string Federate { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Resources**

```csharp
public List<Resource> Resources { get; set; }
```

#### Property Value

[List&lt;Resource&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

### **Relationship**

```csharp
public CommandRelationship Relationship { get; set; }
```

#### Property Value

[CommandRelationship](./stpsdk.commandrelationship)<br>

### **DesignatorDescription**

```csharp
public string DesignatorDescription { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **FullDescription**

```csharp
public override string FullDescription { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Description**

```csharp
public override string Description { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **ShortDescription**

```csharp
public string ShortDescription { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **DesigPlusDescription**

```csharp
public string DesigPlusDescription { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **IsHq**

```csharp
public bool IsHq { get; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **SymbolDesignation**

```csharp
public virtual string SymbolDesignation { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **GeometryType**

```csharp
public GeometryTypeEnum GeometryType { get; }
```

#### Property Value

[GeometryTypeEnum](./stpsdk.geometrytypeenum)<br>

### **CreatorRole**

```csharp
public string CreatorRole { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Confidence**

```csharp
public double Confidence { get; set; }
```

#### Property Value

[Double](https://learn.microsoft.com/en-us/dotnet/api/system.double)<br>

### **Order**

```csharp
public int Order { get; set; }
```

#### Property Value

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

### **ParentCoa**

```csharp
public string ParentCoa { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Interval**

```csharp
public object Interval { get; set; }
```

#### Property Value

[Object](https://learn.microsoft.com/en-us/dotnet/api/system.object)<br>

### **Alternates**

```csharp
public List<StpItem> Alternates { get; set; }
```

#### Property Value

[List&lt;StpItem&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

### **Poid**

```csharp
public virtual string Poid { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **UpdateTimestamp**

```csharp
public virtual string UpdateTimestamp { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **CreationTimestamp**

```csharp
public virtual string CreationTimestamp { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **DbVersion**

```csharp
public virtual string DbVersion { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Extensions**

```csharp
public Dictionary<string, object> Extensions { get; set; }
```

#### Property Value

[Dictionary&lt;String, Object&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)<br>

## Constructors

### **StpSymbol()**

```csharp
public StpSymbol()
```

### **StpSymbol(String)**

```csharp
public StpSymbol(string fsType)
```

#### Parameters

`fsType` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

## Methods

### **Bitmap(Int32, Int32)**

Renders the symbol from its SIDC using the bundled Joint Military Symbology
 Library, or returns `null` when the SIDC is empty or JMSML rendering
 is unavailable (hosts such as SimpleMapPlugin fall back to drawing a point).
 Requires [StpRecognizer.JMSSVGPath](./stpsdk.stprecognizer#jmssvgpath) to point at the SVG graphics.

```csharp
public Bitmap Bitmap(int width, int height)
```

#### Parameters

`width` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

`height` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

#### Returns

[Bitmap](https://learn.microsoft.com/en-us/dotnet/api/system.drawing.bitmap)<br>

### **GetLinearSymbolCoords()**

```csharp
public List<LatLon> GetLinearSymbolCoords()
```

#### Returns

[List&lt;LatLon&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

## Events

### **PropertyChanged**

```csharp
public event PropertyChangedEventHandler PropertyChanged;
```
