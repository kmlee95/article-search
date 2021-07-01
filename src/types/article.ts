export type ArticleDetail = {
  abstract: string;
  byline: object;
  document_type: string;
  headline: IHeadline;
  keywords: object[];
  lead_paragraph: string;
  multimedia: object[];

  news_desk: string;
  print_page: string;
  print_section: string | null;
  pub_date: string;
  section_name: string;
  snippet: string;
  source: string;
  subsection_name: string;
  type_of_material: string;
  uri: string;
  web_url: string;
  word_count: number;
  _id: string;
};

export interface IHeadline {
  content_kicker: string;
  kicker: string;
  main: string;
  name: string;
  print_headline: string;
  seo: string;
  sub: string;
}

export interface IMeta {
  hits: number;
  offset: number;
  time: number;
}

export interface IResponseArticle {
  docs: ArticleDetail[];
  meta: IMeta;
}
