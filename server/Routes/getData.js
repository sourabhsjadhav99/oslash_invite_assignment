let express= require("express")

const Product = require("../schemas_connection/groupSchema");
const router = express.Router();
router.use(express.json());



//get
router.get("/",  async(req, res) => {
  try {
    let data = await Product.find();
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});

router.post("/", async (req, res) => {
    try {
  
      let data = await Product.create(req.body)
      res.send(data);
      console.log(data);
    } catch (e) {
      res.status(400).json({
        status: "Failed",
        message: e.message,
      });
    }
  });
router.get("/:key",async (req,resp)=>{
    let data = await Product.find(
        {
            "$or":[
                {email:{$regex:req.params.key}},
                {group:{$regex:req.params.key}},
                {name:{$regex:req.params.key}}              
            ]
        }
    )
    resp.send(data);

})
module.exports = router;