exports.index = function(req, res) {
    res.render('geofences', {title: req.gf.titleString});
}
