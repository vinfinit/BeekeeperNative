import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 'auto',
    backgroundColor: Colors.background
  },
  row: {
    flex: 1,
    margin: 5,
    minWidth: 110,
    maxWidth: 223,
    height: 304,
    maxHeight:304,
    backgroundColor: Colors.fire,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center'
  },
  image: {
    width: 50,
    height: 50
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.snow
  },
  listContent: {
    marginTop: Metrics.baseMargin
  }
})
