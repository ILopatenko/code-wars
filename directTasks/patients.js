const testData = [
  {
    patientId: 'CC-31415',
    visitDate: '2018-06-09',
    paid: true,
    treatmentCodes: [41524, 9810, 33179],
  },
  {
    patientId: 'CC-31413',
    visitDate: '2018-05-31',
    paid: false,
    treatmentCodes: [2251],
  },
  {
    patientId: 'CC-31411',
    visitDate: '2018-06-17',
    paid: true,
    treatmentCodes: [],
  },
];

const objectToString = (arr) => {
  let final = [];
  let patientsArray = [];
  let sortingArray = [];
  let patientString = '>';
  let codes = '';
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < arr.length; i++) {
    /*  console.log(`\niteration i=${i}`);
    console.log('current patient', arr[i]); */
    patientString += arr[i].patientId + '|';
    patientString += arr[i].visitDate + '|';
    patientString += arr[i].paid ? 'Y' + '|' : 'N' + '|';
    if (arr[i].treatmentCodes.length > 0) {
      codes = arr[i].treatmentCodes.join(',');
      patientString += codes;
    }
    sortingArray.push(arr[i].patientId);
    patientsArray.push(patientString);
    patientString = '>';
    codes = '';
    /* console.log(patientString); */
  }
  sortingArray = sortingArray.sort();
  for (let i = 0; i < sortingArray.length; i++) {
    for (let j = 0; j < patientsArray.length; j++) {
      let checkingID = patientsArray[j].slice(1, 9);
      if (checkingID === sortingArray[i]) {
        final.push(patientsArray[j]);
      }
    }
  }
  return final.join('\n');
};

const ans = objectToString(testData);
console.log(ans);
