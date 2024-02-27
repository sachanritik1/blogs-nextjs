export default function page({
  params,
}: {
  params: {
    videoId: string;
  };
}) {
  // return null;
  return <div>{params.videoId}</div>;
}
