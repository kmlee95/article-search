export interface IAllArticlesData {
  status: string;
  copyright: string;
  response: IResponse;
}

export interface IResponse {
  docs: string[];
  meta: IMeta;
}

export interface IMeta {
  hits: number;
  offset: number;
  time: number;
}
