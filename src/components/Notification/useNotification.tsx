import { AlertCircleSolidIcon, AlertTriangleSolidIcon, CircleIcon, EmptyIcon } from '../../icons';
import * as React from 'react';
import { ENotificationType, actionTypes, type Action, type State, type ToasterToast } from './types';

const TOAST_LIMIT = 4;
const TOAST_REMOVE_DELAY = 1000000;

let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: actionTypes.REMOVE_TOAST,
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        notifications: [action.toast, ...state.notifications].slice(0, TOAST_LIMIT),
      };

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        notifications: state.notifications.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action;

      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.notifications.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        notifications: state.notifications.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      };
    }

    case actionTypes.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return {
          ...state,
          notifications: [],
        };
      }
      return {
        ...state,
        notifications: state.notifications.filter((t) => t.id !== action.toastId),
      };
    default:
      return state;
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { notifications: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

export function notification({ ...props }: Omit<ToasterToast, 'id'>) {
  const id = genId();

  const { icon, iconType } = props;

  // Render icons based on type
  const title = (
    <React.Fragment>
      {icon && iconType === ENotificationType.CUSTOM && (
        <img src={icon} className="moly-notification-custom-icon" alt="" />
      )}
      {!icon && iconType === ENotificationType.SUCCESS && (
        <CircleIcon className="moly-notification-icon-success" />
      )}
      {!icon && iconType === ENotificationType.FAIL && (
        <EmptyIcon className="moly-notification-icon-fail" />
      )}
      {!icon && iconType === ENotificationType.INFO && (
        <AlertCircleSolidIcon className="moly-notification-icon-info" />
      )}
      {!icon && iconType === ENotificationType.WARN && (
        <AlertTriangleSolidIcon className="moly-notification-icon-warn" />
      )}
      {props.title}
    </React.Fragment>
  );

  const update = (props: Partial<ToasterToast>) =>
    dispatch({
      type: actionTypes.UPDATE_TOAST,
      toast: { ...props, id },
    });

  const dismiss = () =>
    dispatch({
      type: actionTypes.DISMISS_TOAST,
      toastId: id,
    });

  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      ...props,
      title,
      id,
      open: true,
      onOpenChange: (open: boolean) => {
        if (!open) dismiss();
      },
    } as ToasterToast,
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

export function useNotification() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  return {
    ...state,
    notification,
    ENotificationType,
    dismiss: (toastId?: string) =>
      dispatch({
        type: actionTypes.DISMISS_TOAST,
        toastId,
      }),
  };
}
