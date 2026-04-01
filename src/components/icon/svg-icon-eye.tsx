import { SvgIcon, type SvgIconProps } from "@/components/icon/svg-icon";

const SvgIconEye = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4.5C6.09 4.5 2.73 6.94 1.18 10c1.55 3.06 4.91 5.5 8.82 5.5s7.27-2.44 8.82-5.5C17.27 6.94 13.91 4.5 10 4.5ZM10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
      />
    </SvgIcon>
  );
};

export { SvgIconEye };
