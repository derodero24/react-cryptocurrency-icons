import type { IconProps } from '../lib';

interface Props extends IconProps {
  fill1: string;
  fill2: string;
}

function BybitBase({ fill1, fill2, ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 3 87 29"
      width="1em"
      height="1em"
      {...props}
    >
      {props.title && <title>{props.title}</title>}
      <path d="M62.008 25.357V3h4.494v22.357h-4.494z" fill={fill1} />
      <path
        d="M9.634 31.998H0V9.641h9.247c4.494 0 7.112 2.449 7.112 6.28 0 2.48-1.682 4.083-2.846 4.616 1.389.628 3.168 2.04 3.168 5.025 0 4.175-2.941 6.436-7.047 6.436zm-.743-18.463H4.494v5.15h4.397c1.907 0 2.974-1.036 2.974-2.576s-1.067-2.574-2.974-2.574zm.291 9.075H4.494v5.495h4.688c2.037 0 3.006-1.255 3.006-2.764s-.97-2.731-3.006-2.731zm21.206.219v9.169h-4.462v-9.169L19.007 9.641h4.881l4.3 9.012 4.235-9.012h4.881l-6.917 13.188zm19.658 9.169h-9.634V9.641h9.247c4.494 0 7.112 2.449 7.112 6.28 0 2.48-1.682 4.083-2.846 4.616 1.389.628 3.168 2.04 3.168 5.025 0 4.175-2.941 6.436-7.047 6.436zm-.743-18.463h-4.397v5.15h4.397c1.907 0 2.974-1.036 2.974-2.576s-1.067-2.574-2.974-2.574zm.291 9.075h-4.688v5.495h4.688c2.037 0 3.006-1.255 3.006-2.764s-.968-2.731-3.006-2.731zm31.392-9.074V32h-4.494V13.536h-6.014V9.641H87v3.894h-6.014z"
        fill={fill2}
      />
    </svg>
  );
}

export function Bybit(props: IconProps) {
  return <BybitBase fill1="#f7a600" fill2="#15192a" {...props} />;
}

export function Bybit2(props: IconProps) {
  return <BybitBase fill1="#f7a600" fill2="#fff" {...props} />;
}

export function BybitMono(props: IconProps) {
  return (
    <BybitBase
      fill1={props.fill ?? 'currentColor'}
      fill2={props.fill ?? 'currentColor'}
      {...props}
    />
  );
}
