export interface IResponseData {
  pagination: IPagination;
  data:       IResponseItemData[];
  info:       IInfo;
  config:     IConfig;
}

export interface IResponseItemData {
  id: number;
  image_id: string;
  title: string;
  date_display: string;
  publication_history: string;
  classification_title: string;
  style_title: string;
  artist_title: string;
  artist_display: string;
}

export interface IPagination {
  total:        number;
  limit:        number;
  offset:       number;
  total_pages:  number;
  current_page: number;
  prev_url:     string;
  next_url:     string;
}

export interface IInfo {
  license_text:  string;
  license_links: string[];
  version:       string;
}

export interface IConfig {
  iiif_url:    string;
  website_url: string;
}