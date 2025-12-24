import { notification } from "../..";
export var showNotification = function showNotification(_ref) {
  var iconType = _ref.iconType,
    title = _ref.title,
    duration = _ref.duration,
    description = _ref.description;
  notification({
    iconType: iconType,
    title: title,
    duration: duration,
    description: description
  });
};