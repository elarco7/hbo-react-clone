export default function randomData(array) {
  // console.log(array, "Random Data Array");
  const j = Math.floor(Math.random() * array.length);
  return array[j];
}
