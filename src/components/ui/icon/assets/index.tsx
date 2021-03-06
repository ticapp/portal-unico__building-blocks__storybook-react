const iconList: Record<string, string> = {
  'ama-add-user': './AmaAddUser',
  'ama-arrow-down-right': './AmaArrowDownRight',
  'ama-arrow-left': './AmaArrowLeft',
  'ama-arrow-left-circle': './AmaArrowLeftCircle',
  'ama-arrow-right-circle': './AmaArrowRightCircle',
  'ama-arrow-right': './AmaArrowRight',
  'ama-badge': './AmaBadge',
  'ama-burger': './AmaBurger',
  'ama-calendar': './AmaCalendar',
  'ama-check': './AmaCheck',
  'ama-checkbox': './AmaCheckbox',
  'ama-checkbox-checked': './AmaCheckboxChecked',
  'ama-checkbox-disabled': './AmaCheckboxDisabled',
  'ama-checkbox-checked-disabled': './AmaCheckboxCheckedDisabled',
  'ama-checkbox-focus': './AmaCheckboxFocus',
  'ama-checkbox-checked-focus': './AmaCheckboxCheckedFocus',
  'ama-chevron-up': './AmaChevronUp',
  'ama-chevron-down': './AmaChevronDown',
  'ama-chevron-left': './AmaChevronLeft',
  'ama-chevron-right': './AmaChevronRight',
  'ama-circle-solid': './AmaCircleSolid',
  'ama-close-circle': './AmaCloseCircle',
  'ama-close': './AmaClose',
  'ama-collapse': './AmaCollapse',
  'ama-error': './AmaError',
  'ama-expand': './AmaExpand',
  'ama-facebook': './AmaFacebook',
  'ama-face-satisfied': './AmaFaceSatisfied',
  'ama-first-page': './AmaFirstPage',
  'ama-home': './AmaHome',
  'ama-last-page': './AmaLastPage',
  'ama-linkedin': './AmaLinkedin',
  'ama-login': './AmaLogin',
  'ama-logout': './AmaLogout',
  'ama-radio-unselected': './AmaRadioUnselected',
  'ama-radio-selected': './AmaRadioSelected',
  'ama-radio-selected-focus': './AmaRadioSelectedFocus',
  'ama-radio-focus': './AmaRadioFocus',
  'ama-radio-disabled-unselected': './AmaRadioDisabledUnselected',
  'ama-radio-disabled-selected': './AmaRadioDisabledSelected',
  'ama-twitter': './AmaTwitter',
  'ama-user': './AmaUser',
  'ama-warning': './AmaWarning',
  'ama-warning-circle': './AmaWarningCircle',
  'ama-warning-triangle': './AmaWarningTriangle'
};

export type IconName = keyof typeof iconList;

export const allIcons = Object.keys(iconList);

export function isBundledIcon(name: string): boolean {
  return !!allIcons.find((i) => i === name);
}

export const loadIcon = (name: IconName) => {
  if (isBundledIcon(name)) {
    return import(`${iconList[name]}`);
  }
  throw Error(`Icon name not bundled. Requested icon: "${name}"`);
};
