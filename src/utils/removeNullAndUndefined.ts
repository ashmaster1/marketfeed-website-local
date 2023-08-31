interface AnyObject {
  [key: string]: any;
}

export function removeNullAndUndefined(obj: AnyObject): AnyObject {
  const result: AnyObject = {};

  for (let key in obj) {
    if (obj[key] !== null && obj[key] !== undefined) {
      result[key] = obj[key];
    }
  }

  return result;
}
