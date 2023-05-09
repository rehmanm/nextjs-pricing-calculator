import React, {ElementType, ReactElement, ReactNode} from "react";
import {HassleFreeIcon, MoneyBackGuarantee, SubscriptionIcon} from "../icons/Icon";

interface FeatureProps {
  icon: ReactElement;
  children: ReactNode;
}

export const Feature = (props: FeatureProps) => {
  const {children, icon} = props;
  return (
    <div className="pb-8 flex space-x-5">
      {icon} <span className="font-bold">{children}</span>
    </div>
  );
};

function Features() {
  return (
    <div className="max-w-5xl m-auto pb-8 mt-8">
      <div className="flex flex-col lg:flex-row px-12 lg:space-x-5">
        <Feature icon={<MoneyBackGuarantee />}>30 days money back Guarantee</Feature>
        <Feature icon={<HassleFreeIcon />}>No setup fees 100% hassle-free</Feature>
        <Feature icon={<SubscriptionIcon />}>No monthly subscription Pay once and for all</Feature>
      </div>
    </div>
  );
}

export default Features;
