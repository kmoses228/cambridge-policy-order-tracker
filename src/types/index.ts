export interface PolicyOrder {
  policyOrder: string;
  link: string;
  summary: string;
  topic: Topic;
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
}
