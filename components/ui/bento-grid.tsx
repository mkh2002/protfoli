import Link from "next/link";

import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] md:grid-rows-7 h-full relative md:grid-cols-9 lg:grid-cols-5 gap-4 max-w-7xl mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  href,
  description,
  header,
  otherClass,
  icon,
}: {
  className?: string;
  href?: string;

  otherClass?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 min-h-30 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 border justify-between flex flex-col space-y-4 bg-gradient-to-br bg-background",
        className,
      )}
    >
      {header}
      {href ? (
        <Link className={cn(otherClass)} href={href}>
          <div className="flex items-center gap-2">
            <p className="uppercase lg:text-xl lg:tracking-widest">{title}</p>
            {icon}
          </div>
          <div className="text-sm text-muted-foreground">{description}</div>
        </Link>
      ) : (
        <div className={cn(otherClass)}>
          <div className="flex items-center gap-2">
            <p className="uppercase lg:text-xl lg:tracking-widest">{title}</p>
            {icon}
          </div>
          <div className="text-sm text-muted-foreground">{description}</div>
        </div>
      )}
    </div>
  );
};
