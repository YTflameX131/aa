/*
Do not change anything in this code. Modifying it may cause errors.
License: Owned by YTflameX. Do not copy or redistribute without permission.
Coded By YTflameX
*/
// world code
// Set Value Of In Storage With Key And Value
//modifies the specific key if the key exists...
// returns full if storage is full
setStorageValue=(Id,key,value)=>{let items=api.getMoonstoneChestItems(Id);if(!items)return;let targetSlot=-1;let firstEmptySlot=-1;for(let i=0;i<items.length;i++){if(items[i]&&items[i].attributes&&items[i].attributes.customDisplayName===key){targetSlot=i;break;}if(items[i]===null&&firstEmptySlot===-1){firstEmptySlot=i;}}if(targetSlot!==-1){api.setMoonstoneChestItemSlot(Id,targetSlot,"Dirt",1,{customDisplayName:key,customDescription:value});}else if(firstEmptySlot!==-1){api.setMoonstoneChestItemSlot(Id,firstEmptySlot,"Dirt",1,{customDisplayName:key,customDescription:value});}else{throw new Error("Storage is full");}};
getStorageValue=(Id,key)=>{let Items=api.getMoonstoneChestItems(Id);if(!Items)return null;for(let i=0;i<Items.length;i++){let item=Items[i];if(item&&item.attributes&&item.attributes.customDisplayName===key){return item.attributes.customDescription||null;}}return null;};
// get all storage data
// returns empty if not found
getAllStorageData=(Id)=>{let items=api.getMoonstoneChestItems(Id);let storageMap={};if(!items)return storageMap;for(let i=0;i<items.length;i++){let item=items[i];if(item&&item.attributes&&item.attributes.customDisplayName){let key=item.attributes.customDisplayName;let value=item.attributes.customDescription||"";storageMap[key]=value;}}return storageMap;};
// delete specific key from storage
// throws error if not found
// id must be valid
deleteStorageValue=(Id,key)=>{let items=api.getMoonstoneChestItems(Id);if(!items){throw new Error("Storage Load Error: Could not get items for ID "+Id);}for(let i=0;i<items.length;i++){let item=items[i];if(item&&item.attributes&&item.attributes.customDisplayName===key){api.setMoonstoneChestItemSlot(Id,i,"Air",1);return "Deleted "+key;}}throw new Error("Storage Key Not Found: "+key);};