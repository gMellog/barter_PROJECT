


// vonage.verify.request({
//     number: "79850592945",
//     brand: "CHANGER"
//   }, (err, result) => {
//     if (err) {
//       console.error(err);
//     } else {
//       const verifyRequestId = result.request_id;
//       console.log('request_id', verifyRequestId);
//     }
//   });


  vonage.verify.check({
    request_id: "9c801b2b73ec477f89aa3788ed2c45d8",
    code: 7912
  }, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });

//   vonage.verify.control({
//     request_id: REQUEST_ID,
//     cmd: 'cancel'
//   }, (err, result) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(result);
//     }
//   });
