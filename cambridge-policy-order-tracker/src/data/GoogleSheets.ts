import axios from "axios";
import { mapKeys, camelCase } from "lodash";

const SPREADSHEET_ID = "12lHAVLNtH-Ycm-C2k0JJfACZdVg4EIuztxt8GVt5NXI";
const SHEET_NAME = "Policy+Order+Tracking";

export const fetchPolicyOrders = () => {
  return axios
    .get(`https://opensheet.elk.sh/${SPREADSHEET_ID}/${SHEET_NAME}`)
    .then(({ data }) =>
      data.map((order: any) =>
        mapKeys(order, (v: string, k: string) => camelCase(k))
      )
    );
};
