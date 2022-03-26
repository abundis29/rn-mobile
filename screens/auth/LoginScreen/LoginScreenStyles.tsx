import {StyleSheet} from 'react-native';
import {
  INNER_PADDING,
  SCREEN_PADDING,
} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: SCREEN_PADDING,
    alignItems: 'center', // ignore this - we'll come back to it
    justifyContent: 'center', // ignore this - we'll come back to it
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
  },
  image: {
    margin: 10,
    width: 80,
    height: 60,
  },
  formInput: {
    alignSelf: 'stretch',
    padding: INNER_PADDING,
  },
  formCheckbox: {
    alignSelf: 'stretch',
    margin: INNER_PADDING,
    backgroundColor: null,
    borderWidth: 0,
  },
  formButton: {
    alignSelf: 'stretch',
    margin: INNER_PADDING,
  },
});
