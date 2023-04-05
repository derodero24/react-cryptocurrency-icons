import type { IconProps } from '../utils';

export function Moralis(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 206.7"
      width="1em"
      height="1em"
      {...props}
    >
      {props.title && <title>{props.title}</title>}
      <path
        d="M246.961 43.868C235.6 19.804 212.425 3.143 186.304 1.173c-12.799-1.194-26.006.98-37.545 6.816-7.748 3.858-14.645 9.213-20.441 15.592C116.363 9.976 99.472 1.067 81.241.149 42.915-2.168 9.879 22.744 1.829 61.403c-4.891 23.156.444 47.337 11.033 67.705 10.571 20.091 25.997 37.955 46.066 48.45 14.006 6.843 27.133-10.513 16.891-22.648-3.266-3.671-6.275-7.573-9.018-11.743-2.547-3.867-4.837-7.929-6.914-12.09-5.769-11.868-10.074-25.232-10.926-38.392-.506-8.366.586-15.574 4.047-22.853 3.275-6.789 8.583-12.625 15.55-15.369 10.837-4.125 22.145-1.907 30.382 7.003 5.352 5.533 7.802 13.275 10.536 20.421a25.37 25.37 0 0 0 .657 1.506c5.441 16.849 30.382 17.276 35.041-1.889l.435-1.978.08-.312c.027-.107.045-.214.071-.33.4-1.711.861-3.421 1.456-5.016 1.855-5.141 4.944-10.103 8.654-13.89 5.592-5.711 12.719-9.159 20.521-8.393 4.367.249 9.293 1.443 12.843 3.377 19.917 10.843 17.84 39.336 9.302 58.108-6 13.151-15.604 24.154-26.255 33.661-2.636 2.343-5.645 4.927-8.37 7.11-12.488 9.738-15.683 28.172-5.813 41.385 10.588 14.523 31.677 15.227 43.793 2.308 2.379-2.361 4.677-4.812 6.941-7.28 22.855-25.624 43.624-63.659 46.855-98.709 1.331-16.385-1.571-32.761-8.734-47.675h.009z"
        fill="url(#mrls-a)"
      />
      <defs>
        <radialGradient
          id="mrls-a"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(176.281 182.058) rotate(-131.427) scale(212.489 322.519)"
        >
          <stop offset="0" stopColor="#3fc" />
          <stop offset="1" stopColor="#0f7fff" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function MoralisMono(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 206.7"
      width="1em"
      height="1em"
      fill="currentColor"
      {...props}
    >
      {props.title && <title>{props.title}</title>}
      <path d="M246.961 43.868C235.6 19.804 212.425 3.143 186.304 1.173c-12.799-1.194-26.006.98-37.545 6.816-7.748 3.858-14.645 9.213-20.441 15.592C116.363 9.976 99.472 1.067 81.241.149 42.915-2.168 9.879 22.744 1.829 61.403c-4.891 23.156.444 47.337 11.033 67.705 10.571 20.091 25.997 37.955 46.066 48.45 14.006 6.843 27.133-10.513 16.891-22.648-3.266-3.671-6.275-7.573-9.018-11.743-2.547-3.867-4.837-7.929-6.914-12.09-5.769-11.868-10.074-25.232-10.926-38.392-.506-8.366.586-15.574 4.047-22.853 3.275-6.789 8.583-12.625 15.55-15.369 10.837-4.125 22.145-1.907 30.382 7.003 5.352 5.533 7.802 13.275 10.536 20.421a25.37 25.37 0 0 0 .657 1.506c5.441 16.849 30.382 17.276 35.041-1.889l.435-1.978.08-.312c.027-.107.045-.214.071-.33.4-1.711.861-3.421 1.456-5.016 1.855-5.141 4.944-10.103 8.654-13.89 5.592-5.711 12.719-9.159 20.521-8.393 4.367.249 9.293 1.443 12.843 3.377 19.917 10.843 17.84 39.336 9.302 58.108-6 13.151-15.604 24.154-26.255 33.661-2.636 2.343-5.645 4.927-8.37 7.11-12.488 9.738-15.683 28.172-5.813 41.385 10.588 14.523 31.677 15.227 43.793 2.308 2.379-2.361 4.677-4.812 6.941-7.28 22.855-25.624 43.624-63.659 46.855-98.709 1.331-16.385-1.571-32.761-8.734-47.675h.009z" />
    </svg>
  );
}