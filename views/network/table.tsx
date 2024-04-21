import Image from "next/image";

import { PullStatus, TableProps } from "./types";
import CTA from "./cta";
import { MergedIcon, DoubleCheckIcon, LinkRightArrow } from "@/public/icons";

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
const Table = ({ data }: TableProps) => {
  return (
    <div className="self-stretch overflow-x-auto rounded-xl border border-primary-1350">
      <table className="min-w-full divide-y divide-primary-1350">
        <thead className="bg-primary-1450 text-primary-1500">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium">
              Token Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium">
              Pull Request Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium">
              Contract on Base
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium">
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
    </div>
  );
};

export default Table;
