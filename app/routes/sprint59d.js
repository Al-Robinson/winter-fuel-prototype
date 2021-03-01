const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Task to - DAP details, next of kin details or return to queue

router.post('/sprint59d/death-arrears-task-1', function(req, res) {
  if ( req.body['dap'] === 'yes' ) {
    res.redirect('death-arrears-task-1-dap-name');
  } else {
    res.redirect('death-arrears-task-1-nok');
  }
});


router.post('/sprint59d/death-arrears-task-1-nok', function(req, res) {
  if ( req.body['nok-details'] === 'yes' ) {
    res.redirect('send-wfpf100');
  } else {
    res.redirect('tasks-5-2');
  }
});

router.post('/sprint59d/send-wfpf100', (req, res) => {
  res.redirect('/sprint59d/tasks-5-2')
})
;


// Death arrears payee details input

router.post('/sprint59d/death-arrears-task-1-dap-name', (req, res) => {
  res.redirect('/sprint59d/death-arrears-task-1-dap-address')
})
;

router.post('/sprint59d/death-arrears-task-1-dap-address', (req, res) => {
  res.redirect('/sprint59d/death-arrears-task-1-dap-bank-details')
})
;

// task view bank type to payment or SOP5
router.post('/sprint59d/death-arrears-task-1-dap-bank-details', function(req, res) {
  if ( req.body['bank-account-type'] === 'international-bank' ) {
    res.redirect('/sprint59d/request-sop5');
  } else {
    res.redirect('/sprint59d/death-arrears-task-1-dap-make-payment');
  }
}); 


// record view bank type to payment or SOP5
router.post('/sprint59d/dap-bank-details', function(req, res) {
  if ( req.body['rec-bank-account-type'] === 'international-bank' ) {
    res.redirect('/sprint59d/record-view-request-sop5');
  } else {
    res.redirect('/sprint59d/dap-make-payment');
  }
}); 

// task view request sop5 to task list
router.post('/sprint59d/request-sop5', (req, res) => {
  res.redirect('/sprint59d/tasks-5-2')
})
;

// record view request sop5 to overview
router.post('/sprint59d/record-view-request-sop5', (req, res) => {
  res.redirect('/sprint59d/overview-dead-request-sop5')
})
;

router.post('/sprint59d/death-arrears-task-1-dap-make-payment', (req, res) => {
  res.redirect('/sprint59d/tasks-5-2')
})
;

// Cancel payment to updated overview

router.post('/sprint59d/cancel-payment-name', (req, res) => {
  res.redirect('/sprint59d/overview-dead-cancelled')
})
;

// Send WF BR330 to next of kin

router.post('/sprint59d/death-arrears-task-1-nok-name', (req, res) => {
  res.redirect('/sprint59d/death-arrears-task-1-nok-address')
})
;

router.post('/sprint59d/death-arrears-task-1-nok-address', (req, res) => {
  res.redirect('/sprint59d/death-arrears-task-1-nok-address-1')
})
;

router.post('/sprint59d/death-arrears-task-1-nok-address-1', (req, res) => {
  res.redirect('/sprint59d/death-arrears-task-1-nok-send-letter')
})
;

router.post('/sprint59d/death-arrears-task-1-nok-send-letter', (req, res) => {
  res.redirect('/sprint59d/tasks-5-2')
})
;


router.post('/sprint59d/tasks-5-2', (req, res) => {
  res.redirect('/sprint59d/death-arrears-task-2')
})
;


// Record view - death arrears

router.post('/sprint59d/dap-name', (req, res) => {
  res.redirect('/sprint59d/dap-address')
})
;

router.post('/sprint59d/dap-address', (req, res) => {
  res.redirect('/sprint59d/dap-bank-details')
})
;

router.post('/sprint59d/dap-bank-details', (req, res) => {
  res.redirect('/sprint59d/dap-make-payment')
})
;

router.post('/sprint59d/dap-make-payment', (req, res) => {
  res.redirect('/sprint59d/overview-dead-dap-paid')
})
;

