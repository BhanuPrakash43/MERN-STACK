function getAllGuitars(req, res){
    res.json("Hello frokm guitars");
}
function getSingleGuitar(req, res){
    const id = req.params.id;
    res.json(`Trying to get guitar with id ${id}`);
}
module.exports = {getAllGuitars, getSingleGuitar};