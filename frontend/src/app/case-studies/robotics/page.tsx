import type { Metadata } from "next";

import { RoboticsPage } from "@/components/case-studies/RoboticsPage/RoboticsPage";
import { createPageMetadata } from "@/config/site";

const DEMO_YOUTUBE_ID = "Tmp4aOxyFOs";
const DEMO_VIDEO_TITLE_FALLBACK =
  "xArm Robotics Demo | Vision-Guided Control Powered by Edge AI";

export const metadata: Metadata = createPageMetadata(
  "Robotics",
  "ONE AI brings vision intelligence to robotic systems, helping machines recognize, decide, and act directly at the edge.",
);

async function getDemoVideoTitle() {
  try {
    const response = await fetch(
      `https://www.youtube.com/oembed?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${DEMO_YOUTUBE_ID}`)}&format=json`,
    );

    if (!response.ok) {
      return DEMO_VIDEO_TITLE_FALLBACK;
    }

    const data = (await response.json()) as { title?: string };
    return data.title?.trim() || DEMO_VIDEO_TITLE_FALLBACK;
  } catch {
    return DEMO_VIDEO_TITLE_FALLBACK;
  }
}

export default async function RoboticsRoute() {
  const demoVideoTitle = await getDemoVideoTitle();

  return (
    <RoboticsPage
      demoVideoId={DEMO_YOUTUBE_ID}
      demoVideoTitle={demoVideoTitle}
    />
  );
}
