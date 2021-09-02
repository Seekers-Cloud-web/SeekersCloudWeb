export default class LoginValidators {
  static validateMyEmail(query: string): boolean {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (query.match(regex)) {
      return true;
    }
    return false;
  }

  static validateMyPassword(query: string): boolean {
    const regex = /^[a-zA-Z0-9]{6,20}$/;
    if (query.match(regex)) {
      return true;
    }
    return false;
  }

  static validateMyBatchData(query: string): boolean {
    const regex = /^[a-zA-Z0-9-/*-.()@#$%^&!+<>]{2,20}$/;
    if (query.match(regex)) {
      return true;
    }
    return false;
  }

  static validateMyName(query: string): boolean {
    const regex = /^[a-zA-Z]{3,25}$/;
    if (query.match(regex)) {
      return true;
    }
    return false;
  }

  static validateMyQTY(query: string): boolean {
    const regex = /^[0-9]{1,8}$/;
    if (query.match(regex)) {
      return true;
    }
    return false;
  }

  static validateMyContact(query: string): boolean {
    const regex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    if (query.match(regex)) {
      return true;
    }
    return false;
  }

  static validateMyDob(query: string): boolean {
    const regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (query.match(regex)) {
      return true;
    }
    return false;
  }


  static validateMyNic(query: string): boolean {
    const regex = /^[0-9xXvV]{10,13}/;
    if (query.match(regex)) {
      return true;
    }
    return false;
  }


  static validateMyCity(query: string): boolean {
    const regex = /^[a-zA-Z0-9-./*]{3,25}$/;
    if (query.trim().length > 3) {
      return true;
    }
    return false;
  }

  static validateMyRegion(query: string): boolean {
    const regex = /^[a-z A-Z]{3,25}$/;
    if (query.trim().length > 3) {
      return true;
    }
    return false;
  }

  static validateMyCountry(query: string): boolean {
    const regex = /^[a-z A-Z]{3,25}$/;
    if (query.trim().length > 3) {
      return true;
    }
    return false;
  }

  static validateMyAddress(query: string): boolean {
    const regex = /^[a-zA-Z0-9\s,/'-]*$/;
    if (query.trim().length > 3) {
      return true;
    }
    return false;
  }

  static validateMyEmployeeCount(query: string): boolean {
    const regex = /^[0-9]{1,5}$/;
    if (query.match(regex)) {
      return true;
    }
    return false;
  }


  static validateMySocialLink(query: string): boolean {
    if (query.length > 0) {
      const regex = /^.*$/;
      if (query.match(regex)) {
        return true;
      }
      return false;
    } else {
      return false;
    }
  }

  static validateMyOwnerName(query: string): boolean {
    const regex = /^[a-z A-Z]{3,25}$/;
    if (query.match(regex)) {
      return true;
    }
    return false;
  }


}
