class Tools {
  static getTimeDiff(date: Date){   
    var uploadTimeInSeconds = Math.floor(new Date(date).getTime()/1000);
    var currentTimeInSeconds=Math.floor(Date.now()/1000);    
    var timeDiffInSeconds =  currentTimeInSeconds-uploadTimeInSeconds
    var result = '';
    if(timeDiffInSeconds < 60) {
      result = 'Less than 1 minute';
    }
    else if (timeDiffInSeconds >=60 && timeDiffInSeconds < 3600){
      result = `${Math.ceil(timeDiffInSeconds/60)} minutes ago`;
    }
    else {
      result = 'More than 1 hour';
    }
   return result;
  }

  static dateParser(date: string){
    return new Date(date).toLocaleDateString('fr');
  }
}

export default Tools;
