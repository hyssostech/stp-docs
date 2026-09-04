# SymbolEditExtEventArgs

Namespace: StpSDK

```csharp
public class SymbolEditExtEventArgs
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [SymbolEditExtEventArgs](./stpsdk.symboleditexteventargs)

## Properties

### **Operation**

```csharp
public string Operation { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Location**

```csharp
public Location Location { get; }
```

#### Property Value

[Location](./stpsdk.location)<br>

### **Properties**

```csharp
public Dictionary<string, string> Properties { get; }
```

#### Property Value

[Dictionary&lt;String, String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)<br>

## Constructors

### **SymbolEditExtEventArgs(String, Location, Dictionary&lt;String, String&gt;)**

```csharp
public SymbolEditExtEventArgs(string operation, Location location, Dictionary<string, string> properties)
```

#### Parameters

`operation` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`location` [Location](./stpsdk.location)<br>

`properties` [Dictionary&lt;String, String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)<br>
