"use client";
import classNames from "classnames";

import { PullRequest } from "@/application/migration/types";
import { LinkRightArrow } from "@/public/icons";
import { MergedSecondaryIcon, GitMergeIcon } from "@/public/icons";

const Status = ({ status }: { status: string }) => (
  <div className="flex items-center justify-center pt-0.5">
    {status === "merged" && <GitMergeIcon />}
    {status === "pending" && (
      <MergedSecondaryIcon width={20} height={20} color="#B47818" />
    )}

    <span
      className={classNames("text-sm font-medium text-center", {
        "text-primary-3100": status === "merged",
        "text-primary-3150": status === "pending",
      })}
    >
      {status}
    </span>
  </div>
);

const PullRequests = ({ pullRequests }: { pullRequests: PullRequest[] }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-primary-50 text-[16px] leading-[24.8px] md:text-[20px] md:leading-[31px]">
        Pull request status
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pullRequests.map((pullRequest, index) => (
          <div
            key={index}
            className="p-4 border border-primary-2100 rounded-base flex items-center justify-between w-full bg-primary-2700"
          >
            <div className="flex flex-col items-start gap-1.5 justify-center">
              <h3 className="text-primary-300 text-sm font-medium capitalize">
                {pullRequest?.chain}
              </h3>
              <Status status={pullRequest?.status} />
            </div>
            <a target="_blank" href={pullRequest?.url}>
              <LinkRightArrow height={24} width={24} color="#0A0D14" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PullRequests;