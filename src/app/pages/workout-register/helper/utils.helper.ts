export default function removeFromList(list: any[], element: any): void {
  const index = list.indexOf(element, 0);
  list.splice(index, 1);
}
