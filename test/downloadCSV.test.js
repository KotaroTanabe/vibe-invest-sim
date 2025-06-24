import assert from 'assert';

let clicked = false;
let createdHref = null;
let createdDownload = null;

global.document = {
  createElement(tag) {
    assert.strictEqual(tag, 'a');
    return {
      set href(val) { createdHref = val; },
      set download(val) { createdDownload = val; },
      click() { clicked = true; }
    };
  },
  addEventListener() {}
};

let blobData = null;
const origCreate = URL.createObjectURL;
const origRevoke = URL.revokeObjectURL;
URL.createObjectURL = (blob) => {
  blobData = blob;
  return 'blob:mock';
};
URL.revokeObjectURL = () => {};

const { downloadCSV } = await import('../src/main.js');

await downloadCSV('2024-01', '2024-01', 1000);
const text = await blobData.text();

assert.strictEqual(createdHref, 'blob:mock');
assert.strictEqual(createdDownload, 'simulation.csv');
assert.ok(clicked, 'link should be clicked');
assert.ok(text.startsWith('Month,Investment,Valuation\n')); 
assert.ok(text.includes('2024-01,1000,'));

URL.createObjectURL = origCreate;
URL.revokeObjectURL = origRevoke;

console.log('downloadCSV test passed');
