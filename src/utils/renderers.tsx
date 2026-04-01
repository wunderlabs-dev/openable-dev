import type { ReactNode } from "react";

const gradientRenderer = (chunks: ReactNode) => (
  <span className="bg-linear-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
    {chunks}
  </span>
);

const mutedRenderer = (chunks: ReactNode) => <span className="text-grey-100">{chunks}</span>;

export { gradientRenderer, mutedRenderer };
