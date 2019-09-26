const router = express.Router()
var multer  = require('multer')
var upload = multer({ dest: 'uploads' })
var dbMatch = require('../../services/match');

router.post('/upload',upload.single('file'), function (req, res) {
    dbMatch.readFileAndInsertDB(req)
    .then(data =>{
        res.send({status: true, message: 'Success', data:data})
    })
    .catch(error=> {
        res.send({status: false, message: error, data: []})
    });
})

router.get('/result', function (req, res) {
    let season_id = req.query.season_id;
    dbMatch.getListResultBySeasonGroupPlayer(season_id)
    .then(data=> {
        res.send({status: true, message: 'Success', data:data})
    })
    .catch(error=> {
        res.send({status: false, message: error, data: []})
    });
})

router.get('/search', function (req, res) {
    let keyword = req.query.keyword;
    dbMatch.searchByKeyword(keyword)
    .then(data=> {
        res.send({status: true, message: 'Success', data:data})
    })
    .catch(error=> {
        res.send({status: false, message: error, data: []})
    });
})

module.exports = router