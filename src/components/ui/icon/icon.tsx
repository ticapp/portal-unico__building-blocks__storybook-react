import classNames from 'classnames';
import React, { FC, SVGProps, useEffect, useState } from 'react';
import { allIcons, IconName, isBundledIcon, loadIcon } from './assets';
import { EmptyIcon } from './empty-icon';
import './icon.scss';

export type { IconName } from './assets';

export const iconsList = allIcons;

let iconsCache: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {};

/**
 * Preloads icons
 * @param icons - The icon list to preload
 * @returns true If all icons are loaded
 */
export function preloadIcons(icons: IconName[]) {
  return Promise.all(icons.map((icon) => loadIcon(icon))).then((preloadedIcons) => {
    preloadedIcons.forEach(({ component }, i) => {
      iconsCache[icons[i]] = (() => component) as unknown as FC<SVGProps<SVGSVGElement>>;
    });
    return true;
  });
}

/**
 * Remove icons from cache
 * @param icon? - The icon name to remove. If no icon name is passed, all the cache is cleared
 * @returns An object with all removed icons
 */
export const clearIconCache = (iconName?: IconName) => {
  let deletedItems;
  if (iconName) {
    deletedItems = { [iconName]: iconsCache[iconName] };
    delete iconsCache[iconName];
  } else {
    deletedItems = { ...iconsCache };
    iconsCache = {};
  }
  return deletedItems;
};

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Additional classes to use in icon component */
  className?: string;
  /** Predefined icon dimensions. Possible values: 'xl' | 'lg' | '' | 'sm' | 'xs'| 'xxs'  */
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
  /** Icon name to be used */
  icon: string;
  /** To use padding in icon container */
  padding?: boolean;
  /** Callback when image is loaded */
  onIconLoad?: () => void;
  /** Alt name for icon */
  alt?: string;
  /** Aria-hidden for icon decorative */
  ariaHidden?: boolean | 'true' | 'false';
}

export const Icon: FC<IconProps> = ({ size = 'md', icon = '', alt = '', className, padding, onIconLoad, ariaHidden = 'false' }) => {
  const [IconComponent, setCurrentIcon] = useState<FC<SVGProps<SVGSVGElement>>>(iconsCache[icon]);

  const classes = classNames('icon', className, {
    [`icon-${size}`]: size,
    'icon-padded': padding,
  });

  useEffect(() => {
    let isMounted = true;
    if (isBundledIcon(icon) && !iconsCache[icon]) {
      loadIcon(icon).then(({ component }) => {
        if (isMounted) {
          iconsCache[icon] = (() => component) as unknown as FC<SVGProps<SVGSVGElement>>;
          setCurrentIcon(iconsCache[icon]);
          onIconLoad?.();
        }
      });
    } else if (isMounted) {
      setCurrentIcon(iconsCache[icon]);
      onIconLoad?.();
    }

    return () => {
      isMounted = false;
    };
  }, [icon, onIconLoad]);

  if (!isBundledIcon(icon)) {
    // Assume that it is a base64 image and let the browser do his work
    return <img src={icon} alt={alt} className={classes} aria-hidden={ariaHidden} />;
  }

  const iconAttributes = {
    alt,
    title: alt,
  };

  if (!IconComponent) {
    return <EmptyIcon className={classes} role='img' aria-hidden={ariaHidden} {...iconAttributes} />;
  }

  return <IconComponent className={classes} role='img' aria-hidden={ariaHidden} {...iconAttributes} />;
};
