export class MyArray {
  public static areAllItemsEqual(array: any[]): boolean {
    return array.every((val, i, arr) => val == arr[0]);
  }
}
