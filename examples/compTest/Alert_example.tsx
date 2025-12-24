import React, { useState } from 'react';
import { Alert, AlertProps } from '@/components/Alert';
import { CheckIcon } from '@/icons';

export const AlertExample: React.FC = () => {
  const [visibleAlerts, setVisibleAlerts] = useState<{ [key: string]: boolean }>({
    basic: true,
    withDescription: true,
    withClose: true,
    customIcon: true,
    banner: true,
  });

  const handleClose = (key: string) => {
    setVisibleAlerts(prev => ({ ...prev, [key]: false }));
  };

  const resetAlerts = () => {
    setVisibleAlerts({
      basic: true,
      withDescription: true,
      withClose: true,
      customIcon: true,
      banner: true,
    });
  };

  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Alert Component Examples</h1>

      {/* Basic Alert */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Basic Alert</h2>
        {visibleAlerts.basic && (
          <Alert
            variant="info"
            message="This is a basic info alert"
          />
        )}
      </div>

      {/* Alert with Description */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Alert with Description</h2>
        {visibleAlerts.withDescription && (
          <Alert
            variant="remind"
            message="Success Operation"
            description="Your changes have been saved successfully. The system will update automatically."
          />
        )}
      </div>

      {/* Alert with Close Button */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Alert with Close Button</h2>
        {visibleAlerts.withClose && (
          <Alert
            variant="warn"
            message="Warning Message"
            description="Please review your input before proceeding. Some fields may require attention."
            closeIcon={true}
            onClose={() => handleClose('withClose')}
          />
        )}
      </div>

      {/* Alert with Custom Icon */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Alert with Custom Icon</h2>
        {visibleAlerts.customIcon && (
          <Alert
            variant="remind"
            message="Custom Icon Alert"
            description="This alert uses a custom check icon instead of the default."
            icon={<CheckIcon className="text-green-500" />}
          />
        )}
      </div>

      {/* Banner Style Alert */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Banner Style Alert</h2>
        {visibleAlerts.banner && (
          <Alert
            variant="info"
            banner={true}
            message="Banner Notification"
            description="This is a full-width banner style alert that spans the entire container."
          />
        )}
      </div>

      {/* All Variants */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">All Variants</h2>

        <Alert
          variant="info"
          message="Info Variant"
          description="Default informational alert with gray background."
        />

        <Alert
          variant="remind"
          message="Remind Variant"
          description="Brand-colored alert for success or important reminders."
        />

        <Alert
          variant="warn"
          message="Warning Variant"
          description="Red alert for warnings and error messages."
        />
      </div>

      {/* Alert without Icon */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Alert without Icon</h2>
        <Alert
          variant="remind"
          showIcon={false}
          message="No Icon Alert"
          description="This alert doesn't show any icon on the left side."
        />
      </div>

      {/* Alert with Custom Close Icon */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Alert with Custom Close Icon</h2>
        <Alert
          variant="warn"
          message="Custom Close Icon"
          description="This alert uses a custom close button."
          closeIcon={
            <button
              onClick={() => console.log('Custom close clicked')}
              className="text-red-500 hover:text-red-700 font-bold"
            >
              Dismiss
            </button>
          }
        />
      </div>

      {/* Interactive Controls */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Interactive Controls</h3>
        <button
          onClick={resetAlerts}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Reset All Alerts
        </button>
      </div>
    </div>
  );
};

export default AlertExample;