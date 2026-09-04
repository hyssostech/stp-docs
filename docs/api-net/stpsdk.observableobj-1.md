# ObservableObj&lt;T&gt;

Namespace: StpSDK

```csharp
public class ObservableObj<T> : DynamicData.Binding.AbstractNotifyPropertyChanged, System.ComponentModel.INotifyPropertyChanged
```

#### Type Parameters

`T`<br>

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> AbstractNotifyPropertyChanged -> [ObservableObj&lt;T&gt;](./stpsdk.observableobj-1)<br>
Implements [INotifyPropertyChanged](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged)

## Properties

### **Value**

```csharp
public T Value { get; set; }
```

#### Property Value

T<br>

### **Observable**

```csharp
public IObservable<T> Observable { get; }
```

#### Property Value

IObservable&lt;T&gt;<br>

## Constructors

### **ObservableObj(T)**

```csharp
public ObservableObj(T defaultValue = null)
```

#### Parameters

`defaultValue` T<br>

## Events

### **PropertyChanged**

```csharp
public event PropertyChangedEventHandler? PropertyChanged;
```
