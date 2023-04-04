import type { IconProps } from '../utils';

interface Props extends IconProps {
  fill1: string;
  fill2: string;
}

function CoinbaseBase({ fill1, fill2, ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2500 2500"
      width="1em"
      height="1em"
      {...props}
    >
      {props.title && <title>{props.title}</title>}
      <path
        d="M1250 0h0c690.2 0 1250 559.8 1250 1250h0c0 690.2-559.8 1250-1250 1250h0C559.8 2500 0 1940.2 0 1250h0C0 559.8 559.8 0 1250 0z"
        fill={fill1}
      />
      <path
        d="M1250.4 1689.5c-242.8 0-439.4-196.7-439.4-439.5s196.7-439.4 439.4-439.4c217.5 0 398.1 158.6 432.9 366.2H2126c-37.4-451.2-414.9-805.7-875.6-805.7-485.2 0-878.9 393.7-878.9 878.9s393.7 878.9 878.9 878.9c460.7 0 838.3-354.5 875.6-805.7h-443.1c-34.8 207.7-215 366.3-432.5 366.3h0z"
        fill={fill2}
      />
    </svg>
  );
}

function CoinbaseBase2(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="371.5 371.1 1754.5 1757.8"
      width="1em"
      height="1em"
      {...props}
    >
      {props.title && <title>{props.title}</title>}
      <path d="M1250.4 1689.5c-242.8 0-439.4-196.7-439.4-439.5s196.7-439.4 439.4-439.4c217.5 0 398.1 158.6 432.9 366.2H2126c-37.4-451.2-414.9-805.7-875.6-805.7-485.2 0-878.9 393.7-878.9 878.9s393.7 878.9 878.9 878.9c460.7 0 838.3-354.5 875.6-805.7h-443.1c-34.8 207.7-215 366.3-432.5 366.3h0z" />
    </svg>
  );
}

export function Coinbase(props: IconProps) {
  return <CoinbaseBase fill1="#fff" fill2="#0052ff" {...props} />;
}

export function Coinbase2(props: IconProps) {
  return <CoinbaseBase fill1="#0052ff" fill2="#fff" {...props} />;
}

export function Coinbase3(props: IconProps) {
  return <CoinbaseBase2 fill="#0052ff" {...props} />;
}

export function CoinbaseMono(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2500 2500"
      width="1em"
      height="1em"
      {...props}
    >
      {props.title && <title>{props.title}</title>}
      <defs>
        <mask id="cbem-a">
          <rect width="100%" height="100%" fill="#fff" />
          <path
            d="M1250.4 1689.5c-242.8 0-439.4-196.7-439.4-439.5s196.7-439.4 439.4-439.4c217.5 0 398.1 158.6 432.9 366.2H2126c-37.4-451.2-414.9-805.7-875.6-805.7-485.2 0-878.9 393.7-878.9 878.9s393.7 878.9 878.9 878.9c460.7 0 838.3-354.5 875.6-805.7h-443.1c-34.8 207.7-215 366.3-432.5 366.3h0z"
            fill="#000"
          />
        </mask>
      </defs>
      <path
        d="M1250 0h0c690.2 0 1250 559.8 1250 1250h0c0 690.2-559.8 1250-1250 1250h0C559.8 2500 0 1940.2 0 1250h0C0 559.8 559.8 0 1250 0z"
        fill="currentColor"
        mask="url(#cbem-a)"
      />
    </svg>
  );
}

export function CoinbaseMono2(props: IconProps) {
  return <CoinbaseBase2 fill="currentColor" {...props} />;
}
