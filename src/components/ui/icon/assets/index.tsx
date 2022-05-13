const iconList: Record<string, boolean> = {
  'ama-arrow-down-circle': true,
  'ama-arrow-down-triangle': true,
  'ama-arrow-down': true,
  'ama-arrow-left-circle': true,
  'ama-arrow-left-triangle': true,
  'ama-arrow-left': true,
  'ama-arrow-right-circle': true,
  'ama-arrow-right-triangle': true,
  'ama-arrow-right': true,
  'ama-arrow-up-circle': true,
  'ama-arrow-up-triangle': true,
  'ama-arrow-up': true,
  'ama-ban': true,
  'ama-behance': true,
  'ama-bookmark': true,
  'ama-box': true,
  'ama-burger': true,
  'ama-calendar': true,
  'ama-camera': true,
  'ama-card': true,
  'ama-chart-line': true,
  'ama-check-circle': true,
  'ama-check': true,
  'ama-checkbox': true,
  'ama-checkbox-checked': true,
  'ama-chevron-up': true,
  'ama-chevron-down': true,
  'ama-chevron-left': true,
  'ama-chevron-right': true,
  'ama-clip': true,
  'ama-clock': true,
  'ama-close-big': true,
  'ama-close-circle': true,
  'ama-close': true,
  'ama-code-circle': true,
  'ama-collapse': true,
  'ama-comment': true,
  'ama-copy': true,
  'ama-delete': true,
  'ama-download': true,
  'ama-error': true,
  'ama-exchange-circle': true,
  'ama-expand': true,
  'ama-external-link': true,
  'ama-facebook-square': true,
  'ama-facebook': true,
  'ama-file': true,
  'ama-files': true,
  'ama-flag': true,
  'ama-flickr-square': true,
  'ama-flickr': true,
  'ama-folder': true,
  'ama-fullscreen': true,
  'ama-funnel': true,
  'ama-github': true,
  'ama-hearing': true,
  'ama-help-circle': true,
  'ama-help': true,
  'ama-horn': true,
  'ama-inbox': true,
  'ama-info-circle': true,
  'ama-instagram': true,
  'ama-key': true,
  'ama-less-circle': true,
  'ama-link': true,
  'ama-linkedin-square': true,
  'ama-linkedin': true,
  'ama-list': true,
  'ama-lock': true,
  'ama-locked': true,
  'ama-mail': true,
  'ama-map-marker-circle': true,
  'ama-map-marker-minus': true,
  'ama-map-marker-plus': true,
  'ama-map-marker': true,
  'ama-maximize-alt': true,
  'ama-maximize': true,
  'ama-medium-square': true,
  'ama-medium': true,
  'ama-minimize': true,
  'ama-minus-circle': true,
  'ama-minus': true,
  'ama-more-actions': true,
  'ama-more-items': true,
  'ama-note': true,
  'ama-open-source': true,
  'ama-pa': true,
  'ama-password-invisible': true,
  'ama-password-visible': true,
  'ama-pencil': true,
  'ama-piattaforme': true,
  'ama-pin': true,
  'ama-plug': true,
  'ama-plus-circle': true,
  'ama-plus': true,
  'ama-presentation': true,
  'ama-print': true,
  'ama-refresh': true,
  'ama-restore': true,
  'ama-rss-square': true,
  'ama-rss': true,
  'ama-search': true,
  'ama-settings': true,
  'ama-share': true,
  'ama-software': true,
  'ama-star-full': true,
  'ama-star-outline': true,
  'ama-team-digitale': true,
  'ama-telegram': true,
  'ama-telephone': true,
  'ama-tool': true,
  'ama-twitter-square': true,
  'ama-twitter': true,
  'ama-unlocked': true,
  'ama-upload': true,
  'ama-user': true,
  'ama-video': true,
  'ama-warning-circle': true,
  'ama-warning': true,
  'ama-whatsapp-square': true,
  'ama-whatsapp': true,
  'ama-wifi': true,
  'ama-youtube': true,
  'ama-zoom-in': true,
  'ama-zoom-out': true,
};
export type IconName = keyof typeof iconList;

