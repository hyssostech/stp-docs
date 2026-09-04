# ObservableFilter&lt;ObjT, FilterT&gt;

Namespace: StpSDK

```csharp
public class ObservableFilter<ObjT, FilterT> : DynamicData.Binding.AbstractNotifyPropertyChanged, System.ComponentModel.INotifyPropertyChanged
```

#### Type Parameters

`ObjT`<br>

`FilterT`<br>

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> AbstractNotifyPropertyChanged -> [ObservableFilter&lt;ObjT, FilterT&gt;](./stpsdk.observablefilter-2)<br>
Implements [INotifyPropertyChanged](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged)

## Properties

### **DynammicValue**

```csharp
public ObjT DynammicValue { get; set; }
```

#### Property Value

ObjT<br>

### **Observable**

```csharp
public IObservable<Func<FilterT, bool>> Observable { get; }
```

#### Property Value

IObservable&lt;Func&lt;FilterT, Boolean&gt;&gt;<br>

## Constructors

### **ObservableFilter(Func&lt;FilterT, Boolean&gt;)**

```csharp
public ObservableFilter(Func<FilterT, bool> condition)
```

#### Parameters

`condition` Func&lt;FilterT, Boolean&gt;<br>

## Events

### **PropertyChanged**

```csharp
public event PropertyChangedEventHandler? PropertyChanged;
```
