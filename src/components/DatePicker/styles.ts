/* stylelint-disable */
import { injectGlobal } from '@emotion/css';

export interface DatePickerStyleProps {
  id: number | string;
  size?: 'small' | 'medium';
  theme?: 'light' | 'dark';
  status?: 'error' | 'success' | 'warning';
  fullWidth?: boolean;
}

export const injectDatePickerStyles = (props: DatePickerStyleProps) => {
  const isDark = props.theme === 'dark';
  const isMedium = props.size === 'medium';
  const isError = props.status === 'error';

  return injectGlobal`
  .moly-datepicker-h5 .moly-datepicker-datetime-panel{
    display: flex;
    flex-direction: column;
  }
  .moly-datepicker-customize {
    position: absolute !important;
    bottom: 0;
    left:0;
    opacity: 0;
    z-index: -1;
  }
  .moly-datepicker-displayWrap {
    width: fit-content;
  }
  .moly-datepicker-h5-noShowTime .moly-datepicker-time-panel{
    display: none !important;
  }
  .moly-datepicker-h5 .moly-datepicker-panel-layout{
    display: flex;
    flex-direction: column;
  }
  .moly-datepicker-h5 .moly-datepicker-presets{
    margin-bottom:-12px;
    font-family: "IBM Plex Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
  }
  .moly-datepicker-h5 .moly-datepicker-body{
    padding-bottom: 0 !important;
  }
  .moly-datepicker-h5 .moly-datepicker-header{
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
  .moly-datepicker-h5 .moly-datepicker-presets ul{
    display: flex;
    flex-direction: column;
  }
  .moly-datepicker-h5 .moly-datepicker-presets ul li{
    width: 45%;
    display: flex;
    height: 24px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid ;
    border-color: ${isDark ? 'var(--gray-tt-4-dis, #595D61)' : 'var(--gray-tt-4-dis, #D5DAE0)'};
    background: ${isDark ? 'var(--gray-bg-bg-card, #16171A)' : 'var(--gray-bg-bg-card, #FFF)'};
  }
  .moly-datepicker-h5 .moly-datepicker-presets ul li:nth-child(even){
    position: relative;
    left: 50%;
    top: -12px;
    height: 24px;
    margin-bottom: 0;
  }
  .moly-datepicker-h5 .moly-datepicker-presets ul li:nth-child(odd){
    margin-bottom: -12px;
  }
 
  .moly-datepicker-wrapper-${props.id}{
    position: relative;
    .moly-datepicker-label {
      margin-bottom: ${isMedium ? '8px' : '4px'};
      font-size: ${isMedium ? '14px' : '12px'};
    }
    .moly-datepicker-error-text {
      font-size: ${isMedium ? '14px' : '12px'};
      margin-top: ${isMedium ? '8px' : '4px'};
    }
    .moly-datepicker {
      width: ${props.fullWidth ? '100%' : 'auto'};
      height: ${isMedium ? '48px' : '40px'};
      border-radius: ${isMedium ? '8px' : '4px'};
      font-size: ${isMedium ? '16px' : '12px'};
      padding: 0 ${isMedium ? '16px' : '12px'};
      
    }
    .moly-datepicker-range-separator {
      padding: 0 ${isMedium ? '20px' : '16px'};
    }
    .moly-datepicker:hover {
      border-radius: ${isMedium ? '8px' : '4px'};
    }
    .moly-datepicker-error-text {
      font-size: ${isMedium ? '14px' : '12px'};
      margin-top: ${isMedium ? '8px' : '4px'};
    }
    .moly-datepicker-suffix {
      svg {
        width: ${isMedium ? '20px' : '18px'};
        height: ${isMedium ? '20px' : '18px'};
      }
    }
    .moly-datepicker-clear {
      svg {
        fill: ${isDark ? '#71757A' : '#ADB1B8'};
        width: ${isMedium ? '20px' : '18px'};
        height: ${isMedium ? '20px' : '18px'};
      }
    }
    .moly-datepicker-active-bar {
      background-color: ${isError ? 'var(--bds-red-700-normal, #ef454a)' : 'var(--bds-brand-700-normall, #f7a600)'};
    }
    .moly-datepicker-focused {
      .moly-datepicker-input-active {
        &::before {
          background-color: ${isError ? 'var(--bds-red-700-normal, #ef454a)' : 'var(--bds-brand-700-normall, #f7a600)'};
        }
      }
    }
  }
  .moly-datepicker-range-arrow::after {
    border-color:${isDark ? '#404347' : '#fff'} ${isDark ? '#404347' : '#fff'} transparent transparent !important
  }
  .moly-datepicker-panel {
    display: inline-flex;
    flex-direction: column;
    border: none;
    border-radius: 8px;
    outline: none;
    background-color: #fff;
    text-align: center;
  }

  .moly-datepicker-label {
    color: var(--bds-gray-t2, #81858c);
    font-family: IBM Plex Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
  .moly-datepicker-error-text {
    color: var(--bds-red-700-normal, #ef454a);
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }

  .moly-datepicker-panel-focused {
    border-color: #328ef5;
  }

  .moly-datepicker-date-panel,
  .moly-datepicker-decade-panel,
  .moly-datepicker-month-panel,
  .moly-datepicker-quarter-panel,
  .moly-datepicker-time-panel,
  .moly-datepicker-week-panel,
  .moly-datepicker-year-panel {
    display: flex;
    flex-direction: column;
  }

  .moly-datepicker-header {
    display: flex;
    margin: 0 12px;
    padding: 9px 0;
    border-bottom: 1px solid;
    border-color: ${isDark ? 'var(--bds-gray-ele-border, #404347)' : '#e9edf2'};

    & > * {
      flex: none;
    }

    & > button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      padding: 0;
      border: 0;
      background-color: transparent;
      cursor: pointer;
      transition: all 200ms ease 0s;

      &:hover svg {
        fill: #3990cd !important;
      }
    }

    .moly-datepicker-header-view {
      display: flex;
      flex: auto;
      align-items: center;
      justify-content: center;

      & > button {
        padding: 0 2px;
        border: 0;
        background-color: transparent;
        border-color: ${isDark ? 'var(--bds-gray-t1-title, #FFF)' : '#373737'};
        color: ${isDark ? 'var(--bds-gray-t1-title, #FFF)' : '#373737'};

        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 200ms ease 0s;
        &:hover {
          color: #328ef5;
        }
      }
    }
  }

  table.moly-datepicker-content {
    display: table;
    width: auto;
    margin-bottom: 0;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0 8px;

    th,
    tr {
      padding: 0;
      border: none;
    }

    tr {
      border-top: none;
      background-color: ${isDark ? '#fff' : '#000'};
    }

    th {
      height: 22px;
      color: ${isDark ? '#404347' : '#fff'};
      line-height: 22px;
      font-weight: 500;
    }

    td {
      border: none;
    }
  }

  .moly-datepicker-cell {
    padding: 4px 0;
    color: rgba(0, 0, 0, 0.25);
    cursor: pointer;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      top: 50%;
      right: 0;
      left: 0;
      height: 22px;
      transform: translateY(-50%);
    }
  }

  .moly-datepicker-cell-in-view.moly-datepicker-cell-range-hover-end.moly-datepicker-cell-range-end-single::after,
  .moly-datepicker-cell-in-view.moly-datepicker-cell-range-hover-end:not(
      .moly-datepicker-cell-in-range
    ):not(.moly-datepicker-cell-range-start):not(
      .moly-datepicker-cell-range-end
    )::after,
  .moly-datepicker-cell-in-view.moly-datepicker-cell-range-hover-start.moly-datepicker-cell-range-start-single::after,
  .moly-datepicker-cell-in-view.moly-datepicker-cell-range-hover-start:not(
      .moly-datepicker-cell-in-range
    ):not(.moly-datepicker-cell-range-start):not(
      .moly-datepicker-cell-range-end
    )::after,
  .moly-datepicker-cell-in-view.moly-datepicker-cell-range-hover:not(
      .moly-datepicker-cell-in-range
    )::after {
    transition: 0.3 all;
    content: '';
    position: absolute;
    z-index: 0;
    top: 50%;
    height: 28px;
    transform: translateY(-50%);
  }

  .moly-datepicker-date-panel
    .moly-datepicker-cell-in-view.moly-datepicker-cell-in-range.moly-datepicker-cell-range-hover-end
    .moly-datepicker-cell-inner::after,
  .moly-datepicker-date-panel
    .moly-datepicker-cell-in-view.moly-datepicker-cell-in-range.moly-datepicker-cell-range-hover-start
    .moly-datepicker-cell-inner::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    background: #d5d8e8;
  }

  .moly-datepicker-date-panel
    .moly-datepicker-cell-in-view.moly-datepicker-cell-in-range.moly-datepicker-cell-range-hover-start
    .moly-datepicker-cell-inner::after {
    right: -7px;
    left: 0;
  }

  .moly-datepicker-date-panel
    .moly-datepicker-cell-in-view.moly-datepicker-cell-in-range.moly-datepicker-cell-range-hover-end
    .moly-datepicker-cell-inner::after {
    right: 0;
    left: -7px;
  }

  .moly-datepicker-cell-disabled.moly-datepicker-cell-today
    .moly-datepicker-cell-inner::before {
    border-color: rgba(0, 0, 0, 0.25);
  }

  .moly-datepicker-cell-in-view.moly-datepicker-cell-today
    .moly-datepicker-cell-inner::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 8px;
  }

  .moly-datepicker-cell-in-view.moly-datepicker-cell-in-range {
    position: relative;
  }

  .moly-datepicker-cell-disabled {
    cursor: not-allowed;
  }

  .moly-datepicker-cell:hover:not(.moly-datepicker-cell-in-view)
    .moly-datepicker-cell-inner,
  .moly-datepicker-cell:hover:not(.moly-datepicker-cell-selected):not(
      .moly-datepicker-cell-range-start
    ):not(.moly-datepicker-cell-range-end):not(
      .moly-datepicker-cell-range-hover-start
    ):not(.moly-datepicker-cell-range-hover-end)
    .moly-datepicker-cell-inner {
      border-radius: 4px;
      background: var(--bds-brand-600-hover, #ffc35c);
  }

  .moly-datepicker-cell-selected .moly-datepicker-cell-inner::before {
    display: none;
  }

  .moly-datepicker-cell-in-view.moly-datepicker-cell-range-end
    .moly-datepicker-cell-inner,
  .moly-datepicker-cell-in-view.moly-datepicker-cell-range-start
    .moly-datepicker-cell-inner,
  .moly-datepicker-cell-in-view.moly-datepicker-cell-selected
    .moly-datepicker-cell-inner {
    border-radius: 4px;
    background: var(--bds-brand-700-normall, #f7a600);
    color: #121214;
  }
  .moly-datepicker-cell-range-start-single.moly-datepicker-cell-selected {
    background: none !important;
  }

  .moly-datepicker-cell-in-view.moly-datepicker-cell-range-start::before {
    left: 50%;
  }

  .moly-datepicker-cell-in-view.moly-datepicker-cell-range-end::before {
    right: 50%;
  }

  .moly-datepicker-cell-range-hover-end::after,
  .moly-datepicker-cell-range-hover-start::after,
  .moly-datepicker-cell-range-hover::after {
    right: 0;
    left: 1px;
  }

  .moly-datepicker-panel-layout {
    display: flex;
    align-item: center;
    justify-content: center;
    .moly-datepicker-presets {
      border-right: 1px solid;
      border-color: ${isDark ? '#404347' : '#fff'};

      padding: 12px;
      li {
        margin-bottom: 24px;
        transition: all 0.3s;
        &:hover {
          color: #f7a600;
          cursor: pointer;
        }
      }
    }
  }

  .moly-datepicker-cell-range-hover.moly-datepicker-cell-range-start::after {
    right: 50%;
  }

  .moly-datepicker-cell-range-hover.moly-datepicker-cell-range-end::after {
    left: 50%;
  }

  .moly-datepicker-cell-in-view.moly-datepicker-cell-range-hover-edge-start:not(
      .moly-datepicker-cell-range-hover-edge-start-near-range
    )::after,
  .moly-datepicker-cell-in-view.moly-datepicker-cell-range-hover-start::after,
  tr
    > .moly-datepicker-cell-in-view.moly-datepicker-cell-range-hover-end:first-child::after,
  tr
    > .moly-datepicker-cell-in-view.moly-datepicker-cell-range-hover:first-child::after {
    transition: 0.3 all;
    border-bottom-left-radius: 8px;
  }

  .moly-datepicker-cell-in-view.moly-datepicker-cell-range-hover-edge-end:not(
      .moly-datepicker-cell-range-hover-edge-end-near-range
    )::after,
  .moly-datepicker-cell-in-view.moly-datepicker-cell-range-hover-end::after,
  tr
    > .moly-datepicker-cell-in-view.moly-datepicker-cell-range-hover-start:last-child::after,
  tr
    > .moly-datepicker-cell-in-view.moly-datepicker-cell-range-hover:last-child::after {
    transition: 0.3 all;
    right: 6px;
    border-bottom-right-radius: 8px;
  }

  .moly-datepicker-cell-disabled {
    pointer-events: none;

    .moly-datepicker-cell-inner {
      background: 0 0;
      color: #67758d;
    }
    border-color: var(--Trans_Hover, rgba(56, 68, 82, 0.06)) !important;
  }

  .moly-datepicker-cell-today .moly-datepicker-cell-inner {
    color: #d6850d;
  }

  .moly-datepicker-decade-panel .moly-datepicker-content,
  .moly-datepicker-month-panel .moly-datepicker-content,
  .moly-datepicker-quarter-panel .moly-datepicker-content,
  .moly-datepicker-year-panel .moly-datepicker-content {
    height: 264px;
  }

  .moly-datepicker-decade-panel .moly-datepicker-cell-inner,
  .moly-datepicker-month-panel .moly-datepicker-cell-inner,
  .moly-datepicker-quarter-panel .moly-datepicker-cell-inner,
  .moly-datepicker-year-panel .moly-datepicker-cell-inner {
    padding: 0 8px;
  }

  .moly-datepicker-decade-panel
    .moly-datepicker-cell-disabled
    .moly-datepicker-cell-inner,
  .moly-datepicker-month-panel
    .moly-datepicker-cell-disabled
    .moly-datepicker-cell-inner,
  .moly-datepicker-quarter-panel
    .moly-datepicker-cell-disabled
    .moly-datepicker-cell-inner,
  .moly-datepicker-year-panel
    .moly-datepicker-cell-disabled
    .moly-datepicker-cell-inner {
    background: #f5f5f5;
  }

  .moly-datepicker-quarter-panel .moly-datepicker-content {
    height: 56px;
  }

  .moly-datepicker-footer {
    width: min-content;
    min-width: 100%;
    text-align: center;
    padding: 0px 12px;
    min-height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid var(--bds-gray-ele-border, #fff);
  }

  .moly-datepicker-footer-extra {
    min-height: 36px;
    padding: 9px 0;
    text-align: left;
    width: 100%;
    color: var(--bds-gray-t2, #81858c);
    font-family: IBM Plex Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
  .moly-datepicker-date-panel {
    position: relative;
  }
  .moly-datepicker-footer-extra:not(:last-child) {
    border-bottom: 1px solid;
    border-top: 1px solid;
    border-color: ${isDark ? 'var(--bds-gray-t1-title, #FFF)' : 'rgba(0, 0, 0, 0.85)'};
  }

  .moly-datepicker-now {
    text-align: left;
  }

  .moly-datepicker-today-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #d6850d;
    cursor: pointer;
    margin: 8px 0;
  }

  .moly-datepicker-today-btn.moly-datepicker-today-btn-disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }

  .moly-datepicker-decade-panel .moly-datepicker-cell-inner {
    padding: 0 4px;
  }

  .moly-datepicker-decade-panel .moly-datepicker-cell::before {
    display: none;
  }

  .moly-datepicker-month-panel .moly-datepicker-body,
  .moly-datepicker-quarter-panel .moly-datepicker-body,
  .moly-datepicker-year-panel .moly-datepicker-body {
    padding: 0 8px;
  }

  .moly-datepicker-month-panel .moly-datepicker-cell-inner,
  .moly-datepicker-quarter-panel .moly-datepicker-cell-inner,
  .moly-datepicker-year-panel .moly-datepicker-cell-inner {
    width: 60px;
  }

  .moly-datepicker-month-panel .moly-datepicker-cell-range-hover-start:after,
  .moly-datepicker-quarter-panel .moly-datepicker-cell-range-hover-start:after,
  .moly-datepicker-year-panel .moly-datepicker-cell-range-hover-start:after {
    transition: 0.3 all;
    left: 14px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .moly-datepicker-month-panel .moly-datepicker-cell-range-hover-end::after,
  .moly-datepicker-quarter-panel .moly-datepicker-cell-range-hover-end::after,
  .moly-datepicker-year-panel .moly-datepicker-cell-range-hover-end::after {
    transition: 0.3 all;
    right: 14px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .moly-datepicker-cell-range-hover-end,
  .moly-datepicker-cell-range-hover-start {
    background: var(--bds-brand-100-bg, rgba(247, 166, 0, 0.12));
  }

  .moly-datepicker-week-panel .moly-datepicker-body {
    padding: 8px 12px;
  }

  .moly-datepicker-date-panel .moly-datepicker-body {
    padding: 8px 12px;
  }

  .moly-datepicker-date-panel .moly-datepicker-content th {
    width: 36px;
  }

  .moly-datepicker-datetime-panel {
    display: flex;
    position: relative;
  }

  .moly-datepicker-datetime-panel .moly-datepicker-date-panel,
  .moly-datepicker-datetime-panel .moly-datepicker-time-panel {
    transition: opacity 0.3s;
  }

  .moly-datepicker-datetime-panel-active .moly-datepicker-date-panel,
  .moly-datepicker-datetime-panel-active .moly-datepicker-time-panel {
    opacity: 0.3;
  }

  .moly-datepicker-datetime-panel-active .moly-datepicker-date-panel-active,
  .moly-datepicker-datetime-panel-active .moly-datepicker-time-panel-active {
    opacity: 1;
  }

  .moly-datepicker-time-panel {
    width: auto;
    min-width: auto;

    .moly-datepicker-content {
      display: flex;
      flex: auto;
      height: 224px;
      border-left: none;
      .moly-datepicker-time-panel-column {
        margin-top: 4px;
      }
    }

    .moly-datepicker-header-view {
      color: ${isDark ? '#404347' : '#e9edf2'};
      font-weight: 600;
      height: 24px;
    }
  }

  .moly-datepicker-time-panel-column {
    flex: 1 0 auto;
    width: 56px;
    margin: 0;
    padding: 0;
    overflow-y: hidden;
    list-style: none;
    text-align: left;
    transition: background 0.3s;
    padding: 0 8px;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .moly-datepicker-time-panel-column::after {
    content: '';
    display: block;
    height: 196px;
  }

  .moly-datepicker-time-panel-column {
    border-left: 1px solid;
    border-color: ${isDark ? '#404347' : '#e9edf2'};
  }

  .moly-datepicker-time-panel-column > li.moly-datepicker-time-panel-cell .moly-datepicker-time-panel-cell-inner {
    text-align: center;
    font-family: IBM Plex Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    display: block;
    width: 100%;
    height: 28px;
    border-radius: 4px;
    color: ${isDark ? 'var(--bds-gray-t1-title, #FFF)' : 'rgba(0, 0, 0, 0.85)'};
    line-height: 28px;
    transition: background 0.3s;
    cursor: pointer;
    margin: 2px 0;
  }

  .moly-datepicker-time-panel-column > li.moly-datepicker-time-panel-cell .moly-datepicker-time-panel-cell-inner:hover {
    background: #3844520f;
    color: ${isDark ? 'var(--bds-gray-t1-title, #FFF)' : '#283040'};
  }

  .moly-datepicker-time-panel-column > li.moly-datepicker-time-panel-cell-selected .moly-datepicker-time-panel-cell-inner {
    background-color: #f7a6001f;
  }

  .moly-datepicker {
    display: inline-flex;
    position: relative;
    box-sizing: border-box;
    align-items: center;
    margin: 0;
    padding: 0 16px;
    border: 1px solid transparent;
    background-color: ${isDark ? 'var(--bds-gray-ele-line, #25282C)' : 'var(--bds-gray-ele-line, #f3f5f7)'};
    color: #283040;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    transition: all 200ms ease 0s;
  }
  .moly-datepicker-status-error,
  .moly-datepicker:hover {
    border-color: var(--bds-red-700-normal, #ef454a);
  }

  .moly-datepicker-focused {
    border-radius: 8px;
    border: 1px solid;
    border-color: var(--bds-brand-800-pressed, #F0960E);
    background-color: ${isDark ? 'var(--bds-gray-ele-line, #25282C)' : 'var(--bds-gray-ele-line, #f3f5f7)'};
    box-shadow: 0px 0px 0px 5px var(--bds-brand-100-bg, rgb(247 166 0 / 12%));
  }
  .moly-datepicker:hover {
    border-radius: 8px;
    border: 1px solid var(--bds-brand-800-pressed, #F0960E);
  }

  .moly-datepicker.moly-datepicker-disabled {
    background-color: ${isDark ? 'var(--bds-gray-ele-edge, #1E2023)' : 'var(--bds-gray-ele-edge, #f9fafb)'};
    color: var(--bds-gray-t4-dis, #d5dae0);
    cursor: not-allowed;
    input {
      cursor: not-allowed;
    }
  }

  .moly-datepicker-input {
    display: inline-flex;
    position: relative;
    align-items: center;
    width: 100%;
  }

  .moly-datepicker-input > input {
    background-color: ${isDark ? 'var(--bds-gray-ele-line, #25282C)' : 'var(--bds-gray-ele-line, #f3f5f7)'};
    display: inline-block;
    position: relative;
    text-align: left;
    letter-spacing: 0.5px;
    flex: auto;
    width: 100%;
    min-width: 1px;
    height: auto;
    padding: 0;
    border: 0;
    outline: none;
    background: 0 0;
    color: ${isDark ? '#FFFFFF' : '#121214'};
    line-height: 1.5;
    transition: all 200ms ease 0s;
    font-weight: 500;
  }

  .moly-datepicker-clear {
    display: inline-flex;
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    align-items: center;
    justify-content: center;
    background-color: ${isDark ? 'var(--bds-gray-ele-line, #25282C)' : 'var(--bds-gray-ele-line, #f3f5f7)'};
    line-height: 1;
    transform: translateY(-50%);
    transition: opacity 0.3s, color 0.3s;
    cursor: pointer;
    width: 18px;
    height: 18px;
    opacity: 0;
  }
  
  .moly-datepicker-focused, .moly-datepicker:hover {
    .moly-datepicker-clear {
      opacity: 1;
    }
  }

  .moly-datepicker-range {
    display: inline-flex;
    position: relative;
    border-radius: 8px;
    background-color: ${isDark ? 'var(--bds-gray-ele-line, #25282C)' : 'var(--bds-gray-ele-line, #f3f5f7)'};
    .moly-datepicker-clear {
      right: 12px;
    }
  }

  .moly-datepicker-dropdown {
    position: absolute;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${isDark ? 'var(--bds-gray-t1-title, #FFF)' : 'rgba(0, 0, 0, 0.85)'};
    font-size: 14px;
    line-height: 1.5715;
    z-index: 1050;
  }

  .moly-datepicker-panel-container {
    overflow: hidden;
    border-radius: 8px;
    background-color: ${isDark ? '#404347' : '#fff'};
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  }

  .moly-datepicker-cell {
    color: ${isDark ? 'var(--bds-gray-t3, #71757A)' : '#ADB1B8'};
    &.moly-datepicker-cell-in-view {
      color: ${isDark ? 'var(--bds-gray-t1-title, #FFF)' : '#283040'};
      padding: 4px;
      height: 28px;
    }
  }
  
  [direction='rtl'] &, [dir='rtl'] &, [data-direction='rtl'] & {
    .moly-datepicker-input input {
      text-align: right;
      direction: rtl;
    }
  }
`;
};
