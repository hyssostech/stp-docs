# NullSafeStringEnumConverter

Namespace: StpSDK

```csharp
public class NullSafeStringEnumConverter : Newtonsoft.Json.Converters.StringEnumConverter
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> JsonConverter -> StringEnumConverter -> [NullSafeStringEnumConverter](./stpsdk.nullsafestringenumconverter)

## Properties

### **CamelCaseText**

#### Caution

StringEnumConverter.CamelCaseText is obsolete. Set StringEnumConverter.NamingStrategy with CamelCaseNamingStrategy instead.

---

```csharp
public bool CamelCaseText { get; set; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **NamingStrategy**

```csharp
public NamingStrategy? NamingStrategy { get; set; }
```

#### Property Value

NamingStrategy<br>

### **AllowIntegerValues**

```csharp
public bool AllowIntegerValues { get; set; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

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

### **NullSafeStringEnumConverter()**

```csharp
public NullSafeStringEnumConverter()
```

## Methods

### **ReadJson(JsonReader, Type, Object, JsonSerializer)**

```csharp
public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
```

#### Parameters

`reader` JsonReader<br>

`objectType` [Type](https://learn.microsoft.com/en-us/dotnet/api/system.type)<br>

`existingValue` [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object)<br>

`serializer` JsonSerializer<br>

#### Returns

[Object](https://learn.microsoft.com/en-us/dotnet/api/system.object)<br>
