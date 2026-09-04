# CommandExtEventArgs

Namespace: StpSDK

```csharp
public class CommandExtEventArgs
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [CommandExtEventArgs](./stpsdk.commandexteventargs)

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

### **CommandExtEventArgs(String, Location, Dictionary&lt;String, String&gt;)**

```csharp
public CommandExtEventArgs(string operation, Location location, Dictionary<string, string> properties)
```

#### Parameters

`operation` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`location` [Location](./stpsdk.location)<br>

`properties` [Dictionary&lt;String, String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2)<br>
