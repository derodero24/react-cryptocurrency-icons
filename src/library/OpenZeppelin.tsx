import type { IconProps } from '../utils';

export function OpenZeppelin(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29.86 33.62"
      width="1em"
      height="1em"
      {...props}
    >
      {props.title && <title>{props.title}</title>}
      <path
        d="M29.865 33.624H11.222l3.038-5.168c1.311-2.229 3.669-3.58 6.225-3.58h9.379v8.748h0z"
        fill="#63d2f9"
      />
      <path d="M0 0h29.865l-5.146 8.748H0V0z" fill="#4e5ee4" />
      <path
        d="M11.82 13.679a7.9 7.9 0 0 1 6.806-3.918h5.545L10.06 33.624H.033L11.82 13.679z"
        fill="#63b0f9"
      />
    </svg>
  );
}

export function OpenZeppelinMono(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29.86 33.62"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      {props.title && <title>{props.title}</title>}
      <path d="M29.865 33.624H11.222l3.038-5.168c1.311-2.229 3.669-3.58 6.225-3.58h9.379v8.748h0z" />
      <path d="M0 0h29.865l-5.146 8.748H0V0z" />
      <path d="M11.82 13.679a7.9 7.9 0 0 1 6.806-3.918h5.545L10.06 33.624H.033L11.82 13.679z" />
    </svg>
  );
}
