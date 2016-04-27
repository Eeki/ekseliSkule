/*export default function() {
  return [
    {title: 'Sample video', wistiaId: 'ki75w5880h', description: "The most common Sample video"},
    {title: 'Nökö', wistiaId: 'rdtqvdo697', description: "Nökö the dog"},
    {title: 'Sormi', wistiaId: '5ssaxfegbg', description: "Finger"}
  ]
}*/


import { FETCH_VIDEOS } from '../actions/constants';

export default function(state = {}, action) {

  switch(action.type) {
    case FETCH_VIDEOS:
      return { ...state, videoList: action.payload }
  }

  return state
}
