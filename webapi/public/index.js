const router = express.Router()

const match = require('./match.js');
router.use("/match/", match)


module.exports = router