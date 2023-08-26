import { legacy_createStore } from "redux";
import { rootReducer } from "./reducers";

//export default Store = createStoreHook(rootReducer);
const store = legacy_createStore(rootReducer);

export default store;