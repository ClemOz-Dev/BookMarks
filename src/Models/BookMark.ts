import { BookMarkType } from "../Types/BookMarkType";

class BookMark implements BookMarkType{

  id: string;
  thumbnail_url: string;
  url: string;
  title: string;
  author_name: string;
  app_date: Date;
  upload_date: string;
  duration?: string;
  format?: string;

  constructor(id: string,thumbnail_url: string, url:string, title:string, author_name:string, app_date:Date, upload_date:string, duration?:string, format?: string) {
    this.id = id;
    this.thumbnail_url = thumbnail_url;
    this.url = url;
    this.title = title;
    this.author_name = author_name;
    this.app_date = app_date;
    this.upload_date = upload_date;
    this.duration = duration;
    this.format = format;
  }
  
   static createBM(data) {  

    return new BookMark(
      data.title,
      data.thumbnail_url,
      data.url,
      data.title,
      data.author_name,
      data.app_date || new Date(),
      data.upload_date || null,
      data.duration || null,
      data.provider_name === 'Flickr' ? `${data.width} x ${data.height}` : null,
    );
  }

}




export default BookMark;