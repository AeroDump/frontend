import { TokenTransferInfo } from "@/app/multisender/types";

export type CSVTablePropsType = {
  tokenTransferInfo: TokenTransferInfo[];

  handleDataChange: (
    index: number,
    key: keyof TokenTransferInfo,
    value: string | number
  ) => void;
  addEmptyRow: () => void;
  totalAmount: number
};
