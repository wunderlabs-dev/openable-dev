import { SvgIcon, type SvgIconProps } from "@/components/icon/svg-icon";

const SvgIconDownload = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2.5a.75.75 0 0 1 .75.75v8.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V3.25A.75.75 0 0 1 10 2.5ZM3.25 14a.75.75 0 0 1 .75.75v1a.75.75 0 0 0 .75.75h10.5a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 1 1.5 0v1a2.25 2.25 0 0 1-2.25 2.25H4.75A2.25 2.25 0 0 1 2.5 15.75v-1A.75.75 0 0 1 3.25 14Z"
      />
    </SvgIcon>
  );
};

export { SvgIconDownload };
