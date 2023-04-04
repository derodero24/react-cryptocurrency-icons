import type { IconProps } from '../utils';

export function Gateio(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
      width="1em"
      height="1em"
      {...props}
    >
      {props.title && <title>{props.title}</title>}
      <path
        d="M300 464.998c-91.127 0-165.003-73.876-165.003-165.002S208.873 135.001 300 135.001V-.001C134.31-.001 0 134.314 0 299.997S134.31 600 300 600s300-134.321 300-300.003H465.003c0 91.126-73.877 165.002-165.003 165.002"
        fill="#2354e6"
      />
      <path d="M299.992 299.997h165.003V134.995H299.992z" fill="#17e6a1" />
    </svg>
  );
}

export function GateioMono(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      {props.title && <title>{props.title}</title>}
      <path d="M300 464.998c-91.127 0-165.003-73.876-165.003-165.002S208.873 135.001 300 135.001V-.001C134.31-.001 0 134.314 0 299.997S134.31 600 300 600s300-134.321 300-300.003H465.003c0 91.126-73.877 165.002-165.003 165.002" />
      <path d="M299.992 299.997h165.003V134.995H299.992z" />
    </svg>
  );
}