// Record view - death arrears IG

router.post('/sprint59d/dap-name-ig', (req, res) => {
  res.redirect('/sprint59d/dap-address-ig')
})
;


router.post('/sprint59d/dap-address-ig', (req, res) => {
  res.redirect('/sprint59d/dap-bank-details-ig')
})
;

router.post('/sprint59d/dap-bank-details-ig', (req, res) => {
  res.redirect('/sprint59d/dap-make-payment-ig')
})
;

router.post('/sprint59d/dap-make-payment-ig', (req, res) => {
  res.redirect('/sprint59d/overview-dead-dap-paid-ig')
})
;


// TASK TWO - Nimbus has been sent

router.post('/sprint59d/death-arrears-task-2', function(req, res) {
  if ( req.body['dap-2'] === 'yes' ) {
    res.redirect('death-arrears-task-2-dap-name');
  } else {
    res.redirect('tasks-5-3');
  }
});

// Death arrears payee details input

router.post('/sprint59d/death-arrears-task-2-dap-name', (req, res) => {
  res.redirect('/sprint59d/death-arrears-task-2-dap-address')
})
;

router.post('/sprint59d/death-arrears-task-2-dap-address', (req, res) => {
  res.redirect('/sprint59d/death-arrears-task-2-dap-bank-details')
})
;


router.post('/sprint59d/death-arrears-task-2-dap-bank-details', (req, res) => {
  res.redirect('/sprint59d/death-arrears-task-2-dap-make-payment')
})
;

router.post('/sprint59d/death-arrears-task-2-dap-make-payment', (req, res) => {
  res.redirect('/sprint59d/tasks-5-3')
})
;

router.post('/sprint59d/tasks-5-3', (req, res) => {
  res.redirect('/sprint59d/death-arrears-task-3')
})
;


// TASK THREE -

router.post('/sprint59d/tasks-5-3', (req, res) => {
  res.redirect('/sprint59d/death-arrears-task-3')
})
;

router.post('/sprint59d/death-arrears-task-3', function(req, res) {
  if ( req.body['dap'] === 'yes' ) {
    res.redirect('death-arrears-task-3-dap-name');
  } else {
    res.redirect('death-arrears-task-3-nok');
  }
});

router.post('/sprint59d/death-arrears-task-3-dap-name', (req, res) => {
  res.redirect('/sprint59d/death-arrears-task-3-dap-address')
})
;

router.post('/sprint59d/death-arrears-task-3-dap-address', (req, res) => {
  res.redirect('/sprint59d/death-arrears-task-3-dap-bank-details')
})
;


router.post('/sprint59d/death-arrears-task-3-dap-bank-details', (req, res) => {
  res.redirect('/sprint59d/death-arrears-task-3-dap-make-payment')
})
;

router.post('/sprint59d/death-arrears-task-3-dap-make-payment', (req, res) => {
  res.redirect('/sprint59d/tasks-5-4')
})
;




router.post('/sprint59d/death-arrears-task-3-nok', function(req, res) {
  if ( req.body['nok-details'] === 'yes' ) {
    res.redirect('send-wfpf100-3');
  } else {
    res.redirect('tasks-5-4');
  }
});

router.post('/sprint59d/send-wfpf100-3', (req, res) => {
  res.redirect('/sprint59d/tasks-5-4')
})
;


// TASK FOUR

router.post('/sprint59d/tasks-5-4', (req, res) => {
  res.redirect('/sprint59d/death-arrears-task-4')
})
;

router.post('/sprint59d/death-arrears-task-4', function(req, res) {
  if ( req.body['dap'] === 'yes' ) {
    res.redirect('death-arrears-task-4-dap-name');
  } else {
    res.redirect('death-arrears-task-4-nok');
  }
});

router.post('/sprint59d/death-arrears-task-4-nok', function(req, res) {
  if ( req.body['nok-details'] === 'yes' ) {
    res.redirect('send-wfpf100-4');
  } else {
    res.redirect('tasks-5-5');
  }
});

module.exports = router;
