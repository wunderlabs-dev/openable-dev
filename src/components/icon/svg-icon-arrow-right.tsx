import { SvgIcon, type SvgIconProps } from "@/components/icon/svg-icon";

const SvgIconArrowRight = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 10a.75.75 0 0 1 .75-.75h10.19l-3.72-3.72a.75.75 0 0 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H3.75A.75.75 0 0 1 3 10Z"
      />
    </SvgIcon>
  );
};

export { SvgIconArrowRight };
