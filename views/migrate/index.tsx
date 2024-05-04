"use client";

import { SMContainer } from "@/components";
import { LangParamProp } from "@/config/internationalization/i18n";
import SelectionComponent from "./selection";

export default function MigrateView({ lang }: LangParamProp) {
  return (
    <div>
      <SMContainer>
        <SelectionComponent />
      </SMContainer>
    </div>
  );
}
