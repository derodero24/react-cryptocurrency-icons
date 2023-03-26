import type { IconProps } from '../lib';

function NamiWalletBase(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.01 0 486.18 499.86"
      width="1em"
      height="1em"
      {...props}
    >
      {props.title && <title>{props.title}</title>}
      <path d="M73.87 52.15L62.11 40.07a23.93 23.93 0 0 1-20.21 21.8L54 73.09 486.17 476zm28.53 116.78v240.54a23.76 23.76 0 0 1 32.13-2.14V245.94L395 499.86h44.87zm303.36-55.58a23.84 23.84 0 0 1-16.64-6.68v162.8L133.46 15.57H84l337.28 330.22V107.6a23.72 23.72 0 0 1-15.52 5.75z" />
      <path d="M38.27 0a38.25 38.25 0 1 0 38.22 38.27h0A38.28 38.28 0 0 0 38.27 0zm3.63 61.8a22 22 0 0 1-3.63.28 23.94 23.94 0 1 1 23.91-23.95V40A23.94 23.94 0 0 1 41.9 61.8zm363.86-10.6a38.24 38.24 0 0 0 0 76.46 37.57 37.57 0 0 0 15.52-3.3 38.22 38.22 0 0 0-15.52-73.16zm15.52 56.4a23.91 23.91 0 1 1 8.39-18.18 23.91 23.91 0 0 1-8.39 18.18zm-286.7 283.21A38.25 38.25 0 1 0 157.92 426a38.24 38.24 0 0 0-23.34-35.22zm-15 59.13A23.91 23.91 0 1 1 143.54 426a23.9 23.9 0 0 1-23.94 23.91z" />
    </svg>
  );
}

export function NamiWallet(props: IconProps) {
  return <NamiWalletBase fill="#349ea3" {...props} />;
}

export function NamiWalletMono(props: IconProps) {
  return <NamiWalletBase fill="currentColor" {...props} />;
}
