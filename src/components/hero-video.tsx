"use client";

import { useCallback, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import { cn } from "@/utils/helpers";

import { SvgIconVolumeOff } from "@/components/icon/svg-icon-volume-off";
import { SvgIconVolumeOn } from "@/components/icon/svg-icon-volume-on";

type HeroVideoProps = {
  webmSrc: string;
  mp4Src: string;
  poster: string;
};

const HeroVideo = ({ webmSrc, mp4Src, poster }: HeroVideoProps) => {
  const t = useTranslations();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setMuted(video.muted);
  }, []);

  const VolumeIcon = muted ? SvgIconVolumeOff : SvgIconVolumeOn;

  return (
    <div className="relative">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        className="h-full w-full rounded-xl object-cover"
      >
        <source src={webmSrc} type="video/webm" />
        <source src={mp4Src} type="video/mp4" />
      </video>

      <button
        type="button"
        onClick={toggleMute}
        aria-label={t(muted ? "hero.video.unmute" : "hero.video.mute")}
        className={cn(
          "absolute right-3 bottom-3 rounded-full p-2",
          "bg-grey-900/60 backdrop-blur-sm",
          "text-white transition-colors hover:bg-grey-900/80",
        )}
      >
        <VolumeIcon size="sm" />
      </button>
    </div>
  );
};

export { HeroVideo };
