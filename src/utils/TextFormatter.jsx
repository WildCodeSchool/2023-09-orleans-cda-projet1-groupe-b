export default function nl2br(element) {
  return element.split('\n').map((it, i) => <div key={'x' + i}>{it}</div>);
}
