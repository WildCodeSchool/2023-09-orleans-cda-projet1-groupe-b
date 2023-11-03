export default function nl2br(element) {
  return element.split('\n').map((it, i) => <p key={'x' + i}>{it}</p>);
}
