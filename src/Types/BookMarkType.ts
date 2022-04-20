export type BookMarkType = {
  thumbnail_url: string,
  url: string,
  title: string,
  author_name: string,
  app_date: Date,
  upload_date?: string,
  duration?: string | null //hh:mm:ss
  format?: string | null // Width x Height
}
