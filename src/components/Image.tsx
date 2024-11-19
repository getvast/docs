export type ImageProps = {
  src: string;
  retinaSrc?: string;
  zoomSrc?: string;
  alt: string;
};

export default function Image({ src, retinaSrc, zoomSrc, alt }: ImageProps) {
  let className: string;

  if (zoomSrc) {
    className = "zoomable";
  }
  return (
    <figure
      style={{ marginTop: 32, marginBottom: 32, marginLeft: 0, marginRight: 0 }}
    >
      <img
        {...(className ? { className } : null)}
        src={src}
        alt={alt}
        {...(retinaSrc ? { srcSet: `${retinaSrc} 2x` } : null)}
        data-zoom-src={zoomSrc}
      />
    </figure>
  );
}
