module.exports = (app) => {
  const Particular = app.models.Particular;

  function addParticular(req, res) {
    const titre = req.body.titre;
    const duree = req.body.duree;
    const artiste = req.body.artistes;

    const newParticular = new Particular({
      title: titre,
      duration: duree,
      artistes: artiste,
    });
    newMusique.save();
    res.send(newParticular);
  }
  return {
    addParticular,
  };
};
