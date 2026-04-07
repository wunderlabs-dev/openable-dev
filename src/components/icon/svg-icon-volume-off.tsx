import { SvgIcon, type SvgIconProps } from "@/components/icon/svg-icon";

const SvgIconVolumeOff = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M11.383 3.076A1 1 0 0 1 12 4v16a1 1 0 0 1-1.707.707L5.586 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.586l4.707-4.707a1 1 0 0 1 1.09-.217ZM22.707 9.293a1 1 0 0 1 0 1.414L21.414 12l1.293 1.293a1 1 0 1 1-1.414 1.414L20 13.414l-1.293 1.293a1 1 0 1 1-1.414-1.414L18.586 12l-1.293-1.293a1 1 0 1 1 1.414-1.414L20 10.586l1.293-1.293a1 1 0 0 1 1.414 0Z" />
    </SvgIcon>
  );
};

export { SvgIconVolumeOff };
