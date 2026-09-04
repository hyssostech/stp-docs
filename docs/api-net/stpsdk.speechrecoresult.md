# SpeechRecoResult

Namespace: StpSDK

```csharp
public class SpeechRecoResult
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [SpeechRecoResult](./stpsdk.speechrecoresult)

## Properties

### **FromReco**

```csharp
public string FromReco { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Results**

```csharp
public List<SpeechRecoItem> Results { get; set; }
```

#### Property Value

[List&lt;SpeechRecoItem&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

### **StartTime**

```csharp
public DateTime StartTime { get; set; }
```

#### Property Value

[DateTime](https://learn.microsoft.com/en-us/dotnet/api/system.datetime)<br>

### **EndTime**

```csharp
public DateTime EndTime { get; set; }
```

#### Property Value

[DateTime](https://learn.microsoft.com/en-us/dotnet/api/system.datetime)<br>

## Constructors

### **SpeechRecoResult(String)**

```csharp
public SpeechRecoResult(string fromReco)
```

#### Parameters

`fromReco` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **SpeechRecoResult(String, DateTime, DateTime)**

```csharp
public SpeechRecoResult(string fromReco, DateTime startTime, DateTime endTime)
```

#### Parameters

`fromReco` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`startTime` [DateTime](https://learn.microsoft.com/en-us/dotnet/api/system.datetime)<br>

`endTime` [DateTime](https://learn.microsoft.com/en-us/dotnet/api/system.datetime)<br>

### **SpeechRecoResult(String, List&lt;SpeechRecoResult&gt;, Int32)**

```csharp
public SpeechRecoResult(string fromRecos, List<SpeechRecoResult> allResults, int maxCombinedRecos = -1)
```

#### Parameters

`fromRecos` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`allResults` [List&lt;SpeechRecoResult&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

`maxCombinedRecos` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

## Methods

### **Combine(SpeechRecoResult, Int32)**

```csharp
public void Combine(SpeechRecoResult res, int maxCombinedRecos = -1)
```

#### Parameters

`res` [SpeechRecoResult](./stpsdk.speechrecoresult)<br>

`maxCombinedRecos` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

### **AddAlternate(String, Double, Double?, Double?, String)**

```csharp
public void AddAlternate(string alternate, double likelihood, double? startSec = null, double? endSec = null, string extraRecoInfo = null)
```

#### Parameters

`alternate` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`likelihood` [Double](https://learn.microsoft.com/en-us/dotnet/api/system.double)<br>

`startSec` [Double?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

`endSec` [Double?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

`extraRecoInfo` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>
