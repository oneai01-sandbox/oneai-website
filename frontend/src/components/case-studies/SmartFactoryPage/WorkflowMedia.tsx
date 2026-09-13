"use client";

import { useEffect, useRef } from "react";

const VIDEO_EXT = /\.(mov|mp4|webm)$/i;

function sourceType(src: string) {
  if (src.endsWith(".webm")) {
    return "video/webm";
  }

  if (src.endsWith(".mp4")) {
    return "video/mp4";
  }

  return "video/quicktime";
}

export function WorkflowMedia({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const isVideo = VIDEO_EXT.test(src);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!isVideo) {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    const play = () => {
      video.muted = true;
      void video.play().catch(() => undefined);
    };

    if (typeof IntersectionObserver === "undefined") {
      play();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [isVideo, src]);

  if (isVideo) {
    const type = sourceType(src);

    return (
      <video
        ref={videoRef}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={alt}
      >
        {src.endsWith(".mov") ? (
          <>
            <source src={src} type="video/mp4" />
            <source src={src} type="video/quicktime" />
          </>
        ) : (
          <source src={src} type={type} />
        )}
      </video>
    );
  }

  return <img className={className} src={src} alt={alt} />;
}
