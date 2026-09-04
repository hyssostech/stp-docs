# NotifyingObj&lt;T&gt;

Namespace: StpSDK

```csharp
public class NotifyingObj<T> : DynamicData.Binding.AbstractNotifyPropertyChanged, System.ComponentModel.INotifyPropertyChanged
```

#### Type Parameters

`T`<br>

Inheritance [Object](https://learn.microsoft.com/en-us/dotnet/api/system.object) -> AbstractNotifyPropertyChanged -> [NotifyingObj&lt;T&gt;](./stpsdk.notifyingobj-1)<br>
Implements [INotifyPropertyChanged](https://learn.microsoft.com/en-us/dotnet/api/system.componentmodel.inotifypropertychanged)

## Properties

### **Value**

```csharp
public T Value { get; set; }
```

#### Property Value

T<br>

## Constructors

### **NotifyingObj()**

```csharp
public NotifyingObj()
```

## Events

### **PropertyChanged**

```csharp
public event PropertyChangedEventHandler? PropertyChanged;
```
