"use client";

import React from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
  Input,
  IconButton,
} from "@material-tailwind/react";
import ToolCard from "@/components/tool-card";
import { RectangleStackIcon } from "@heroicons/react/24/solid";

const TOOLS = [
  {
    label: "PDF Tools",
    value: "pdf-tools",
    tools: [
      {
        title: "Edit PDF",
        description: "Edit any pdf you want",
        icon: RectangleStackIcon,
      },
      {
        title: "Compress PDF",
        description: "Compress any pdf you want",
        icon: RectangleStackIcon,
      },
      {
        title: "Merge PDF",
        description: "Merge any pdf you want",
        icon: RectangleStackIcon,
      },
      {
        title: "Split PDF",
        description: "Split any pdf you want",
        icon: RectangleStackIcon,
      },
      {
        title: "Unlock PDF",
        description: "Unlock any pdf you want",
        icon: RectangleStackIcon,
      },
      {
        title: "Protect PDF",
        description: "Protect any pdf you want",
        icon: RectangleStackIcon,
      },
      {
        title: "Rotate PDF",
        description: "Rotate any pdf you want",
        icon: RectangleStackIcon,
      },
      {
        title: "Convert PDF",
        description: "Convert any pdf you want",
        icon: RectangleStackIcon,
      },
      {
        title: "OCR PDF",
        description: "OCR any pdf you want",
        icon: RectangleStackIcon,
      },
    ],
  },
  {
    label: "Image Tools",
    value: "img-tools",
    tools: [
      {
        title: "Edit Image",
        description: "Edit any image you want",
        icon: RectangleStackIcon,
      },
      {
        title: "Compress Image",
        description: "Compress any image you want",
        icon: RectangleStackIcon,
      },
      {
        title: "Merge Image",
        description: "Merge any image you want",
        icon: RectangleStackIcon,
      },
      {
        title: "Split Image",
        description: "Split any image you want",
        icon: RectangleStackIcon,
      },
      {
        title: "Unlock Image",
        description: "Unlock any image you want",
        icon: RectangleStackIcon,
      },
      {
        title: "Protect Image",
        description: "Protect any image you want",
        icon: RectangleStackIcon,
      },
      {
        title: "Rotate Image",
        description: "Rotate any image you want",
        icon: RectangleStackIcon,
      },
      {
        title: "Convert Image",
        description: "Convert any image you want",
        icon: RectangleStackIcon,
      },
      {
        title: "OCR Image",
        description: "OCR any image you want",
        icon: RectangleStackIcon,
      },
    ],
  },
];

export function Tools() {
  return (
    <section className="grid min-h-max place-items-center px-2">
      <Tabs value="pdf-tools" className="mx-auto w-full mb-16 ">
        <div className="w-full lg:flex mb-8 flex-col items-center">
          <TabsHeader
            indicatorProps={{
              className: "!rounded-full",
            }}
            className="rounded-full h-17 p-3 !w-12/12 md:w-[50rem] bg-opacity-90"
          >
            {TOOLS.map(({ label, value }) => (
            <Tab
              value={value}
              className="font-poppins text-primary-buttonTextColor font-bold"
            >
              {label}
            </Tab>))}
          </TabsHeader>
        </div>
        <TabsBody className="grid grid-cols-1 gap-4 ">

        {TOOLS.map(({ value, tools}) => (
            <TabPanel
            className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5"
            key={value}
            value={value}
          >
            {tools.map(({ title, description, icon }) => (
              <ToolCard
                title={title}
                description={description}
                icon={icon}
              />
            ))}
          </TabPanel>
        ))}
      </TabsBody>
      </Tabs>
    </section>
  );
}

export default Tools;
