# StpJsonRpcConnector

Namespace: StpSDK

```csharp
public class StpJsonRpcConnector : IStpConnector, System.IDisposable
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [StpJsonRpcConnector](./stpsdk.stpjsonrpcconnector)<br>
Implements [IStpConnector](./stpsdk.istpconnector), [IDisposable](https://learn.microsoft.com/en-us/dotnet/api/system.idisposable)

## Properties

### **Connected**

```csharp
public bool Connected { get; }
```

#### Property Value

[Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean)<br>

### **Name**

```csharp
public string Name { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **BaseName**

```csharp
public string BaseName { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **Logger**

```csharp
public ILogger Logger { get; }
```

#### Property Value

[ILogger](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.logging.ilogger)<br>

### **Url**

```csharp
public string Url { get; }
```

#### Property Value

[String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

## Constructors

### **StpJsonRpcConnector(ILogger, String)**

```csharp
public StpJsonRpcConnector(ILogger logger = null, string url = "ws://localhost:9599")
```

#### Parameters

`logger` [ILogger](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.logging.ilogger)<br>

`url` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

## Methods

### **ConnectAsync(String, Int32, CancellationToken)**

```csharp
public async Task<bool> ConnectAsync(string url, int secondsToRetry = 0, CancellationToken ct = null)
```

#### Parameters

`url` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`secondsToRetry` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

`ct` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;Boolean&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **RegisterAsync(String, List&lt;String&gt;, String, String, CancellationToken)**

```csharp
public async Task<string> RegisterAsync(string serviceName, List<string> solvables, string machineId = null, string sessionId = null, CancellationToken ct = null)
```

#### Parameters

`serviceName` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`solvables` [List&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1)<br>

`machineId` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`sessionId` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`ct` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **Disconnect()**

```csharp
public void Disconnect()
```

### **Send(String)**

```csharp
public void Send(string jsonMessage)
```

#### Parameters

`jsonMessage` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

### **SendRequestAsync(String, Int32, Int32, CancellationToken)**

```csharp
public async Task<string> SendRequestAsync(string jsonMessage, int cookie, int timeoutMs = 30000, CancellationToken ct = null)
```

#### Parameters

`jsonMessage` [String](https://learn.microsoft.com/en-us/dotnet/api/system.string)<br>

`cookie` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

`timeoutMs` [Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

`ct` [CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken)<br>

#### Returns

[Task&lt;String&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1)<br>

### **GetNextCookie()**

```csharp
public int GetNextCookie()
```

#### Returns

[Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32)<br>

### **Dispose()**

```csharp
public void Dispose()
```

## Events

### **OnMessage**

```csharp
public event StpMessageReceivedDelegate OnMessage;
```

### **OnConnectionError**

```csharp
public event StpConnectionErrorDelegate OnConnectionError;
```
