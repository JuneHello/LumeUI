import { useEffect, useState, useRef } from 'react';

interface UseSelectHoverProps {
  hoverTime: number;
  hoverAction?: boolean;
  setDropdownVisible: (visible: boolean) => void;
  onDropdownVisibleChange?: (visible: boolean) => void;
}

export const useSelectHover = ({
  hoverTime,
  hoverAction,
  setDropdownVisible,
  onDropdownVisibleChange,
}: UseSelectHoverProps) => {
  const [hover, setHover] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const mouseEnterHandler = () => {
    if (!hoverAction) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setHover(true);
    setDropdownVisible(true);
    onDropdownVisibleChange?.(true);
  };

  const mouseLeaveHandler = () => {
    if (!hoverAction) return;
    timerRef.current = setTimeout(() => {
      setHover(false);
    }, hoverTime);
  };

  const dropdownMouseEnterHandler = () => {
    if (!hoverAction) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setHover(true);
  };

  const dropdownMouseLeaveHandler = () => {
    if (!hoverAction) return;
    timerRef.current = setTimeout(() => {
      setHover(false);
    }, hoverTime);
  };

  useEffect(() => {
    if (!hoverAction) return;
    if (!hover) {
      setDropdownVisible(false);
      onDropdownVisibleChange?.(false);
    }
  }, [hover, hoverAction, setDropdownVisible, onDropdownVisibleChange]);

  return {
    mouseEnterHandler,
    mouseLeaveHandler,
    dropdownMouseEnterHandler,
    dropdownMouseLeaveHandler,
  };
};
