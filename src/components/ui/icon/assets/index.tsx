const iconList: Record<string, string> = {
  'ama-add-user': './AmaAddUser',
  'ama-arrow-down-circle': './AmaArrowDownCircle',
  'ama-arrow-down-triangle': './AmaArrowDownTriangle',
  'ama-arrow-down': './AmaArrowDown',
  'ama-arrow-down-right': './AmaArrowDownRight',
  'ama-arrow-left-circle': './AmaArrowLeftCircle',
  'ama-arrow-left-triangle': './AmaArrowLeftTriangle',
  'ama-arrow-left': './AmaArrowLeft',
  'ama-arrow-right-circle': './AmaArrowRightCircle',
  'ama-arrow-right-triangle': './AmaArrowRightTriangle',
  'ama-arrow-right': './AmaArrowRight',
  'ama-arrow-up-circle': './AmaArrowUpCircle',
  'ama-arrow-up-triangle': './AmaArrowUpTriangle',
  'ama-arrow-up': './AmaArrowUp',
  'ama-badge': './AmaBadge',
  'ama-ban': './AmaBan',
  'ama-behance': './AmaBehance',
  'ama-bookmark': './AmaBookmark',
  'ama-box': './AmaBox',
  'ama-burger': './AmaBurger',
  'ama-calendar': './AmaCalendar',
  'ama-camera': './AmaCamera',
  'ama-card': './AmaCard',
  'ama-chart-line': './AmaChartLine',
  'ama-check-circle': './AmaCheckCircle',
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
  'ama-clip': './AmaClip',
  'ama-clock': './AmaClock',
  'ama-close-big': './AmaCloseBig',
  'ama-close-circle': './AmaCloseCircle',
  'ama-close': './AmaClose',
  'ama-code-circle': './AmaCodeCircle',
  'ama-collapse': './AmaCollapse',
  'ama-comment': './AmaComment',
  'ama-copy': './AmaCopy',
  'ama-delete': './AmaDelete',
  'ama-download': './AmaDownload',
  'ama-error': './AmaError',
  'ama-exchange-circle': './AmaExchangeCircle',
  'ama-expand': './AmaExpand',
  'ama-external-link': './AmaExternalLink',
  'ama-facebook-square': './AmaFacebookSquare',
  'ama-facebook': './AmaFacebook',
  'ama-file': './AmaFile',
  'ama-files': './AmaFiles',
  'ama-first-page': './AmaFirstPage',
  'ama-flag': './AmaFlag',
  'ama-flickr-square': './AmaFlickrSquare',
  'ama-flickr': './AmaFlickr',
  'ama-folder': './AmaFolder',
  'ama-fullscreen': './AmaFullscreen',
  'ama-funnel': './AmaFunnel',
  'ama-github': './AmaGithub',
  'ama-hearing': './AmaHearing',
  'ama-help-circle': './AmaHelpCircle',
  'ama-home': './AmaHome',
  'ama-help': './AmaHelp',
  'ama-horn': './AmaHorn',
  'ama-inbox': './AmaInbox',
  'ama-info-circle': './AmaInfoCircle',
  'ama-instagram': './AmaInstagram',
  'ama-key': './AmaKey',
  'ama-lang': './AmaLang',
  'ama-last-page': './AmaLastPage',
  'ama-less-circle': './AmaLessCircle',
  'ama-link': './AmaLink',
  'ama-linkedin-square': './AmaLinkedinSquare',
  'ama-linkedin': './AmaLinkedin',
  'ama-list': './AmaList',
  'ama-login': './AmaLogin',
  'ama-logout': './AmaLogout',
  'ama-lock': './AmaLock',
  'ama-locked': './AmaLocked',
  'ama-mail': './AmaMail',
  'ama-map-marker-circle': './AmaMapMarkerCircle',
  'ama-map-marker-minus': './AmaMapMarkerMinus',
  'ama-map-marker-plus': './AmaMapMarkerPlus',
  'ama-map-marker': './AmaMapMarker',
  'ama-maximize-alt': './AmaMaximizeAlt',
  'ama-maximize': './AmaMaximize',
  'ama-medium-square': './AmaMediumSquare',
  'ama-medium': './AmaMedium',
  'ama-minimize': './AmaMinimize',
  'ama-minus-circle': './AmaMinusCircle',
  'ama-minus': './AmaMinus',
  'ama-more-actions': './AmaMoreActions',
  'ama-more-items': './AmaMoreItems',
  'ama-note': './AmaNote',
  'ama-open-source': './AmaOpenSource',
  'ama-pa': './AmaPa',
  'ama-password-invisible': './AmaPasswordInvisible',
  'ama-password-visible': './AmaPasswordVisible',
  'ama-pencil': './AmaPencil',
  'ama-piattaforme': './AmaPiattaforme',
  'ama-pin': './AmaPin',
  'ama-plug': './AmaPlug',
  'ama-plus-circle': './AmaPlusCircle',
  'ama-plus': './AmaPlus',
  'ama-presentation': './AmaPresentation',
  'ama-print': './AmaPrint',
  'ama-refresh': './AmaRefresh',
  'ama-restore': './AmaRestore',
  'ama-rss-square': './AmaRssSquare',
  'ama-rss': './AmaRss',
  'ama-search': './AmaSearch',
  'ama-settings': './AmaSettings',
  'ama-share': './AmaShare',
  'ama-software': './AmaSoftware',
  'ama-star-full': './AmaStarFull',
  'ama-star-outline': './AmaStarOutline',
  'ama-team-digitale': './AmaTeamDigitale',
  'ama-telegram': './AmaTelegram',
  'ama-telephone': './AmaTelephone',
  'ama-tool': './AmaTool',
  'ama-twitter-square': './AmaTwitterSquare',
  'ama-twitter': './AmaTwitter',
  'ama-unlocked': './AmaUnlocked',
  'ama-upload': './AmaUpload',
  'ama-user': './AmaUser',
  'ama-video': './AmaVideo',
  'ama-wallet': './AmaWallet',
  'ama-warning': './AmaWarning',
  'ama-warning-circle': './AmaWarningCircle',
  'ama-warning-triangle': './AmaWarningTriangle',
  'ama-whatsapp-square': './AmaWhatsappSquare',
  'ama-whatsapp': './AmaWhatsapp',
  'ama-wifi': './AmaWifi',
  'ama-youtube': './AmaYoutube',
  'ama-zoom-in': './AmaZoomIn',
  'ama-zoom-out': './AmaZoomOut',
  'ama-radio-unselected': './AmaRadioUnselected',
  'ama-radio-selected': './AmaRadioSelected',
  'ama-radio-selected-focus': './AmaRadioSelectedFocus',
  'ama-radio-focus': './AmaRadioFocus',
  'ama-radio-disabled-unselected': './AmaRadioDisabledUnselected',
  'ama-radio-disabled-selected': './AmaRadioDisabledSelected'
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
