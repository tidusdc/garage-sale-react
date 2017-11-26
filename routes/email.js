const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.post('/send', function(req, res){
	const email = req.body

  if(email.fromemail == null){
    res.json({
      confirmation: 'fail',
      message: 'Missing fromemail paramter'

    })
    return
  }
  if(email.fromname == null){
    res.json({
      confirmation: 'fail',
      message: 'Missing fromname paramter'

    })
    return
  }

  if(email.content == null){
    res.json({
      confirmation: 'fail',
      message: 'Missing content parameter'

    })
    return
  }


  if(email.subject == null){
    res.json({
      confirmation: 'fail',
      message: 'Missing subject parameter'

    })
    return
  }


  turbo.sendEmail(email)
  .then(data => {
    res.json({
      confirmation: 'success',
      data: 'Email Sent'
    })
  })
  .catch(err => {
    res.json({
      confirmation: 'fail',
      message: err.message
    })

  })


})



module.exports = router
