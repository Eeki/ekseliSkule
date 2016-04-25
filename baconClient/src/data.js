import Bacon from 'baconjs';

//toDo
function clickHandler(previousState, clickEvent) {
  var newState = {}
  newState.lastClickedId = clickEvent;
  newState.videos = previousState.videos;
  return newState
}

export const initialData = {
  lastClickedId: "",
  videos: [
    {title: 'Sample video', wistiaId: 'ki75w5880h', description: "The most common Sample video"},
    {title: 'Nökö', wistiaId: 'rdtqvdo697', description: "Nökö the dog"},
    {title: 'Sormi', wistiaId: '5ssaxfegbg', description: "Finger"}
  ]
};

export const clickBus = new Bacon.Bus();
export const stateProperty = Bacon.update(initialData, clickBus, clickHandler);