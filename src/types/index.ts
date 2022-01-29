export interface PolicyOrder {
  policyOrder: string;
  link: string;
  summary: string;
  topic: Topic;
  date: string;
  result: string;
}

export enum Topic {
  Transit = "Transit",
  "Public Safety" = "Public Safety",
  Ordinance = "Ordinance",
  "Gov Ops" = "Gov Ops",
  Neighborhood = "Neighborhood",
  "Public Health" = "Public Health",
  Education = "Education",
  Housing = "Housing",
  "Animal Welfare" = "Animal Welfare",
  Finance = "Finance",
}

export enum Counselor {
  alannaMallon = "alannaMallon",
  burhanAzeem = "burhanAzeem",
  deniseSimmons = "deniseSimmons",
  dennisCarlone = "dennisCarlone",
  marcMcGovern = "marcMcGovern",
  pattyNolan = "pattyNolan",
  paulToner = "paulToner",
  quintonZondervan = "quintonZondervan",
  sumbulSiddiqui = "sumbulSiddiqui",
}
