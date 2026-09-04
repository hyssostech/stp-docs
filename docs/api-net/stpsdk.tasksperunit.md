# TasksPerUnit

Namespace: StpSDK

```csharp
public class TasksPerUnit : System.ComponentModel.INotifyPropertyChanged
```

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> [TasksPerUnit](./stpsdk.tasksperunit)<br>
Implements [INotifyPropertyChanged](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged)

## Fields

### **Tasks**

```csharp
public List<StpTask> Tasks;
```

## Properties

### **Symbol**

```csharp
public StpSymbol Symbol { get; set; }
```

#### Property Value

[StpSymbol](./stpsdk.stpsymbol)<br>

## Constructors

### **TasksPerUnit(StpSymbol, IGrouping&lt;StpTask, String, String&gt;)**

```csharp
public TasksPerUnit(StpSymbol symbol, IGrouping<StpTask, string, string> tasks)
```

#### Parameters

`symbol` [StpSymbol](./stpsdk.stpsymbol)<br>

`tasks` IGrouping&lt;StpTask, String, String&gt;<br>

## Methods

### **&lt;&gt;OnPropertyChanged(PropertyChangedEventArgs)**

```csharp
protected void <>OnPropertyChanged(PropertyChangedEventArgs eventArgs)
```

#### Parameters

`eventArgs` [PropertyChangedEventArgs](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.propertychangedeventargs)<br>

## Events

### **PropertyChanged**

```csharp
public event PropertyChangedEventHandler PropertyChanged;
```
