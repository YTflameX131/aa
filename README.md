# ChestStorage System
You can use this system to store and retrieve data using keys inside Moonstone Chest storage.
This allows you to save player data, stats, settings, and more using simple key-value pairs.
This system is designed to be simple and efficient, and works directly with the Bloxd.io game API.

# Functions

**Set Value** 

* Stores a value using a key.
* If the key already exists, it will be updated.
* If storage is full, it will throw an error.
```js
setStorageValue(Id, key, value)
````

**Get Value** 

* Returns the value stored for a key.
* Returns `null` if the key is not found.
```js
getStorageValue(Id, key)
```

**Get All Data**

* Returns all stored data as a key-value object.
* Returns empty object` {} ` if nothing is found.
```js
getAllStorageData(Id)
```

**Delete Value**

* Deletes a specific key from storage.
* Throws an error if the key is not found.
```js
deleteStorageValue(Id, key)
```

# Notes

* Data is stored using customDisplayName as key
* Data is stored using customDescription as value
* Uses Moonstone Chest slots as storage
* Each key takes one slot
* Storage is limited by chest size
* Do not change anything in the code, modifying it may cause errors
* License: Owned by YTflameX. Do not copy or redistribute without permission

# Example  

**Save data**

```js
setStorageValue(myId, "coins", "100")
```

**Get data**

```js
let coins = getStorageValue(myId, "coins")
```

**Delete data**

```js
deleteStorageValue(myId, "coins")
```

# How To Install







