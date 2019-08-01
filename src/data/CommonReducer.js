
export const CommonReducer = (...reducers) => (storeData, action) => {
for (let i = 0; i < reducers.length; i++){
let newStore = reducer[i](storeData, action)
if (newStore != storeData) {
    return newStore
}
}
    return storeData;
}