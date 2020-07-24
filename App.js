import React from "react";
import createSagaMiddleware from "redux-saga";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { GalleryScreen } from "./src/components/GalleryScreen";
import { PhotoScreen } from "./src/components/PhotoScreen";
import combineReducers from "./src/store/reducers";
import { rootSaga } from "./src/saga/rootSaga";

const saga = createSagaMiddleware();

const store = createStore(combineReducers, compose(applyMiddleware(saga)));

saga.run(rootSaga);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen name="Gallery" component={GalleryScreen} />
          <Stack.Screen
            name="Photo"
            component={PhotoScreen}
            options={({ route }) => ({
              title: route.params.photo.user.first_name,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const Stack = createStackNavigator();
