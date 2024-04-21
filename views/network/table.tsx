import Image from "next/image";
import classNames from "classnames";

import { PullStatus, TableProps } from "./types";
import CTA from "./cta";
import { MergedIcon, DoubleCheckIcon, LinkRightArrow } from "@/public/icons";
import { useState } from "react";
import EmptyState from "./empty";

const Status = ({ status }: { status: PullStatus }) => (
  <div className="h-full flex items-start justify-start gap-1">
    <div className="flex items-center justify-center gap-1 border-b border-b-primary-1650">
      <MergedIcon />
      <span className="text-[14px] leading-[20px] text-primary-1650 capitalize">
        {status}
      </span>
    </div>
    <DoubleCheckIcon />
  </div>
);
const Table = ({ data, network }: TableProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div
      className={classNames(
        "self-stretch overflow-x-auto rounded-xl border border-primary-1350 flex flex-col justify-between",
        {
          "min-h-[324px]": Boolean(data.length),
          "min-h-[410px] md:min-h-[408px]": !Boolean(data.length),
        }
      )}
    >
      {loading && (
        <div className="flex-1 flex items-center justify-center italic font-medium text-xs">
          Loading...
        </div>
      )}

      {Boolean(data.length) && !loading && (
        <table className="min-w-full divide-y divide-primary-1350">
          <thead className="bg-primary-1450 text-primary-1500">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium"
              >
                Token Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium"
              >
                Pull Request Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium"
              >
                Contract on Base
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium"
              >
                Action
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="min-h-[71px] px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center gap-3">
                  <Image
                    src={item.tokenIcon || ""}
                    alt={`${item.tokenName} icon`}
                    width={24}
                    height={24}
                  />
                  <span className="">{item.tokenName}</span>
                </td>
                <td className="min-h-[71px] px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Status status={item.pullStatus} />
                </td>
                <td className="min-h-[71px] px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex justify-start items-center gap-2">
                  <a
                    href={`https://basescan.io/address/${item.tokenName}`}
                    target="_blank"
                    className="text-[14px] leading-[20px]  text-primary-1650 border-b border-b-primary-1650"
                  >
                    View on basescan
                  </a>

                  <LinkRightArrow />
                </td>
                <td className="min-h-[71px] px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <CTA title="Add Liquidity" onClick={() => {}} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!Boolean(data.length) && !loading && (
        <EmptyState isConnected={isConnected} network={network} />
      )}

      {Boolean(data.length) && (
        <div className=" border-t border-primary-1350 flex justify-between items-center px-6 pt-3 pb-4 bg-white">
          <CTA title="Previous" onClick={() => {}} />

          <span className="flex items-center justify-center px-3 text-sm text-primary-1600">
            Page 1 of 1
          </span>

          <CTA title="Next" onClick={() => {}} />
        </div>
      )}
    </div>
  );
};

export default Table;
