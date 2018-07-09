# MyWeather

## Purpose

To learn React Native by training from GREAT free tutorial from Grafikart on YouTube - https://www.youtube.com/watch?v=Y7rbJRjaYCY.

The tutorial is in French.

## Differences

- This app uses `createBottomTabNavigator` instead of `TabNavigator`.

## Erros and learnt lessons

This section provides a list of the potential errors that happened during the development process, as well as, their correction:

- `Invariant Violation: Tried to get frame for out of range index NaN`: This is due to the fact that an object was provided to the FlatList `data` prop, more precisely the `response.data` from the axios get method. To correct it ensure that it is the list with results and not the object: `response.data` --> `response.data.list`
