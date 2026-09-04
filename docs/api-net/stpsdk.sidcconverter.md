# SidcConverter

Namespace: StpSDK

Reads the SIDC object the engine sends (`delta` or `partA`/`partB`/`partC`,
 plus `legacy` and `symbolSet`), reconstructing [Sidc.Delta](./stpsdk.sidc#delta) from parts
 when needed; writes back `delta`/`legacy`/`symbolSet` (matching the JavaScript SDK).

```csharp
public class SidcConverter : Newtonsoft.Json.JsonConverter`1[[StpSDK.Sidc, StpSDK, Version=0.4.1.0, Culture=neutral, PublicKeyToken=null]]
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> JsonConverter -> JsonConverter&lt;Sidc&gt; -> [SidcConverter](./stpsdk.sidcconverter)

## Properties

### **CanRead**

```csharp
public virtual bool CanRead { get; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **CanWrite**

```csharp
public virtual bool CanWrite { get; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

## Constructors

### **SidcConverter()**

```csharp
public SidcConverter()
```

## Methods

### **ReadJson(JsonReader, Type, Sidc, Boolean, JsonSerializer)**

```csharp
public override Sidc ReadJson(JsonReader reader, Type objectType, Sidc existingValue, bool hasExistingValue, JsonSerializer serializer)
```

#### Parameters

`reader` JsonReader<br>

`objectType` [Type](https://learn.microsoft.com/en-us/dotnet/api/system.type)<br>

`existingValue` [Sidc](./stpsdk.sidc)<br>

`hasExistingValue` [Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

`serializer` JsonSerializer<br>

#### Returns

[Sidc](./stpsdk.sidc)<br>

### **WriteJson(JsonWriter, Sidc, JsonSerializer)**

```csharp
public override void WriteJson(JsonWriter writer, Sidc value, JsonSerializer serializer)
```

#### Parameters

`writer` JsonWriter<br>

`value` [Sidc](./stpsdk.sidc)<br>

`serializer` JsonSerializer<br>
