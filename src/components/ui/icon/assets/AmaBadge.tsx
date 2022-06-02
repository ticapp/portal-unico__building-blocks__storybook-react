import * as React from 'react';

export const component = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <path d="M23 2L24.593 5L28 5.414L25.5 7.667L26 11L23 9.125L20 11L20.5 7.667L18 5.414L21.5 5L23 2Z" fill="#212121" />
      <path
        d="M22.7168 13.249L20.7793 12.751C20.432 14.0893 19.6958 15.2946 18.6638 16.2147C17.6317 17.1348 16.3502 17.7283 14.9809 17.9204C13.6117 18.1124 12.2163 17.8944 10.971 17.2937C9.72561 16.6931 8.68623 15.7368 7.98411 14.5457C7.282 13.3547 6.94866 11.9822 7.0262 10.6017C7.10374 9.22129 7.58868 7.89479 8.41977 6.78983C9.25086 5.68486 10.3908 4.85101 11.6956 4.39361C13.0003 3.93621 14.4114 3.87579 15.7505 4.21997L16.2495 2.28348C14.2979 1.77656 12.2325 1.94048 10.3852 2.74889C8.53795 3.55731 7.0161 4.96328 6.06422 6.74086C5.11234 8.51845 4.7857 10.5644 5.13678 12.55C5.48787 14.5356 6.49629 16.3456 8.00001 17.689V30L14 26L20 30V17.7078C21.3281 16.5241 22.2738 14.9719 22.7168 13.249ZM18 26.2627L14 23.5962L10 26.2627V19.05C11.241 19.6735 12.6104 19.9987 13.9993 19.9998C15.3881 20.0008 16.758 19.6777 18 19.0562V26.2627Z"
        fill="#212121"
      />
    </svg>
  );
};
