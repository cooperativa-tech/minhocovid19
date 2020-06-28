export default function useShare() {
  const canShare = typeof window !== "undefined" && navigator.canShare;

  const share = (url) => {
    if (canShare) navigator.share({ url });
  };

  return [canShare, share];
}
