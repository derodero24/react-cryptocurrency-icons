import type { IconProps } from '../lib';

export function Bnb(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2496 2496"
      width="1em"
      height="1em"
      {...props}
    >
      {props.title && <title>{props.title}</title>}
      <path
        d="M1248 0c689.3 0 1248 558.7 1248 1248s-558.7 1248-1248 1248S0 1937.3 0 1248 558.7 0 1248 0h0z"
        fillRule="evenodd"
        fill="#f0b90b"
      />
      <path
        d="M685.9 1248l.9 330 280.4 165v193.2l-444.5-260.7v-524l163.2 96.5h0zm0-330v192.3l-163.3-96.6V821.4l163.3-96.6L850 821.4 685.9 918h0zm398.4-96.6l163.3-96.6 164.1 96.6-164.1 96.6-163.3-96.6h0zm-280.4 688.2v-193.2l163.3 96.6v192.3l-163.3-95.7h0zm280.4 302.6l163.3 96.6 164.1-96.6v192.3l-164.1 96.6-163.3-96.6v-192.3h0zm561.6-990.8l163.3-96.6 164.1 96.6v192.3l-164.1 96.6V918l-163.3-96.6h0 0zm163.3 756.6l.9-330 163.3-96.6v524l-444.5 260.7v-193.2l280.3-164.9h0 0zm-117.1-68.4l-163.3 95.7V1413l163.3-96.6v193.2zm0-523.2l.9 193.2-281.2 165v330.8l-163.3 95.7-163.3-95.7v-330.8l-281.2-165V986.4l164-96.6 279.5 165.8 281.2-165.8 164.1 96.6h-.7 0zM803.9 656.5l443.7-261.6 444.5 261.6-163.3 96.6-281.2-165.8-280.4 165.8-163.3-96.6h0z"
        fill="#fff"
      />
    </svg>
  );
}