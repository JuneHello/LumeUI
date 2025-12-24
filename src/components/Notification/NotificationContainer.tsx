import { useRTL } from '../../hooks/useRTL';
import TextLink from '../TextLink';
import { NotificationToast, NotificationToastClose, NotificationToastDescription, NotificationToastProvider, NotificationToastTitle, NotificationToastViewport } from './NotificationComponents';
import { useNotification } from './useNotification';

export function NotificationContainer() {
  const { notifications } = useNotification();
  const isRTL = useRTL();

  return (
    <NotificationToastProvider swipeDirection={isRTL ? 'left' : 'right'}>
      {notifications.map(
        ({
          id,
          title,
          description,
          action,
          link,
          linkText,
          duration = 4500,
          linkTarget = '_blank',
          showCloseBtn = false,
          ...props
        }) => (
          <NotificationToast key={id} duration={duration} {...props}>
            <div className="w-full">
              {title && <NotificationToastTitle showCloseBtn={showCloseBtn}>{title}</NotificationToastTitle>}
              {description && <NotificationToastDescription>{description}</NotificationToastDescription>}
              {link && linkText && (
                <TextLink
                  variant="primary"
                  size="small"
                  href={link}
                  opensWindow={linkTarget === '_blank'}
                >
                  {linkText}
                </TextLink>
              )}
            </div>
            {action}
            {showCloseBtn && <NotificationToastClose />}
          </NotificationToast>
        )
      )}
      <NotificationToastViewport />
    </NotificationToastProvider>
  );
}
