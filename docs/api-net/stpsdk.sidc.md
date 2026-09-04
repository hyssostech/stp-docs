# Sidc

Namespace: StpSDK

2525D and 2525C military symbol identification codes for a symbol, as exchanged
 with the STP engine over JSON-RPC.

```csharp
public class Sidc
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [Sidc](./stpsdk.sidc)<br>
Attributes JsonConverterAttribute

**Remarks:**

Mirrors the JavaScript SDK's `Sidc` type. The engine sends the SIDC as an
 object - typically the 2525D parts (`partA`, `partB`, optionally
 `partC`), the 2525D `symbolSet`, and the 2525C `legacy` code; the
 full 2525D [Sidc.Delta](./stpsdk.sidc#delta) is reconstructed from the parts when not supplied.

## Properties

### **Delta**

Full 2525D code (20 or 30 characters). Reconstructed from Part A/B/C when the engine sends parts.

```csharp
public string Delta { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **SymbolSet**

2525D symbol set (2-character code).

```csharp
public string SymbolSet { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Legacy**

2525C legacy SIDC.

```csharp
public string Legacy { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **PartA**

Part A of the 2525D id (first 10 chars of [Sidc.Delta](./stpsdk.sidc#delta)).

```csharp
public string PartA { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **PartB**

Part B of the 2525D id (chars 10-19 of [Sidc.Delta](./stpsdk.sidc#delta)).

```csharp
public string PartB { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **PartC**

Part C of the 2525D id (chars 20-29 of [Sidc.Delta](./stpsdk.sidc#delta)), when present.

```csharp
public string PartC { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Charlie**

2525C identifier - the legacy code when available.

```csharp
public string Charlie { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

## Constructors

### **Sidc()**

```csharp
public Sidc()
```
