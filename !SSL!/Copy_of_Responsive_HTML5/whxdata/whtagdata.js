(function() {
var tagCombinations =  [["$"],["caseworker_action"],["ta"],["non_ta"],["caseworker_action","non_ta"],["assets_action","non_ta"]] ,
  tags =  [{"display":"TA","type":"group","children":[{"display":"TA","name":"ta"}]},{"display":"Non-TA","type":"group","children":[{"display":"NON_TA","name":"non_ta"},{"display":"Caseworker_Action","name":"caseworker_action"}]},{"display":"ASSETS Actions","type":"group","children":[{"display":"ASSETS_Action","name":"assets_action"}]}],
  caption = "Filter by",
  type = "checkbox",
  defFilter = null;

window.rh.model.publish("p.tag_combinations", tagCombinations, { sync:true });
window.rh.model.publish("temp.data", {"tags": tags, "caption": caption, "type": type , "default": defFilter}, { sync:true });
})();