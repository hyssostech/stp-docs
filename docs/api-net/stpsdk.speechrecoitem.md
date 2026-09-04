# SpeechRecoItem

Namespace: StpSDK

```csharp
public class SpeechRecoItem
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [SpeechRecoItem](./stpsdk.speechrecoitem)

## Properties

### **Text**

```csharp
public string Text { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Confidence**

```csharp
public double Confidence { get; set; }
```

#### Property Value

[Double](https://learn.microsoft.com/en-us/dotnet/api/system.double)<br>

### **StartSec**

```csharp
public double? StartSec { get; set; }
```

#### Property Value

[Double?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

### **EndSec**

```csharp
public double? EndSec { get; set; }
```

#### Property Value

[Double?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

### **ExtraRecoInfo**

```csharp
public string ExtraRecoInfo { get; set; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

## Constructors

### **SpeechRecoItem()**

```csharp
public SpeechRecoItem()
```

### **SpeechRecoItem(String, Double, Double?, Double?)**

```csharp
public SpeechRecoItem(string text, double confidence, double? startSec = null, double? endSec = null)
```

#### Parameters

`text` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`confidence` [Double](https://learn.microsoft.com/en-us/dotnet/api/system.double)<br>

`startSec` [Double?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

`endSec` [Double?](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1)<br>

## Methods

### **ToString()**

```csharp
public override string ToString()
```

#### Returns

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>
