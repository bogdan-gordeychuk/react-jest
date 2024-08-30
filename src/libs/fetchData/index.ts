export async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "success" });
    }, 1000);
  });
}