export const loadIcon = (name: IconName) => {
  switch (name) {
    case 'ama-arrow-down-circle': {
      return import('./AmaArrowDownCircle');
    }
    case 'ama-arrow-down-triangle': {
      return import('./AmaArrowDownTriangle');
    }
    case 'ama-arrow-down': {
      return import('./AmaArrowDown');
    }
    case 'ama-arrow-left-circle': {
      return import('./AmaArrowLeftCircle');
    }
    case 'ama-arrow-left-triangle': {
      return import('./AmaArrowLeftTriangle');
    }
    case 'ama-arrow-left': {
      return import('./AmaArrowLeft');
    }
    case 'ama-arrow-right-circle': {
      return import('./AmaArrowRightCircle');
    }
    case 'ama-arrow-right-triangle': {
      return import('./AmaArrowRightTriangle');
    }
    case 'ama-arrow-right': {
      return import('./AmaArrowRight');
    }
    case 'ama-arrow-up-circle': {
      return import('./AmaArrowUpCircle');
    }
    case 'ama-arrow-up-triangle': {
      return import('./AmaArrowUpTriangle');
    }
    case 'ama-arrow-up': {
      return import('./AmaArrowUp');
    }
    case 'ama-ban': {
      return import('./AmaBan');
    }
    case 'ama-behance': {
      return import('./AmaBehance');
    }
    case 'ama-bookmark': {
      return import('./AmaBookmark');
    }
    case 'ama-box': {
      return import('./AmaBox');
    }
    case 'ama-burger': {
      return import('./AmaBurger');
    }
    case 'ama-calendar': {
      return import('./AmaCalendar');
    }
    case 'ama-camera': {
      return import('./AmaCamera');
    }
    case 'ama-card': {
      return import('./AmaCard');
    }
    case 'ama-chart-line': {
      return import('./AmaChartLine');
    }
    case 'ama-check-circle': {
      return import('./AmaCheckCircle');
    }
    case 'ama-check': {
      return import('./AmaCheck');
    }
    case 'ama-checkbox': {
      return import('./AmaCheckbox');
    }
    case 'ama-checkbox-checked': {
      return import('./AmaCheckboxChecked');
    }
    case 'ama-chevron-up': {
      return import('./AmaChevronUp');
    }
    case 'ama-chevron-down': {
      return import('./AmaChevronDown');
    }
    case 'ama-chevron-left': {
      return import('./AmaChevronLeft');
    }
    case 'ama-chevron-right': {
      return import('./AmaChevronRight');
    }
    case 'ama-clip': {
      return import('./AmaClip');
    }
    case 'ama-clock': {
      return import('./AmaClock');
    }
    case 'ama-close-big': {
      return import('./AmaCloseBig');
    }
    case 'ama-close-circle': {
      return import('./AmaCloseCircle');
    }
    case 'ama-close': {
      return import('./AmaClose');
    }
    case 'ama-code-circle': {
      return import('./AmaCodeCircle');
    }
    case 'ama-collapse': {
      return import('./AmaCollapse');
    }
    case 'ama-comment': {
      return import('./AmaComment');
    }
    case 'ama-copy': {
      return import('./AmaCopy');
    }
    case 'ama-delete': {
      return import('./AmaDelete');
    }
    case 'ama-download': {
      return import('./AmaDownload');
    }
    case 'ama-error': {
      return import('./AmaError');
    }
    case 'ama-exchange-circle': {
      return import('./AmaExchangeCircle');
    }
    case 'ama-expand': {
      return import('./AmaExpand');
    }
    case 'ama-external-link': {
      return import('./AmaExternalLink');
    }
    case 'ama-facebook-square': {
      return import('./AmaFacebookSquare');
    }
    case 'ama-facebook': {
      return import('./AmaFacebook');
    }
    case 'ama-file': {
      return import('./AmaFile');
    }
    case 'ama-files': {
      return import('./AmaFiles');
    }
    case 'ama-flag': {
      return import('./AmaFlag');
    }
    case 'ama-flickr-square': {
      return import('./AmaFlickrSquare');
    }
    case 'ama-flickr': {
      return import('./AmaFlickr');
    }
    case 'ama-folder': {
      return import('./AmaFolder');
    }
    case 'ama-fullscreen': {
      return import('./AmaFullscreen');
    }
    case 'ama-funnel': {
      return import('./AmaFunnel');
    }
    case 'ama-github': {
      return import('./AmaGithub');
    }
    case 'ama-hearing': {
      return import('./AmaHearing');
    }
    case 'ama-help-circle': {
      return import('./AmaHelpCircle');
    }
    case 'ama-help': {
      return import('./AmaHelp');
    }
    case 'ama-horn': {
      return import('./AmaHorn');
    }
    case 'ama-inbox': {
      return import('./AmaInbox');
    }
    case 'ama-info-circle': {
      return import('./AmaInfoCircle');
    }
    case 'ama-instagram': {
      return import('./AmaInstagram');
    }
    case 'ama-key': {
      return import('./AmaKey');
    }
    case 'ama-less-circle': {
      return import('./AmaLessCircle');
    }
    case 'ama-link': {
      return import('./AmaLink');
    }
    case 'ama-linkedin-square': {
      return import('./AmaLinkedinSquare');
    }
    case 'ama-linkedin': {
      return import('./AmaLinkedin');
    }
    case 'ama-list': {
      return import('./AmaList');
    }
    case 'ama-lock': {
      return import('./AmaLock');
    }
    case 'ama-locked': {
      return import('./AmaLocked');
    }
    case 'ama-mail': {
      return import('./AmaMail');
    }
    case 'ama-map-marker-circle': {
      return import('./AmaMapMarkerCircle');
    }
    case 'ama-map-marker-minus': {
      return import('./AmaMapMarkerMinus');
    }
    case 'ama-map-marker-plus': {
      return import('./AmaMapMarkerPlus');
    }
    case 'ama-map-marker': {
      return import('./AmaMapMarker');
    }
    case 'ama-maximize-alt': {
      return import('./AmaMaximizeAlt');
    }
    case 'ama-maximize': {
      return import('./AmaMaximize');
    }
    case 'ama-medium-square': {
      return import('./AmaMediumSquare');
    }
    case 'ama-medium': {
      return import('./AmaMedium');
    }
    case 'ama-minimize': {
      return import('./AmaMinimize');
    }
    case 'ama-minus-circle': {
      return import('./AmaMinusCircle');
    }
    case 'ama-minus': {
      return import('./AmaMinus');
    }
    case 'ama-more-actions': {
      return import('./AmaMoreActions');
    }
    case 'ama-more-items': {
      return import('./AmaMoreItems');
    }
    case 'ama-note': {
      return import('./AmaNote');
    }
    case 'ama-open-source': {
      return import('./AmaOpenSource');
    }
    case 'ama-pa': {
      return import('./AmaPa');
    }
    case 'ama-password-invisible': {
      return import('./AmaPasswordInvisible');
    }
    case 'ama-password-visible': {
      return import('./AmaPasswordVisible');
    }
    case 'ama-pencil': {
      return import('./AmaPencil');
    }
    case 'ama-piattaforme': {
      return import('./AmaPiattaforme');
    }
    case 'ama-pin': {
      return import('./AmaPin');
    }
    case 'ama-plug': {
      return import('./AmaPlug');
    }
    case 'ama-plus-circle': {
      return import('./AmaPlusCircle');
    }
    case 'ama-plus': {
      return import('./AmaPlus');
    }
    case 'ama-presentation': {
      return import('./AmaPresentation');
    }
    case 'ama-print': {
      return import('./AmaPrint');
    }
    case 'ama-refresh': {
      return import('./AmaRefresh');
    }
    case 'ama-restore': {
      return import('./AmaRestore');
    }
    case 'ama-rss-square': {
      return import('./AmaRssSquare');
    }
    case 'ama-rss': {
      return import('./AmaRss');
    }
    case 'ama-search': {
      return import('./AmaSearch');
    }
    case 'ama-settings': {
      return import('./AmaSettings');
    }
    case 'ama-share': {
      return import('./AmaShare');
    }
    case 'ama-software': {
      return import('./AmaSoftware');
    }
    case 'ama-star-full': {
      return import('./AmaStarFull');
    }
    case 'ama-star-outline': {
      return import('./AmaStarOutline');
    }
    case 'ama-team-digitale': {
      return import('./AmaTeamDigitale');
    }
    case 'ama-telegram': {
      return import('./AmaTelegram');
    }
    case 'ama-telephone': {
      return import('./AmaTelephone');
    }
    case 'ama-tool': {
      return import('./AmaTool');
    }
    case 'ama-twitter-square': {
      return import('./AmaTwitterSquare');
    }
    case 'ama-twitter': {
      return import('./AmaTwitter');
    }
    case 'ama-unlocked': {
      return import('./AmaUnlocked');
    }
    case 'ama-upload': {
      return import('./AmaUpload');
    }
    case 'ama-user': {
      return import('./AmaUser');
    }
    case 'ama-video': {
      return import('./AmaVideo');
    }
    case 'ama-warning-circle': {
      return import('./AmaWarningCircle');
    }
    case 'ama-warning': {
      return import('./AmaWarning');
    }
    case 'ama-whatsapp-square': {
      return import('./AmaWhatsappSquare');
    }
    case 'ama-whatsapp': {
      return import('./AmaWhatsapp');
    }
    case 'ama-wifi': {
      return import('./AmaWifi');
    }
    case 'ama-youtube': {
      return import('./AmaYoutube');
    }
    case 'ama-zoom-in': {
      return import('./AmaZoomIn');
    }
    case 'ama-zoom-out': {
      return import('./AmaZoomOut');
    }
    default:
      throw Error(`It should not land here. Requested icon: "${name}"`);
  }
};

export function isBundledIcon(name: string): name is IconName {
  return name in iconList;
}

export const allIcons = Object.keys(iconList);
