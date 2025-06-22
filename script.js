const row = document.getElementById('output');

function createRandomPromise(id) {
  const delay = Math.floor(Math.random() * 2000) + 1000; 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([`Promise ${id}`, delay]);
    }, delay);
  });
}
const startTime = performance.now();

const promise1 = createRandomPromise(1);
const promise2 = createRandomPromise(2);
const promise3 = createRandomPromise(3);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    row.innerHTML = "";

    results.forEach(([name, time]) => {
      row.innerHTML += `
        <tr>
          <td>${name}</td>
          <td>${(time / 1000).toFixed(3)}</td>
        </tr>
      `;
    });

    const totalTime = (performance.now() - startTime) / 1000;
    row.innerHTML += `
      <tr>
        <td><strong>Total</strong></td>
        <td><strong>${totalTime.toFixed(3)}</strong></td>
      </tr>
    `;
  });
