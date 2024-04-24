"use client";
import { SMContainer } from "@/components";
import { LangParamProp } from "@/config/internationalization/i18n";
import SelectionComponent from "./selection";

export default function MigrateView({ lang }: LangParamProp) {
  return (
    <div className="pt-[123px] md:pt-[82px]">
      <SMContainer>
        <SelectionComponent />
      </SMContainer>
    </div>
  );
}
