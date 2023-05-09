import React, {ReactNode} from "react";
import {CheckIcon} from "../icons/Icon";

interface ListItemProps {
  children: ReactNode;
}

export const ListItem = (props: ListItemProps) => {
  const {children} = props;
  return (
    <li className="flex gap-x-6">
      <CheckIcon />
      <span>{children}</span>
    </li>
  );
};

export default function Pricing() {
  return (
    <div className="mx-6 lg:mx-auto max-w-[994px] m-auto -mt-64">
      <div className="flex bg-white rounded-xl flex-col lg:flex-row shadow overflow-hidden">
        <div className="text-center bg-purple-100 p-16">
          <div className="font-extrabold text-2xl">Premium PRO</div>
          <h3 className="font-extrabold text-5xl">$329</h3>
          <div className="font-medium text-lg  mt-2">billed just once</div>
          <button className=" mt-6 bg-purple-500 text-white rounded-xl w-72 h-12">
            Get Started
          </button>
        </div>
        <div className="mx-4 lg:mx-12 p-14 text-lg font-normal">
          <div>Access these features when you get this pricing package for your business.</div>
          <ul className="pt-6 space-y-5">
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </ul>
        </div>
      </div>
    </div>
  );
}
