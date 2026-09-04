# ISpeechRecognizer

Namespace: StpSDK

```csharp
public interface ISpeechRecognizer
```

## Methods

### **RecognizeOnceAsync(String, CancellationToken)**

```csharp
Task RecognizeOnceAsync(string audioDeviceId, CancellationToken cancellationToken)
```

#### Parameters

`audioDeviceId` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cancellationToken` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task)<br>

## Events

### **OnRecognized**

```csharp
event SpeechRecognizedDelegate OnRecognized;
```

### **OnRecognizing**

```csharp
event SpeechRecognizingDelegate OnRecognizing;
```

### **OnSpeechStart**

```csharp
event SpeechStartPauseEndDelegate OnSpeechStart;
```

### **OnSpeechEnd**

```csharp
event SpeechStartPauseEndDelegate OnSpeechEnd;
```

### **OnListeningStateChanged**

```csharp
event ListeningStateChangedDelegate OnListeningStateChanged;
```

### **OnError**

```csharp
event SpeechErrorOrCancelDelegate OnError;
```

### **OnCanceled**

```csharp
event SpeechErrorOrCancelDelegate OnCanceled;
```
