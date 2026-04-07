import { SvgIcon, type SvgIconProps } from "@/components/icon/svg-icon";

const SvgIconVolumeOn = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M11.383 3.076A1 1 0 0 1 12 4v16a1 1 0 0 1-1.707.707L5.586 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.586l4.707-4.707a1 1 0 0 1 1.09-.217ZM14.657 6.343a1 1 0 0 1 1.414 0A7.953 7.953 0 0 1 18.414 12a7.953 7.953 0 0 1-2.343 5.657 1 1 0 1 1-1.414-1.414A5.963 5.963 0 0 0 16.414 12a5.963 5.963 0 0 0-1.757-4.243 1 1 0 0 1 0-1.414Zm3.536-3.536a1 1 0 0 1 1.414 0C21.8 4.999 23.414 8.343 23.414 12s-1.614 7.001-3.807 9.193a1 1 0 1 1-1.414-1.414C20.024 17.948 21.414 15.085 21.414 12s-1.39-5.948-3.221-7.779a1 1 0 0 1 0-1.414Z" />
    </SvgIcon>
  );
};

export { SvgIconVolumeOn };
