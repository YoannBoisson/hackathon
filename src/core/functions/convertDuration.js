export default function convertDuration(number) {
  const minutes = Math.floor(number / 60);
  let secondes = number % 60;
  secondes = String(secondes).padStart(2, '0');
  return `${minutes}:${secondes}`;
}
