import axios from "axios";
import { mapKeys, camelCase } from "lodash";
import { Counselor, PolicyOrder, PolicyOrderEgg } from "../types";

const SPREADSHEET_ID = "12lHAVLNtH-Ycm-C2k0JJfACZdVg4EIuztxt8GVt5NXI";
const SHEET_NAME = "Policy+Order+Tracking";

const tallyVoteResults = (po: PolicyOrderEgg) => {
  const sponsors: string[] = [];
  const cosponsors: string[] = [];
  const results: {
    yes: string[];
    no: string[];
    nv: string[];
  } = {
    yes: [],
    no: [],
    nv: [],
  };

  for (const key in Counselor) {
    const counselor = Counselor[key as keyof typeof Counselor];
    const result = po[key as keyof PolicyOrderEgg];

    if (result.includes("**")) sponsors.push(counselor);
    else if (result.includes("*")) cosponsors.push(counselor);

    if (!result) {
      results.nv.push(counselor);
    } else if (result.toUpperCase().includes("Y")) {
      results.yes.push(counselor);
    } else if (result.toUpperCase().includes("N")) {
      results.no.push(counselor);
    } else {
      results.nv.push(counselor);
    }
  }
  const hasVotes = results.yes.length + results.no.length !== 0;

  return {
    ...po,
    hasVotes,
    sponsors,
    cosponsors,
    results,
  };
};

export const fetchPolicyOrders = (): Promise<PolicyOrder[]> => {
  return axios
    .get(`https://opensheet.elk.sh/${SPREADSHEET_ID}/${SHEET_NAME}`)
    .then(({ data }) =>
      data.map((order: any) => mapKeys(order, (v, k) => camelCase(k)))
    )
    .then((data) => data.map(tallyVoteResults));
};
