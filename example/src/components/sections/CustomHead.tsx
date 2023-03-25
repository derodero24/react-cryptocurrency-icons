import Head from 'next/head';
import { useRouter } from 'next/router';

export interface CustomHeadProps {
  title: string | undefined;
  description: string | undefined;
  imageUrl?: string;
}

export default function CustomHead({
  title,
  description,
  imageUrl,
}: CustomHeadProps) {
  const { asPath } = useRouter();
  const fullUrl = new URL(asPath, process.env.NEXT_PUBLIC_BASE_URL);
  const url = fullUrl.origin + fullUrl.pathname;
  const image = imageUrl ?? `${fullUrl.origin}/icon-512.png`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="canonical" href={url} />

      {/* OG */}
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
    </Head>
  );
}
