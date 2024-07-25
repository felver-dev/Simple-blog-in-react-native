import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";

const DefaultComponent = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

registerRootComponent(DefaultComponent);
