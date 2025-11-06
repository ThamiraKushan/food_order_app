export async function fetchMeals() {
  const response = await fetch("http://localhost:3000/meals");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}
