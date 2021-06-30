export type ArticleDetail = {
  abstract: string;
  byline: object;
  document_type: string;
  headline: string;
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

export interface IMeta {
  hits: number;
  offset: number;
  time: number;
}

export interface IResponseArticle {
  docs: ArticleDetail[];
  meta: IMeta;
}
