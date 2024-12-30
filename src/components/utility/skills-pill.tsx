import Image from "next/image";
import React, { FC, SVGProps } from "react";

export type SkillPillProps = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>> | string;
};

export default function SkillPill({ pill }: { pill: SkillPillProps }) {
  const { name, icon: Icon } = pill;
  return (
    <div className="text-accent flex w-max items-center gap-2 overflow-hidden rounded-lg border border-accent/20 bg-white px-4 py-3 text-sm shadow-sm  sm:text-base md:px-6 md:py-3 md:text-lg">
      {typeof Icon == "object" ? (
        <Image
          src={Icon}
          alt={`${name} icon`}
          className="h-5 w-5 sm:h-8 sm:w-8"
          width={24}
          height={24}
        />
      ) : (
        <Icon className="h-5 w-5 sm:h-8 sm:w-8" />
      )}
      <span className="font-medium ">{name}</span>
    </div>
  );
}
